export type TalismanType = {
    [key: string]: number | string | string[]
}

export type TalismansDataType = {
    [key: string]: TalismanType
}

export const TalismansNames: string[] = [
    "Crimson Amber Medallion",
    "Crimson Amber Medallion +1",
    "Crimson Amber Medallion +2",
    "Cerulean Amber Medallion",
    "Cerulean Amber Medallion +1",
    "Cerulean Amber Medallion +2",
    "Viridian Amber Medallion",
    "Viridian Amber Medallion +1",
    "Viridian Amber Medallion +2",
    "Arsenal Charm",
    "Arsenal Charm +1",
    "Great-Jar's Arsenal",
    "Erdtree's Favor",
    "Erdtree's Favor +1",
    "Erdtree's Favor +2",
    "Radagon's Scarseal",
    "Radagon's Soreseal",
    "Starscourge Heirloom",
    "Prosthesis-Wearer Heirloom",
    "Stargazer Heirloom",
    "Two Fingers Heirloom",
    "Silver Scarab",
    "Gold Scarab",
    "Moon of Nokstella",
    "Green Turtle Talisman",
    "Stalwart Horn Charm",
    "Stalwart Horn Charm +1",
    "Immunizing Horn Charm",
    "Immunizing Horn Charm +1",
    "Clarifying Horn Charm",
    "Clarifying Horn Charm +1",
    "Prince of Death's Pustule",
    "Prince of Death's Cyst",
    "Mottled Necklace",
    "Mottled Necklace +1",
    "Bull-Goat's Talisman",
    "Marika's Scarseal",
    "Marika's Soreseal",
    "Warrior Jar Shard",
    "Shard of Alexander",
    "Millicent's Prosthesis",
    "Magic Scorpion Charm",
    "Lightning Scorpion Charm",
    "Fire Scorpion Charm",
    "Sacred Scorpion Charm",
    "Red-Feathered Branchsword",
    "Ritual Sword Talisman",
    "Spear Talisman",
    "Hammer Talisman",
    "Winged Sword Insignia",
    "Rotten Winged Sword Insignia",
    "Dagger Talisman",
    "Arrow's Reach Talisman",
    "Blue Dancer Charm",
    "Twinblade Talisman",
    "Axe Talisman",
    "Lance Talisman",
    "Arrow's Sting Talisman",
    "Lord of Blood's Exultation",
    "Kindred of Rot's Exultation",
    "Claw Talisman",
    "Roar Medallion",
    "Curved Sword Talisman",
    "Companion Jar",
    "Perfumer's Talisman",
    "Graven-School Talisman",
    "Graven-Mass Talisman",
    "Faithful's Canvas Talisman",
    "Flock's Canvas Talisman",
    "Old Lord's Talisman",
    "Radagon Icon",
    "Primal Glintstone Blade",
    "Godfrey Icon",
    "Dragoncrest Shield Talisman",
    "Dragoncrest Shield Talisman +1",
    "Dragoncrest Shield Talisman +2",
    "Dragoncrest Greatshield Talisman",
    "Spelldrake Talisman",
    "Spelldrake Talisman +1",
    "Spelldrake Talisman +2",
    "Flamedrake Talisman",
    "Flamedrake Talisman +1",
    "Flamedrake Talisman +2",
    "Boltdrake Talisman",
    "Boltdrake Talisman +1",
    "Boltdrake Talisman +2",
    "Haligdrake Talisman",
    "Haligdrake Talisman +1",
    "Haligdrake Talisman +2",
    "Pearldrake Talisman",
    "Pearldrake Talisman +1",
    "Pearldrake Talisman +2",
    "Crucible Scale Talisman",
    "Crucible Feather Talisman",
    "Blue-Feathered Branchsword",
    "Ritual Shield Talisman",
    "Greatshield Talisman",
    "Crucible Knot Talisman",
    "Crimson Seed Talisman",
    "Cerulean Seed Talisman",
    "Blessed Dew Talisman",
    "Taker's Cameo",
    "Godskin Swaddling Cloth",
    "Assassin's Crimson Dagger",
    "Assassin's Cerulean Dagger",
    "Crepus's Vial",
    "Concealing Veil",
    "Carian Filigreed Crest",
    "Longtail Cat Talisman",
    "Shabriri's Woe",
    "Daedicar's Woe",
    "Sacrificial Twig",
    "Furled Finger's Trick-Mirror",
    "Host's Trick-Mirror",
    "Entwining Umbilical Cord",
    "Ancestral Spirit's Horn"
];

