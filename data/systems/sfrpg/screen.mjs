export default {

    /* ---------------------------------------- */
    /* COMBAT                                    */
    /* ---------------------------------------- */

    combat: [

        {
            id: "sfrpg-actions",
            title: "Action Types",
            width: "half",
            html: `
      <ul>
        <li><strong>Standard:</strong> Attack, cast a spell, activate ability.</li>
        <li><strong>Move:</strong> Move, draw weapon, stand, guard step.</li>
        <li><strong>Full Action:</strong> Full attack, charge, fight defensively.</li>
        <li><strong>Swift:</strong> Activate certain abilities.</li>
        <li><strong>Immediate:</strong> Once/round, usable out of turn.</li>
        <li><strong>Reactions:</strong> Triggered actions, e.g., AoO.</li>
      </ul>
      <p><strong>Guarded Step:</strong> 5 ft step without provoking.</p>
      `
        },

        {
            id: "sfrpg-attacks",
            title: "Attacks & Full Attacks",
            width: "half",
            html: `
      <p><strong>Attack Roll = d20 + BAB + ability mod + proficiency + bonuses</strong></p>
      <ul>
        <li><strong>Full Attack:</strong> Make two attacks at –4 each.</li>
        <li><strong>Charge:</strong> Move ×2; +2 attack; –2 AC.</li>
        <li><strong>Ranged Attacks into Melee:</strong> –4 unless target is flat-footed or you have feats.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-armor-kac-eac",
            title: "KAC & EAC",
            width: "third",
            html: `
      <p><strong>EAC:</strong> vs energy attacks.</p>
      <p><strong>KAC:</strong> vs kinetic attacks & combat maneuvers.</p>
      <ul>
        <li><strong>Flat-Footed:</strong> –2 AC.</li>
        <li><strong>Cover:</strong> +4 AC; improved +8.</li>
        <li><strong>Concealment:</strong> 20% miss; <strong>total</strong> 50%.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-combat-maneuvers",
            title: "Combat Maneuvers",
            width: "third",
            html: `
      <p><strong>CMB = BAB + Str mod + misc</strong></p>
      <p><strong>CMD = 8 + BAB + Str mod + Dex mod + misc</strong></p>
      <ul>
        <li><strong>Trip:</strong> Knock prone.</li>
        <li><strong>Bull Rush:</strong> Push target away.</li>
        <li><strong>Dirty Trick:</strong> Inflict short condition.</li>
        <li><strong>Disarm:</strong> Knock item away.</li>
        <li><strong>Sunder:</strong> Break object/weapon.</li>
        <li><strong>Grapple/Pin:</strong> Restrict enemy movement.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-stamina-hp",
            title: "HP, Stamina & Resolve",
            width: "third",
            html: `
      <ul>
        <li><strong>HP:</strong> Your actual health.</li>
        <li><strong>Stamina Points (SP):</strong> Buffer that recovers quickly.</li>
        <li><strong>Resolve Points (RP):</strong> Used for stabilizing, recovering stamina, abilities.</li>
      </ul>
      <p><strong>Recover Stamina:</strong> 10 minutes + spend 1 RP → full SP restored.</p>
      <p><strong>Stabilize:</strong> Spend 1 RP when dying.</p>
      `
        },

        {
            id: "sfrpg-grenades-aoe",
            title: "Grenades & AoE",
            width: "half",
            html: `
      <ul>
        <li><strong>Range Increment:</strong> 20 ft (unless noted).</li>
        <li><strong>Attack:</strong> Roll vs AC 5 to hit square.</li>
        <li><strong>Blast Radius:</strong> Reflex half; varies by grenade.</li>
      </ul>
      <p><strong>Scatter (miss):</strong> 1d4 squares in random direction.</p>
      `
        }

    ],


    /* ---------------------------------------- */
    /* CONDITIONS                                */
    /* ---------------------------------------- */

    conditions: [

        {
            id: "sfrpg-cond-physical",
            title: "Physical Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Prone:</strong> +4 AC vs ranged; –4 melee attacks; stand = move action.</li>
        <li><strong>Flat-Footed:</strong> –2 AC; cannot take reactions.</li>
        <li><strong>Grappled:</strong> –2 AC; –2 attack; cannot move; no AoOs.</li>
        <li><strong>Pinned:</strong> Helpless vs many effects; –4 AC; cannot act.</li>
        <li><strong>Off-Target:</strong> –2 to attack rolls.</li>
        <li><strong>Shaken:</strong> –2 attack, saves, skills.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-cond-senses",
            title: "Senses & Visibility Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Blinded:</strong> Total concealment for enemies; –4 STR/DEX skills; flat-footed.</li>
        <li><strong>Dazzled:</strong> –1 attack; –1 Perception in bright light.</li>
        <li><strong>Concealment:</strong> 20% miss chance.</li>
        <li><strong>Total Concealment:</strong> 50% miss; cannot directly target.</li>
        <li><strong>Invisible:</strong> Treat as total concealment unless detected.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-cond-mental-endurance",
            title: "Mental & Endurance Conditions",
            width: "half",
            html: `
      <ul>
        <li><strong>Confused:</strong> Random actions; may attack allies.</li>
        <li><strong>Staggered:</strong> Only 1 action per turn.</li>
        <li><strong>Stunned:</strong> Drop items; –2 AC; no actions.</li>
        <li><strong>Nauseated:</strong> Only 1 move per turn.</li>
        <li><strong>Diseased/Poisoned:</strong> Progress through stages.</li>
        <li><strong>Fatigued:</strong> –1 to AC/attack; no heavy lifting/running.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SKILLS & DCs                              */
    /* ---------------------------------------- */

    skills: [

        {
            id: "sfrpg-skill-dcs",
            title: "Typical Skill DCs",
            width: "half",
            html: `
      <ul>
        <li><strong>Simple tasks:</strong> DC 10</li>
        <li><strong>Challenging:</strong> DC 15</li>
        <li><strong>Hard:</strong> DC 20</li>
        <li><strong>Very Hard:</strong> DC 25+</li>
        <li><strong>Epic:</strong> DC 30+</li>
      </ul>
      `
        },

        {
            id: "sfrpg-skill-key-actions",
            title: "Key Skill Actions",
            width: "half",
            html: `
      <p><strong>Acrobatics:</strong> Balance, tumble, avoid AoOs.</p>
      <p><strong>Athletics:</strong> Swim, climb, force doors.</p>
      <p><strong>Bluff/Diplomacy/Intimidate:</strong> Social encounters.</p>
      <p><strong>Computers:</strong> Hack, disable security, access systems.</p>
      <p><strong>Engineering:</strong> Repair, disable devices, starship systems.</p>
      <p><strong>Perception:</strong> Spot hidden foes, details, traps.</p>
      <p><strong>Stealth:</strong> Hide, sneak, avoid detection.</p>
      `
        },

        {
            id: "sfrpg-saves",
            title: "Saving Throw Summary",
            width: "half",
            html: `
      <ul>
        <li><strong>Fortitude:</strong> Physical toughness.</li>
        <li><strong>Reflex:</strong> Dodging explosions/traps.</li>
        <li><strong>Will:</strong> Mental resistance.</li>
      </ul>
      <p><strong>Degrees of Success:</strong> Starfinder uses classic pass/fail, not PF2e four-tier.</p>
      `
        },

        {
            id: "sfrpg-skill-modifiers",
            title: "Common Modifiers",
            width: "half",
            html: `
      <ul>
        <li><strong>Aid Another:</strong> +2 to ally's check.</li>
        <li><strong>Cover:</strong> +4 AC, +2 Reflex.</li>
        <li><strong>Flanking:</strong> +2 attack.</li>
        <li><strong>Charge:</strong> +2 attack, –2 AC.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* SURVIVAL / ENVIRONMENT                    */
    /* ---------------------------------------- */

    survival: [

        {
            id: "sfrpg-environment",
            title: "Environmental Hazards",
            width: "half",
            html: `
      <ul>
        <li><strong>Vacuum:</strong> Con checks or begin suffocating.</li>
        <li><strong>Radiation:</strong> Fort saves per interval; stages of sickness.</li>
        <li><strong>High Gravity:</strong> –2 attack & AC; encumbrance increased.</li>
        <li><strong>Low Gravity:</strong> Acrobatics to move normally.</li>
        <li><strong>Extreme Temperatures:</strong> Fort saves hourly.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-rest-recovery",
            title: "Rest, Healing & Resolve",
            width: "half",
            html: `
      <ul>
        <li><strong>Recover Stamina:</strong> 10 minutes + 1 RP → full SP.</li>
        <li><strong>Hit Points:</strong> Rest restores 1 HP per level per 8 hours.</li>
        <li><strong>Medical Gear:</strong> First aid kits, medpatches, sprays.</li>
        <li><strong>Treat Deadly Wounds:</strong> Medicine check (DC varies); heals HP.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-starship-hazards",
            title: "Starship: Quick Hazards",
            width: "half",
            html: `
      <ul>
        <li><strong>Fire:</strong> Ongoing damage; extinguish via Engineering.</li>
        <li><strong>Depressurization:</strong> Vacuum exposure; emergency seals.</li>
        <li><strong>System Failure:</strong> Penalties to actions until repaired.</li>
      </ul>
      `
        }

    ],


    /* ---------------------------------------- */
    /* EQUIPMENT & STARSHIP COMBAT               */
    /* ---------------------------------------- */

    equipment: [

        {
            id: "sfrpg-weapons",
            title: "Weapon Types & Ranges",
            width: "third",
            html: `
      <ul>
        <li><strong>Kinetic:</strong> Use KAC.</li>
        <li><strong>Energy:</strong> Use EAC.</li>
        <li><strong>Small Arms:</strong> Typically 30–60 ft.</li>
        <li><strong>Longarms:</strong> 60–120 ft.</li>
        <li><strong>Heavy Weapons:</strong> Often blast or AoE.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-armor",
            title: "Armor & Shields",
            width: "third",
            html: `
      <ul>
        <li><strong>Armor:</strong> Provides EAC/KAC bonuses.</li>
        <li><strong>Upgrades:</strong> Jetpacks, dermal plating, etc.</li>
        <li><strong>Shields:</strong> Rare personal shields; DR-like effects.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-encumbrance",
            title: "Carrying & Encumbrance",
            width: "third",
            html: `
      <ul>
        <li><strong>Encumbered:</strong> –2 AC; –2 attack; speed reduced.</li>
        <li><strong>Overburdened:</strong> Cannot run or charge.</li>
        <li>Varies by Strength score.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-starship-roles",
            title: "Starship Combat Roles",
            width: "half",
            html: `
      <ul>
        <li><strong>Pilot:</strong> Maneuvers, stunts, initiative.</li>
        <li><strong>Gunner:</strong> Fire weapons.</li>
        <li><strong>Engineer:</strong> Divert, hold, patch systems.</li>
        <li><strong>Captain:</strong> Encourage, taunt, orders.</li>
        <li><strong>Science Officer:</strong> Scan, target system, lock on.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-starship-checks",
            title: "Starship Combat Checks",
            width: "half",
            html: `
      <ul>
        <li><strong>Piloting Check:</strong> For initiative & stunts.</li>
        <li><strong>Engineering:</strong> Divert, patch, overpower.</li>
        <li><strong>Gunnery:</strong> BAB or Piloting + Dex + bonuses.</li>
        <li><strong>Science:</strong> Computers to scan/target.</li>
      </ul>
      <p><strong>Phases:</strong> Engineering → Helm → Gunnery.</p>
      `
        }

    ],


    /* ---------------------------------------- */
    /* MISC                                       */
    /* ---------------------------------------- */

    misc: [

        {
            id: "sfrpg-cr-xp",
            title: "CR & XP Quick Table",
            width: "half",
            html: `
      <ul>
        <li>CR equal to party level → moderate challenge.</li>
        <li>CR +1/+2 → hard or very hard.</li>
        <li>CR +3+ → deadly.</li>
        <li>Multiple foes use encounter building table.</li>
      </ul>
      `
        },

        {
            id: "sfrpg-rest",
            title: "Rest & Downtime",
            width: "half",
            html: `
      <ul>
        <li><strong>Short Rest:</strong> 10 min + 1 RP → full Stamina.</li>
        <li><strong>Long Rest:</strong> 8 hours → recover HP & conditions.</li>
        <li><strong>Downtime:</strong> Crafting, repairs, training, survival.</li>
      </ul>
      `
        }

    ]

};
