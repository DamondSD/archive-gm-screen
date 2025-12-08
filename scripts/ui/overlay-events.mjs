/*
 * Archive GM's Screen — overlay-events.mjs
 *
 * Attaches all interactive behavior for the GM Screen overlay:
 *  - Tab switching
 *  - Panel collapse/expand
 *  - Panel removal (hide)
 *  - Editable HTML saving
 *  - Search filter
 *  - Drag & drop reordering (basic placeholder, expanded later)
 */

import { dbg } from "../core/debug.mjs";
import { mergePresets } from "../core/merge-presets.mjs";
import { renderPanels } from "./overlay-render.mjs";
const MODULE_ID = "archive-gm-screen";

/**
 * Attach all listeners to the freshly rendered overlay.
 * @param {ArchiveGMScreen} screen
 */
export function registerOverlayEvents(screen) {
    const root = screen.root;
    if (!root) return;

    _activateTabSwitching(screen);
    _activateCollapse(screen);
    _activateRemove(screen);
    _activateEditing(screen);
    _activateSearch(screen);
    _activateDragAndDrop(screen);
    _activateWidthButtons(screen);
    _activateAddPanel(screen);
    _activateTitleEditing(screen);
    _activateResetTab(screen);
    _activateCloseButton(screen);
}

/* ----------------------------------------- */
/* TAB SWITCHING                             */
/* ----------------------------------------- */
function _activateTabSwitching(screen) {
    screen.root.querySelectorAll(".ags-tab").forEach((el) => {
        el.addEventListener("click", () => {
            const tab = el.dataset.tab;
            if (!tab) return;

            dbg("Switching tab", tab);

            // Leaving search mode when user clicks any tab
            const input = screen.root.querySelector(".ags-search");
            if (input) input.value = "";

            // FULL reset of search state BEFORE switching tabs
            delete screen.searchQuery;
            delete screen._tempSearchPanels;
            delete screen.lastNonSearchTab;

            // Now switch tab (full rerender)
            screen.switchTab(tab);
        });
    });
}

/* ----------------------------------------- */
/* COLLAPSE / EXPAND PANELS                  */
/* ----------------------------------------- */
function _activateCollapse(screen) {
    screen.root.querySelectorAll(".ags-panel .collapse").forEach((btn) => {
        btn.addEventListener("click", () => {
            const panelEl = btn.closest(".ags-panel");
            const panelId = panelEl.dataset.panelId;
            dbg("Toggling collapse for panel", panelId);

            panelEl.classList.toggle("collapsed");
            const collapsed = panelEl.classList.contains("collapsed");

            _savePanelState(screen, panelId, { collapsed });
        });
    });
}

/* ----------------------------------------- */
/* PANEL REMOVAL (HIDE)                      */
/* ----------------------------------------- */
function _activateRemove(screen) {
    screen.root.querySelectorAll(".ags-panel .remove").forEach((btn) => {
        btn.addEventListener("click", () => {
            const panelEl = btn.closest(".ags-panel");
            const panelId = panelEl.dataset.panelId;

            dbg("Removing panel", panelId);

            // Remove visually immediately
            panelEl.remove();

            // Save hidden flag into settings
            const current = game.settings.get(MODULE_ID, "content") || {};
            const tabId = screen.activeTab;

            const tab = current.tabs?.[tabId] || {};
            const panels = tab.panels || {};

            const updated = {
                tabs: {
                    ...current.tabs,
                    [tabId]: {
                        ...tab,
                        panels: {
                            ...panels,
                            [panelId]: {
                                ...(panels[panelId] || {}),
                                hidden: true
                            }
                        }
                    }
                }
            };

            game.settings.set(MODULE_ID, "content", updated);

            // Update in-memory data
            screen.data[tabId] = screen.data[tabId].map(p =>
                p.id === panelId ? { ...p, hidden: true } : p
            );
        });
    });
}


