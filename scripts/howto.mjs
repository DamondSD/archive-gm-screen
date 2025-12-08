// ---------------------------------------------------------------------------
// Archive GM's Screen — How-To Journal Utilities
// ---------------------------------------------------------------------------

export async function setupHowToJournal(MODULE_ID, journalName, journalContent) {
    if (!game.user.isGM) return;

    const folder = await ensureHowToFolder();
    const journal = await ensureHowToJournal(folder, MODULE_ID, journalName, journalContent);
    await maybeOpenHowTo(MODULE_ID, journal);
}


// ---------------------------------------------------------------------------
// Ensure folder: "Archive How-Tos"
// ---------------------------------------------------------------------------
async function ensureHowToFolder() {
    let folder = game.folders.contents.find(f =>
        f.type === "JournalEntry" &&
        f.name === "Archive How-Tos"
    );

    if (folder) return folder;

    // IMPORTANT: color must be 6-digit hex OR null.
    folder = await Folder.create({
        name: "Archive How-Tos",
        type: "JournalEntry",
        color: "#d4af37",   // ✔ Valid 6-digit hex color (Archive gold)
        parent: null
    });

    console.log("Archive | Created folder: Archive How-Tos");
    return folder;
}


// ---------------------------------------------------------------------------
// Ensure the Journal exists (or move it to the folder if needed)
// ---------------------------------------------------------------------------
async function ensureHowToJournal(folder, MODULE_ID, journalName, journalContent) {
    let journal = game.journal.contents.find(j => j.name === journalName);

    // Journal exists → ensure folder assignment is correct
    if (journal) {
        if (folder && journal.folder?.id !== folder.id) {
            await journal.update({ folder: folder.id });
        }
        return journal;
    }

    // Create journal
    journal = await JournalEntry.create({
        name: journalName,
        folder: folder?.id ?? null,
        pages: [{
            name: "Getting Started",
            type: "text",
            text: {
                format: 1,
                content: journalContent
            }
        }],
        flags: {
            [MODULE_ID]: { autoCreated: true }
        }
    });

    console.log(`Archive | Created How-To Journal: ${journalName}`);
    return journal;
}


// ---------------------------------------------------------------------------
// Auto-open only once per GM
// ---------------------------------------------------------------------------
async function maybeOpenHowTo(MODULE_ID, journal) {
    const settingKey = `${MODULE_ID}.howToOpenedOnce`;

    // Register the client setting if missing
    if (!game.settings.settings.has(settingKey)) {
        game.settings.register(MODULE_ID, "howToOpenedOnce", {
            name: "How-To Opened Once",
            scope: "client",
            config: false,
            type: Boolean,
            default: false
        });
    }

    const opened = game.settings.get(MODULE_ID, "howToOpenedOnce");
    if (opened) return;

    journal.sheet?.render(true);
    await game.settings.set(MODULE_ID, "howToOpenedOnce", true);

    console.log("Archive | How-To Journal auto-opened");
}
