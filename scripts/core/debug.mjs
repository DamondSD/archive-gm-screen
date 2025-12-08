/*
 * Archive GM's Screen — debug.mjs
 * Small helper wrapper around conditional debug console logging.
 */

const MODULE_ID = "archive-gm-screen";

/**
 * Debug log wrapper.
 * Usage: dbg("message", data)
 */
export function dbg(...args) {
    if (game.settings.get(MODULE_ID, "debug")) {
        console.log("[Archive GM's Screen][DEBUG]", ...args);
    }
}
