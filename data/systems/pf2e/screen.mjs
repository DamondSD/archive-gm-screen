export default {

    /* ---------------------------------------- */
    /* COMBAT                                   */
    /* ---------------------------------------- */

    combat: [

        {
            id: "pf2e-actions-in-combat",
            title: "Actions in Combat",
            width: "half",
            html: `
      <ul>
        <li><strong>Strike:</strong> Attack with a weapon or unarmed.</li>
        <li><strong>Stride:</strong> Move up to your Speed.</li>
        <li><strong>Step:</strong> 5-foot move; does not trigger reactions.</li>
        <li><strong>Interact:</strong> Draw, open, manipulate.</li>
        <li><strong>Seek:</strong> Look or listen for hidden creatures or objects.</li>
        <li><strong>Raise a Shield:</strong> Gain shield bonus until your next turn.</li>
        <li><strong>Ready:</strong> Prepare a reaction with a trigger.</li>
        <li><strong>Crawl:</strong> Move while prone.</li>
        <li><strong>Delay:</strong> Move your place in initiative.</li>
      </ul>
      <p>Most actions have traits and may require checks vs AC, save DCs, or Perception DC.</p>
      `
        },

        {
            id: "pf2e-actions-and-activities",
            title: "Actions & Activities (Icons)",
            width: "half",
            html: `
      <ul>
        <li><strong>1-Action:</strong> Stride, Strike, Step, Interact, Raise a Shield, Seek, Recall Knowledge.</li>
        <li><strong>2-Actions:</strong> Most spells, certain Strikes, special feats or activities.</li>
        <li><strong>3-Actions:</strong> Big spells, powerful finishers, or rare activities.</li>
        <li><strong>Free Actions:</strong> Limited by triggers, often once per round.</li>
        <li><strong>Reactions:</strong> Triggered out of turn (e.g., Attack of Opportunity, Shield Block).</li>
      </ul>
      <p>Track the three-action economy per turn: any mix of actions adds to three.</p>
      `
        },

        {
            id: "pf2e-attack-rolls-map",
            title: "Attack Rolls & MAP",
            width: "third",
            html: `
      <p><strong>Attack Roll:</strong> d20 + proficiency + ability + item + bonuses.</p>
      <ul>
        <li><strong>Multiple Attack Penalty (MAP):</strong></li>
        <li>2nd attack: –5 (–4 with agile).</li>
        <li>3rd+ attack: –10 (–8 with agile).</li>
      </ul>
      <p><strong>Degrees of Success:</strong></p>
      <ul>
        <li>Crit success: ≥10 over DC.</li>
        <li>Success: meets DC.</li>
        <li>Failure: below DC.</li>
        <li>Crit failure: ≥10 below DC.</li>
      </ul>
      `
        },

        {
            id: "pf2e-cover",
            title: "Cover",
            width: "third",
            html: `
      <ul>
        <li><strong>Lesser Cover:</strong> +1 circumstance bonus to AC and Reflex.</li>
        <li><strong>Standard Cover:</strong> +2 to AC and Reflex, can Hide behind it.</li>
        <li><strong>Greater Cover:</strong> +4 to AC and Reflex; often blocks line of effect.</li>
      </ul>
      <p>GM chooses cover based on how much of the target is obscured.</p>
      `
        },

        {
            id: "pf2e-concealment-detection",
            title: "Concealment & Detection",
            width: "third",
            html: `
      <ul>
        <li><strong>Concealed:</strong> DC 5 flat check to hit.</li>
        <li><strong>Hidden:</strong> DC 11 flat check; you know the space but not precise position.</li>
        <li><strong>Undetected:</strong> You don't know the exact space; must guess.</li>
        <li><strong>Invisible:</strong> Usually treated as hidden or undetected.</li>
      </ul>
      <p><strong>Seek:</strong> Perception vs Stealth DC to reduce from undetected → hidden → observed.</p>
      `
        },

        {
            id: "pf2e-persistent-damage",
            title: "Persistent Damage",
            width: "third",
            html: `
      <ul>
        <li>Take damage at end of your turn.</li>
        <li>Roll the listed dice (e.g., 1d6 fire).</li>
        <li><strong>Recovery Check:</strong> DC 15 flat check.</li>
        <li>Success: persistent damage ends.</li>
        <li>GM adjusts DC up/down for strong or weak countermeasures.</li>
      </ul>
      <p>Multiple types of persistent damage each roll and check separately.</p>
      `
        },

        {
            id: "pf2e-dying-wounded",
            title: "Dying & Wounded",
            width: "third",
            html: `
      <p><strong>Dying:</strong> 1–4</p>
      <ul>
        <li>Drop to 0 HP from damage → dying 1 (dying 2 on critical hit or crit fail save).</li>
        <li>Each round, make a recovery check.</li>
      </ul>
      <p><strong>Recovery Check:</strong> Flat check DC 10 + dying value.</p>
      <ul>
        <li>Crit success: dying → 0; gain 1 HP and wounded +1.</li>
        <li>Success: dying –1.</li>
        <li>Failure: dying +1.</li>
        <li>Crit failure: dying +2.</li>
      </ul>
      <p><strong>Wounded:</strong> Adds to initial dying when you drop again.</p>
      `
        },

        {
            id: "pf2e-immunities-resistances",
            title: "Immunities / Weaknesses / Resistances",
            width: "third",
            html: `
      <ul>
        <li><strong>Immunity:</strong> No effect from that damage or condition.</li>
        <li><strong>Weakness:</strong> Take extra damage of that type (add value once).</li>
        <li><strong>Resistance:</strong> Subtract value from damage of that type.</li>
      </ul>
      <p>Apply bonus damage (weakness) and subtract resistance to each separate damage type as appropriate.</p>
      `
        }

    ],


    /* ---------------------------------------- */
    /* CONDITIONS (CONDENSED LIKE SCREEN)       */
    /* ---------------------------------------- */

    conditions: [

        {
            id: "pf2e-cond-movement",
            title: "Movement & Position Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Prone:</strong> Flat-footed to melee; –2 to attacks; stand or crawl to move.</li>
        <li><strong>Grabbed:</strong> Immobilized and flat-footed; escape or force mover to release.</li>
        <li><strong>Restrained:</strong> Can't move; flat-footed; harder to attack or use some actions.</li>
        <li><strong>Immobilized:</strong> Can't move from current space.</li>
        <li><strong>Clumsy X:</strong> –X to Dexterity-based checks & DCs (including AC).</li>
        <li><strong>Slowed X:</strong> Lose X actions at the start of your turn.</li>
        <li><strong>Quickened:</strong> 1 extra action each turn (often limited to certain uses).</li>
      </ul>
      `
        },

        {
            id: "pf2e-cond-sensory",
            title: "Sensory Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Blinded:</strong> All creatures are concealed to you; severe penalties to Perception.</li>
        <li><strong>Dazzled:</strong> Difficult to see; creatures are concealed if outside bright light.</li>
        <li><strong>Deafened:</strong> Cannot hear; –2 to Perception checks that rely on hearing.</li>
        <li><strong>Concealed:</strong> DC 5 flat check to hit.</li>
        <li><strong>Hidden:</strong> DC 11 flat check to hit; space known but not exact position.</li>
        <li><strong>Undetected:</strong> Must guess the target’s space.</li>
        <li><strong>Invisible:</strong> Typically treated as hidden or undetected unless detected otherwise.</li>
      </ul>
      `
        },

        {
            id: "pf2e-cond-mental-emotional",
            title: "Mental & Emotional Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Frightened X:</strong> –X to all checks & DCs; decreases by 1 each round.</li>
        <li><strong>Confused:</strong> You act unpredictably and may attack random creatures.</li>
        <li><strong>Fascinated:</strong> –2 Perception and skill checks; cannot use certain actions on others.</li>
        <li><strong>Stupefied X:</strong> –X to Int/Wis/Cha checks & DCs; flat check to cast spells.</li>
        <li><strong>Controlled:</strong> Another creature dictates your actions.</li>
      </ul>
      `
        },

        {
            id: "pf2e-cond-debilitating",
            title: "Debilitating & Long-Term Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Fatigued:</strong> –1 to AC and saves; cannot use certain exploration activities.</li>
        <li><strong>Enfeebled X:</strong> –X to Strength-based checks & DCs.</li>
        <li><strong>Drained X:</strong> –X to Fortitude saves and Con-based checks; reduce max HP.</li>
        <li><strong>Sickened X:</strong> –X to checks & DCs; retch to attempt to reduce it.</li>
        <li><strong>Doomed X:</strong> Your maximum dying value is 4 – X.</li>
        <li><strong>Wounded X:</strong> When you go to dying again, start at dying 1 + X.</li>
      </ul>
      `
        },

        {
            id: "pf2e-cond-incapacitation",
            title: "Incapacitating States",
            width: "half",
            html: `
      <ul>
        <li><strong>Unconscious:</strong> You fall prone, can’t act; typically blinded and unaware.</li>
        <li><strong>Paralyzed:</strong> Flat-footed, can’t act or move; can’t use most actions with the Move trait.</li>
        <li><strong>Petrified:</strong> Turned to stone; unaware and usually immune to many effects.</li>
        <li><strong>Stunned X:</strong> Lose actions equal to X; may persist across turns.</li>
        <li><strong>Persistent Damage:</strong> Take damage each round until you recover (see combat panel).</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SKILLS & DCs                            */
    /* ---------------------------------------- */

    skills: [

        {
            id: "pf2e-level-based-dcs",
            title: "Typical DC by Level (Approx.)",
            width: "half",
            html: `
      <ul>
        <li><strong>Low DC:</strong> Level + 8</li>
        <li><strong>Moderate DC:</strong> Level + 10</li>
        <li><strong>High DC:</strong> Level + 12</li>
        <li><strong>Very High DC:</strong> Level + 14</li>
        <li><strong>Incredible DC:</strong> Level + 16+</li>
      </ul>
      <p>Adjust up or down for rarity, difficulty, and situational modifiers.</p>
      `
        },

        {
            id: "pf2e-bonuses-and-penalties",
            title: "Bonuses & Penalties",
            width: "half",
            html: `
      <ul>
        <li><strong>Circumstance:</strong> From conditions or situations; usually stack if from different sources.</li>
        <li><strong>Status:</strong> From magic or conditions; use only the highest bonus or worst penalty.</li>
        <li><strong>Item:</strong> From gear, runes, or tools; use only the highest bonus.</li>
        <li><strong>Untyped:</strong> Generally stack unless they come from the same source.</li>
      </ul>
      <p>Only one of each named bonus type applies; penalties usually stack.</p>
      `
        },

        {
            id: "pf2e-common-skill-actions-1",
            title: "Common Skill Actions (Athletics, Acrobatics, Stealth)",
            width: "full",
            html: `
      <p><strong>Athletics:</strong></p>
      <ul>
        <li>Climb, Swim, High/Long Jump.</li>
        <li>Grapple, Shove, Trip, Disarm.</li>
        <li>Force Open doors, lids, and barriers.</li>
      </ul>
      <p><strong>Acrobatics:</strong></p>
      <ul>
        <li>Balance across narrow or unstable surfaces.</li>
        <li>Squeeze through tight spaces.</li>
        <li>Maneuver in tight quarters or crowded areas.</li>
      </ul>
      <p><strong>Stealth:</strong></p>
      <ul>
        <li>Hide behind cover or concealment.</li>
        <li>Sneak to move without being noticed.</li>
        <li>Take the Avoid Notice exploration activity.</li>
      </ul>
      `
        },

        {
            id: "pf2e-common-skill-actions-2",
            title: "Common Skill Actions (Thievery, Perception, Social)",
            width: "full",
            html: `
      <p><strong>Thievery:</strong></p>
      <ul>
        <li>Disable device or trap.</li>
        <li>Pick locks and pockets.</li>
        <li>Palm or plant small objects.</li>
      </ul>
      <p><strong>Perception:</strong></p>
      <ul>
        <li>Seek hidden creatures or objects.</li>
        <li>Notice unusual details or ambushes.</li>
        <li>Used for initiative by default.</li>
      </ul>
      <p><strong>Social Skills (Diplomacy, Intimidation, Deception):</strong></p>
      <ul>
        <li>Make an Impression, Coerce, or Gather Information.</li>
        <li>Lie or create diversions.</li>
        <li>Demoralize foes in combat.</li>
      </ul>
      `
        },

        {
            id: "pf2e-degrees-of-success",
            title: "Degrees of Success (Skill Checks)",
            width: "half",
            html: `
      <ul>
        <li><strong>Critical Success:</strong> ≥10 over DC; best possible outcome.</li>
        <li><strong>Success:</strong> Meets DC; you achieve your goal.</li>
        <li><strong>Failure:</strong> Below DC; no progress or partial result.</li>
        <li><strong>Critical Failure:</strong> ≥10 below DC; often harmful consequence.</li>
      </ul>
      <p>Many actions upgrade/downgrade degree of success on crits or special rules.</p>
      `
        },

        {
            id: "pf2e-saves-summary",
            title: "Saving Throws Summary",
            width: "half",
            html: `
      <p>Save = d20 + level + proficiency + ability + bonuses.</p>
      <ul>
        <li><strong>Fortitude:</strong> Physical toughness; poison, disease, harsh environments.</li>
        <li><strong>Reflex:</strong> Dodging; traps, explosions, area effects.</li>
        <li><strong>Will:</strong> Mental resilience; charm, fear, mental effects.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SURVIVAL, ENVIRONMENT, EXPLORATION      */
    /* ---------------------------------------- */

    survival: [

        {
            id: "pf2e-exploration-activities",
            title: "Exploration Activities",
            width: "half",
            html: `
      <ul>
        <li><strong>Avoid Notice:</strong> Move stealthily; use Stealth for initiative.</li>
        <li><strong>Defend:</strong> Shield raised, weapon ready; +2 circumstance bonus to AC vs first attack.</li>
        <li><strong>Detect Magic:</strong> Constantly scan for magical auras.</li>
        <li><strong>Follow the Expert:</strong> Gain bonuses when following a more skilled ally.</li>
        <li><strong>Investigate:</strong> Analyze clues; may use a mental skill for initiative.</li>
        <li><strong>Scout:</strong> Provide +1 circumstance bonus to initiative for allies.</li>
      </ul>
      `
        },

        {
            id: "pf2e-light-and-vision",
            title: "Light & Vision",
            width: "half",
            html: `
      <ul>
        <li><strong>Bright Light:</strong> Normal vision; no penalties.</li>
        <li><strong>Dim Light:</strong> Creatures without low-light or darkvision treat targets as concealed.</li>
        <li><strong>Darkness:</strong> Creatures without darkvision are effectively blind.</li>
      </ul>
      <p><strong>Common Light Sources (typical):</strong></p>
      <ul>
        <li>Torch or light spell: bright in a close area, dim beyond.</li>
        <li>Lanterns and magical items may increase radius.</li>
      </ul>
      `
        },

        {
            id: "pf2e-hazards-environment",
            title: "Hazards & Environment",
            width: "half",
            html: `
      <ul>
        <li><strong>Simple Hazards:</strong> Trigger once (trap, falling block, etc.).</li>
        <li><strong>Complex Hazards:</strong> Act in initiative with sequences and routines.</li>
        <li><strong>Disable:</strong> Usually Thievery, Athletics, or a relevant Lore/skill vs hazard DC.</li>
        <li><strong>Environmental Effects:</strong> Extreme cold, heat, smoke, or suffocation often call for Fortitude saves over time.</li>
      </ul>
      `
        },

        {
            id: "pf2e-medicine-healing",
            title: "Medicine & Nonmagical Healing",
            width: "half",
            html: `
      <p><strong>Treat Wounds (10 minutes):</strong> Attempt Medicine check vs DC set by proficiency/level.</p>
      <ul>
        <li>Success: Restore a few d8s of HP (varies by DC choice).</li>
        <li>Critical Success: Double the healing.</li>
        <li>Failure: No healing; critical failure may inflict damage.</li>
      </ul>
      <p><strong>Battle Medicine:</strong> Treat Wounds in combat, but with tighter limits.</p>
      <p><strong>Rest:</strong> Overnight rest restores HP and removes some conditions at GM’s discretion.</p>
      `
        }

    ],


    /* ---------------------------------------- */
    /* EQUIPMENT, BULK, ARMOR, WEAPONS         */
    /* ---------------------------------------- */

    equipment: [

        {
            id: "pf2e-coins-and-currency",
            title: "Coins & Currency",
            width: "third",
            html: `
      <ul>
        <li><strong>1 gp = 10 sp</strong></li>
        <li><strong>1 sp = 10 cp</strong></li>
        <li>Most prices are listed in silver or gold.</li>
      </ul>
      `
        },

        {
            id: "pf2e-bulk-and-encumbrance",
            title: "Bulk & Encumbrance",
            width: "third",
            html: `
      <ul>
        <li><strong>Light (L):</strong> Ten L items = 1 Bulk.</li>
        <li><strong>Encumbered:</strong> At Bulk over your limit, you become encumbered (slower and clumsier).</li>
        <li><strong>Max Carry:</strong> 10 + Strength modifier (typical guideline).</li>
        <li>GM adjusts for large or small creatures and special abilities.</li>
      </ul>
      `
        },

        {
            id: "pf2e-armor-and-shields",
            title: "Armor & Shields",
            width: "third",
            html: `
      <p><strong>Armor:</strong> Adds item bonus to AC; may reduce Dex cap and impose check penalty.</p>
      <ul>
        <li><strong>Light Armor:</strong> Lower AC, high Dex allowed.</li>
        <li><strong>Medium Armor:</strong> Balanced AC and Dex cap.</li>
        <li><strong>Heavy Armor:</strong> High AC, low Dex cap, higher penalties.</li>
      </ul>
      <p><strong>Shields:</strong></p>
      <ul>
        <li><strong>Raise a Shield:</strong> Gain its AC bonus until your next turn.</li>
        <li><strong>Shield Block:</strong> Reaction; reduce damage by hardness; shield takes remaining damage.</li>
      </ul>
      `
        },

        {
            id: "pf2e-weapon-traits",
            title: "Common Weapon Traits",
            width: "half",
            html: `
      <ul>
        <li><strong>Agile:</strong> Reduced multiple attack penalty on later attacks.</li>
        <li><strong>Finesse:</strong> Use Dexterity instead of Strength for attacks.</li>
        <li><strong>Deadly X:</strong> On a critical hit, add one extra die of size X.</li>
        <li><strong>Fatal X:</strong> On a critical hit, increase die size to X and add an extra die.</li>
        <li><strong>Reach:</strong> Attack from extra distance (usually +5 feet).</li>
        <li><strong>Thrown:</strong> Can be thrown; still uses the same ability score unless noted.</li>
        <li><strong>Versatile X:</strong> Switch damage type to X (e.g., P ↔ S).</li>
      </ul>
      `
        },

        {
            id: "pf2e-object-hardness",
            title: "Objects, Hardness & Damage",
            width: "half",
            html: `
      <ul>
        <li>Objects have <strong>Hardness</strong>, HP, and a broken threshold.</li>
        <li>Hardness reduces damage taken; any leftover damage reduces HP.</li>
        <li>At half HP or less, an object is typically <strong>broken</strong> and works poorly or not at all.</li>
        <li>At 0 HP, the object is usually destroyed.</li>
      </ul>
      <p>Use material and size to estimate hardness and HP if no value is listed.</p>
      `
        }

    ],


    /* ---------------------------------------- */
    /* MISC / SPELLS / ENCOUNTER MATH          */
    /* ---------------------------------------- */

    misc: [

        {
            id: "pf2e-spellcasting-basics",
            title: "Spellcasting Basics",
            width: "half",
            html: `
      <ul>
        <li><strong>Spell Attack:</strong> d20 + level + proficiency + key ability + bonuses.</li>
        <li><strong>Spell DC:</strong> 10 + level + proficiency + key ability.</li>
        <li><strong>Heightening:</strong> Many spells scale when cast at higher level slots.</li>
        <li><strong>Traits:</strong> Schools, traditions, and descriptors inform interactions.</li>
      </ul>
      <p>Most combat spells require 2 or 3 actions; components often map to actions.</p>
      `
        },

        {
            id: "pf2e-focus-spells",
            title: "Focus Spells & Resources",
            width: "half",
            html: `
      <ul>
        <li><strong>Focus Points:</strong> Limited pool; usually 1–3 points.</li>
        <li><strong>Refocus:</strong> 10 minutes; typically restores 1 point.</li>
        <li>Focus spells heighten automatically with your level.</li>
      </ul>
      `
        },

        {
            id: "pf2e-encounter-building",
            title: "Encounter Building (Quick)",
            width: "half",
            html: `
      <ul>
        <li>Use creature level vs party level to gauge difficulty.</li>
        <li><strong>Lower-level foes:</strong> Many weaker enemies can make a moderate or severe fight.</li>
        <li><strong>Equal-level threats:</strong> One ≈ moderate, multiple ≈ severe.</li>
        <li><strong>Higher-level foes:</strong> +2 levels or more can become deadly quickly.</li>
      </ul>
      <p>Adjust for terrain, tactics, and party resources.</p>
      `
        },

        {
            id: "pf2e-rest-and-recovery",
            title: "Rest & Recovery Overview",
            width: "half",
            html: `
      <ul>
        <li>Short pauses (10 minutes) allow Treat Wounds, refocus, and some class abilities.</li>
        <li>Overnight rest restores HP and reduces certain conditions at GM’s discretion.</li>
        <li>Some conditions (drained, doomed, wounded) require significant downtime or magic to clear.</li>
      </ul>
      `
        }

    ]

};