export const TalismansData: TalismansDataType = {
    "Crimson Amber Medallion": {
      "summary": "Raises maximum HP",
      "weight": 0.3,
      "conflicts": [
        "Crimson Amber Medallion",
        "Crimson Amber Medallion +1",
        "Crimson Amber Medallion +2"
      ]
    },
    "Crimson Amber Medallion +1": {
      "summary": "Greatly raises maximum HP",
      "weight": 0.3,
      "conflicts": [
        "Crimson Amber Medallion",
        "Crimson Amber Medallion +1",
        "Crimson Amber Medallion +2"
      ]
    },
    "Crimson Amber Medallion +2": {
      "summary": "Vastly raises maximum HP",
      "weight": 0.3,
      "conflicts": [
        "Crimson Amber Medallion",
        "Crimson Amber Medallion +1",
        "Crimson Amber Medallion +2"
      ]
    },
    "Cerulean Amber Medallion": {
      "summary": "Raises maximum FP",
      "weight": 0.3,
      "conflicts": [
        "Cerulean Amber Medallion",
        "Cerulean Amber Medallion +1",
        "Cerulean Amber Medallion +2"
      ]
    },
    "Cerulean Amber Medallion +1": {
      "summary": "Greatly raises maximum FP",
      "weight": 0.3,
      "conflicts": [
        "Cerulean Amber Medallion",
        "Cerulean Amber Medallion +1",
        "Cerulean Amber Medallion +2"
      ]
    },
    "Cerulean Amber Medallion +2": {
      "summary": "Vastly raises maximum FP",
      "weight": 0.3,
      "conflicts": [
        "Cerulean Amber Medallion",
        "Cerulean Amber Medallion +1",
        "Cerulean Amber Medallion +2"
      ]
    },
    "Viridian Amber Medallion": {
      "summary": "Raises maximum stamina",
      "weight": 0.3,
      "conflicts": [
        "Viridian Amber Medallion",
        "Viridian Amber Medallion +1",
        "Viridian Amber Medallion +2"
      ]
    },
    "Viridian Amber Medallion +1": {
      "summary": "Greatly raises maximum stamina",
      "weight": 0.3,
      "conflicts": [
        "Viridian Amber Medallion",
        "Viridian Amber Medallion +1",
        "Viridian Amber Medallion +2"
      ]
    },
    "Viridian Amber Medallion +2": {
      "summary": "Vastly raises maximum stamina",
      "weight": 0.3,
      "conflicts": [
        "Viridian Amber Medallion",
        "Viridian Amber Medallion +1",
        "Viridian Amber Medallion +2"
      ]
    },
    "Arsenal Charm": {
      "summary": "Raises maximum equipment load",
      "weight": 1.5,
      "conflicts": [
        "Arsenal Charm",
        "Arsenal Charm +1",
        "Great-Jar's Arsenal"
      ]
    },
    "Arsenal Charm +1": {
      "summary": "Greatly raises maximum equip load",
      "weight": 1.5,
      "conflicts": [
        "Arsenal Charm",
        "Arsenal Charm +1",
        "Great-Jar's Arsenal"
      ]
    },
    "Great-Jar's Arsenal": {
      "summary": "Vastly raises maximum equip load",
      "weight": 1.5,
      "conflicts": [
        "Arsenal Charm",
        "Arsenal Charm +1",
        "Great-Jar's Arsenal"
      ]
    },
    "Erdtree's Favor": {
      "summary": "Raises maximum HP, stamina and equip load",
      "weight": 1.5,
      "conflicts": [
        "Erdtree's Favor",
        "Erdtree's Favor +1",
        "Erdtree's Favor +2"
      ]
    },
    "Erdtree's Favor +1": {
      "summary": "Raises maximum HP, stamina and equip load",
      "weight": 1.5,
      "conflicts": [
        "Erdtree's Favor",
        "Erdtree's Favor +1",
        "Erdtree's Favor +2"
      ]
    },
    "Erdtree's Favor +2": {
      "summary": "Raises maximum HP, stamina and equip load",
      "weight": 1.5,
      "conflicts": [
        "Erdtree's Favor",
        "Erdtree's Favor +1",
        "Erdtree's Favor +2"
      ]
    },
    "Radagon's Scarseal": {
      "summary": "Raises attributes, but also increases damage taken",
      "weight": 0.8,
      "conflicts": [
        "Radagon's Scarseal",
        "Radagon's Soreseal"
      ]
    },
    "Radagon's Soreseal": {
      "summary": "Greatly raises attributes, but also increases damage taken",
      "weight": 0.8,
      "conflicts": [
        "Radagon's Scarseal",
        "Radagon's Soreseal"
      ]
    },
    "Starscourge Heirloom": {
      "summary": "Raises strength",
      "weight": 0.8,
      "conflicts": [
        "Starscourge Heirloom"
      ]
    },
    "Prosthesis-Wearer Heirloom": {
      "summary": "Raises dexterity",
      "weight": 0.8,
      "conflicts": [
        "Prosthesis-Wearer Heirloom"
      ]
    },
    "Stargazer Heirloom": {
      "summary": "Raises intelligence",
      "weight": 0.6,
      "conflicts": [
        "Stargazer Heirloom"
      ]
    },
    "Two Fingers Heirloom": {
      "summary": "Raises faith",
      "weight": 0.6,
      "conflicts": [
        "Two Fingers Heirloom"
      ]
    },
    "Silver Scarab": {
      "summary": "Raises item discovery",
      "weight": 1.2,
      "conflicts": [
        "Silver Scarab"
      ]
    },
    "Gold Scarab": {
      "summary": "Increases runes obtained from defeated enemies",
      "weight": 1.2,
      "conflicts": [
        "Gold Scarab"
      ]
    },
    "Moon of Nokstella": {
      "summary": "Increases memory slots",
      "weight": 0.8,
      "conflicts": [
        "Moon of Nokstella"
      ]
    },
    "Green Turtle Talisman": {
      "summary": "Raises stamina recovery speed",
      "weight": 0.7,
      "conflicts": [
        "Green Turtle Talisman"
      ]
    },
    "Stalwart Horn Charm": {
      "summary": "Raises robustness",
      "weight": 0.6,
      "conflicts": [
        "Stalwart Horn Charm",
        "Stalwart Horn Charm +1"
      ]
    },
    "Stalwart Horn Charm +1": {
      "summary": "Greatly raises robustness",
      "weight": 0.6,
      "conflicts": [
        "Stalwart Horn Charm",
        "Stalwart Horn Charm +1"
      ]
    },
    "Immunizing Horn Charm": {
      "summary": "Raises immunity",
      "weight": 0.6,
      "conflicts": [
        "Immunizing Horn Charm",
        "Immunizing Horn Charm +1"
      ]
    },
    "Immunizing Horn Charm +1": {
      "summary": "Greatly raises immunity",
      "weight": 0.6,
      "conflicts": [
        "Immunizing Horn Charm",
        "Immunizing Horn Charm +1"
      ]
    },
    "Clarifying Horn Charm": {
      "summary": "Raises focus",
      "weight": 0.6,
      "conflicts": [
        "Clarifying Horn Charm",
        "Clarifying Horn Charm +1"
      ]
    },
    "Clarifying Horn Charm +1": {
      "summary": "Greatly raises focus",
      "weight": 0.6,
      "conflicts": [
        "Clarifying Horn Charm",
        "Clarifying Horn Charm +1"
      ]
    },
    "Prince of Death's Pustule": {
      "summary": "Raises vitality",
      "weight": 0.6,
      "conflicts": [
        "Prince of Death's Pustule",
        "Prince of Death's Cyst"
      ]
    },
    "Prince of Death's Cyst": {
      "summary": "Greatly raises vitality",
      "weight": 0.6,
      "conflicts": [
        "Prince of Death's Pustule",
        "Prince of Death's Cyst"
      ]
    },
    "Mottled Necklace": {
      "summary": "Raises robustness, immunity, and focus",
      "weight": 0.9,
      "conflicts": [
        "Mottled Necklace",
        "Mottled Necklace +1"
      ]
    },
    "Mottled Necklace +1": {
      "summary": "Greatly raises robustness, immunity, and focus",
      "weight": 0.9,
      "conflicts": [
        "Mottled Necklace",
        "Mottled Necklace +1"
      ]
    },
    "Bull-Goat's Talisman": {
      "summary": "Raises poise",
      "weight": 0.5,
      "conflicts": [
        "Bull-Goat's Talisman"
      ]
    },
    "Marika's Scarseal": {
      "summary": "Raises attributes, but also increases damage taken",
      "weight": 0.8,
      "conflicts": [
        "Marika's Scarseal",
        "Marika's Soreseal"
      ]
    },
    "Marika's Soreseal": {
      "summary": "Greatly raises attributes, but also increases damage taken",
      "weight": 0.8,
      "conflicts": [
        "Marika's Scarseal",
        "Marika's Soreseal"
      ]
    },
    "Warrior Jar Shard": {
      "summary": "Boosts the attack power of skills",
      "weight": 0.9,
      "conflicts": [
        "Warrior Jar Shard",
        "Shard of Alexander"
      ]
    },
    "Shard of Alexander": {
      "summary": "Greatly boosts the attack power of skills",
      "weight": 0.9,
      "conflicts": [
        "Warrior Jar Shard",
        "Shard of Alexander"
      ]
    },
    "Millicent's Prosthesis": {
      "summary": "Boosts dexterity, raises attack power with successive attacks",
      "weight": 1.6,
      "conflicts": [
        "Millicent's Prosthesis"
      ]
    },
    "Magic Scorpion Charm": {
      "summary": "Raises magic attack, but lowers damage negation",
      "weight": 0.8,
      "conflicts": [
        "Magic Scorpion Charm"
      ]
    },
    "Lightning Scorpion Charm": {
      "summary": "Raises lightning attack, but lowers damage negation",
      "weight": 0.8,
      "conflicts": [
        "Lightning Scorpion Charm"
      ]
    },
    "Fire Scorpion Charm": {
      "summary": "Raises fire attack, but lowers damage negation",
      "weight": 0.8,
      "conflicts": [
        "Fire Scorpion Charm"
      ]
    },
    "Sacred Scorpion Charm": {
      "summary": "Raises holy attack, but lowers damage negation",
      "weight": 0.8,
      "conflicts": [
        "Sacred Scorpion Charm"
      ]
    },
    "Red-Feathered Branchsword": {
      "summary": "Raises attack power when HP is low",
      "weight": 1.4,
      "conflicts": [
        "Red-Feathered Branchsword"
      ]
    },
    "Ritual Sword Talisman": {
      "summary": "Raises attack power when HP is at maximum",
      "weight": 0.9,
      "conflicts": [
        "Ritual Sword Talisman"
      ]
    },
    "Spear Talisman": {
      "summary": "Enhances counterattacks unique to thrusting weapons",
      "weight": 0.5,
      "conflicts": [
        "Spear Talisman"
      ]
    },
    "Hammer Talisman": {
      "summary": "Enhances stamina-reducing attacks against blockers",
      "weight": 0.9,
      "conflicts": [
        "Hammer Talisman"
      ]
    },
    "Winged Sword Insignia": {
      "summary": "Raises attack power with successive attacks",
      "weight": 1.4,
      "conflicts": [
        "Winged Sword Insignia",
        "Rotten Winged Sword Insignia"
      ]
    },
    "Rotten Winged Sword Insignia": {
      "summary": "Greatly raises attack power with successive attacks",
      "weight": 1.4,
      "conflicts": [
        "Winged Sword Insignia",
        "Rotten Winged Sword Insignia"
      ]
    },
    "Dagger Talisman": {
      "summary": "Enhances critical hits",
      "weight": 1.1,
      "conflicts": [
        "Dagger Talisman"
      ]
    },
    "Arrow's Reach Talisman": {
      "summary": "Increases bow effective range",
      "weight": 0.7,
      "conflicts": [
        "Arrow's Reach Talisman"
      ]
    },
    "Blue Dancer Charm": {
      "summary": "Raises attack power with lower equipment load",
      "weight": 0.9,
      "conflicts": [
        "Blue Dancer Charm"
      ]
    },
    "Twinblade Talisman": {
      "summary": "Enhances final hit of chain attacks",
      "weight": 0.7,
      "conflicts": [
        "Twinblade Talisman"
      ]
    },
    "Axe Talisman": {
      "summary": "Enhances charge attacks",
      "weight": 0.8,
      "conflicts": [
        "Axe Talisman"
      ]
    },
    "Lance Talisman": {
      "summary": "Enhances attacks on horseback",
      "weight": 0.7,
      "conflicts": [
        "Lance Talisman"
      ]
    },
    "Arrow's Sting Talisman": {
      "summary": "Raises attack power of arrows and bolts",
      "weight": 0.7,
      "conflicts": [
        "Arrow's Sting Talisman"
      ]
    },
    "Lord of Blood's Exultation": {
      "summary": "Blood loss in vicinity increases attack power",
      "weight": 0.9,
      "conflicts": [
        "Lord of Blood's Exultation"
      ]
    },
    "Kindred of Rot's Exultation": {
      "summary": "Poisoning or rot in vicinity increases attack power",
      "weight": 0.9,
      "conflicts": [
        "Kindred of Rot's Exultation"
      ]
    },
    "Claw Talisman": {
      "summary": "Enhances jump attacks",
      "weight": 0.7,
      "conflicts": [
        "Claw Talisman"
      ]
    },
    "Roar Medallion": {
      "summary": "Enhances roars and breath attacks",
      "weight": 0.7,
      "conflicts": [
        "Roar Medallion"
      ]
    },
    "Curved Sword Talisman": {
      "summary": "Enhances guard counters",
      "weight": 0.7,
      "conflicts": [
        "Curved Sword Talisman"
      ]
    },
    "Companion Jar": {
      "summary": "Raises potency of throwing pots",
      "weight": 0.6,
      "conflicts": [
        "Companion Jar"
      ]
    },
    "Perfumer's Talisman": {
      "summary": "Raises potency of perfume items",
      "weight": 0.6,
      "conflicts": [
        "Perfumer's Talisman"
      ]
    },
    "Graven-School Talisman": {
      "summary": "Raises potency of sorceries",
      "weight": 0.7,
      "conflicts": [
        "Graven-School Talisman"
      ]
    },
    "Graven-Mass Talisman": {
      "summary": "Greatly raises potency of sorceries",
      "weight": 1,
      "conflicts": [
        "Graven-Mass Talisman"
      ]
    },
    "Faithful's Canvas Talisman": {
      "summary": "Raises potency of incantations",
      "weight": 0.7,
      "conflicts": [
        "Faithful's Canvas Talisman"
      ]
    },
    "Flock's Canvas Talisman": {
      "summary": "Greatly raises potency of incantations",
      "weight": 1,
      "conflicts": [
        "Flock's Canvas Talisman"
      ]
    },
    "Old Lord's Talisman": {
      "summary": "Extends spell effect duration",
      "weight": 0.5,
      "conflicts": [
        "Old Lord's Talisman"
      ]
    },
    "Radagon Icon": {
      "summary": "Shortens spell casting time",
      "weight": 0.7,
      "conflicts": [
        "Radagon Icon"
      ]
    },
    "Primal Glintstone Blade": {
      "summary": "Spells consume less FP, but maximum HP is reduced",
      "weight": 0.6,
      "conflicts": [
        "Primal Glintstone Blade"
      ]
    },
    "Godfrey Icon": {
      "summary": "Enhances charged spells and skills",
      "weight": 0.8,
      "conflicts": [
        "Godfrey Icon"
      ]
    },
    "Dragoncrest Shield Talisman": {
      "summary": "Boosts physical damage negation",
      "weight": 0.8,
      "conflicts": [
        "Dragoncrest Shield Talisman",
        "Dragoncrest Shield Talisman +1",
        "Dragoncrest Shield Talisman +2",
        "Dragoncrest Greatshield Talisman"
      ]
    },
    "Dragoncrest Shield Talisman +1": {
      "summary": "Greatly boosts physical damage negation",
      "weight": 0.8,
      "conflicts": [
        "Dragoncrest Shield Talisman",
        "Dragoncrest Shield Talisman +1",
        "Dragoncrest Shield Talisman +2",
        "Dragoncrest Greatshield Talisman"
      ]
    },
    "Dragoncrest Shield Talisman +2": {
      "summary": "Vastly boosts physical damage negation",
      "weight": 0.8,
      "conflicts": [
        "Dragoncrest Shield Talisman",
        "Dragoncrest Shield Talisman +1",
        "Dragoncrest Shield Talisman +2",
        "Dragoncrest Greatshield Talisman"
      ]
    },
    "Dragoncrest Greatshield Talisman": {
      "summary": "Enormously boosts physical damage negation",
      "weight": 0.8,
      "conflicts": [
        "Dragoncrest Shield Talisman",
        "Dragoncrest Shield Talisman +1",
        "Dragoncrest Shield Talisman +2",
        "Dragoncrest Greatshield Talisman"
      ]
    },
    "Spelldrake Talisman": {
      "summary": "Boosts magical damage negation",
      "weight": 0.6,
      "conflicts": [
        "Spelldrake Talisman",
        "Spelldrake Talisman +1",
        "Spelldrake Talisman +2"
      ]
    },
    "Spelldrake Talisman +1": {
      "summary": "Greatly boosts magical damage negation",
      "weight": 0.6,
      "conflicts": [
        "Spelldrake Talisman",
        "Spelldrake Talisman +1",
        "Spelldrake Talisman +2"
      ]
    },
    "Spelldrake Talisman +2": {
      "summary": "Vastly boosts magical damage negation",
      "weight": 0.6,
      "conflicts": [
        "Spelldrake Talisman",
        "Spelldrake Talisman +1",
        "Spelldrake Talisman +2"
      ]
    },
    "Flamedrake Talisman": {
      "summary": "Boosts fire damage negation",
      "weight": 0.6,
      "conflicts": [
        "Flamedrake Talisman",
        "Flamedrake Talisman +1",
        "Flamedrake Talisman +2"
      ]
    },
    "Flamedrake Talisman +1": {
      "summary": "Greatly boosts fire damage negation",
      "weight": 0.6,
      "conflicts": [
        "Flamedrake Talisman",
        "Flamedrake Talisman +1",
        "Flamedrake Talisman +2"
      ]
    },
    "Flamedrake Talisman +2": {
      "summary": "Vastly boosts fire damage negation",
      "weight": 0.6,
      "conflicts": [
        "Flamedrake Talisman",
        "Flamedrake Talisman +1",
        "Flamedrake Talisman +2"
      ]
    },
    "Boltdrake Talisman": {
      "summary": "Boosts lightning damage negation",
      "weight": 0.6,
      "conflicts": [
        "Boltdrake Talisman",
        "Boltdrake Talisman +1",
        "Boltdrake Talisman +2"
      ]
    },
    "Boltdrake Talisman +1": {
      "summary": "Greatly boosts lightning damage negation",
      "weight": 0.6,
      "conflicts": [
        "Boltdrake Talisman",
        "Boltdrake Talisman +1",
        "Boltdrake Talisman +2"
      ]
    },
    "Boltdrake Talisman +2": {
      "summary": "Vastly boosts lightning damage negation",
      "weight": 0.6,
      "conflicts": [
        "Boltdrake Talisman",
        "Boltdrake Talisman +1",
        "Boltdrake Talisman +2"
      ]
    },
    "Haligdrake Talisman": {
      "summary": "Boosts holy damage negation",
      "weight": 0.6,
      "conflicts": [
        "Haligdrake Talisman",
        "Haligdrake Talisman +1",
        "Haligdrake Talisman +2"
      ]
    },
    "Haligdrake Talisman +1": {
      "summary": "Greatly boosts holy damage negation",
      "weight": 0.6,
      "conflicts": [
        "Haligdrake Talisman",
        "Haligdrake Talisman +1",
        "Haligdrake Talisman +2"
      ]
    },
    "Haligdrake Talisman +2": {
      "summary": "Vastly boosts holy damage negation",
      "weight": 0.6,
      "conflicts": [
        "Haligdrake Talisman",
        "Haligdrake Talisman +1",
        "Haligdrake Talisman +2"
      ]
    },
    "Pearldrake Talisman": {
      "summary": "Boosts non-physical damage negation",
      "weight": 0.9,
      "conflicts": [
        "Pearldrake Talisman",
        "Pearldrake Talisman +1",
        "Pearldrake Talisman +2"
      ]
    },
    "Pearldrake Talisman +1": {
      "summary": "Greatly boosts non-physical damage negation",
      "weight": 0.9,
      "conflicts": [
        "Pearldrake Talisman",
        "Pearldrake Talisman +1",
        "Pearldrake Talisman +2"
      ]
    },
    "Pearldrake Talisman +2": {
      "summary": "Vastly boosts non-physical damage negation",
      "weight": 0.9,
      "conflicts": [
        "Pearldrake Talisman",
        "Pearldrake Talisman +1",
        "Pearldrake Talisman +2"
      ]
    },
    "Crucible Scale Talisman": {
      "summary": "Reduces damage taken from critical hits",
      "weight": 1.1,
      "conflicts": [
        "Crucible Scale Talisman"
      ]
    },
    "Crucible Feather Talisman": {
      "summary": "Improves dodge rolling but increases damage taken",
      "weight": 0.8,
      "conflicts": [
        "Crucible Feather Talisman"
      ]
    },
    "Blue-Feathered Branchsword": {
      "summary": "Raises defense when HP is low",
      "weight": 1.1,
      "conflicts": [
        "Blue-Feathered Branchsword"
      ]
    },
    "Ritual Shield Talisman": {
      "summary": "Raises defense when HP is at maximum",
      "weight": 0.9,
      "conflicts": [
        "Ritual Shield Talisman"
      ]
    },
    "Greatshield Talisman": {
      "summary": "Boosts guarding ability",
      "weight": 0.9,
      "conflicts": [
        "Greatshield Talisman"
      ]
    },
    "Crucible Knot Talisman": {
      "summary": "Reduces damage and impact of headshots",
      "weight": 0.5,
      "conflicts": [
        "Crucible Knot Talisman"
      ]
    },
    "Crimson Seed Talisman": {
      "summary": "Boosts HP restoration from Flask of Crimson Tears",
      "weight": 0.8,
      "conflicts": [
        "Crimson Seed Talisman"
      ]
    },
    "Cerulean Seed Talisman": {
      "summary": "Boosts FP restoration from Flask of Cerulean Tears",
      "weight": 0.8,
      "conflicts": [
        "Cerulean Seed Talisman"
      ]
    },
    "Blessed Dew Talisman": {
      "summary": "Slowly restores HP",
      "weight": 0.6,
      "conflicts": [
        "Blessed Dew Talisman"
      ]
    },
    "Taker's Cameo": {
      "summary": "Restores HP upon defeating enemies",
      "weight": 1,
      "conflicts": [
        "Taker's Cameo"
      ]
    },
    "Godskin Swaddling Cloth": {
      "summary": "Successive attacks restore HP",
      "weight": 0.9,
      "conflicts": [
        "Godskin Swaddling Cloth"
      ]
    },
    "Assassin's Crimson Dagger": {
      "summary": "Critical hits restore HP",
      "weight": 0.8,
      "conflicts": [
        "Assassin's Crimson Dagger"
      ]
    },
    "Assassin's Cerulean Dagger": {
      "summary": "Critical hits restore FP",
      "weight": 0.8,
      "conflicts": [
        "Assassin's Cerulean Dagger"
      ]
    },
    "Crepus's Vial": {
      "summary": "Eliminates all sound made by the wearer during movement",
      "weight": 0.7,
      "conflicts": [
        "Crepus's Vial"
      ]
    },
    "Concealing Veil": {
      "summary": "Conceals wearer while crouching away from foes",
      "weight": 0.9,
      "conflicts": [
        "Concealing Veil"
      ]
    },
    "Carian Filigreed Crest": {
      "summary": "Lowers FP consumed by skills",
      "weight": 0.8,
      "conflicts": [
        "Carian Filigreed Crest"
      ]
    },
    "Longtail Cat Talisman": {
      "summary": "Grants immunity to fall damage, but does not prevent death from a high fall",
      "weight": 0.6,
      "conflicts": [
        "Longtail Cat Talisman"
      ]
    },
    "Shabriri's Woe": {
      "summary": "Constantly attracts enemies' aggression",
      "weight": 0.6,
      "conflicts": [
        "Shabriri's Woe"
      ]
    },
    "Daedicar's Woe": {
      "summary": "Increases damage taken",
      "weight": 0.8,
      "conflicts": [
        "Daedicar's Woe"
      ]
    },
    "Sacrificial Twig": {
      "summary": "Will be lost on death in place of runes",
      "weight": 1,
      "conflicts": [
        "Sacrificial Twig"
      ]
    },
    "Furled Finger's Trick-Mirror": {
      "summary": "Take on appearance of a Host of Fingers",
      "weight": 0.7,
      "conflicts": [
        "Furled Finger's Trick-Mirror",
        "Host's Trick-Mirror"
      ]
    },
    "Host's Trick-Mirror": {
      "summary": "Take on appearance of a cooperator",
      "weight": 0.7,
      "conflicts": [
        "Furled Finger's Trick-Mirror",
        "Host's Trick-Mirror"
      ]
    },
    "Entwining Umbilical Cord": {
      "summary": "Changes demeanour of wearer's actions",
      "weight": 0.5,
      "conflicts": [
        "Entwining Umbilical Cord"
      ]
    },
    "Ancestral Spirit's Horn": {
      "summary": "Restores FP upon defeating enemies",
      "weight": 1.2,
      "conflicts": [
        "Ancestral Spirit's Horn"
      ]
    }
  };