/* ----------------------------------------- */
/* EDITABLE HTML SAVING                      */
/* ----------------------------------------- */
function _activateEditing(screen) {
    screen.root.querySelectorAll(".ags-panel-body").forEach((body) => {
        body.addEventListener("blur", () => {
            const panelEl = body.closest(".ags-panel");
            const panelId = panelEl.dataset.panelId;
            const html = body.innerHTML;

            dbg("Saving edited panel HTML", panelId);
            _savePanelState(screen, panelId, { html });
        });
    });
}

/* ----------------------------------------- */
/* GLOBAL SEARCH (all tabs, no header rerender) */
/* ----------------------------------------- */
function _activateSearch(screen) {
    const input = screen.root.querySelector(".ags-search");
    if (!input) return;

    // Start with any existing query (if you want persistence)
    if (screen.searchQuery) {
        input.value = screen.searchQuery;
    }

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        dbg("Search query:", query);

        screen.searchQuery = query;

        // If search is empty → exit search mode, restore original tab
        if (!query) {
            const originalTab = screen.lastNonSearchTab || screen.activeTab || Object.keys(screen.data)[0];
            screen._tempSearchPanels = null;
            screen.lastNonSearchTab = null;
            screen.activeTab = originalTab;

            _updateActiveTabClasses(screen);
            _renderPanelsOnly(screen);
            return;
        }

        // First time we start searching, remember where we were
        if (!screen.lastNonSearchTab) {
            screen.lastNonSearchTab = screen.activeTab;
        }

        // Search across all tabs
        let bestTab = null;
        let bestMatches = 0;
        let bestPanels = [];

        for (const [tabId, allPanelsRaw] of Object.entries(screen.data)) {
            const allPanels = Array.isArray(allPanelsRaw) ? allPanelsRaw : [];
            const visiblePanels = allPanels.filter(p => !p.hidden);

            const matches = visiblePanels.filter((p) => {
                const title = (p.title || "").toLowerCase();
                const html = (p.html || "").toLowerCase();
                return title.includes(query) || html.includes(query);
            });

            if (matches.length > bestMatches) {
                bestMatches = matches.length;
                bestTab = tabId;
                bestPanels = matches;
            }
        }

        if (!bestTab) {
            // No matches anywhere → show a “No Results” panel in the last tab we were on
            const fallbackTab = screen.lastNonSearchTab || screen.activeTab || Object.keys(screen.data)[0];
            screen.activeTab = fallbackTab;
            screen._tempSearchPanels = [{
                id: "search-no-results",
                title: "No Results",
                html: `<p>No panels contain: <strong>${query}</strong></p>`,
                width: "full"
            }];
        } else {
            // Switch to the tab with the most matches and show only those panels
            screen.activeTab = bestTab;
            screen._tempSearchPanels = bestPanels;
        }

        _updateActiveTabClasses(screen);
        _renderPanelsOnly(screen);
    });
}

/* ----------------------------------------- */
/* DRAG & DROP PANEL REORDERING (BASE)       */
/* ----------------------------------------- */
function _activateDragAndDrop(screen) {
    const panels = screen.root.querySelectorAll(".ags-panel");

    panels.forEach((panel) => {
        panel.draggable = true;

        panel.addEventListener("dragstart", (ev) => {
            ev.dataTransfer.setData("text/plain", panel.dataset.panelId);
            panel.classList.add("dragging");
        });

        panel.addEventListener("dragend", () => {
            panel.classList.remove("dragging");
        });

        panel.addEventListener("dragover", (ev) => {
            ev.preventDefault();
        });

        panel.addEventListener("drop", (ev) => {
            ev.preventDefault();
            const draggedId = ev.dataTransfer.getData("text/plain");
            const targetId = panel.dataset.panelId;

            if (draggedId === targetId) return;

            dbg("Reordering panels", draggedId, "→", targetId);

            const container = screen.root.querySelector(".ags-panels");
            const draggedEl = container.querySelector(`[data-panel-id="${draggedId}"]`);

            // Insert dragged element before target
            container.insertBefore(draggedEl, panel);

            _saveNewOrder(screen);
        });
    });
}

