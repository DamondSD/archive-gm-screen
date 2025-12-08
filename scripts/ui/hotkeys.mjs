/*
 * Archive GM's Screen — hotkeys.mjs
 *
 * Registers keyboard shortcuts for opening/closing the GM Screen.
 * Default: Alt + S
 */


Hooks.once("init", () => {
    game.keybindings.register("archive-gm-screen", "toggleScreen", {
        name: "Toggle GM Screen",
        hint: "Show or hide the Archive GM's Screen overlay.",
        editable: [
            { key: "KeyS", modifiers: ["Alt"] }
        ],
        onDown: () => {
            const screen = game.archiveGMScreen;
            if (screen) screen.toggle();
        },
        restricted: true
    });
});
