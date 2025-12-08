export default {

    /* ---------------------------------------- */
    /* COMBAT / TRAIT TESTS                      */
    /* ---------------------------------------- */

    combat: [

        {
            id: "swade-trait-tests",
            title: "Trait Tests & Raises",
            width: "half",
            html: `
      <ul>
        <li><strong>Success:</strong> Roll ≥ 4.</li>
        <li><strong>Raise:</strong> +4 over target number.</li>
        <li><strong>Opposed Tests:</strong> Higher roll wins; raises still matter.</li>
        <li><strong>Wild Cards:</strong> Roll Trait die + Wild d6 (take best).</li>
      </ul>
      <p><strong>Critical Failure:</strong> Snake eyes on any Trait → automatic failure + complication.</p>
      `
        },

        {
            id: "swade-combat-actions",
            title: "Combat Actions",
            width: "half",
            html: `
      <ul>
        <li><strong>Attack (Fighting):</strong> vs Parry.</li>
        <li><strong>Attack (Ranged):</strong> vs TN 4 + modifiers.</li>
        <li><strong>Grapple:</strong> Opposed Athletics.</li>
        <li><strong>Disarm:</strong> Opposed Athletics.</li>
        <li><strong>Tests:</strong> Taunt, Intimidate, Performance.</li>
        <li><strong>Wild Attack:</strong> +2 attack & damage; –2 Parry.</li>
        <li><strong>Run:</strong> Roll die = bonus movement.</li>
      </ul>
      `
        },

        {
            id: "swade-range-mods",
            title: "Range & Cover",
            width: "third",
            html: `
      <ul>
        <li><strong>Short Range:</strong> No penalty.</li>
        <li><strong>Medium:</strong> –2.</li>
        <li><strong>Long:</strong> –4.</li>
        <li><strong>Cover:</strong> –2 to –4 attacker penalty.</li>
        <li><strong>Target in Melee:</strong> –4 unless using Shooting trick.</li>
      </ul>
      `
        },

        {
            id: "swade-damage-wounds",
            title: "Damage & Wounds",
            width: "third",
            html: `
      <p><strong>Damage ≥ Toughness:</strong> Shaken.</p>
      <p><strong>Raise (Tough+4):</strong> 1 Wound.</p>
      <ul>
        <li>Wild Cards have 3 Wounds.</li>
        <li><strong>Incapacitation:</strong> At 4th Wound.</li>
        <li><strong>Soak:</strong> Spend Benny → Vigor test.</li>
      </ul>
      `
        },

        {
            id: "swade-bennies",
            title: "Bennies & Edges",
            width: "third",
            html: `
      <ul>
        <li><strong>Benny Uses:</strong> Reroll trait, soak damage, recover from Shaken, draw new initiative, influence narrative.</li>
        <li><strong>Wild Cards:</strong> 3 Bennies (usually).</li>
        <li><strong>GM:</strong> 1 per player + extras.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* CONDITIONS / STATUS EFFECTS               */
    /* ---------------------------------------- */

    conditions: [

        {
            id: "swade-shaken",
            title: "Shaken & Recovery",
            width: "half",
            html: `
      <p><strong>Shaken:</strong> No actions except free; may move at half Pace.</p>
      <p><strong>Recovery:</strong> Spirit roll.</p>
      <ul>
        <li>Success → Recover.</li>
        <li>Failure → Remain Shaken.</li>
        <li>Spend Benny → Immediately recover.</li>
      </ul>
      `
        },

        {
            id: "swade-fatigue",
            title: "Fatigue (Exhaustion Track)",
            width: "half",
            html: `
      <ul>
        <li><strong>Fatigue 1:</strong> –1 to Trait rolls.</li>
        <li><strong>Fatigue 2:</strong> –2 to Trait rolls.</li>
        <li><strong>Fatigue 3:</strong> Incapacitated.</li>
      </ul>
      <p>Sources: hunger, heat/cold, drowning, hazards, powers.</p>
      `
        },

        {
            id: "swade-conditions-basic",
            title: "Common Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Distracted:</strong> –2 Trait rolls.</li>
        <li><strong>Vulnerable:</strong> Opponents get +2 to hit you.</li>
        <li><strong>Entangled:</strong> –2 Pace/Agility; can't run.</li>
        <li><strong>Bound:</strong> Agility tests at –4; limited movement.</li>
        <li><strong>Prone:</strong> –2 melee attacks; +2 vs ranged.</li>
      </ul>
      `
        },

        {
            id: "swade-conditions-mental",
            title: "Mental Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Fear:</strong> Spirit roll; on fail gain Shaken or worse.</li>
        <li><strong>Stunned:</strong> No actions; Vigor to recover.</li>
        <li><strong>Hazards (Terror, Insanity):</strong> GM applies modifiers.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SKILLS & TASKS                            */
    /* ---------------------------------------- */

    skills: [

        {
            id: "swade-tricks-tests",
            title: "Tests (Social & Physical)",
            width: "half",
            html: `
      <p><strong>Test vs target’s opposed Trait:</strong></p>
      <ul>
        <li><strong>Success:</strong> Target Distracted.</li>
        <li><strong>Raise:</strong> Target Vulnerable.</li>
      </ul>
      <p>Common Skills: Taunt, Intimidation, Performance, Athletics, Stealth.</p>
      `
        },

        {
            id: "swade-dramatic-tasks",
            title: "Dramatic Tasks",
            width: "half",
            html: `
      <ul>
        <li>5 rounds by default.</li>
        <li>Each success/raise = progress.</li>
        <li>Fail = lose 1 progress.</li>
        <li>Clubs = complication.</li>
      </ul>
      <p>Used for hacking, rituals, defusing bombs, etc.</p>
      `
        },

        {
            id: "swade-social",
            title: "Social Conflict",
            width: "half",
            html: `
      <ul>
        <li>Opposed social skills (Taunt, Persuasion, etc.).</li>
        <li>Best of 3 rolls decides outcome.</li>
        <li>Raises influence narrative & NPC attitude.</li>
      </ul>
      `
        },

        {
            id: "swade-common-modifiers",
            title: "Common Situational Modifiers",
            width: "half",
            html: `
      <ul>
        <li><strong>Higher Ground:</strong> +1 attack.</li>
        <li><strong>Illumination Issues:</strong> –1 to –4.</li>
        <li><strong>Off-Target:</strong> –2 attack.</li>
        <li><strong>Wound/Fatigue:</strong> Each –1.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SURVIVAL / HAZARDS                         */
    /* ---------------------------------------- */

    survival: [

        {
            id: "swade-environment",
            title: "Environmental Hazards",
            width: "half",
            html: `
      <ul>
        <li><strong>Cold:</strong> Vigor or Fatigue.</li>
        <li><strong>Heat:</strong> Vigor or Fatigue.</li>
        <li><strong>Drowning:</strong> Vigor or Fatigue; on Incap → death.</li>
        <li><strong>Radiation/Toxicity:</strong> Vigor vs Fatigue/Wounds.</li>
      </ul>
      `
        },

        {
            id: "swade-explosions",
            title: "Blast Templates (Explosions)",
            width: "half",
            html: `
      <ul>
        <li><strong>Small Blast:</strong> 2” radius.</li>
        <li><strong>Medium Blast:</strong> 4” radius.</li>
        <li><strong>Large Blast:</strong> 6” radius.</li>
        <li><strong>Damage:</strong> Full at center → –1d6 per 2” outward (GM optional).</li>
      </ul>
      `
        },

        {
            id: "swade-chases",
            title: "Chases (Quick Summary)",
            width: "half",
            html: `
      <ul>
        <li>Draw Action card per participant.</li>
        <li><strong>Clubs = Complication.</strong></li>
        <li>Movement: Run or action to change range.</li>
        <li>Close Range = allowed melee.</li>
        <li>Opposed Athletics/Piloting to change distance.</li>
      </ul>
      `
        },

        {
            id: "swade-size-scale",
            title: "Size & Scale",
            width: "half",
            html: `
      <ul>
        <li>Each Size step ±2 to attack/Stealth.</li>
        <li><strong>Scale:</strong> Vehicles vs people → massive Toughness gap.</li>
        <li>Larger Scale damage: +2 per step.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* EQUIPMENT & VEHICLES                       */
    /* ---------------------------------------- */

    equipment: [

        {
            id: "swade-armor-weapons",
            title: "Armor & Weapons",
            width: "third",
            html: `
      <ul>
        <li><strong>Armor:</strong> +X Toughness (Armor).</li>
        <li><strong>AP (Armor Piercing):</strong> Reduces Armor by X.</li>
        <li><strong>Damage:</strong> Str + die; firearms use fixed dice.</li>
      </ul>
      `
        },

        {
            id: "swade-gear",
            title: "Gear Modifiers",
            width: "third",
            html: `
      <ul>
        <li><strong>Scope:</strong> Ignore up to –4 range penalty.</li>
        <li><strong>Laser Sight:</strong> +1 attack at Short Range.</li>
        <li><strong>Shields:</strong> Provide Cover bonuses.</li>
      </ul>
      `
        },

        {
            id: "swade-vehicle-basics",
            title: "Vehicles (Quick Rules)",
            width: "third",
            html: `
      <ul>
        <li><strong>Piloting:</strong> Used for stunts & hazards.</li>
        <li><strong>Toughness:</strong> Often 10–20 with Armor.</li>
        <li><strong>Critical Hit:</strong> On Raise or at Wound.</li>
        <li><strong>Out of Control:</strong> 1d6 direction table.</li>
      </ul>
      `
        },

        {
            id: "swade-mounts",
            title: "Mounts & Riding",
            width: "half",
            html: `
      <ul>
        <li><strong>Ride checks</strong> for combat maneuvers.</li>
        <li><strong>Mounted Charge:</strong> Often +2 damage.</li>
        <li><strong>Falling Off:</strong> Agility to avoid damage.</li>
      </ul>
      `
        },

        {
            id: "swade-encumbrance",
            title: "Encumbrance",
            width: "half",
            html: `
      <ul>
        <li><strong>Encumbered:</strong> –2 Pace; –2 running die.</li>
        <li><strong>Heavy Load:</strong> GM may impose Fatigue tests.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* MISC / META                                */
    /* ---------------------------------------- */

    misc: [

        {
            id: "swade-initiative",
            title: "Initiative",
            width: "half",
            html: `
      <ul>
        <li>Draw card each round.</li>
        <li><strong>Jokers:</strong> +2 attack/damage; act anywhere; everyone gains a Benny.</li>
        <li>Clubs may cause complications in Chases or Dramatic Tasks.</li>
      </ul>
      `
        },

        {
            id: "swade-interludes",
            title: "Interludes",
            width: "half",
            html: `
      <ul>
        <li>Draw a card → story prompt:</li>
        <li><strong>Clubs:</strong> Tragedy.</li>
        <li><strong>Diamonds:</strong> Desire.</li>
        <li><strong>Hearts:</strong> Love.</li>
        <li><strong>Spades:</strong> Hardship.</li>
      </ul>
      `
        }

    ]

};
