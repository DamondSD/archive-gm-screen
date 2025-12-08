/*
 * Archive GM's Screen — merge-presets.mjs
 *
 * Responsible for combining system-provided preset data with
 * user-specific overrides stored in game.settings (archive-gm-screen.content).
 *
 * The goal is to produce a final, tab-structured data object that the
 * UI can render directly.
 */

import { dbg } from "./debug.mjs";

const MODULE_ID = "archive-gm-screen";

/**
 * Known/expected tab ids. A "custom" tab is always ensured.
 * @type {string[]}
 */
export const DEFAULT_TABS = [
    "combat",
    "conditions",
    "skills",
    "survival",
    "equipment",
    "misc",
    "custom"
];

/**
 * Shape expectations (for reference only — not enforced here):
 *
 * presets: {
 *   [tabId: string]: Panel[]
 * }
 *
 * userData: {
 *   tabs?: {
 *     [tabId: string]: {
 *       order?: string[];           // panel ids in desired order
 *       removed?: string[];         // panel ids hidden/removed
 *       panels?: {                  // per-panel overrides and custom panels
 *         [panelId: string]: {
 *           id?: string;            // should match the key (panelId)
 *           title?: string;
 *           html?: string;          // edited HTML content
 *           width?: string;         // "full" | "half" | "third" | etc.
 *           collapsed?: boolean;    // current collapsed state
 *           hidden?: boolean;       // explicit hidden flag
 *           isCustom?: boolean;     // true if this is a user-created panel
 *           tab?: string;           // owning tab id
 *           tags?: string[];        // for search indexing
 *           // ...any future fields
 *         }
 *       }
 *     }
 *   }
 * }
 */

/**
 * Merge system presets with user overrides.
 *
 * @param {Record<string, any[]>} presets - System preset panels, grouped by tab.
 * @param {object} userData - User-specific overrides and custom panels.
 * @returns {Record<string, any[]>} Final merged data suitable for rendering.
 */
export function mergePresets(presets = {}, userData = {}) {
    const result = {};

    const userTabs = (userData && userData.tabs) || {};

    // Build the full set of tab ids we care about
    const tabIds = new Set([
        ...Object.keys(presets || {}),
        ...Object.keys(userTabs || {}),
        ...DEFAULT_TABS
    ]);

    for (const tabId of tabIds) {
        const presetPanels = Array.isArray(presets[tabId]) ? presets[tabId] : [];
        const tabUserData = userTabs[tabId] || {};
        const overrides = tabUserData.panels || {};
        const removedIds = new Set(tabUserData.removed || []);
        const order = Array.isArray(tabUserData.order) ? tabUserData.order : null;

        const mergedPanels = [];

        // 1) Start with preset panels, applying per-panel overrides where present
        presetPanels.forEach((panel, index) => {
            const basePanel = ensurePanelId(panel, tabId, index);
            const id = basePanel.id;

            if (!id) {
                dbg(`Preset panel in tab "${tabId}" is missing an id and could not be normalized.`);
                return; // skip unsafe panel
            }

            // Skip if explicitly removed
            if (removedIds.has(id)) return;

            const panelOverride = overrides[id];

            let merged = basePanel;
            if (panelOverride) {
                merged = mergeObjects(basePanel, panelOverride);
            }

            // A hidden flag on the override acts like removal
            if (merged.hidden) return;

            mergedPanels.push(merged);
        });

        // 2) Add custom-only panels or overrides that do not correspond to presets
        for (const [panelId, panelOverride] of Object.entries(overrides)) {
            // Already considered above if this id exists in presets
            const existsInPresets = presetPanels.some((p, index) => {
                const normalized = ensurePanelId(p, tabId, index);
                return normalized.id === panelId;
            });

            if (existsInPresets) continue;

            if (removedIds.has(panelId) || panelOverride.hidden) continue;

            const baseCustom = {
                id: panelId,
                tab: tabId,
                title: panelOverride.title || "Custom Panel",
                html: panelOverride.html || "",
                isCustom: true
            };

            const merged = mergeObjects(baseCustom, panelOverride);
            mergedPanels.push(merged);
        }

        // 3) Apply ordering if specified
        const orderedPanels = applyOrder(mergedPanels, order);

        result[tabId] = orderedPanels;
    }

    dbg(`[${MODULE_ID}] mergePresets result`, result);
    return result;
}

/**
 * Ensure a panel has a stable id. If missing, attempt to generate one from
 * the title and position. This should mainly be a fallback — presets should
 * normally ship with explicit ids.
 *
 * @param {object} panel
 * @param {string} tabId
 * @param {number} index
 * @returns {object} A panel object with an id field.
 */
function ensurePanelId(panel, tabId, index) {
    if (!panel) return panel;
    if (panel.id) return panel;

    const clone = { ...panel };

    if (clone.title && typeof clone.title === "string") {
        clone.id = slugify(`${tabId}-${clone.title}`);
    } else {
        clone.id = `${tabId}-panel-${index}`;
    }

    return clone;
}

/**
 * Apply a custom ordering to a list of panels, if an order array is provided.
 *
 * @param {object[]} panels
 * @param {string[]|null} order
 * @returns {object[]} Reordered panels.
 */
function applyOrder(panels, order) {
    if (!order || !order.length) return panels;

    const map = new Map();
    panels.forEach((p) => {
        if (p && p.id) map.set(p.id, p);
    });

    const ordered = [];

    // First, add panels in the specified order
    for (const id of order) {
        const panel = map.get(id);
        if (!panel) continue;
        ordered.push(panel);
        map.delete(id);
    }

    // Then append any remaining panels that were not listed in `order`
    for (const panel of map.values()) {
        ordered.push(panel);
    }

    return ordered;
}

/**
 * Shallow+recursive merge of plain objects. Arrays from the override
 * replace arrays in the base.
 *
 * @param {object} base
 * @param {object} override
 * @returns {object}
 */
function mergeObjects(base, override) {
    if (!override) return base;
    if (!base) return override;

    const out = { ...base };

    for (const [key, value] of Object.entries(override)) {
        if (value === undefined) continue;

        if (
            value &&
            typeof value === "object" &&
            !Array.isArray(value) &&
            typeof out[key] === "object" &&
            out[key] !== null &&
            !Array.isArray(out[key])
        ) {
            out[key] = mergeObjects(out[key], value);
        } else {
            out[key] = value;
        }
    }

    return out;
}

/**
 * Very small slug helper for generating ids from titles.
 *
 * @param {string} input
 * @returns {string}
 */
function slugify(input) {
    return String(input)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .substring(0, 64);
}
