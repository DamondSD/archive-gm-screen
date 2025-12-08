/*
 * Archive GM's Screen — overlay.mjs
 *
 * Main controller for the GM Screen overlay.
 * Responsible for creating the root container, rendering tabs & panels,
 * wiring events, and saving user changes.
 *
 * This is a fully custom DOM overlay, not an ApplicationV2 window.
 */

import { dbg } from "../core/debug.mjs";
import { DEFAULT_TABS } from "../core/merge-presets.mjs";
import { renderOverlay } from "./overlay-render.mjs";
import { registerOverlayEvents } from "./overlay-events.mjs";

const MODULE_ID = "archive-gm-screen";

export class ArchiveGMScreen {
    /**
     * @param {object} finalData - merged data from presets + user overrides
     */
    constructor(finalData) {
        this.data = finalData || {};
        this.root = null;
        this.activeTab = DEFAULT_TABS[0];

        this._createRoot();
        this.render();
    }

    /** Create the DOM container if not present */
    _createRoot() {
        let root = document.getElementById("archive-gm-screen");
        if (!root) {
            root = document.createElement("div");
            root.id = "archive-gm-screen";
            root.classList.add("ags-overlay", "hidden");
            document.body.appendChild(root);
        }
        this.root = root;
    }

    /** Main render call */
    render() {
        dbg("Rendering GM Screen with data", this.data);
        this.root.innerHTML = renderOverlay(this);
        registerOverlayEvents(this);
    }

    /** Switch to another tab and re-render */
    switchTab(tabId) {
        if (!this.data[tabId]) return;
        this.activeTab = tabId;
        this.render();
    }

    /** Save user modifications */
    saveUserData(updated) {
        const current = game.settings.get(MODULE_ID, "content") || {};
        const merged = {
            ...current,
            ...updated
        };
        dbg("Saving user data", merged);
        game.settings.set(MODULE_ID, "content", merged);
    }

    /** Show screen */
    show() {
        this.root.classList.remove("hidden");
    }

    /** Hide screen */
    hide() {
        this.root.classList.add("hidden");
    }

    /** Toggle visibility */
    toggle() {
        this.root.classList.toggle("hidden");
    }

    /** Close the GM Screen */
    close() {
        if (!this.root) return;
        this.root.classList.add("hidden");
        dbg("GM Screen closed.");
    }
}