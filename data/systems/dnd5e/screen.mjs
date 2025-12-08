/*
 * Archive GM's Screen — D&D 5E system preset
 *
 * This file provides the default panel layout for the 5e GM Screen.
 * Panels are intentionally concise, clean, and structured for quick reference.
 * Users may edit, hide, reorder, or override anything.
 */

export default {
    combat: [
        {
            id: "combat-round-structure",
            title: "Round Structure",
            width: "half",
            html: `
      <ol>
        <li><strong>Determine Surprise</strong></li>
        <li><strong>Roll Initiative</strong></li>
        <li><strong>Take Turns</strong></li>
        <li><strong>Next Round</strong></li>
      </ol>
      <p><strong>A turn:</strong></p>
      <ul>
        <li>1 Action</li>
        <li>1 Bonus Action (if available)</li>
        <li>Movement (split as desired)</li>
        <li>1 Reaction (between turns)</li>
      </ul>
    `
        },

        {
            id: "combat-actions",
            title: "Actions",
            width: "half",
            html: `
      <ul>
        <li>Attack</li>
        <li>Cast a Spell</li>
        <li>Dash</li>
        <li>Disengage</li>
        <li>Dodge</li>
        <li>Help</li>
        <li>Hide</li>
        <li>Ready</li>
        <li>Search</li>
        <li>Use an Object</li>
      </ul>
    `
        },

        {
            id: "attack-rolls-expanded",
            title: "Attack Rolls",
            width: "third",
            html: `
      <p>d20 + proficiency + ability vs AC</p>
      <ul>
        <li><strong>Adv / Dis:</strong> roll 2, take best/worst</li>
        <li><strong>Crit:</strong> roll damage dice twice</li>
        <li><strong>Cover applies</strong> (see panel)</li>
      </ul>
    `
        },

        {
            id: "opportunity-attacks",
            title: "Opportunity Attacks",
            width: "third",
            html: `
      <ul>
        <li>Triggers when a creature leaves reach.</li>
        <li>Uses reaction.</li>
        <li>Disengage avoids it.</li>
        <li>Teleport or forced movement does not trigger.</li>
      </ul>
    `
        },

        {
            id: "movement-rules",
            title: "Movement & Position",
            width: "third",
            html: `
      <ul>
        <li><strong>Stand up:</strong> half movement</li>
        <li><strong>Difficult terrain:</strong> costs +1 ft per 1 ft</li>
        <li><strong>Prone:</strong> melee attacks vs prone have advantage</li>
        <li><strong>Crawl:</strong> costs 2 ft per 1 ft</li>
      </ul>
    `
        },

        {
            id: "cover-rules",
            title: "Cover",
            width: "half",
            html: `
      <ul>
        <li><strong>Half Cover:</strong> +2 AC & Dex saves</li>
        <li><strong>3/4 Cover:</strong> +5 AC & Dex saves</li>
        <li><strong>Total Cover:</strong> cannot be targeted</li>
      </ul>
    `
        },

        {
            id: "grappling-shoving",
            title: "Grappling & Shoving",
            width: "half",
            html: `
      <p><strong>Grapple:</strong></p>
      <ul>
        <li>Athletics vs Athletics/Acrobatics</li>
        <li>On success, target's speed = 0</li>
        <li>Ends if grappler is incapacitated</li>
      </ul>
      <p><strong>Shove:</strong></p>
      <ul>
        <li>Athletics vs Athletics/Acrobatics</li>
        <li>Target prone <em>or</em> pushed 5 ft</li>
      </ul>
    `
        },

        {
            id: "ranged-melee",
            title: "Ranged Attacks in Melee",
            width: "third",
            html: `
      <ul>
        <li>Ranged attacks within 5 ft → disadvantage</li>
        <li>Thrown weapons don't suffer this</li>
      </ul>
    `
        },

        {
            id: "falling",
            title: "Falling Damage",
            width: "third",
            html: `
      <ul>
        <li><strong>1d6 bludgeoning</strong> per 10 ft</li>
        <li>Max: 20d6</li>
        <li>Prone on landing</li>
      </ul>
    `
        },

        {
            id: "surprise",
            title: "Surprise",
            width: "third",
            html: `
      <ul>
        <li>Surprised creature can't move or act on turn 1</li>
        <li>Can't take reactions until turn ends</li>
      </ul>
    `
        }
    ],


    conditions: [
        {
            id: "condition-blinded",
            title: "Blinded",
            html: "<ul><li>Fails checks that rely on sight.</li><li>Attack rolls against have advantage.</li><li>Creature's attack rolls have disadvantage.</li></ul>",
            width: "third"
        },
        {
            id: "condition-charmed",
            title: "Charmed",
            html: "<ul><li>Can't attack charmer or target them with harmful abilities.</li><li>Charmer has advantage on social checks vs creature.</li></ul>",
            width: "third"
        },
        {
            id: "condition-deafened",
            title: "Deafened",
            html: "<ul><li>Fails checks that rely on hearing.</li></ul>",
            width: "third"
        },
        {
            id: "condition-frightened",
            title: "Frightened",
            html: "<ul><li>Disadvantage on ability checks and attack rolls while source of fear is in sight.</li><li>Can't willingly move closer to source.</li></ul>",
            width: "third"
        },
        {
            id: "condition-grappled",
            title: "Grappled",
            html: "<ul><li>Speed becomes 0.</li><li>Ends if grappler is incapacitated or moved away from target.</li></ul>",
            width: "third"
        },
        {
            id: "condition-incapacitated",
            title: "Incapacitated",
            html: "<ul><li>Can't take actions or reactions.</li></ul>",
            width: "third"
        },
        {
            id: "condition-invisible",
            title: "Invisible",
            html: "<ul><li>Count as heavily obscured for seeing you.</li><li>Attack rolls against you have disadvantage.</li><li>Your attack rolls have advantage.</li></ul>",
            width: "third"
        },
        {
            id: "condition-paralyzed",
            title: "Paralyzed",
            html: "<ul><li>Incapacitated, can't move or speak.</li><li>Fails Str/Dex saves.</li><li>Attacks against have advantage.</li><li>Hits from 5 ft are critical if they hit.</li></ul>",
            width: "third"
        },
        {
            id: "condition-petrified",
            title: "Petrified",
            html: "<ul><li>Transformed into solid inanimate form.</li><li>Incapacitated, unaware of surroundings.</li><li>Resistant to all damage; immune to poison and disease.</li></ul>",
            width: "third"
        },
        {
            id: "condition-poisoned",
            title: "Poisoned",
            html: "<ul><li>Disadvantage on attack rolls and ability checks.</li></ul>",
            width: "third"
        },
        {
            id: "condition-prone",
            title: "Prone",
            html: "<ul><li>Can crawl; standing up costs extra movement.</li><li>Attack rolls against from 5 ft have advantage.</li><li>Your attack rolls have disadvantage.</li></ul>",
            width: "third"
        },
        {
            id: "condition-restrained",
            title: "Restrained",
            html: "<ul><li>Speed becomes 0.</li><li>Attack rolls against have advantage.</li><li>Creature's attack rolls have disadvantage.</li><li>Disadvantage on Dex saves.</li></ul>",
            width: "third"
        },
        {
            id: "condition-stunned",
            title: "Stunned",
            html: "<ul><li>Incapacitated, can't move.</li><li>Fails Str/Dex saves.</li><li>Attack rolls against have advantage.</li></ul>",
            width: "third"
        },
        {
            id: "condition-unconscious",
            title: "Unconscious",
            html: "<ul><li>Incapacitated, can't move or speak, unaware.</li><li>Drops what it's holding; falls prone.</li><li>Fails Str/Dex saves.</li><li>Attacks from 5 ft have advantage and are critical on a hit.</li></ul>",
            width: "third"
        }
    ],


    skills: [
        {
            id: "skills-dc-table",
            title: "Ability Check DCs",
            width: "half",
            html: `
      <ul>
        <li><strong>Very Easy:</strong> 5</li>
        <li><strong>Easy:</strong> 10</li>
        <li><strong>Moderate:</strong> 15</li>
        <li><strong>Hard:</strong> 20</li>
        <li><strong>Very Hard:</strong> 25</li>
        <li><strong>Nearly Impossible:</strong> 30</li>
      </ul>
      <p><strong>Passive Score:</strong> 10 + mod + proficiency</p>
    `
        },

        {
            id: "skills-list",
            title: "Skills by Ability",
            width: "half",
            html: `
      <p><strong>Strength</strong>: Athletics</p>
      <p><strong>Dexterity</strong>: Acrobatics, Sleight of Hand, Stealth</p>
      <p><strong>Constitution</strong>: —</p>
      <p><strong>Intelligence</strong>: Arcana, History, Investigation, Nature, Religion</p>
      <p><strong>Wisdom</strong>: Animal Handling, Insight, Medicine, Perception, Survival</p>
      <p><strong>Charisma</strong>: Deception, Intimidation, Performance, Persuasion</p>
    `
        },

        {
            id: "common-skill-uses",
            title: "Common Skill Uses",
            width: "full",
            html: `
      <ul>
        <li><strong>Acrobatics:</strong> balance, flips, escape restraints</li>
        <li><strong>Arcana:</strong> spell lore, identify magic</li>
        <li><strong>Athletics:</strong> climb, swim, jump</li>
        <li><strong>Investigation:</strong> search for clues, deduce patterns</li>
        <li><strong>Perception:</strong> spot hidden creatures, hear sounds</li>
        <li><strong>Stealth:</strong> hide, move silently</li>
        <li><strong>Survival:</strong> track, forage, follow trails</li>
      </ul>
    `
        },

        {
            id: "saving-throws",
            title: "Saving Throws",
            width: "half",
            html: `
      <ul>
        <li><strong>Str:</strong> Physical restraint, pushing</li>
        <li><strong>Dex:</strong> Avoid blasts, traps, area effects</li>
        <li><strong>Con:</strong> Poison, disease, exhaustion</li>
        <li><strong>Int:</strong> Illusions</li>
        <li><strong>Wis:</strong> Mental control, charm effects</li>
        <li><strong>Cha:</strong> Banishing or otherworldly bindings</li>
      </ul>
    `
        },

        {
            id: "contested-checks",
            title: "Contested Checks",
            width: "half",
            html: `
      <ul>
        <li><strong>Grapple:</strong> Athletics vs Athletics/Acrobatics</li>
        <li><strong>Shove:</strong> Athletics vs Athletics/Acrobatics</li>
        <li><strong>Hide:</strong> Stealth vs Perception</li>
        <li><strong>Deception:</strong> Deception vs Insight</li>
        <li><strong>Intimidation:</strong> Intimidation vs Wisdom/Charisma</li>
      </ul>
    `
        }
    ],

    survival: [
        {
            id: "travel-paces-expanded",
            title: "Travel Pace",
            width: "half",
            html: `
      <ul>
        <li><strong>Fast:</strong> -5 passive Perception, 400 ft/min</li>
        <li><strong>Normal:</strong> 300 ft/min</li>
        <li><strong>Slow:</strong> Stealth allowed, 200 ft/min</li>
      </ul>
      <p><strong>Hour-based pace:</strong></p>
      <ul>
        <li>Fast: 4 miles</li>
        <li>Normal: 3 miles</li>
        <li>Slow: 2 miles</li>
      </ul>
    `
        },

        {
            id: "resting-rules",
            title: "Resting",
            width: "half",
            html: `
      <p><strong>Short Rest:</strong></p>
      <ul>
        <li>1 hour</li>
        <li>Spend Hit Dice to heal</li>
      </ul>
      <p><strong>Long Rest:</strong></p>
      <ul>
        <li>8 hours</li>
        <li>Regain HP and up to half Hit Dice</li>
        <li>Reset abilities and spell slots</li>
      </ul>
    `
        },

        {
            id: "vision-light",
            title: "Vision & Light",
            width: "half",
            html: `
      <ul>
        <li><strong>Bright:</strong> full vision</li>
        <li><strong>Dim:</strong> lightly obscured (disadv Perception)</li>
        <li><strong>Darkness:</strong> heavily obscured (blind)</li>
      </ul>
      <p><strong>Light Sources:</strong></p>
      <ul>
        <li>Torch: 20/20 ft</li>
        <li>Lantern: 30/30 ft</li>
        <li>Candle: 5/5 ft</li>
        <li>Light Spell: 20/20 ft</li>
      </ul>
    `
        },

        {
            id: "food-water-foraging",
            title: "Food, Water & Foraging",
            width: "half",
            html: `
      <p><strong>Daily Needs:</strong></p>
      <ul>
        <li>Water: 1 gallon/day (hot: 2–4 gallons)</li>
        <li>Food: 1 lb/day</li>
      </ul>
      <p><strong>Foraging:</strong></p>
      <ul>
        <li>DC 10 (food)</li>
        <li>DC 15–20 (unfamiliar terrain)</li>
      </ul>
    `
        },

        {
            id: "difficult-terrain",
            title: "Difficult Terrain",
            width: "third",
            html: `
      <ul>
        <li>Costs +1 ft per 1 ft moved</li>
        <li>Stacking sources do NOT multiply</li>
        <li>Examples: rubble, snow, brush</li>
      </ul>
    `
        },

        {
            id: "weather-effects",
            title: "Weather Effects",
            width: "third",
            html: `
      <ul>
        <li><strong>Heavy Rain:</strong> disadvantage on Perception (hearing), light extinguished</li>
        <li><strong>High Wind:</strong> disadvantage on ranged attacks & Perception (hearing)</li>
        <li><strong>Extreme Cold:</strong> DC 10 Con save/hour or 1 level exhaustion</li>
        <li><strong>Extreme Heat:</strong> DC 10 Con save/hour or exhaustion</li>
      </ul>
    `
        },

        {
            id: "exhaustion-expanded",
            title: "Exhaustion (6 Levels)",
            width: "third",
            html: `
      <ul>
        <li><strong>1:</strong> Disadv ability checks</li>
        <li><strong>2:</strong> Speed halved</li>
        <li><strong>3:</strong> Disadv attacks & saves</li>
        <li><strong>4:</strong> HP max halved</li>
        <li><strong>5:</strong> Speed = 0</li>
        <li><strong>6:</strong> Death</li>
      </ul>
    `
        }
    ],


    equipment: [
        {
            id: "coin-values-expanded",
            title: "Coin & Currency",
            width: "third",
            html: `
      <ul>
        <li><strong>1 gp</strong> = 10 sp</li>
        <li><strong>1 sp</strong> = 10 cp</li>
        <li><strong>1 gp</strong> = 100 cp</li>
        <li><strong>Platinum (pp):</strong> 1 pp = 10 gp</li>
      </ul>
    `
        },

        {
            id: "common-gear",
            title: "Common Gear Costs",
            width: "third",
            html: `
      <ul>
        <li><strong>Rope (50 ft):</strong> 1 gp</li>
        <li><strong>Torch:</strong> 1 cp</li>
        <li><strong>Rations (1 day):</strong> 5 sp</li>
        <li><strong>Waterskin:</strong> 2 sp</li>
        <li><strong>Bedroll:</strong> 1 gp</li>
        <li><strong>Mess Kit:</strong> 2 sp</li>
      </ul>
    `
        },

        {
            id: "services-lifestyle",
            title: "Services & Lifestyle",
            width: "third",
            html: `
      <ul>
        <li><strong>Inn Stay:</strong> 5 sp (mod) / 1 gp (comfort)</li>
        <li><strong>Meal:</strong> 3 sp (avg)</li>
        <li><strong>Travel (coach):</strong> 3 gp/day</li>
        <li><strong>Healer's Kit:</strong> 5 gp</li>
        <li><strong>Spellcasting:</strong> 10–50 gp per level</li>
      </ul>
    `
        },

        {
            id: "weapons-summary",
            title: "Weapon Summary",
            width: "half",
            html: `
      <ul>
        <li><strong>Simple Melee:</strong> club d4, dagger d4 (f, l), mace d6, spear d6 (th)</li>
        <li><strong>Simple Ranged:</strong> light crossbow d8 (ld), shortbow d6 (l)</li>
        <li><strong>Martial Melee:</strong> longsword d8 (v), battleaxe d8 (v), greatsword 2d6, rapier d8 (f)</li>
        <li><strong>Martial Ranged:</strong> longbow d8 (h, l)</li>
        <li><strong>Common Properties:</strong> f=finesse, l=light, th=thrown, ld=loading, h=heavy, v=versatile</li>
      </ul>
    `
        },

        {
            id: "armor-summary",
            title: "Armor Summary",
            width: "half",
            html: `
      <ul>
        <li><strong>Light Armor:</strong> AC = 11–12 + Dex</li>
        <li><strong>Medium Armor:</strong> AC = 12–15 + Dex (max +2)</li>
        <li><strong>Heavy Armor:</strong> AC = 14–18 (no Dex)</li>
        <li><strong>Stealth:</strong> Some armor imposes disadvantage (ring, scale, half-plate)</li>
        <li><strong>Str Req:</strong> Heavy armor often requires Str 13–15</li>
      </ul>
    `
        },

        {
            id: "carrying-capacity-expanded",
            title: "Carrying & Lifting",
            width: "half",
            html: `
      <ul>
        <li><strong>Carrying Capacity:</strong> STR × 15 lb</li>
        <li><strong>Push/Drag/Lift:</strong> STR × 30 lb</li>
        <li><strong>Encumbered (optional rule):</strong> STR × 5 lb → speed -10</li>
        <li><strong>Heavily Encumbered:</strong> STR × 10 lb → speed -20, disadv on checks/attacks</li>
      </ul>
    `
        },

        {
            id: "weapon-properties-reference",
            title: "Weapon Properties Reference",
            width: "half",
            html: `
      <ul>
        <li><strong>Finesse:</strong> Use Dex or Str</li>
        <li><strong>Heavy:</strong> Small creatures have disadvantage</li>
        <li><strong>Light:</strong> Ideal for two-weapon fighting</li>
        <li><strong>Loading:</strong> Must reload after each shot</li>
        <li><strong>Reach:</strong> +5 ft reach</li>
        <li><strong>Thrown:</strong> Can be thrown (range indicated)</li>
        <li><strong>Versatile:</strong> Two-handed damage shown in parentheses</li>
      </ul>
    `
        }
    ],

    misc: [
        {
            id: "spellcasting-basics",
            title: "Spellcasting Basics",
            width: "half",
            html: `
      <ul>
        <li><strong>Spell Save DC:</strong> 8 + prof + ability mod</li>
        <li><strong>Attack Modifier:</strong> prof + ability mod</li>
        <li><strong>Components:</strong> V = audible, S = hand free, M = focus / material</li>
        <li><strong>Rituals:</strong> +10 minutes, no slot if known/prepared</li>
      </ul>
    `
        },

        {
            id: "concentration-rules",
            title: "Concentration",
            width: "half",
            html: `
      <ul>
        <li>Lose concentration if casting another concentration spell</li>
        <li><strong>Damage:</strong> Con save DC 10 or half damage</li>
        <li>Lose on incapacitated or death</li>
        <li>Environmental triggers may require checks</li>
      </ul>
    `
        },

        {
            id: "ability-modifiers",
            title: "Ability Score Modifiers",
            width: "third",
            html: `
      <ul>
        <li>1: -5</li>
        <li>2–3: -4</li>
        <li>4–5: -3</li>
        <li>6–7: -2</li>
        <li>8–9: -1</li>
        <li>10–11: +0</li>
        <li>12–13: +1</li>
        <li>14–15: +2</li>
        <li>16–17: +3</li>
        <li>18–19: +4</li>
        <li>20–21: +5</li>
      </ul>
    `
        },

        {
            id: "magic-item-rarity",
            title: "Magic Item Rarity",
            width: "third",
            html: `
      <ul>
        <li><strong>Common:</strong> 50–100 gp</li>
        <li><strong>Uncommon:</strong> 101–500 gp</li>
        <li><strong>Rare:</strong> 501–5,000 gp</li>
        <li><strong>Very Rare:</strong> 5,001–50,000 gp</li>
        <li><strong>Legendary:</strong> 50,000+ gp</li>
      </ul>
    `
        },

        {
            id: "downtime-activities",
            title: "Downtime Activities",
            width: "third",
            html: `
      <ul>
        <li><strong>Crafting:</strong> 5 gp/day</li>
        <li><strong>Research:</strong> 50 gp/day</li>
        <li><strong>Training:</strong> 250 gp / 250 days</li>
        <li><strong>Carousing:</strong> social connections, plot hooks</li>
      </ul>
    `
        },

        {
            id: "encounter-building",
            title: "Encounter Building (Quick)",
            width: "half",
            html: `
      <ul>
        <li><strong>Easy:</strong> 1/4 × party strength</li>
        <li><strong>Medium:</strong> 1/2 × party strength</li>
        <li><strong>Hard:</strong> ~1 × party strength</li>
        <li><strong>Deadly:</strong> 1.5–2 × party strength</li>
      </ul>
      <p><em>(DMG XP multipliers apply for multiple creatures)</em></p>
    `
        },

        {
            id: "rest-recovery-mini",
            title: "Healing & Recovery",
            width: "half",
            html: `
      <ul>
        <li><strong>Hit Dice:</strong> Recover 1/2 levels per long rest</li>
        <li><strong>Stabilize:</strong> DC 10 Medicine or healer's kit</li>
        <li><strong>Death Saves:</strong> 3 fails = death, 3 successes = stable</li>
        <li>Nat 1 = 2 fails; Nat 20 = 1 HP</li>
      </ul>
    `
        }
    ]

};