/*
 * Archive GM's Screen — settings.mjs
 * Registers module settings, including debug toggle and stored panel content.
 */

/**
 * Register all module settings
 */
export function registerSettings() {
    const MODULE_ID = "archive-gm-screen";

    // Debug logging toggle
    game.settings.register(MODULE_ID, "debug", {
        name: "Enable Debug Logging",
        hint: "If enabled, additional debug information will appear in the console.",
        scope: "client",
        config: true,
        type: Boolean,
        default: false
    });

    // Stored user screen content (panels, edits, ordering, collapsed states, etc.)
    game.settings.register(MODULE_ID, "content", {
        name: "Stored GM Screen Data",
        hint: "Do not modify manually. Contains all user customizations to the GM Screen.",
        scope: "world",
        config: false,
        type: Object,
        default: {}
    });

    // Hotkey for opening the screen (configured separately in hotkeys.mjs)
}