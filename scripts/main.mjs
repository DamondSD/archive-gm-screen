/*
 * Archive GM's Screen — main.mjs
 * Entry point for module initialization
 * Foundry VTT V13+
 */

import { registerSettings } from "./core/settings.mjs";
import { dbg } from "./core/debug.mjs";
import { detectSystem } from "./core/system-detect.mjs";
import { loadScreenData } from "./core/screen-data.mjs";
import { mergePresets } from "./core/merge-presets.mjs";
import { ArchiveGMScreen } from "./ui/overlay.mjs";
import "./ui/hotkeys.mjs";
import { registerArchiveLauncher } from "/modules/archive-tab/scripts/api/register-launcher.mjs";
import { setupHowToJournal } from "./howto.mjs";


/** Foundry lifecycle */
Hooks.once("init", () => {
  registerSettings();
  dbg("Initializing Archive GM Screen");

  // Register Archive Tab launcher
  registerArchiveLauncher({
    id: "archive-gm-screen",
    label: "GM's Screen",
    icon: "fa-solid fa-table-columns", // perfect GM screen look
    onClick: () => game.modules.get("archive-gm-screen")?.api.toggle()
  });
});

Hooks.once("ready", async () => {
  dbg("GM Screen Ready");

  // Detect active system
  const systemId = detectSystem();
  dbg(`Detected system: ${systemId}`);

  // Load system presets
  const presets = await loadScreenData(systemId);

  // Load user modifications
  const userData = game.settings.get("archive-gm-screen", "content") || {};

  // Merge
  const finalData = mergePresets(presets, userData);

  // Create the global screen instance
  game.archiveGMScreen = new ArchiveGMScreen(finalData);

  // Store the presets for later use (e.g., resetting)
  game.archiveGMScreen.presets = presets;

  // Register API for Archive Tab launcher
  game.modules.get("archive-gm-screen").api = {
    toggle: () => game.archiveGMScreen.toggle()
  };

  // Notify that the screen is ready
  Hooks.call("ags-screen-ready");

  const MODULE_ID = "archive-gm-screen";

  const journalContent = `
<h1 style="margin-bottom:0">Archive GM’s Screen</h1>
<p style="margin-top:0;font-size:14px;color:#d4af37"><em>Your customizable, system-aware reference screen</em></p>
<hr>

<h2>Opening the GM's Screen</h2>
<ul>
  <li><strong>Hotkey:</strong> <code>Alt + S</code></li>
  <li><strong>Archive Tab:</strong> Open the Archive tab and click <strong>GM’s Screen</strong></li>
</ul>
<p>The screen is GM-only and appears as a centered overlay. You can close it with the hotkey or by pressing the <strong>✕ Close</strong> button in the header.</p>

<hr>

<h2>The Screen Layout</h2>
<p>The GM’s Screen is organized into a set of tabs, each containing rule reference panels. Tabs vary by game system:</p>

<ul>
  <li><strong>Combat</strong> — attacks, actions, damage, maneuvers</li>
  <li><strong>Conditions</strong> — condensed or grouped condition rules</li>
  <li><strong>Skills</strong> — DCs, skill actions, difficulty tables</li>
  <li><strong>Survival</strong> — environmental rules, hazards, travel</li>
  <li><strong>Equipment</strong> — weapons, armor, gear, currency</li>
  <li><strong>Misc</strong> — system-specific math or reference material</li>
  <li><strong>Custom</strong> — entirely user-created panels</li>
</ul>

<p>Each system (5e, PF2e, PF1e, Starfinder, SWADE, CoC7e) loads its own preset layout automatically.</p>

<hr>

<h2>Editing Panels</h2>
<p>Every panel on the GM’s Screen is <strong>fully editable</strong>. Hover over any panel to see its controls.</p>

<h3>1. Editing Text</h3>
<ul>
  <li>Click anywhere inside the panel body to edit text.</li>
  <li>When you click outside the panel, your changes save automatically.</li>
  <li>You can paste formatted content (HTML is supported).</li>
</ul>

<h3>2. Renaming a Panel</h3>
<ul>
  <li>Click the panel’s title.</li>
  <li>Type a new name.</li>
  <li>Press <strong>Enter</strong> or click away to save it.</li>
</ul>

<h3>3. Changing Panel Width</h3>
<p>Use the three layout buttons in the header:</p>
<ul>
  <li><strong>▭ Full</strong> — takes the full row width</li>
  <li><strong>◧ Half</strong> — fits two per row</li>
  <li><strong>▤ Third</strong> — fits three per row</li>
</ul>
<p>The screen automatically reorganizes to fit the new layout.</p>

<h3>4. Collapsing Panels</h3>
<p>Click the <strong>▾ Collapse</strong> icon to hide the body of a panel. Click again to expand.</p>

<h3>5. Removing Panels</h3>
<ul>
  <li>Click the <strong>✕</strong> to hide a panel.</li>
  <li>The panel is not deleted — it is simply hidden for that tab.</li>
  <li>You can restore hidden panels using the <strong>Reset Tab</strong> button.</li>
</ul>

<hr>

<h2>Reordering Panels</h2>
<p>The GM’s Screen supports full drag-and-drop ordering:</p>
<ul>
  <li>Click and drag anywhere on a panel to pick it up.</li>
  <li>Drop it in the position you want.</li>
  <li>The new order saves automatically.</li>
</ul>

<hr>

<h2>Adding Your Own Panels</h2>
<p>You can add custom panels to <em>any</em> tab, but the <strong>Custom</strong> tab is designed for them.</p>

<h3>To add a new panel:</h3>
<ol>
  <li>Switch to the tab where you want it.</li>
  <li>Click the <strong>+ Panel</strong> button.</li>
  <li>A new empty panel will appear named “New Panel”.</li>
</ol>

<p>You can now:</p>
<ul>
  <li>Rename the panel</li>
  <li>Resize it</li>
  <li>Edit its contents</li>
  <li>Drag it to reorder</li>
</ul>

<h3>Custom panels persist automatically</h3>
<p>Once created, custom panels and all edits are stored in <strong>world data</strong> and restored every time your world loads.</p>

<hr>

<h2>Searching the GM’s Screen</h2>
<p>Use the search bar in the header to quickly find panels across all tabs.</p>

<ul>
  <li>Start typing — matching panels appear instantly.</li>
  <li>The GM Screen automatically switches to the tab with the most results.</li>
  <li>Panels not matching your search temporarily hide.</li>
</ul>

<p>To exit search mode, clear the search field.</p>

<p>If no results are found, a <strong>No Results</strong> notice appears.</p>

<hr>

<h2>Resetting a Tab</h2>
<p>If you’ve modified a tab and want to start fresh:</p>
<ol>
  <li>Open the tab you want to reset.</li>
  <li>Click <strong>Reset Tab</strong>.</li>
  <li>Confirm the prompt.</li>
</ol>

<p>Resetting a tab will:</p>
<ul>
  <li>Restore the panels from the system preset</li>
  <li>Bring back hidden panels</li>
  <li>Remove any custom panels in that tab</li>
  <li>Reset order and widths</li>
</ul>

<p><strong>The Custom tab cannot be reset.</strong></p>

<hr>

<h2>Per-System Presets</h2>
<p>The GM’s Screen automatically detects your active system and loads the matching preset:</p>
<ul>
  <li>D&D 5e</li>
  <li>Pathfinder 2e</li>
  <li>Pathfinder 1e</li>
  <li>Starfinder</li>
  <li>SWADE</li>
  <li>Call of Cthulhu 7e</li>
</ul>

<p><strong>You can freely customize each system’s layout independently.</strong></p>

<hr>

<h2>Where Is Everything Saved?</h2>
<p>All panel edits, layout changes, and custom tabs are stored automatically in:</p>

<pre>Settings → Module Settings → Archive GM’s Screen → Stored GM Screen Data</pre>

<p>The data is per-world and per-system, meaning each world retains its own GM Screen configuration.</p>

<hr>

<h2>Tips & Best Practices</h2>
<ul>
  <li>Use the <strong>Custom</strong> tab to store house rules, cheat sheets, and NPC quick refs.</li>
  <li>Resize panels so that important rules are visible without scrolling.</li>
  <li>Use search during play — it is the fastest way to find anything.</li>
  <li>Reset only the tab you are working on, not the entire screen.</li>
</ul>

<p>Enjoy your enhanced GM workflow with Archive GM’s Screen!</p>

`;

  await setupHowToJournal(
    MODULE_ID,
    "Archive GM's Screen — How To Use",
    journalContent
  );

  console.log("Archive GM's Screen | How-To Ready");
});