/* ----------------------------------------- */
/* SAVE CHANGES                              */
/* ----------------------------------------- */
function _savePanelState(screen, panelId, changes) {
    const tabId = screen.activeTab;
    const current = game.settings.get(MODULE_ID, "content") || {};

    const tab = current.tabs?.[tabId] || {};
    const panels = tab.panels || {};

    const updated = {
        tabs: {
            ...current.tabs,
            [tabId]: {
                ...tab,
                panels: {
                    ...panels,
                    [panelId]: {
                        ...(panels[panelId] || {}),
                        ...changes
                    }
                }
            }
        }
    };

    dbg("Saving panel state", panelId, changes);
    game.settings.set(MODULE_ID, "content", updated);
}

function _saveNewOrder(screen) {
    const tabId = screen.activeTab;
    const current = game.settings.get(MODULE_ID, "content") || {};

    const order = Array.from(
        screen.root.querySelectorAll(".ags-panel")
    ).map((el) => el.dataset.panelId);

    const tab = current.tabs?.[tabId] || {};

    const updated = {
        tabs: {
            ...current.tabs,
            [tabId]: {
                ...tab,
                order
            }
        }
    };

    dbg("Saving new panel order", order);
    game.settings.set(MODULE_ID, "content", updated);
}

/* ----------------------------------------- */
/* WIDTH BUTTONS                             */
/* ----------------------------------------- */
function _activateWidthButtons(screen) {
    screen.root.querySelectorAll(".ags-width-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const width = btn.dataset.width;
            const panelEl = btn.closest(".ags-panel");
            const panelId = panelEl.dataset.panelId;

            // Update CSS class
            panelEl.classList.remove("w-full", "w-half", "w-third");
            panelEl.classList.add(`w-${width}`);

            // Save setting
            _savePanelState(screen, panelId, { width });
        });
    });
}

/* ----------------------------------------- */
/* ADD NEW PANEL                             */
/* ----------------------------------------- */
function _activateAddPanel(screen) {
    const btn = screen.root.querySelector(".ags-add-panel");
    if (!btn) return;

    btn.addEventListener("click", () => {
        const tabId = screen.activeTab;

        // Create new unique panel ID
        const newId = `${tabId}-custom-${randomID()}`;

        // New panel object
        const newPanel = {
            id: newId,
            tab: tabId,
            title: "New Panel",
            html: "",
            width: "full",
            isCustom: true
        };

        // Save to user settings
        const current = game.settings.get("archive-gm-screen", "content") || {};
        const tab = current.tabs?.[tabId] || {};
        const panels = tab.panels || {};

        const updated = {
            tabs: {
                ...current.tabs,
                [tabId]: {
                    ...tab,
                    panels: {
                        ...panels,
                        [newId]: newPanel
                    }
                }
            }
        };

        game.settings.set("archive-gm-screen", "content", updated);

        // Update in-memory data for this session
        const existing = Array.isArray(screen.data[tabId]) ? screen.data[tabId] : [];
        screen.data[tabId] = [...existing, newPanel];

        // Re-render overlay
        screen.render();
    });
}

function randomID() {
    return Math.random().toString(36).substring(2, 9);
}

