/*
 * Archive GM's Screen — overlay-render.mjs
 *
 * Responsible for generating the HTML for the GM Screen overlay.
 * This file produces a full HTML string that overlay.mjs injects into
 * the root container.
 *
 * Rendering is split into:
 *  - Tab bar
 *  - Panels for the active tab
 *  - Search bar (future)
 */

import { DEFAULT_TABS } from "../core/merge-presets.mjs";

/**
 * Entry point — render the entire overlay
 * @param {ArchiveGMScreen} screen
 */
export function renderOverlay(screen) {
  const tabsHtml = renderTabBar(screen);
  const panelsHtml = renderPanels(screen);

  return `
    <div class="ags-screen">
      <div class="ags-header">
        ${tabsHtml}
        <button class="ags-reset-tab">Reset</button>
        <input class="ags-search" type="text" placeholder="Search..." />
        <button class="ags-close">✕</button>
      </div>
      <div class="ags-panels">
        ${panelsHtml}
      </div>
    </div>
  `;
}

/**
 * Render the tab bar
 */
function renderTabBar(screen) {

  // Special case: Search Results pseudo-tab
  if (screen.activeTab === "no-results") {
    return `
      <div class="ags-tabs">
        <div class="ags-tab active">Search Results</div>
      </div>
    `;
  }

  // Normal tab rendering
  return `
    <div class="ags-tabs">
      ${DEFAULT_TABS.map((tabId) => {
    const active = screen.activeTab === tabId ? "active" : "";
    return `<div class="ags-tab ${active}" data-tab="${tabId}">${tabLabel(tabId)}</div>`;
  }).join("")}

      <button class="ags-add-panel" data-add-to="${screen.activeTab}">+ Panel</button>
    </div>
  `;
}

/** Map tab ids to readable labels */
function tabLabel(tabId) {
  const labels = {
    combat: "Combat",
    conditions: "Conditions",
    skills: "Skills & DCs",
    survival: "Survival",
    equipment: "Equipment",
    misc: "Misc",
    custom: "Custom"
  };
  return labels[tabId] || tabId;
}

/**
 * Render the panels for the active tab
 */
export function renderPanels(screen) {
  const tabId = screen.activeTab;

  let panels;

  // If we are in search mode and have filtered results:
  if (Array.isArray(screen._tempSearchPanels)) {
    panels = screen._tempSearchPanels;
  } else {
    const all = screen.data[tabId] || [];
    panels = all.filter(p => !p.hidden);
  }

  if (!panels.length) {
    return `<div class="ags-empty">No panels available.</div>`;
  }

  return panels.map((panel) => renderPanel(panel)).join("");
}

/**
 * Render a single panel
 */
function renderPanel(panel) {
  const widthClass = panel.width ? `w-${panel.width}` : "w-full";
  const collapsedClass = panel.collapsed ? "collapsed" : "";

  return `
    <div class="ags-panel ${widthClass} ${collapsedClass}" data-panel-id="${panel.id}">
      <div class="ags-panel-header">
        <div class="ags-panel-title" data-panel-id="${panel.id}">
        ${panel.title || "Untitled Panel"}
        </div>
      <input class="ags-panel-title-edit" data-panel-id="${panel.id}" value="${panel.title || ""}" />

        <div class="ags-panel-controls">
          <div class="ags-width-controls" data-panel-id="${panel.id}">
            <button class="ags-width-btn" data-width="full" title="Full Width">▭</button>
            <button class="ags-width-btn" data-width="half" title="Half Width">◧</button>
            <button class="ags-width-btn" data-width="third" title="One Third">▤</button>
          </div>
          <button class="ags-btn collapse">▾</button>
          <button class="ags-btn remove">✕</button>
        </div>

      </div>

      <div class="ags-panel-body" contenteditable="true">${panel.html || ""}</div>
    </div>
  `;
}