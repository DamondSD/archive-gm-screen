export default {

    /* ---------------------------------------- */
    /* COMBAT                                    */
    /* ---------------------------------------- */

    combat: [

        {
            id: "pf1e-actions",
            title: "Action Types",
            width: "half",
            html: `
      <ul>
        <li><strong>Standard Action:</strong> Attack, cast a spell, combat maneuver, ready, etc.</li>
        <li><strong>Move Action:</strong> Move up to speed, draw weapon, stand, retrieve item.</li>
        <li><strong>Full-Round Action:</strong> Full attack, charge, run, coup de grace.</li>
        <li><strong>Swift Action:</strong> Activate abilities (e.g., smite, bardic music).</li>
        <li><strong>Immediate Action:</strong> Similar to swift but usable outside turn.</li>
        <li><strong>Free Action:</strong> Drop item, talk, cease concentration.</li>
      </ul>
      `
        },

        {
            id: "pf1e-full-attack",
            title: "Full Attack & Iterative Attacks",
            width: "half",
            html: `
      <p><strong>Iterative Attacks (BAB):</strong></p>
      <ul>
        <li>+6 BAB → two attacks (+6 / +1)</li>
        <li>+11 BAB → three attacks (+11 / +6 / +1)</li>
        <li>+16 BAB → four attacks (+16 / +11 / +6 / +1)</li>
      </ul>
      <p><strong>Two-Weapon Fighting:</strong></p>
      <ul>
        <li>–6 / –10 (main/off-hand)</li>
        <li>–4 / –8 with TWF feat</li>
        <li>–2 / –2 with TWF + light off-hand</li>
      </ul>
      `
        },

        {
            id: "pf1e-combat-maneuvers",
            title: "Combat Maneuvers (CMB/CMD)",
            width: "half",
            html: `
      <p><strong>CMB = BAB + Str mod + size mod + misc</strong></p>
      <p><strong>CMD = 10 + BAB + Str mod + Dex mod + size mod + misc</strong></p>
      <ul>
        <li><strong>Trip:</strong> Knock prone; provoke unless you have Improved Trip.</li>
        <li><strong>Disarm:</strong> Remove a held weapon.</li>
        <li><strong>Grapple:</strong> On success: grappled; maintain to pin or move.</li>
        <li><strong>Bull Rush:</strong> Push a foe back.</li>
        <li><strong>Sunder:</strong> Damage an object or weapon.</li>
        <li><strong>Reposition / Drag:</strong> Move target within reach.</li>
      </ul>
      `
        },

        {
            id: "pf1e-cover-concealment",
            title: "Cover & Concealment",
            width: "half",
            html: `
      <ul>
        <li><strong>Cover:</strong> +4 AC, +2 Reflex; +8 AC if total cover (cannot be targeted).</li>
        <li><strong>Soft Cover:</strong> +4 AC from creatures.</li>
        <li><strong>Concealment:</strong> 20% miss chance.</li>
        <li><strong>Total Concealment:</strong> 50% miss chance; cannot directly target.</li>
      </ul>
      `
        },

        {
            id: "pf1e-aoo",
            title: "Attacks of Opportunity",
            width: "third",
            html: `
      <ul>
        <li>Threatened squares trigger AoOs.</li>
        <li>Draw weapon: no AoO.</li>
        <li>Stand up: provokes.</li>
        <li>Cast a spell: provokes unless defensively (DC 15 + spell level).</li>
        <li>Ranged attack in melee: provokes.</li>
      </ul>
      `
        },

        {
            id: "pf1e-charge-run",
            title: "Charge & Run",
            width: "third",
            html: `
      <p><strong>Charge:</strong></p>
      <ul>
        <li>Move up to double speed in straight line.</li>
        <li>+2 attack, –2 AC.</li>
      </ul>
      <p><strong>Run:</strong></p>
      <ul>
        <li>×4 speed (×5 light armor).</li>
        <li>Cannot run in heavy armor.</li>
      </ul>
      `
        },

        {
            id: "pf1e-flanking",
            title: "Flanking & Flat-Footed",
            width: "third",
            html: `
      <ul>
        <li><strong>Flanking:</strong> +2 to hit.</li>
        <li><strong>Flat-Footed:</strong> Dex to AC lost; sneak attack triggers.</li>
        <li><strong>Helpless:</strong> Opponents get +4 to hit; melee attacks auto-hit on touch AC.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* CONDITIONS (Condensed)                    */
    /* ---------------------------------------- */

    conditions: [

        {
            id: "pf1e-cond-movement",
            title: "Movement & Physical Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Prone:</strong> –4 melee attack, –4 AC vs melee; standing provokes.</li>
        <li><strong>Grappled:</strong> –2 attacks, –2 Dex; cannot move; CMD –4.</li>
        <li><strong>Pinned:</strong> Helpless vs certain effects; –4 AC; cannot act.</li>
        <li><strong>Entangled:</strong> –2 attack, –4 Dex; movement hampered.</li>
        <li><strong>Helpless:</strong> Dex 0; attackers get +4 to hit; may be coup de graced.</li>
      </ul>
      `
        },

        {
            id: "pf1e-cond-senses",
            title: "Sensory Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Blinded:</strong> –2 AC, loses Dex bonus; –4 STR/DEX skills; 50% miss.</li>
        <li><strong>Deafened:</strong> –4 initiative; 20% spell failure (verbal).</li>
        <li><strong>Dazzled:</strong> –1 on attack rolls.</li>
      </ul>
      `
        },

        {
            id: "pf1e-cond-mental",
            title: "Mental Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Dazed:</strong> Cannot act; no penalty to AC.</li>
        <li><strong>Stunned:</strong> Drops items; –2 AC; loses Dex; takes –2 to attacks.</li>
        <li><strong>Confused:</strong> Random actions; may attack allies.</li>
        <li><strong>Panicked:</strong> Drops items; must flee.</li>
        <li><strong>Shaken:</strong> –2 attacks/saves/skills.</li>
        <li><strong>Frightened:</strong> Must flee + shaken penalties.</li>
      </ul>
      `
        },

        {
            id: "pf1e-cond-endurance",
            title: "Fatigue, Exhaustion, Ability Damage",
            width: "half",
            html: `
      <ul>
        <li><strong>Fatigued:</strong> Cannot run/charge; –2 STR/DEX.</li>
        <li><strong>Exhausted:</strong> Moves at half speed; –6 STR/DEX.</li>
        <li><strong>Ability Damage:</strong> Reduces ability score; 0 = unconscious or dead depending on score.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SKILLS & DCs                              */
    /* ---------------------------------------- */

    skills: [

        {
            id: "pf1e-skill-dcs",
            title: "Common Skill DCs",
            width: "half",
            html: `
      <ul>
        <li><strong>Climb:</strong> DC 15 (wall), DC 25 (ceiling).</li>
        <li><strong>Swim:</strong> DC 10 (calm water), DC 20 (rough).</li>
        <li><strong>Jump (Acrobatics):</strong> DC = distance × 4 (horizontal), × 8 (vertical).</li>
        <li><strong>Disable Device:</strong> DC 20–30 traps; +10 for magical.</li>
        <li><strong>Diplomacy:</strong> DC 10–30 depending on attitude.</li>
      </ul>
      `
        },

        {
            id: "pf1e-perception",
            title: "Perception (Typical DCs)",
            width: "half",
            html: `
      <ul>
        <li><strong>DC 0–5:</strong> Loud or obvious noises.</li>
        <li><strong>DC 10–20:</strong> Small or subtle details.</li>
        <li><strong>DC 20–30:</strong> Hidden creatures, traps, fine details.</li>
        <li><strong>+1 per 10 ft</strong> of distance.</li>
        <li><strong>+5–20</strong> for barriers/cover.</li>
      </ul>
      `
        },

        {
            id: "pf1e-knowledge",
            title: "Knowledge Check Difficulty",
            width: "half",
            html: `
      <ul>
        <li><strong>DC 10:</strong> Common facts.</li>
        <li><strong>DC 15:</strong> Uncommon but known.</li>
        <li><strong>DC 20:</strong> Rare knowledge.</li>
        <li><strong>DC 25+:</strong> Extremely obscure.</li>
        <li>Beat DC by +5 for extra details.</li>
      </ul>
      `
        },

        {
            id: "pf1e-saves",
            title: "Saving Throw Summary",
            width: "half",
            html: `
      <ul>
        <li><strong>Fortitude:</strong> Poison, disease, physical effects.</li>
        <li><strong>Reflex:</strong> Area attacks, traps, explosions.</li>
        <li><strong>Will:</strong> Mental effects, fear, charm.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SURVIVAL / ENVIRONMENT                    */
    /* ---------------------------------------- */

    survival: [

        {
            id: "pf1e-light-vision",
            title: "Light & Vision",
            width: "half",
            html: `
      <ul>
        <li><strong>Bright Light:</strong> Normal vision.</li>
        <li><strong>Dim Light:</strong> 20% miss chance.</li>
        <li><strong>Darkness:</strong> 50% miss chance unless darkvision.</li>
      </ul>
      <p>Torches, sunrods, lanterns vary by radius.</p>
      `
        },

        {
            id: "pf1e-environment",
            title: "Environmental Hazards",
            width: "half",
            html: `
      <ul>
        <li><strong>Heat:</strong> Fort save hourly or take nonlethal damage.</li>
        <li><strong>Cold:</strong> Fort save hourly or take nonlethal.</li>
        <li><strong>Smoke:</strong> Fort save or cough/choke.</li>
        <li><strong>Suffocation:</strong> Round-by-round Con checks once deprived of air.</li>
      </ul>
      `
        },

        {
            id: "pf1e-falling",
            title: "Falling & Movement",
            width: "third",
            html: `
      <ul>
        <li><strong>Falling:</strong> 1d6 per 10 ft (max 20d6).</li>
        <li><strong>Difficult Terrain:</strong> Movement ×2.</li>
        <li><strong>Underwater Combat:</strong> –2 melee; fire spells weakened.</li>
      </ul>
      `
        },

        {
            id: "pf1e-rest-healing",
            title: "Rest & Healing",
            width: "third",
            html: `
      <ul>
        <li><strong>Rest (8 hours):</strong> Heal 1 hp/level.</li>
        <li><strong>Long-Term Care:</strong> Heal double with successful Heal check.</li>
        <li><strong>Ability Damage:</strong> Heal 1 point/day with rest.</li>
      </ul>
      `
        },

        {
            id: "pf1e-object-hardness",
            title: "Object Hardness & HP",
            width: "third",
            html: `
      <ul>
        <li><strong>Wood:</strong> Hardness 5; HP 10/in.</li>
        <li><strong>Stone:</strong> Hardness 8; HP 15/in.</li>
        <li><strong>Metal:</strong> Hardness 10; HP 30/in.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* EQUIPMENT & MAGIC                         */
    /* ---------------------------------------- */

    equipment: [

        {
            id: "pf1e-carrying",
            title: "Carrying Capacity (Strength)",
            width: "third",
            html: `
      <ul>
        <li><strong>Light Load:</strong> Up to ×1 Str.</li>
        <li><strong>Medium:</strong> ×2 Str; –3 armor check penalty.</li>
        <li><strong>Heavy:</strong> ×3 Str; –6 penalty; slower speed.</li>
        <li>Quadrupeds get ×1.5 capacity.</li>
      </ul>
      `
        },

        {
            id: "pf1e-armor",
            title: "Armor & Shields",
            width: "third",
            html: `
      <ul>
        <li><strong>Light:</strong> +1–4 AC; small penalties.</li>
        <li><strong>Medium:</strong> +3–6 AC; moderate penalties.</li>
        <li><strong>Heavy:</strong> +6–10 AC; high penalties.</li>
        <li><strong>Shields:</strong> +1–2 AC; tower shield +4.</li>
      </ul>
      `
        },

        {
            id: "pf1e-damage-reduction",
            title: "Damage Reduction & Energy Resistance",
            width: "third",
            html: `
      <ul>
        <li><strong>DR:</strong> Subtract X unless bypassed (silver, cold iron, magic, alignment).</li>
        <li><strong>Energy Resistance:</strong> Subtract value from that type.</li>
        <li><strong>Immunity:</strong> Ignore damage entirely.</li>
      </ul>
      `
        },

        {
            id: "pf1e-concentration",
            title: "Spellcasting & Concentration",
            width: "half",
            html: `
      <ul>
        <li><strong>Concentration Check:</strong> d20 + CL + ability mod.</li>
        <li><strong>DC (damage):</strong> 10 + damage taken + spell level.</li>
        <li><strong>DC (vigorous motion):</strong> 10 + spell level.</li>
        <li><strong>DC (violent motion):</strong> 15 + spell level.</li>
        <li><strong>DC (grapple):</strong> 10 + grappled creature’s CMB + spell level.</li>
      </ul>
      `
        },

        {
            id: "pf1e-identify-magic",
            title: "Identifying Magic",
            width: "half",
            html: `
      <ul>
        <li><strong>Spell as it's cast:</strong> Spellcraft DC 15 + spell level.</li>
        <li><strong>Magic item (detect magic):</strong> Spellcraft DC 15 + item CL.</li>
        <li><strong>Scroll activation:</strong> Spellcraft DC = scroll's caster level +1.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* MISC                                      */
    /* ---------------------------------------- */

    misc: [

        {
            id: "pf1e-combat-modifiers",
            title: "Common Combat Modifiers",
            width: "half",
            html: `
      <ul>
        <li><strong>Higher Ground:</strong> +1 attack.</li>
        <li><strong>Charging:</strong> +2 attack, –2 AC.</li>
        <li><strong>Flanking:</strong> +2 attack.</li>
        <li><strong>Invisibility:</strong> +2 attack; target denied Dex.</li>
        <li><strong>Squeezing:</strong> –4 AC & attack.</li>
      </ul>
      `
        },

        {
            id: "pf1e-encounter-basics",
            title: "Encounter Basics",
            width: "half",
            html: `
      <ul>
        <li><strong>Initiative:</strong> d20 + Dex + misc.</li>
        <li><strong>Surprise Round:</strong> One standard or move action.</li>
        <li><strong>Flat-Footed:</strong> No Dex to AC until acting.</li>
        <li><strong>Difficulty:</strong> CR vs party level; adjust XP accordingly.</li>
      </ul>
      `
        }

    ]

};