/* ----------------------------------------- */
/* TITLE EDITING                             */
/* ----------------------------------------- */
function _activateTitleEditing(screen) {
    // Click to edit
    screen.root.querySelectorAll(".ags-panel-title").forEach((titleEl) => {
        titleEl.addEventListener("click", () => {
            const id = titleEl.dataset.panelId;
            const input = screen.root.querySelector(`.ags-panel-title-edit[data-panel-id="${id}"]`);

            // Hide title, show input
            titleEl.style.display = "none";
            input.style.display = "block";
            input.value = titleEl.textContent.trim();
            input.focus();
            input.select();
        });
    });

    // Save on blur or Enter
    screen.root.querySelectorAll(".ags-panel-title-edit").forEach((input) => {
        const save = () => {
            const id = input.dataset.panelId;
            const newTitle = input.value.trim() || "Untitled Panel";

            // Save to settings
            _savePanelState(screen, id, { title: newTitle });

            // Update screen.data
            const tabId = screen.activeTab;
            screen.data[tabId] = screen.data[tabId].map(p =>
                p.id === id ? { ...p, title: newTitle } : p
            );

            // Rerender panel
            screen.render();
        };

        input.addEventListener("blur", save);

        input.addEventListener("keydown", (ev) => {
            if (ev.key === "Enter") save();
            if (ev.key === "Escape") screen.render(); // cancel
        });
    });
}

/* ----------------------------------------- */
/* RESET TAB TO DEFAULT                      */
/* ----------------------------------------- */
function _activateResetTab(screen) {
    const btn = screen.root.querySelector(".ags-reset-tab");
    if (!btn) return;

    btn.addEventListener("click", async () => {

        const tabId = screen.activeTab;
        dbg("Reset clicked for tab:", tabId);

        if (tabId === "custom") {
            dbg("Reset blocked: cannot reset custom tab.");
            ui.notifications.warn("The Custom tab cannot be reset.");
            return;
        }

        // Confirm
        const confirmed = await Dialog.confirm({
            title: `Reset ${tabId} Tab`,
            content: `<p>Reset this tab to default system presets? All custom changes will be lost.</p>`,
            yes: () => true,
            no: () => false
        });

        dbg("Reset confirmation:", confirmed);

        if (!confirmed) {
            dbg("Reset canceled.");
            return;
        }

        // Fetch user settings BEFORE resetting
        let current = game.settings.get(MODULE_ID, "content") || {};
        dbg("User data BEFORE resetting:", duplicate(current));

        // If tab exists in userData, delete it
        if (current.tabs && current.tabs[tabId]) {
            dbg(`Deleting user overrides for tab: ${tabId}`);
            delete current.tabs[tabId];
        } else {
            dbg(`No overrides exist for tab '${tabId}', nothing to delete.`);
        }

        // Save updated settings
        dbg("Saving updated user data:", duplicate(current));
        await game.settings.set(MODULE_ID, "content", current);

        // Confirm saved
        let afterSave = game.settings.get(MODULE_ID, "content");
        dbg("User data AFTER saving reset:", duplicate(afterSave));

        // Re-merge with presets
        if (!screen.presets) {
            dbg("ERROR: screen.presets is missing! Cannot re-merge.");
        } else {
            dbg("Merging presets with updated user data...");
        }

        const merged = mergePresets(screen.presets || {}, afterSave || {});
        dbg("Merged result for this tab:", merged[tabId]);

        // Update in-memory data
        screen.data = merged;

        dbg("screen.data AFTER reset:", screen.data);

        // Re-render screen
        screen.render();
        dbg("Screen re-rendered after reset.");
    });
}

/* ----------------------------------------- */
/* CLOSE BUTTON                              */
/* ----------------------------------------- */
function _activateCloseButton(screen) {
    const btn = screen.root.querySelector(".ags-close");
    if (!btn) return;

    btn.addEventListener("click", () => {
        dbg("Close button pressed");
        screen.close();
    });
}

/** Re-render only the panels area, leaving header/search intact */
function _renderPanelsOnly(screen) {
    const container = screen.root.querySelector(".ags-panels");
    if (!container) return;
    container.innerHTML = renderPanels(screen);
}

/** Update which tab is visually marked as active */
function _updateActiveTabClasses(screen) {
    screen.root.querySelectorAll(".ags-tab").forEach((el) => {
        const tabId = el.dataset.tab;
        if (!tabId) return;
        el.classList.toggle("active", tabId === screen.activeTab);
    });
}