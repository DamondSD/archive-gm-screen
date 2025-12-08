/*
 * Archive GM's Screen — system-detect.mjs
 *
 * Small helper for detecting the active Foundry system and normalizing it
 * to the ids we use under data/systems/<system>/screen.mjs.
 */

import { dbg } from "./debug.mjs";

const MODULE_ID = "archive-gm-screen";

/**
 * Detect the active system and normalize it to a preset key.
 *
 * For now we support:
 * - dnd5e
 * - pf2e
 *
 * Anything else falls back to "generic" (which can later map to a
 * lightweight default screen or an empty state).
 *
 * @returns {string} Normalized system id used for preset loading.
 */
export function detectSystem() {
    const rawId = game.system?.id ?? "unknown";
    let normalized = rawId;

    switch (rawId) {
        case "dnd5e":
            normalized = "dnd5e";
            break;
        case "pf2e":
            normalized = "pf2e";
            break;
        case "pf1":
            normalized = "pf1";
            break;
        case "sfrpg":
            normalized = "sfrpg";
            break;
        case "swade":
            normalized = "swade";
            break;
        case "CoC7":
            normalized = "CoC7";
            break;
        default:
            normalized = "generic";
            break;
    }

    dbg(`[${MODULE_ID}] System detect: raw id="${rawId}", normalized="${normalized}"`);
    return normalized;
}
