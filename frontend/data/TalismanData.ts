/* 
data source:
1. ER - Build Planner spreadsheet
2. table: EquipParamAccessory
3. get csv of table
4. swap ID and Name column so Name is first
5. use https://csvjson.com/csv2json options: Parse numbers, Parse JSON, output: Hash
6. use https://jsoneditoronline.org/ to format
function query(data) {
    let keysToKeep = ["weight", "accessoryGroup"];  // Add any other keys you want to keep

    let newObj = {};

    Object.keys(data).forEach(key => {
        newObj[key] = {};  // Initialize an empty object for each key in the main object
        Object.keys(data[key]).forEach(innerKey => {
            if (keysToKeep.includes(innerKey)) {
                newObj[key][innerKey] = data[key][innerKey];
            }
        });
    });

    return newObj
}
*/

type DataType = {
    //"ID": number,
    //"refId": number,
    "weight": number, // used
    //"sortId": number,
    "accessoryGroup": number, // used
    //"residentSpEffectId1": number,
    //"residentSpEffectId2": number,
    //"residentSpEffectId3": number,
    //"residentSpEffectId4": number
}

type TalismansDataType = {
    [key: string]: DataType
}

export const TalismansData: TalismansDataType = {
    "Crimson Amber Medallion": {
        "weight": 0.3,
        "accessoryGroup": 1000
    },
    "Crimson Amber Medallion +1": {
        "weight": 0.3,
        "accessoryGroup": 1000
    },
    "Crimson Amber Medallion +2": {
        "weight": 0.3,
        "accessoryGroup": 1000
    },
    "Cerulean Amber Medallion": {
        "weight": 0.3,
        "accessoryGroup": 1010
    },
    "Cerulean Amber Medallion +1": {
        "weight": 0.3,
        "accessoryGroup": 1010
    },
    "Cerulean Amber Medallion +2": {
        "weight": 0.3,
        "accessoryGroup": 1010
    },
    "Viridian Amber Medallion": {
        "weight": 0.3,
        "accessoryGroup": 1020
    },
    "Viridian Amber Medallion +1": {
        "weight": 0.3,
        "accessoryGroup": 1020
    },
    "Viridian Amber Medallion +2": {
        "weight": 0.3,
        "accessoryGroup": 1020
    },
    "Arsenal Charm": {
        "weight": 1.5,
        "accessoryGroup": 1030
    },
    "Arsenal Charm +1": {
        "weight": 1.5,
        "accessoryGroup": 1030
    },
    "Great-Jar's Arsenal": {
        "weight": 1.5,
        "accessoryGroup": 1030
    },
    "Erdtree's Favor": {
        "weight": 1.5,
        "accessoryGroup": 1040
    },
    "Erdtree's Favor +1": {
        "weight": 1.5,
        "accessoryGroup": 1040
    },
    "Erdtree's Favor +2": {
        "weight": 1.5,
        "accessoryGroup": 1040
    },
    "Radagon's Scarseal": {
        "weight": 0.8,
        "accessoryGroup": 1050
    },
    "Radagon's Soreseal": {
        "weight": 0.8,
        "accessoryGroup": 1050
    },
    "Starscourge Heirloom": {
        "weight": 0.8,
        "accessoryGroup": 1060
    },
    "Prosthesis-Wearer Heirloom": {
        "weight": 0.8,
        "accessoryGroup": 1070
    },
    "Stargazer Heirloom": {
        "weight": 0.6,
        "accessoryGroup": 1080
    },
    "Two Fingers Heirloom": {
        "weight": 0.6,
        "accessoryGroup": 1090
    },
    "Silver Scarab": {
        "weight": 1.2,
        "accessoryGroup": 1100
    },
    "Gold Scarab": {
        "weight": 1.2,
        "accessoryGroup": 1110
    },
    "Moon of Nokstella": {
        "weight": 0.8,
        "accessoryGroup": 1140
    },
    "Green Turtle Talisman": {
        "weight": 0.7,
        "accessoryGroup": 1150
    },
    "Stalwart Horn Charm": {
        "weight": 0.6,
        "accessoryGroup": 1160
    },
    "Stalwart Horn Charm +1": {
        "weight": 0.6,
        "accessoryGroup": 1160
    },
    "Immunizing Horn Charm": {
        "weight": 0.6,
        "accessoryGroup": 1170
    },
    "Immunizing Horn Charm +1": {
        "weight": 0.6,
        "accessoryGroup": 1170
    },
    "Clarifying Horn Charm": {
        "weight": 0.6,
        "accessoryGroup": 1180
    },
    "Clarifying Horn Charm +1": {
        "weight": 0.6,
        "accessoryGroup": 1180
    },
    "Prince of Death's Pustule": {
        "weight": 0.6,
        "accessoryGroup": 1190
    },
    "Prince of Death's Cyst": {
        "weight": 0.6,
        "accessoryGroup": 1190
    },
    "Mottled Necklace": {
        "weight": 0.9,
        "accessoryGroup": 1200
    },
    "Mottled Necklace +1": {
        "weight": 0.9,
        "accessoryGroup": 1200
    },
    "Bull-Goat's Talisman": {
        "weight": 0.5,
        "accessoryGroup": 1210
    },
    "Marika's Scarseal": {
        "weight": 0.8,
        "accessoryGroup": 1220
    },
    "Marika's Soreseal": {
        "weight": 0.8,
        "accessoryGroup": 1220
    },
    "Warrior Jar Shard": {
        "weight": 0.9,
        "accessoryGroup": 1230
    },
    "Shard of Alexander": {
        "weight": 0.9,
        "accessoryGroup": 1230
    },
    "Millicent's Prosthesis": {
        "weight": 1.6,
        "accessoryGroup": 1250
    },
    "Magic Scorpion Charm": {
        "weight": 0.8,
        "accessoryGroup": 2000
    },
    "Lightning Scorpion Charm": {
        "weight": 0.8,
        "accessoryGroup": 2010
    },
    "Fire Scorpion Charm": {
        "weight": 0.8,
        "accessoryGroup": 2020
    },
    "Sacred Scorpion Charm": {
        "weight": 0.8,
        "accessoryGroup": 2030
    },
    "Red-Feathered Branchsword": {
        "weight": 1.4,
        "accessoryGroup": 2040
    },
    "Ritual Sword Talisman": {
        "weight": 0.9,
        "accessoryGroup": 2050
    },
    "Spear Talisman": {
        "weight": 0.5,
        "accessoryGroup": 2060
    },
    "Hammer Talisman": {
        "weight": 0.9,
        "accessoryGroup": 2070
    },
    "Winged Sword Insignia": {
        "weight": 1.4,
        "accessoryGroup": 2080
    },
    "Rotten Winged Sword Insignia": {
        "weight": 1.4,
        "accessoryGroup": 2080
    },
    "Dagger Talisman": {
        "weight": 1.1,
        "accessoryGroup": 2090
    },
    "Arrow's Reach Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2100
    },
    "Blue Dancer Charm": {
        "weight": 0.9,
        "accessoryGroup": 2110
    },
    "Twinblade Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2120
    },
    "Axe Talisman": {
        "weight": 0.8,
        "accessoryGroup": 2130
    },
    "Lance Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2140
    },
    "Arrow's Sting Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2150
    },
    "Lord of Blood's Exultation": {
        "weight": 0.9,
        "accessoryGroup": 2160
    },
    "Kindred of Rot's Exultation": {
        "weight": 0.9,
        "accessoryGroup": 2170
    },
    "Claw Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2180
    },
    "Roar Medallion": {
        "weight": 0.7,
        "accessoryGroup": 2190
    },
    "Curved Sword Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2200
    },
    "Companion Jar": {
        "weight": 0.6,
        "accessoryGroup": 2210
    },
    "Perfumer's Talisman": {
        "weight": 0.6,
        "accessoryGroup": 2220
    },
    "Graven-School Talisman": {
        "weight": 0.7,
        "accessoryGroup": 3000
    },
    "Graven-Mass Talisman": {
        "weight": 1,
        "accessoryGroup": 3001
    },
    "Faithful's Canvas Talisman": {
        "weight": 0.7,
        "accessoryGroup": 3040
    },
    "Flock's Canvas Talisman": {
        "weight": 1,
        "accessoryGroup": 3050
    },
    "Old Lord's Talisman": {
        "weight": 0.5,
        "accessoryGroup": 3060
    },
    "Radagon Icon": {
        "weight": 0.7,
        "accessoryGroup": 3070
    },
    "Primal Glintstone Blade": {
        "weight": 0.6,
        "accessoryGroup": 3080
    },
    "Godfrey Icon": {
        "weight": 0.8,
        "accessoryGroup": 3090
    },
    "Dragoncrest Shield Talisman": {
        "weight": 0.8,
        "accessoryGroup": 4000
    },
    "Dragoncrest Shield Talisman +1": {
        "weight": 0.8,
        "accessoryGroup": 4000
    },
    "Dragoncrest Shield Talisman +2": {
        "weight": 0.8,
        "accessoryGroup": 4000
    },
    "Dragoncrest Greatshield Talisman": {
        "weight": 0.8,
        "accessoryGroup": 4000
    },
    "Spelldrake Talisman": {
        "weight": 0.6,
        "accessoryGroup": 4010
    },
    "Spelldrake Talisman +1": {
        "weight": 0.6,
        "accessoryGroup": 4010
    },
    "Spelldrake Talisman +2": {
        "weight": 0.6,
        "accessoryGroup": 4010
    },
    "Flamedrake Talisman": {
        "weight": 0.6,
        "accessoryGroup": 4020
    },
    "Flamedrake Talisman +1": {
        "weight": 0.6,
        "accessoryGroup": 4020
    },
    "Flamedrake Talisman +2": {
        "weight": 0.6,
        "accessoryGroup": 4020
    },
    "Boltdrake Talisman": {
        "weight": 0.6,
        "accessoryGroup": 4030
    },
    "Boltdrake Talisman +1": {
        "weight": 0.6,
        "accessoryGroup": 4030
    },
    "Boltdrake Talisman +2": {
        "weight": 0.6,
        "accessoryGroup": 4030
    },
    "Haligdrake Talisman": {
        "weight": 0.6,
        "accessoryGroup": 4040
    },
    "Haligdrake Talisman +1": {
        "weight": 0.6,
        "accessoryGroup": 4040
    },
    "Haligdrake Talisman +2": {
        "weight": 0.6,
        "accessoryGroup": 4040
    },
    "Pearldrake Talisman": {
        "weight": 0.9,
        "accessoryGroup": 4050
    },
    "Pearldrake Talisman +1": {
        "weight": 0.9,
        "accessoryGroup": 4050
    },
    "Pearldrake Talisman +2": {
        "weight": 0.9,
        "accessoryGroup": 4050
    },
    "Crucible Scale Talisman": {
        "weight": 1.1,
        "accessoryGroup": 4060
    },
    "Crucible Feather Talisman": {
        "weight": 0.8,
        "accessoryGroup": 4070
    },
    "Blue-Feathered Branchsword": {
        "weight": 1.1,
        "accessoryGroup": 4080
    },
    "Ritual Shield Talisman": {
        "weight": 0.9,
        "accessoryGroup": 4090
    },
    "Greatshield Talisman": {
        "weight": 0.9,
        "accessoryGroup": 4100
    },
    "Crucible Knot Talisman": {
        "weight": 0.5,
        "accessoryGroup": 4110
    },
    "Crimson Seed Talisman": {
        "weight": 0.8,
        "accessoryGroup": 5000
    },
    "Cerulean Seed Talisman": {
        "weight": 0.8,
        "accessoryGroup": 5010
    },
    "Blessed Dew Talisman": {
        "weight": 0.6,
        "accessoryGroup": 5020
    },
    "Taker's Cameo": {
        "weight": 1,
        "accessoryGroup": 5030
    },
    "Godskin Swaddling Cloth": {
        "weight": 0.9,
        "accessoryGroup": 5040
    },
    "Assassin's Crimson Dagger": {
        "weight": 0.8,
        "accessoryGroup": 5050
    },
    "Assassin's Cerulean Dagger": {
        "weight": 0.8,
        "accessoryGroup": 5060
    },
    "Crepus's Vial": {
        "weight": 0.7,
        "accessoryGroup": 6000
    },
    "Concealing Veil": {
        "weight": 0.9,
        "accessoryGroup": 6010
    },
    "Carian Filigreed Crest": {
        "weight": 0.8,
        "accessoryGroup": 6020
    },
    "Longtail Cat Talisman": {
        "weight": 0.6,
        "accessoryGroup": 6040
    },
    "Shabriri's Woe": {
        "weight": 0.6,
        "accessoryGroup": 6050
    },
    "Daedicar's Woe": {
        "weight": 0.8,
        "accessoryGroup": 6060
    },
    "Sacrificial Twig": {
        "weight": 1,
        "accessoryGroup": 6070
    },
    "Furled Finger's Trick-Mirror": {
        "weight": 0.7,
        "accessoryGroup": 6080
    },
    "Host's Trick-Mirror": {
        "weight": 0.7,
        "accessoryGroup": 6080
    },
    "Entwining Umbilical Cord": {
        "weight": 0.5,
        "accessoryGroup": 6100
    },
    "Ancestral Spirit's Horn": {
        "weight": 1.2,
        "accessoryGroup": 6110
    },
    "Crimson Amber Medallion +3": {
        "weight": 0.6,
        "accessoryGroup": 1000
    },
    "Cerulean Amber Medallion +3": {
        "weight": 0.6,
        "accessoryGroup": 1010
    },
    "Viridian Amber Medallion +3": {
        "weight": 0.6,
        "accessoryGroup": 1020
    },
    "Two-Headed Turtle Talisman": {
        "weight": 1,
        "accessoryGroup": 1150
    },
    "Stalwart Horn Charm +2": {
        "weight": 0.9,
        "accessoryGroup": 1160
    },
    "Immunizing Horn Charm +2": {
        "weight": 0.9,
        "accessoryGroup": 1170
    },
    "Clarifying Horn Charm +2": {
        "weight": 0.9,
        "accessoryGroup": 1180
    },
    "Mottled Necklace +2": {
        "weight": 1.2,
        "accessoryGroup": 1200
    },
    "Spelldrake Talisman +3": {
        "weight": 0.9,
        "accessoryGroup": 4010
    },
    "Flamedrake Talisman +3": {
        "weight": 0.9,
        "accessoryGroup": 4020
    },
    "Boltdrake Talisman +3": {
        "weight": 0.9,
        "accessoryGroup": 4030
    },
    "Golden Braid": {
        "weight": 0.9,
        "accessoryGroup": 4040
    },
    "Pearldrake Talisman +3": {
        "weight": 1.2,
        "accessoryGroup": 4050
    },
    "Crimson Seed Talisman +1": {
        "weight": 1.1,
        "accessoryGroup": 5000
    },
    "Cerulean Seed Talisman +1": {
        "weight": 1.1,
        "accessoryGroup": 5010
    },
    "Blessed Blue Dew Talisman": {
        "weight": 1.2,
        "accessoryGroup": 8000
    },
    "Fine Crucible Feather Talisman": {
        "weight": 0.6,
        "accessoryGroup": 8010
    },
    "Outer God Heirloom": {
        "weight": 0.6,
        "accessoryGroup": 8020
    },
    "Shattered Stone Talisman": {
        "weight": 0.8,
        "accessoryGroup": 8030
    },
    "Two-Handed Sword Talisman": {
        "weight": 1.2,
        "accessoryGroup": 8040
    },
    "Crusade Insignia": {
        "weight": 1.2,
        "accessoryGroup": 8050
    },
    "Aged One's Exultation": {
        "weight": 0.9,
        "accessoryGroup": 8060
    },
    "Arrow's Soaring Sting Talisman": {
        "weight": 1.1,
        "accessoryGroup": 2100
    },
    "Pearl Shield Talisman": {
        "weight": 0.9,
        "accessoryGroup": 8090
    },
    "Dried Bouquet": {
        "weight": 0.8,
        "accessoryGroup": 8100
    },
    "Smithing Talisman": {
        "weight": 1.3,
        "accessoryGroup": 8110
    },
    "Ailment Talisman": {
        "weight": 0.6,
        "accessoryGroup": 8120
    },
    "Retaliatory Crossed-Tree": {
        "weight": 0.8,
        "accessoryGroup": 8130
    },
    "Lacerating Crossed-Tree": {
        "weight": 0.8,
        "accessoryGroup": 8140
    },
    "Sharpshot Talisman": {
        "weight": 0.6,
        "accessoryGroup": 8150
    },
    "St. Trina's Smile": {
        "weight": 0.9,
        "accessoryGroup": 8160
    },
    "Talisman of the Dread": {
        "weight": 0.6,
        "accessoryGroup": 8170
    },
    "Enraged Divine Beast": {
        "weight": 0.7,
        "accessoryGroup": 8180
    },
    "Beloved Stardust": {
        "weight": 1.3,
        "accessoryGroup": 3070
    },
    "Talisman of Lord's Bestowal": {
        "weight": 3,
        "accessoryGroup": 8200
    },
    "Verdigris Discus": {
        "weight": 4.5,
        "accessoryGroup": 8210
    },
    "Rellana's Cameo": {
        "weight": 0.8,
        "accessoryGroup": 8220
    },
    "Blade of Mercy": {
        "weight": 1.3,
        "accessoryGroup": 8230
    },
    "Talisman of All Crucibles": {
        "weight": 1.9,
        "accessoryGroup": 4060
    }
}

export const TalismansOptions = Object.keys(TalismansData);