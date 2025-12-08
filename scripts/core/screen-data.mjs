/*
 * Archive GM's Screen — screen-data.mjs
 */

import { dbg } from "./debug.mjs";

/**
 * Load the preset data for the given system id.
 */
export async function loadScreenData(systemId) {
    // Correct relative path from scripts/core → module root → data/systems
    const basePath = `../../data/systems/${systemId}/screen.mjs`;

    try {
        const module = await import(basePath);
        dbg(`Loaded presets for system: ${systemId}`);
        return module.default || {};
    } catch (err) {
        dbg(`Failed to load presets for system: ${systemId}`, err);
        return {};
    }
}
