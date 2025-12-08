export default {

    /* ---------------------------------------- */
    /* COMBAT / GENERAL ROLLS                   */
    /* ---------------------------------------- */

    combat: [

        {
            id: "coc7e-roll-difficulties",
            title: "Roll Difficulties",
            width: "half",
            html: `
      <ul>
        <li><strong>Regular Success:</strong> Roll ≤ skill.</li>
        <li><strong>Hard Success:</strong> Roll ≤ half skill.</li>
        <li><strong>Extreme Success:</strong> Roll ≤ one-fifth skill.</li>
        <li><strong>Critical Success:</strong> Roll of 01 (or 01–05 with 100% skill).</li>
        <li><strong>Fumble:</strong> 96–100, or 100 when skill < 50%.</li>
      </ul>
      `
        },

        {
            id: "coc7e-opposed-rolls",
            title: "Opposed Rolls",
            width: "half",
            html: `
      <p><strong>Compare levels of success:</strong></p>
      <ul>
        <li>Critical > Extreme > Hard > Regular > Failure.</li>
        <li>If same level → use <strong>higher rolled value</strong> (closest to skill without exceeding).</li>
      </ul>
      <p>Used for: chase checks, stealth vs spot hidden, resisting grapples, etc.</p>
      `
        },

        {
            id: "coc7e-combat-sequence",
            title: "Combat Sequence",
            width: "third",
            html: `
      <ol>
        <li><strong>Determine Surprise</strong></li>
        <li><strong>DEX Order:</strong> Highest acts first.</li>
        <li><strong>Each action resolved</strong> (attack / maneuver / dive for cover)</li>
        <li><strong>Repeat each round</strong></li>
      </ol>
      `
        },

        {
            id: "coc7e-melee-rules",
            title: "Melee Attacks",
            width: "third",
            html: `
      <ul>
        <li>Attacker rolls vs Fighting skill.</li>
        <li>Defender may <strong>dodge or fight back</strong>.</li>
        <li><strong>Dodge wins ties</strong> in degree of success.</li>
        <li><strong>Fight back:</strong> If higher success → inflict damage.</li>
      </ul>
      `
        },

        {
            id: "coc7e-firearms-rules",
            title: "Firearms & Ranged Attacks",
            width: "third",
            html: `
      <ul>
        <li><strong>Point-blank:</strong> +1 bonus die.</li>
        <li><strong>Long range:</strong> –1 penalty die.</li>
        <li><strong>Cover:</strong> –1 to –2 penalty dice.</li>
        <li><strong>Auto-fire:</strong> Volley attacks; multiple hits on extreme success.</li>
        <li><strong>Dive for Cover:</strong> Reaction; requires DEX roll.</li>
      </ul>
      `
        },

        {
            id: "coc7e-damage-rules",
            title: "Damage, Major Wounds & Healing",
            width: "half",
            html: `
      <ul>
        <li><strong>Major Wound:</strong> Single blow ≥ half max HP.</li>
        <li><strong>Unconscious:</strong> HP ≤ 0; CON roll to stay alive.</li>
        <li><strong>Natural Healing:</strong> 1 HP/day with rest.</li>
        <li><strong>First Aid:</strong> 1 HP; must be within 1 hour.</li>
        <li><strong>Medicine:</strong> 1d3 HP; once per day per patient.</li>
      </ul>
      `
        },

        {
            id: "coc7e-impales",
            title: "Criticals & Impales",
            width: "half",
            html: `
      <ul>
        <li><strong>Critical Success:</strong> Max weapon damage.</li>
        <li><strong>Impale (thrusting weapons/firearms):</strong> Max damage + normal roll.</li>
        <li><strong>Fumble:</strong> Keeper decision (jam, trip, break, etc.).</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* CONDITIONS / SANITY                      */
    /* ---------------------------------------- */

    conditions: [

        {
            id: "coc7e-sanity-loss",
            title: "Sanity Loss",
            width: "half",
            html: `
      <ul>
        <li><strong>Success:</strong> Lose minimal SAN.</li>
        <li><strong>Failure:</strong> Lose full SAN amount.</li>
        <li><strong>Critical Success:</strong> Often no loss.</li>
      </ul>
      <p><strong>Temporary Insanity:</strong> Lose 5+ SAN at once.</p>
      <p><strong>Indefinite Insanity:</strong> Lose 20% SAN in 1 hour.</p>
      `
        },

        {
            id: "coc7e-insanity-effects",
            title: "Insanity Effects",
            width: "half",
            html: `
      <ul>
        <li><strong>Bout (Short-term):</strong> Minutes; panic, hysteria, violence.</li>
        <li><strong>Indefinite:</strong> Longer-term delusions, phobias, compulsions.</li>
        <li><strong>Keeper:</strong> Chooses or rolls from Tables IX–XI.</li>
      </ul>
      `
        },

        {
            id: "coc7e-temporary-conditions",
            title: "Common Temporary Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Stunned:</strong> Lose next action(s).</li>
        <li><strong>Blinded:</strong> –2 penalty dice for most actions.</li>
        <li><strong>Deafened:</strong> Difficulty hearing commands/clues.</li>
        <li><strong>Pinned:</strong> Cannot move; STR vs STR to break free.</li>
      </ul>
      `
        },

        {
            id: "coc7e-movement-actions",
            title: "Movement & Difficulty Modifiers",
            width: "half",
            html: `
      <ul>
        <li><strong>Crawling:</strong> Requires DEX roll under threat.</li>
        <li><strong>Running:</strong> Keeper may call for CON rolls.</li>
        <li><strong>Darkness:</strong> –1 to –2 penalty dice.</li>
        <li><strong>Heavy Fog/Smoke:</strong> Spot Hidden becomes Hard.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SKILLS                                    */
    /* ---------------------------------------- */

    skills: [

        {
            id: "coc7e-core-skills",
            title: "Core Investigative Skills",
            width: "half",
            html: `
      <ul>
        <li><strong>Spot Hidden:</strong> Find clues, traps, ambushes.</li>
        <li><strong>Listen:</strong> Hear subtle sounds behind doors/walls.</li>
        <li><strong>Library Use:</strong> Research clues/info.</li>
        <li><strong>Psychology:</strong> Determine motives/emotional state.</li>
      </ul>
      `
        },

        {
            id: "coc7e-skill-dcs",
            title: "Skill Roll Modifiers",
            width: "half",
            html: `
      <ul>
        <li><strong>Bonus Die:</strong> Roll % twice; take lower tens digit.</li>
        <li><strong>Penalty Die:</strong> Roll % twice; take higher tens digit.</li>
        <li><strong>Hard:</strong> ≤ 1/2 skill.</li>
        <li><strong>Extreme:</strong> ≤ 1/5 skill.</li>
      </ul>
      `
        },

        {
            id: "coc7e-chases",
            title: "Chase Rules (Condensed)",
            width: "half",
            html: `
      <ul>
        <li><strong>DEX order</strong> defines starting positions.</li>
        <li><strong>Movement rolls:</strong> CON or DEX.</li>
        <li><strong>Obstacles:</strong> Require skill tests to pass.</li>
        <li><strong>Catching Up:</strong> Opposed chase rolls.</li>
        <li><strong>Escape:</strong> Break line of sight + succeed chase roll.</li>
      </ul>
      `
        },

        {
            id: "coc7e-pushed-rolls",
            title: "Pushed Rolls",
            width: "half",
            html: `
      <p><strong>May retry a failed roll</strong> if you justify a new approach.</p>
      <ul>
        <li><strong>Success:</strong> As normal.</li>
        <li><strong>Failure:</strong> Keeper introduces severe consequences.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SURVIVAL / ENVIRONMENT                    */
    /* ---------------------------------------- */

    survival: [

        {
            id: "coc7e-firearms-impale",
            title: "Firearms Damage & Impales",
            width: "half",
            html: `
      <ul>
        <li><strong>Single Shot:</strong> Standard damage roll.</li>
        <li><strong>Impale:</strong> Max damage + roll damage again.</li>
        <li><strong>Shotguns:</strong> Higher damage at close range.</li>
        <li><strong>Full-Auto:</strong> Multiple hits; Volley rules apply.</li>
      </ul>
      `
        },

        {
            id: "coc7e-falling",
            title: "Falling, Fire & Drowning",
            width: "half",
            html: `
      <ul>
        <li><strong>Falling:</strong> 1d6 per 10 ft; terminal velocity ~20d6.</li>
        <li><strong>Fire:</strong> 1d6+ per round; STR/DEX rolls may extinguish flames.</li>
        <li><strong>Drowning:</strong> CON rolls each round until unconscious.</li>
      </ul>
      `
        },

        {
            id: "coc7e-poison",
            title: "Poison & Disease",
            width: "half",
            html: `
      <ul>
        <li><strong>Poison:</strong> CON rolls; damage/time varies by toxin.</li>
        <li><strong>Disease:</strong> Long-term CON, STR, POW damage.</li>
        <li>Healing requires Medicine or recovery time.</li>
      </ul>
      `
        },

        {
            id: "coc7e-weather-darkness",
            title: "Environmental Modifiers",
            width: "half",
            html: `
      <ul>
        <li><strong>Fog/darkness:</strong> Penalty dice to ranged & perception.</li>
        <li><strong>High winds:</strong> Half movement; ranged attacks Hard.</li>
        <li><strong>Slippery surfaces:</strong> DEX roll to avoid falling.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* EQUIPMENT / ITEMS                         */
    /* ---------------------------------------- */

    equipment: [

        {
            id: "coc7e-weapons",
            title: "Weapons (Quick Summary)",
            width: "half",
            html: `
      <p><strong>Common Melee Weapons:</strong></p>
      <ul>
        <li>Knife: 1d4+DB</li>
        <li>Club: 1d6+DB</li>
        <li>Crowbar: 1d8+DB</li>
      </ul>
      <p><strong>Common Firearms:</strong></p>
      <ul>
        <li>Handgun: 1d10</li>
        <li>Rifle: 2d6–2d8</li>
        <li>Shotgun: 4d6 (close) / 2d6 (medium)</li>
      </ul>
      `
        },

        {
            id: "coc7e-equipment-rules",
            title: "Equipment & Encumbrance",
            width: "half",
            html: `
      <ul>
        <li><strong>Encumbrance:</strong> STR determines carrying comfort.</li>
        <li><strong>Armor:</strong> Rare; subtracts damage (1–5 points).</li>
        <li><strong>Improvised Weapons:</strong> Usually –1 penalty die.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* MISC / KEEPER TOOLS                       */
    /* ---------------------------------------- */

    misc: [

        {
            id: "coc7e-keeper-tips",
            title: "Keeper Quick Tools",
            width: "half",
            html: `
      <ul>
        <li><strong>Bonus/Penalty Dice:</strong> The Keeper’s most useful tool.</li>
        <li><strong>Hidden Rolls:</strong> Use when outcome is uncertain.</li>
        <li><strong>Pace Clues:</strong> Players should always gain something.</li>
        <li><strong>Rewards:</strong> SAN gain, skill improvements.</li>
      </ul>
      `
        },

        {
            id: "coc7e-skill-advancement",
            title: "Skill Improvement",
            width: "half",
            html: `
      <p>After scenario: Roll each checked skill.</p>
      <ul>
        <li><strong>Fail roll:</strong> Skill increases 1d10%.</li>
        <li><strong>Success:</strong> No improvement.</li>
      </ul>
      `
        }

    ]

};
