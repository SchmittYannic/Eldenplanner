/* 
data source:
1. ER - Build Planner spreadsheet
2. table: WeaponsData
3. only copy columns a - m
4. get csv of table
5. swap WeaponClass and Weapon column so Weapon is first
6. use https://csvjson.com/csv2json options: Parse numbers, Parse JSON, output: Hash
7. use https://jsoneditoronline.org/ to format
8. function for formatting the array keysToKeep kann angepasst werden: 
function query(data) {
    function convertStringsToBooleans(data) {

        if (typeof data !== 'object' || data === null) {
            return data;
        }


        if (Array.isArray(data)) {
            return data.map(item => convertStringsToBooleans(item));
        }


        const newObj = {};


        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key];

                // Recursively convert nested objects/arrays
                newObj[key] = convertStringsToBooleans(value);

                // Convert "TRUE" to true and "FALSE" to false
                if (newObj[key] === 'TRUE') {
                    newObj[key] = true;
                } else if (newObj[key] === 'FALSE') {
                    newObj[key] = false;
                }
            }
        }

        return newObj;
    }
    const convertedObj = convertStringsToBooleans(data);

    let keysToKeep = ["Weapon Class", "ID", "isInfuse", "isReinforce", "isUnique", "bothHandsAtkBonus", "specialStatusSpEffectId"];  // Add any other keys you want to keep

    let newObj = {};

    Object.keys(convertedObj).forEach(key => {
        newObj[key] = {};  // Initialize an empty object for each key in the main object
        Object.keys(convertedObj[key]).forEach(innerKey => {
            if (keysToKeep.includes(innerKey)) {
                newObj[key][innerKey] = convertedObj[key][innerKey];
            }
        });
    });

    return newObj
}
9. Integrate the data with the Default Ash of Wars into this one. The targetObject is the one created in 8 and the dataObject is the one from DefaultAowData file. Use this to integrate dataObject into targetObject:
for (let key in targetObject) {
    if (targetObject.hasOwnProperty(key)) {
        if (dataObject.hasOwnProperty(key)) {
            targetObject[key]["Default Ash of War"] = dataObject[key]["Default Ash of War"];
        } else {
            targetObject[key]["Default Ash of War"] = "";
        }
    }
}
10. Replace IDs with empty strings with NaN
11. The DLC weapons do not have their own entries in DefaultAowData and therefore have empty strings as values.
*/


type WeaponType = {
    "Weapon Class": string,  // used
    "ID": number,  // used
    "isInfuse": boolean,  // used
    "isReinforce": boolean,  // used
    "isUnique": boolean, // used
    "bothHandsAtkBonus": boolean, // used
    // "throwable": boolean,
    // "waAttackElementCorrectId": string,
    "specialStatusSpEffectId": number | string,  // used
    // "castingBonusType": string,
    // "castingBonusRate": number | string,
    // "defaultPhysType": string
    "Default Ash of War": string
}

type WeaponsDataType = {
    [key: string]: WeaponType
}

export const WeaponsData: WeaponsDataType = {
    "Dagger": {
        "Weapon Class": "Dagger",
        "ID": 1000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Parrying Dagger": {
        "Weapon Class": "Dagger",
        "ID": 1020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Miséricorde": {
        "Weapon Class": "Dagger",
        "ID": 1030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Great Knife": {
        "Weapon Class": "Dagger",
        "ID": 1090000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Bloodstained Dagger": {
        "Weapon Class": "Dagger",
        "ID": 1140000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Erdsteel Dagger": {
        "Weapon Class": "Dagger",
        "ID": 1150000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Fire Knight's Shortsword": {
        "Weapon Class": "Dagger",
        "ID": 1510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Wakizashi": {
        "Weapon Class": "Dagger",
        "ID": 1100000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Main-gauche": {
        "Weapon Class": "Dagger",
        "ID": 1500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Celebrant's Sickle": {
        "Weapon Class": "Dagger",
        "ID": 1060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Ivory Sickle": {
        "Weapon Class": "Dagger",
        "ID": 1130000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Crystal Knife": {
        "Weapon Class": "Dagger",
        "ID": 1050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Scorpion's Stinger": {
        "Weapon Class": "Dagger",
        "ID": 1080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Repeating Thrust"
    },
    "Cinquedea": {
        "Weapon Class": "Dagger",
        "ID": 1110000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Glintstone Kris": {
        "Weapon Class": "Dagger",
        "ID": 1070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Glintstone Dart"
    },
    "Reduvia": {
        "Weapon Class": "Dagger",
        "ID": 1040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Reduvia Blood Blade"
    },
    "Blade of Calling": {
        "Weapon Class": "Dagger",
        "ID": 1160000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Blade of Gold"
    },
    "Black Knife": {
        "Weapon Class": "Dagger",
        "ID": 1010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Blade of Death"
    },
    "Smithscript Dagger": {
        "Weapon Class": "Throwing Blade",
        "ID": 63500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Short Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Longsword": {
        "Weapon Class": "Straight Sword",
        "ID": 2000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Square Off"
    },
    "Broadsword": {
        "Weapon Class": "Straight Sword",
        "ID": 2020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Square Off"
    },
    "Weathered Straight Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Square Off"
    },
    "Lordsworn's Straight Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Square Off"
    },
    "Noble's Slender Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2230000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Square Off"
    },
    "Cane Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2210000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Square Off"
    },
    "Stone-Sheathed Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2540000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Warhawk's Talon": {
        "Weapon Class": "Straight Sword",
        "ID": 2240000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Lazuli Glintstone Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2250000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Glintstone Pebble"
    },
    "Carian Knight's Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2180000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Carian Grandeur"
    },
    "Crystal Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2150000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Rotten Crystal Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2260000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Miquellan Knight's Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2200000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Sacred Blade"
    },
    "Ornamental Straight Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Golden Tempering"
    },
    "Golden Epitaph": {
        "Weapon Class": "Straight Sword",
        "ID": 2070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Last Rites"
    },
    "Sword of St. Trina": {
        "Weapon Class": "Straight Sword",
        "ID": 2190000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Mists of Slumber"
    },
    "Velvet Sword of St. Trina": {
        "Weapon Class": "Straight Sword",
        "ID": 2510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Regalia of Eochaid": {
        "Weapon Class": "Straight Sword",
        "ID": 2220000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Eochaid's Dancing Blade"
    },
    "Coded Sword": {
        "Weapon Class": "Straight Sword",
        "ID": 2110000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Unblockable Blade"
    },
    "Sword of Night and Flame": {
        "Weapon Class": "Straight Sword",
        "ID": 2140000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Night-and-Flame Stance"
    },
    "Sword of Light": {
        "Weapon Class": "Straight Sword",
        "ID": 2550000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Sword of Darkness": {
        "Weapon Class": "Straight Sword",
        "ID": 2560000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Milady": {
        "Weapon Class": "Light Greatsword",
        "ID": 67500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Leda's Sword": {
        "Weapon Class": "Light Greatsword",
        "ID": 67510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Rellana's Twin Blades": {
        "Weapon Class": "Light Greatsword",
        "ID": 67520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Bastard Sword": {
        "Weapon Class": "Greatsword",
        "ID": 3000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Claymore": {
        "Weapon Class": "Greatsword",
        "ID": 3180000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Lion's Claw"
    },
    "Iron Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Lordsworn's Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Knight's Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Banished Knight's Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Forked Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Lizard Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3520000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Flamberge": {
        "Weapon Class": "Greatsword",
        "ID": 3050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Gargoyle's Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3190000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Vacuum Slice"
    },
    "Gargoyle's Blackblade": {
        "Weapon Class": "Greatsword",
        "ID": 3210000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Corpse Wax Cutter"
    },
    "Inseparable Sword": {
        "Weapon Class": "Greatsword",
        "ID": 2090000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Sacred Blade"
    },
    "Sword of Milos": {
        "Weapon Class": "Greatsword",
        "ID": 3160000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shriek of Milos"
    },
    "Marais Executioner's Sword": {
        "Weapon Class": "Greatsword",
        "ID": 3150000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Eochaid's Dancing Blade"
    },
    "Greatsword of Solitude": {
        "Weapon Class": "Greatsword",
        "ID": 3550000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Ordovis's Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Ordovis's Vortex"
    },
    "Alabaster Lord's Sword": {
        "Weapon Class": "Greatsword",
        "ID": 3070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Alabaster Lords' Pull"
    },
    "Death's Poker": {
        "Weapon Class": "Greatsword",
        "ID": 3200000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Ghostflame Ignition"
    },
    "Helphen's Steeple": {
        "Weapon Class": "Greatsword",
        "ID": 3130000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Ruinous Ghostflame"
    },
    "Blasphemous Blade": {
        "Weapon Class": "Greatsword",
        "ID": 3140000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Taker's Flames"
    },
    "Golden Order Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3170000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Establish Order"
    },
    "Dark Moon Greatsword": {
        "Weapon Class": "Greatsword",
        "ID": 3090000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Moonlight Greatsword"
    },
    "Greatsword of Damnation": {
        "Weapon Class": "Greatsword",
        "ID": 3510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Sacred Relic Sword": {
        "Weapon Class": "Greatsword",
        "ID": 3100000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wave of Gold"
    },
    "Zweihander": {
        "Weapon Class": "Colossal Sword",
        "ID": 4040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Watchdog's Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Stamp (Upward Cut)"
    },
    "Fire Knight's Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4520000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Troll's Golden Sword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Troll's Roar"
    },
    "Troll Knight's Sword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4110000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Troll's Roar"
    },
    "Moonrithyll's Knight Sword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4540000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Royal Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wolf's Assault"
    },
    "Grafted Blade Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4100000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Oath of Vengeance"
    },
    "Ruins Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wave of Destruction"
    },
    "Ancient Meteoric Ore Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Starscourge Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Starcaller Cry"
    },
    "Greatsword of Radahn (Lord)": {
        "Weapon Class": "Colossal Sword",
        "ID": 4530000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Greatsword of Radahn (Light)": {
        "Weapon Class": "Colossal Sword",
        "ID": 4550000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Godslayer's Greatsword": {
        "Weapon Class": "Colossal Sword",
        "ID": 4070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "The Queen's Black Flame"
    },
    "Maliketh's Black Blade": {
        "Weapon Class": "Colossal Sword",
        "ID": 4020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Destined Death"
    },
    "Rapier": {
        "Weapon Class": "Thrusting Sword",
        "ID": 5020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Estoc": {
        "Weapon Class": "Thrusting Sword",
        "ID": 5000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Noble's Estoc": {
        "Weapon Class": "Thrusting Sword",
        "ID": 5060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Cleanrot Knight's Sword": {
        "Weapon Class": "Thrusting Sword",
        "ID": 5010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Rogier's Rapier": {
        "Weapon Class": "Thrusting Sword",
        "ID": 5030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Repeating Thrust"
    },
    "Antspur Rapier": {
        "Weapon Class": "Thrusting Sword",
        "ID": 5040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Frozen Needle": {
        "Weapon Class": "Thrusting Sword",
        "ID": 5050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Carian Sorcery Sword": {
        "Weapon Class": "Thrusting Sword",
        "ID": 2530000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Great Épée": {
        "Weapon Class": "Heavy Thrusting Sword",
        "ID": 6020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Godskin Stitcher": {
        "Weapon Class": "Heavy Thrusting Sword",
        "ID": 6010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Queelign's Greatsword": {
        "Weapon Class": "Heavy Thrusting Sword",
        "ID": 6500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Bloody Helice": {
        "Weapon Class": "Heavy Thrusting Sword",
        "ID": 6000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Dynast's Finesse"
    },
    "Dragon King's Cragblade": {
        "Weapon Class": "Heavy Thrusting Sword",
        "ID": 6040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Thundercloud Form"
    },
    "Sword Lance": {
        "Weapon Class": "Heavy Thrusting Sword",
        "ID": 3500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Scimitar": {
        "Weapon Class": "Curved Sword",
        "ID": 7140000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Falchion": {
        "Weapon Class": "Curved Sword",
        "ID": 7000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Shamshir": {
        "Weapon Class": "Curved Sword",
        "ID": 7030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Grossmesser": {
        "Weapon Class": "Curved Sword",
        "ID": 7150000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Bandit's Curved Sword": {
        "Weapon Class": "Curved Sword",
        "ID": 7040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Shotel": {
        "Weapon Class": "Curved Sword",
        "ID": 7020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Scavenger's Curved Sword": {
        "Weapon Class": "Curved Sword",
        "ID": 7080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Mantis Blade": {
        "Weapon Class": "Curved Sword",
        "ID": 7120000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Beastman's Curved Sword": {
        "Weapon Class": "Curved Sword",
        "ID": 7010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Flowing Curved Sword": {
        "Weapon Class": "Curved Sword",
        "ID": 7060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Serpent-God's Curved Sword": {
        "Weapon Class": "Curved Sword",
        "ID": 7110000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Magma Blade": {
        "Weapon Class": "Curved Sword",
        "ID": 7050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Magma Shower"
    },
    "Spirit Sword": {
        "Weapon Class": "Curved Sword",
        "ID": 7500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Nox Flowing Sword": {
        "Weapon Class": "Curved Sword",
        "ID": 2080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Flowing Form"
    },
    "Wing of Astel": {
        "Weapon Class": "Curved Sword",
        "ID": 7070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Nebula"
    },
    "Falx": {
        "Weapon Class": "Curved Sword",
        "ID": 7510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Dancing Blade of Ranah": {
        "Weapon Class": "Curved Sword",
        "ID": 7520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Horned Warrior's Sword": {
        "Weapon Class": "Curved Sword",
        "ID": 7530000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Eclipse Shotel": {
        "Weapon Class": "Curved Sword",
        "ID": 7100000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Death Flare"
    },
    "Dismounter": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Omen Cleaver": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Monk's Flameblade": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8070000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Beastman's Cleaver": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Freyja's Greatsword": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Bloodhound's Fang": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Bloodhound's Finesse"
    },
    "Onyx Lord's Greatsword": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Onyx Lords' Repulsion"
    },
    "Zamor Curved Sword": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Zamor Ice Storm"
    },
    "Magma Wyrm's Scalesword": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Magma Guillotine"
    },
    "Horned Warrior's Greatsword": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Morgott's Cursed Sword": {
        "Weapon Class": "Curved Greatsword",
        "ID": 8100000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Cursed-Blood Slice"
    },
    "Backhand Blade": {
        "Weapon Class": "Backhand Blade",
        "ID": 64500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Smithscript Cirque": {
        "Weapon Class": "Backhand Blade",
        "ID": 64510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Curseblade's Cirque": {
        "Weapon Class": "Backhand Blade",
        "ID": 64520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Uchigatana": {
        "Weapon Class": "Katana",
        "ID": 9000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Unsheathe"
    },
    "Nagakiba": {
        "Weapon Class": "Katana",
        "ID": 9010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Unsheathe"
    },
    "Serpentbone Blade": {
        "Weapon Class": "Katana",
        "ID": 9080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Double Slash"
    },
    "Meteoric Ore Blade": {
        "Weapon Class": "Katana",
        "ID": 9030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Gravitas"
    },
    "Moonveil": {
        "Weapon Class": "Katana",
        "ID": 9060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Transient Moonlight"
    },
    "Sword of Night": {
        "Weapon Class": "Katana",
        "ID": 9500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Rivers of Blood": {
        "Weapon Class": "Katana",
        "ID": 9040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Corpse Piler"
    },
    "Dragonscale Blade": {
        "Weapon Class": "Katana",
        "ID": 9070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Ice Lightning Sword"
    },
    "Star-Lined Sword": {
        "Weapon Class": "Katana",
        "ID": 2520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Hand of Malenia": {
        "Weapon Class": "Katana",
        "ID": 9020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Waterfowl Dance"
    },
    "Great Katana": {
        "Weapon Class": "Great Katana",
        "ID": 66500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Dragon-Hunter's Great Katana": {
        "Weapon Class": "Great Katana",
        "ID": 66510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Rakshasa's Great Katana": {
        "Weapon Class": "Great Katana",
        "ID": 66520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Twinblade": {
        "Weapon Class": "Twinblade",
        "ID": 10000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Twinned Knight Swords": {
        "Weapon Class": "Twinblade",
        "ID": 10030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Black Steel Twinblade": {
        "Weapon Class": "Twinblade",
        "ID": 10510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Godskin Peeler": {
        "Weapon Class": "Twinblade",
        "ID": 10010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Black Flame Tornado"
    },
    "Gargoyle's Twinblade": {
        "Weapon Class": "Twinblade",
        "ID": 10080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Gargoyle's Black Blades": {
        "Weapon Class": "Twinblade",
        "ID": 10090000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Eleonora's Poleblade": {
        "Weapon Class": "Twinblade",
        "ID": 10050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Bloodblade Dance"
    },
    "Euporia": {
        "Weapon Class": "Twinblade",
        "ID": 10500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Hand Axe": {
        "Weapon Class": "Axe",
        "ID": 14020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Forked Hatchet": {
        "Weapon Class": "Axe",
        "ID": 14010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Forked-Tongue Hatchet": {
        "Weapon Class": "Axe",
        "ID": 14540000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Battle Axe": {
        "Weapon Class": "Axe",
        "ID": 14000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wild Strikes"
    },
    "Messmer Soldier's Axe": {
        "Weapon Class": "Axe",
        "ID": 14520000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Warped Axe": {
        "Weapon Class": "Axe",
        "ID": 15010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "War Cry"
    },
    "Jawbone Axe": {
        "Weapon Class": "Axe",
        "ID": 14030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wild Strikes"
    },
    "Iron Cleaver": {
        "Weapon Class": "Axe",
        "ID": 14040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wild Strikes"
    },
    "Highland Axe": {
        "Weapon Class": "Axe",
        "ID": 14100000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "War Cry"
    },
    "Smithscript Axe": {
        "Weapon Class": "Axe",
        "ID": 14500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Celebrant's Cleaver": {
        "Weapon Class": "Axe",
        "ID": 14060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wild Strikes"
    },
    "Sacrificial Axe": {
        "Weapon Class": "Axe",
        "ID": 14110000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wild Strikes"
    },
    "Icerind Hatchet": {
        "Weapon Class": "Axe",
        "ID": 14080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Hoarfrost Stomp"
    },
    "Ripple Blade": {
        "Weapon Class": "Axe",
        "ID": 14050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wild Strikes"
    },
    "Stormhawk Axe": {
        "Weapon Class": "Axe",
        "ID": 14140000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Thunderstorm"
    },
    "Rosus' Axe": {
        "Weapon Class": "Axe",
        "ID": 14120000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Rosus's Summons"
    },
    "Death Knight's Twin Axes": {
        "Weapon Class": "Axe",
        "ID": 14510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Greataxe": {
        "Weapon Class": "Greataxe",
        "ID": 15000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Crescent Moon Axe": {
        "Weapon Class": "Greataxe",
        "ID": 15030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "War Cry"
    },
    "Longhaft Axe": {
        "Weapon Class": "Greataxe",
        "ID": 15050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "War Cry"
    },
    "Executioner's Greataxe": {
        "Weapon Class": "Greataxe",
        "ID": 15080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "War Cry"
    },
    "Great Omenkiller Cleaver": {
        "Weapon Class": "Greataxe",
        "ID": 15020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Wild Strikes"
    },
    "Rusted Anchor": {
        "Weapon Class": "Greataxe",
        "ID": 15060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Butchering Knife": {
        "Weapon Class": "Greataxe",
        "ID": 15120000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Bonny Butchering Knife": {
        "Weapon Class": "Greataxe",
        "ID": 15510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Gargoyle's Great Axe": {
        "Weapon Class": "Greataxe",
        "ID": 15130000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "War Cry"
    },
    "Gargoyle's Black Axe": {
        "Weapon Class": "Greataxe",
        "ID": 15140000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "War Cry"
    },
    "Death Knight's Longhaft Axe": {
        "Weapon Class": "Greataxe",
        "ID": 15500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Winged Greathorn": {
        "Weapon Class": "Greataxe",
        "ID": 15110000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Soul Stifler"
    },
    "Axe of Godrick": {
        "Weapon Class": "Greataxe",
        "ID": 15040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "I Command Thee"
    },
    "Putrescence Cleaver": {
        "Weapon Class": "Greataxe",
        "ID": 8500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Club": {
        "Weapon Class": "Hammer",
        "ID": 11010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Curved Club": {
        "Weapon Class": "Hammer",
        "ID": 11030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Spiked Club": {
        "Weapon Class": "Hammer",
        "ID": 11070000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Stone Club": {
        "Weapon Class": "Hammer",
        "ID": 11140000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Mace": {
        "Weapon Class": "Hammer",
        "ID": 11000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Morning Star": {
        "Weapon Class": "Hammer",
        "ID": 11050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Warpick": {
        "Weapon Class": "Hammer",
        "ID": 11040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Hammer": {
        "Weapon Class": "Hammer",
        "ID": 11080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Monk's Flamemace": {
        "Weapon Class": "Hammer",
        "ID": 11090000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Varré's Bouquet": {
        "Weapon Class": "Hammer",
        "ID": 11060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Envoy's Horn": {
        "Weapon Class": "Hammer",
        "ID": 11100000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Oracular Bubble"
    },
    "Nox Flowing Hammer": {
        "Weapon Class": "Hammer",
        "ID": 11120000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Flowing Form"
    },
    "Ringed Finger": {
        "Weapon Class": "Hammer",
        "ID": 11130000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Claw Flick"
    },
    "Scepter of the All-Knowing": {
        "Weapon Class": "Hammer",
        "ID": 11110000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Knowledge Above All"
    },
    "Flowerstone Gavel": {
        "Weapon Class": "Hammer",
        "ID": 11500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Marika's Hammer": {
        "Weapon Class": "Hammer",
        "ID": 11150000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Gold Breaker"
    },
    "Flail": {
        "Weapon Class": "Flail",
        "ID": 13010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Chain"
    },
    "Nightrider Flail": {
        "Weapon Class": "Flail",
        "ID": 13000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Chain"
    },
    "Chainlink Flail": {
        "Weapon Class": "Flail",
        "ID": 13040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Chain"
    },
    "Family Heads": {
        "Weapon Class": "Flail",
        "ID": 13020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Familal Rancor"
    },
    "Serpent Flail": {
        "Weapon Class": "Flail",
        "ID": 13500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Bastard's Stars": {
        "Weapon Class": "Flail",
        "ID": 13030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Nebula"
    },
    "Large Club": {
        "Weapon Class": "Great Hammer",
        "ID": 12000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Curved Great Club": {
        "Weapon Class": "Great Hammer",
        "ID": 12080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Great Mace": {
        "Weapon Class": "Great Hammer",
        "ID": 12060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Pickaxe": {
        "Weapon Class": "Great Hammer",
        "ID": 12140000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Brick Hammer": {
        "Weapon Class": "Great Hammer",
        "ID": 12190000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Battle Hammer": {
        "Weapon Class": "Great Hammer",
        "ID": 12020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Braggart's Roar"
    },
    "Rotten Battle Hammer": {
        "Weapon Class": "Great Hammer",
        "ID": 12210000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Braggart's Roar"
    },
    "Celebrant's Skull": {
        "Weapon Class": "Great Hammer",
        "ID": 12130000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Great Stars": {
        "Weapon Class": "Great Hammer",
        "ID": 12180000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Black Steel Greathammer": {
        "Weapon Class": "Great Hammer",
        "ID": 12520000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Smithscript Greathammer": {
        "Weapon Class": "Great Hammer",
        "ID": 12500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Greathorn Hammer": {
        "Weapon Class": "Great Hammer",
        "ID": 12010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Envoy's Long Horn": {
        "Weapon Class": "Great Hammer",
        "ID": 12160000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Bubble Shower"
    },
    "Cranial Vessel Candlestand": {
        "Weapon Class": "Great Hammer",
        "ID": 12170000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Surge of Faith"
    },
    "Beastclaw Greathammer": {
        "Weapon Class": "Great Hammer",
        "ID": 12150000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Regal Beastclaw"
    },
    "Devourer's Scepter": {
        "Weapon Class": "Great Hammer",
        "ID": 12200000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Devourer of Worlds"
    },
    "Duelist Greataxe": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Rotten Greataxe": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23150000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Golem's Halberd": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23120000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Giant-Crusher": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23110000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Prelate's Inferno Crozier": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Prelate's Charge"
    },
    "Great Club": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Golden Land"
    },
    "Troll's Hammer": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23130000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Troll's Roar"
    },
    "Dragon Greatclaw": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Bloodfiend's Arm": {
        "Weapon Class": "Colossal Weapon",
        "ID": 12530000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Watchdog's Staff": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Sorcery of the Crozier"
    },
    "Staff of the Avatar": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Erdtree Slam"
    },
    "Rotten Staff": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23140000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Erdtree Slam"
    },
    "Envoy's Greathorn": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Great Oracular Bubble"
    },
    "Ghiza's Wheel": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23100000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Wheel"
    },
    "Fallingstar Beast Jaw": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Gravity Bolt"
    },
    "Anvil Hammer": {
        "Weapon Class": "Colossal Weapon",
        "ID": 12510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Devonia's Hammer": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Axe of Godfrey": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Regal Roar"
    },
    "Shadow Sunflower Blossom": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Gazing Finger": {
        "Weapon Class": "Colossal Weapon",
        "ID": 23520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Short Spear": {
        "Weapon Class": "Spear",
        "ID": 16000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Iron Spear": {
        "Weapon Class": "Spear",
        "ID": 16150000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Spear": {
        "Weapon Class": "Spear",
        "ID": 16010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Partisan": {
        "Weapon Class": "Spear",
        "ID": 16050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Pike": {
        "Weapon Class": "Spear",
        "ID": 16070000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Swift Spear": {
        "Weapon Class": "Spear",
        "ID": 16520000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Spiked Spear": {
        "Weapon Class": "Spear",
        "ID": 16140000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Cross-Naginata": {
        "Weapon Class": "Spear",
        "ID": 16110000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Clayman's Harpoon": {
        "Weapon Class": "Spear",
        "ID": 16030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Bloodfiend's Fork": {
        "Weapon Class": "Spear",
        "ID": 16540000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Celebrant's Rib-Rake": {
        "Weapon Class": "Spear",
        "ID": 16060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barbaric Roar"
    },
    "Torchpole": {
        "Weapon Class": "Spear",
        "ID": 16080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Smithscript Spear": {
        "Weapon Class": "Spear",
        "ID": 16500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Inquisitor's Girandole": {
        "Weapon Class": "Spear",
        "ID": 16130000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Crystal Spear": {
        "Weapon Class": "Spear",
        "ID": 16020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Rotten Crystal Spear": {
        "Weapon Class": "Spear",
        "ID": 16160000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Cleanrot Spear": {
        "Weapon Class": "Spear",
        "ID": 16040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Sacred Phalanx"
    },
    "Death Ritual Spear": {
        "Weapon Class": "Spear",
        "ID": 16120000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spearcall Ritual"
    },
    "Bolt of Gransax": {
        "Weapon Class": "Spear",
        "ID": 16090000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Ancient Lightning Spear"
    },
    "Lance": {
        "Weapon Class": "Great Spear",
        "ID": 17060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Messmer Soldier's Spear": {
        "Weapon Class": "Great Spear",
        "ID": 17510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Treespear": {
        "Weapon Class": "Great Spear",
        "ID": 17070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Sacred Order"
    },
    "Serpent-Hunter": {
        "Weapon Class": "Great Spear",
        "ID": 17030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Great-Serpent Hunt"
    },
    "Siluria's Tree": {
        "Weapon Class": "Great Spear",
        "ID": 17020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Siluria's Woe"
    },
    "Vyke's War Spear": {
        "Weapon Class": "Great Spear",
        "ID": 17050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Frenzyflame Thrust"
    },
    "Barbed Staff-Spear": {
        "Weapon Class": "Great Spear",
        "ID": 17520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Bloodfiend's Sacred Spear": {
        "Weapon Class": "Great Spear",
        "ID": 16550000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Mohgwyn's Sacred Spear": {
        "Weapon Class": "Great Spear",
        "ID": 17010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Bloodboon Ritual"
    },
    "Spear of the Impaler": {
        "Weapon Class": "Great Spear",
        "ID": 17500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Halberd": {
        "Weapon Class": "Halberd",
        "ID": 18000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Banished Knight's Halberd": {
        "Weapon Class": "Halberd",
        "ID": 18030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Lucerne": {
        "Weapon Class": "Halberd",
        "ID": 18020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Charge Forth"
    },
    "Glaive": {
        "Weapon Class": "Halberd",
        "ID": 18090000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Vulgar Militia Shotel": {
        "Weapon Class": "Halberd",
        "ID": 18130000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Vulgar Militia Saw": {
        "Weapon Class": "Halberd",
        "ID": 18070000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Guardian's Swordspear": {
        "Weapon Class": "Halberd",
        "ID": 18110000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Gargoyle's Halberd": {
        "Weapon Class": "Halberd",
        "ID": 18150000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Gargoyle's Black Halberd": {
        "Weapon Class": "Halberd",
        "ID": 18160000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Nightrider Glaive": {
        "Weapon Class": "Halberd",
        "ID": 18050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Pest's Glaive": {
        "Weapon Class": "Halberd",
        "ID": 18010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Ripple Crescent Halberd": {
        "Weapon Class": "Halberd",
        "ID": 18060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Golden Halberd": {
        "Weapon Class": "Halberd",
        "ID": 18080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Golden Vow"
    },
    "Dragon Halberd": {
        "Weapon Class": "Halberd",
        "ID": 18140000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Loretta's War Sickle": {
        "Weapon Class": "Halberd",
        "ID": 18100000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Loretta's Slash"
    },
    "Commander's Standard": {
        "Weapon Class": "Halberd",
        "ID": 18040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Rallying Standard"
    },
    "Spirit Glaive": {
        "Weapon Class": "Halberd",
        "ID": 18500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Poleblade of the Bud": {
        "Weapon Class": "Halberd",
        "ID": 18510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Scythe": {
        "Weapon Class": "Reaper",
        "ID": 19000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Grave Scythe": {
        "Weapon Class": "Reaper",
        "ID": 19010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Slash"
    },
    "Halo Scythe": {
        "Weapon Class": "Reaper",
        "ID": 19020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Miquella's Ring of Light"
    },
    "Winged Scythe": {
        "Weapon Class": "Reaper",
        "ID": 19060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Angel's Wings"
    },
    "Obsidian Lamina": {
        "Weapon Class": "Reaper",
        "ID": 19500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Whip": {
        "Weapon Class": "Whip",
        "ID": 20000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Thorned Whip": {
        "Weapon Class": "Whip",
        "ID": 20020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Urumi": {
        "Weapon Class": "Whip",
        "ID": 20070000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Hoslow's Petal Whip": {
        "Weapon Class": "Whip",
        "ID": 20050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Tooth Whip": {
        "Weapon Class": "Whip",
        "ID": 20500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Magma Whip Candlestick": {
        "Weapon Class": "Whip",
        "ID": 20030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Sea of Magma"
    },
    "Giant's Red Braid": {
        "Weapon Class": "Whip",
        "ID": 20060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Flame Dance"
    },
    "Unarmed": {
        "Weapon Class": "Fist",
        "ID": 110000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Caestus": {
        "Weapon Class": "Fist",
        "ID": 21000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Spiked Caestus": {
        "Weapon Class": "Fist",
        "ID": 21010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Katar": {
        "Weapon Class": "Fist",
        "ID": 21100000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Impaling Thrust"
    },
    "Pata": {
        "Weapon Class": "Fist",
        "ID": 21510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Iron Ball": {
        "Weapon Class": "Fist",
        "ID": 21070000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Star Fist": {
        "Weapon Class": "Fist",
        "ID": 21080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Endure"
    },
    "Clinging Bone": {
        "Weapon Class": "Fist",
        "ID": 21110000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Lifesteal Fist"
    },
    "Veteran's Prosthesis": {
        "Weapon Class": "Fist",
        "ID": 21120000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Storm Kick"
    },
    "Cipher Pata": {
        "Weapon Class": "Fist",
        "ID": 21130000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Unblockable Blade"
    },
    "Poisoned Hand": {
        "Weapon Class": "Fist",
        "ID": 21520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Madding Hand": {
        "Weapon Class": "Fist",
        "ID": 21530000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Thiollier's Hidden Needle": {
        "Weapon Class": "Fist",
        "ID": 21500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Golem Fist": {
        "Weapon Class": "Fist",
        "ID": 21540000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Grafted Dragon": {
        "Weapon Class": "Fist",
        "ID": 21060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Bear Witness!"
    },
    "Dryleaf Arts": {
        "Weapon Class": "Hand-to-Hand",
        "ID": 60500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Dane's Footwork": {
        "Weapon Class": "Hand-to-Hand",
        "ID": 60510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Hookclaws": {
        "Weapon Class": "Claw",
        "ID": 22000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Bloodhound Claws": {
        "Weapon Class": "Claw",
        "ID": 22020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Bloodhound's Step"
    },
    "Venomous Fang": {
        "Weapon Class": "Claw",
        "ID": 22010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Raptor Talons": {
        "Weapon Class": "Claw",
        "ID": 22030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Quickstep"
    },
    "Claws of Night": {
        "Weapon Class": "Claw",
        "ID": 22500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Beast Claw": {
        "Weapon Class": "Beast Claw",
        "ID": 68500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Red Bear's Claw": {
        "Weapon Class": "Beast Claw",
        "ID": 68510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Firespark Perfume Bottle": {
        "Weapon Class": "Perfume Bottle",
        "ID": 61500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Lightning Perfume Bottle": {
        "Weapon Class": "Perfume Bottle",
        "ID": 61530000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Chilling Perfume Bottle": {
        "Weapon Class": "Perfume Bottle",
        "ID": 61510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Frenzyflame Perfume Bottle": {
        "Weapon Class": "Perfume Bottle",
        "ID": 61520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Deadly Poison Perfume Bottle": {
        "Weapon Class": "Perfume Bottle",
        "ID": 61540000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Shortbow": {
        "Weapon Class": "Light Bow",
        "ID": 40000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barrage"
    },
    "Composite Bow": {
        "Weapon Class": "Light Bow",
        "ID": 40050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Mighty Shot"
    },
    "Red Branch Shortbow": {
        "Weapon Class": "Light Bow",
        "ID": 40020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barrage"
    },
    "Misbegotten Shortbow": {
        "Weapon Class": "Light Bow",
        "ID": 40010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barrage"
    },
    "Harp Bow": {
        "Weapon Class": "Light Bow",
        "ID": 40030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barrage"
    },
    "Bone Bow": {
        "Weapon Class": "Light Bow",
        "ID": 40500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Longbow": {
        "Weapon Class": "Bow",
        "ID": 41000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Mighty Shot"
    },
    "Albinauric Bow": {
        "Weapon Class": "Bow",
        "ID": 41010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Mighty Shot"
    },
    "Black Bow": {
        "Weapon Class": "Bow",
        "ID": 41070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barrage"
    },
    "Ansbach's Longbow": {
        "Weapon Class": "Bow",
        "ID": 41510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Pulley Bow": {
        "Weapon Class": "Bow",
        "ID": 41060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Mighty Shot"
    },
    "Horn Bow": {
        "Weapon Class": "Bow",
        "ID": 41020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Mighty Shot"
    },
    "Serpent Bow": {
        "Weapon Class": "Bow",
        "ID": 41040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": 1939,
        "Default Ash of War": "Mighty Shot"
    },
    "Erdtree Bow": {
        "Weapon Class": "Bow",
        "ID": 41030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Mighty Shot"
    },
    "Greatbow": {
        "Weapon Class": "Greatbow",
        "ID": 42040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Through and Through"
    },
    "Golem Greatbow": {
        "Weapon Class": "Greatbow",
        "ID": 42010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Through and Through"
    },
    "Erdtree Greatbow": {
        "Weapon Class": "Greatbow",
        "ID": 42030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Through and Through"
    },
    "Igon's Greatbow": {
        "Weapon Class": "Greatbow",
        "ID": 42500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Lion Greatbow": {
        "Weapon Class": "Greatbow",
        "ID": 42000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Radahn's Rain"
    },
    "Soldier's Crossbow": {
        "Weapon Class": "Crossbow",
        "ID": 43000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Light Crossbow": {
        "Weapon Class": "Crossbow",
        "ID": 43020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Heavy Crossbow": {
        "Weapon Class": "Crossbow",
        "ID": 43030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Arbalest": {
        "Weapon Class": "Crossbow",
        "ID": 43080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Crepus's Black-Key Crossbow": {
        "Weapon Class": "Crossbow",
        "ID": 43110000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Pulley Crossbow": {
        "Weapon Class": "Crossbow",
        "ID": 43050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Repeating Crossbow": {
        "Weapon Class": "Crossbow",
        "ID": 43500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Spread Crossbow": {
        "Weapon Class": "Crossbow",
        "ID": 43510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Full Moon Crossbow": {
        "Weapon Class": "Crossbow",
        "ID": 43060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Hand Ballista": {
        "Weapon Class": "Ballista",
        "ID": 44000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Jar Cannon": {
        "Weapon Class": "Ballista",
        "ID": 44010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Kick"
    },
    "Rabbath's Cannon": {
        "Weapon Class": "Ballista",
        "ID": 44500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Astrologer's Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33130000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Glintstone Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Academy Glintstone Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33200000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Digger's Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33120000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Demi-Human Queen's Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Azur's Glintstone Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33230000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Lusat's Glintstone Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33240000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Carian Glintstone Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33210000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Carian Glintblade Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33170000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Carian Regal Scepter": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33090000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Spinning Weapon"
    },
    "Albinauric Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33190000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Staff of Loss": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33280000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Gelmir Glintstone Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Crystal Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Rotten Crystal Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33270000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Meteorite Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33250000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Staff of the Guilty": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33260000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Prince of Death's Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33180000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Maternal Staff": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Staff of the Great Beyond": {
        "Weapon Class": "Glintstone Staff",
        "ID": 33510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Finger Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Erdtree Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Golden Order Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Dryleaf Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Fire Knight's Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Spiraltree Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Gravel Stone Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Giant's Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Godslayer's Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34010000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Clawmark Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Frenzied Flame Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34090000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Dragon Communion Seal": {
        "Weapon Class": "Sacred Seal",
        "ID": 34080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Torch": {
        "Weapon Class": "Torch",
        "ID": 24000000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Torch Attack"
    },
    "Beast-Repellent Torch": {
        "Weapon Class": "Torch",
        "ID": 24060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Torch Attack"
    },
    "Steel-Wire Torch": {
        "Weapon Class": "Torch",
        "ID": 24020000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Firebreather"
    },
    "Sentry's Torch": {
        "Weapon Class": "Torch",
        "ID": 24070000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Torch Attack"
    },
    "Ghostflame Torch": {
        "Weapon Class": "Torch",
        "ID": 24050000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Torch Attack"
    },
    "St. Trina's Torch": {
        "Weapon Class": "Torch",
        "ID": 24040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Fires of Slumber"
    },
    "Nanaya's Torch": {
        "Weapon Class": "Torch",
        "ID": 24500000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Lamenting Visage": {
        "Weapon Class": "Torch",
        "ID": 24510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Rickety Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Riveted Wooden Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30090000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Blue-White Wooden Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30100000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Scripture Wooden Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Red Thorn Roundshield": {
        "Weapon Class": "Small Shield",
        "ID": 30070000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Pillory Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Buckler": {
        "Weapon Class": "Small Shield",
        "ID": 30000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Buckler Parry"
    },
    "Iron Roundshield": {
        "Weapon Class": "Small Shield",
        "ID": 30120000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Gilded Iron Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30130000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Man-Serpent's Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Ice Crest Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30140000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Rift Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30110000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Perfumer's Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Shield of the Guilty": {
        "Weapon Class": "Small Shield",
        "ID": 31170000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Spiralhorn Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30190000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Smoldering Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30150000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Coil Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30200000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Viper Bite"
    },
    "Smithscript Shield": {
        "Weapon Class": "Small Shield",
        "ID": 30510000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Shield of Night": {
        "Weapon Class": "Small Shield",
        "ID": 21550000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Hawk Crest Wooden Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31270000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Horse Crest Wooden Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31240000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Candletree Wooden Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31250000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Flame Crest Wooden Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31260000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Marred Wooden Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Sun Realm Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Round Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31070000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Large Leather Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31230000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Black Leather Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31340000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Marred Leather Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31010000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Heater Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31330000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Blue Crest Heater Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31300000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Red Crest Heater Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31290000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Beast Crest Heater Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31280000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Inverted Hawk Heater Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31320000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Eclipse Crest Heater Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31310000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Kite Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Blue-Gold Kite Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31100000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Scorpion Kite Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31080000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Twinbird Kite Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31090000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Brass Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31130000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Messmer Soldier Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Banished Knight's Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31030000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Wolf Crest Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Serpent Crest Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31520000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Albinauric Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31040000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Parry"
    },
    "Beastman's Jar-Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 30060000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Carian Knight's Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31190000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Silver Mirrorshield": {
        "Weapon Class": "Medium Shield",
        "ID": 31060000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Great Turtle Shell": {
        "Weapon Class": "Medium Shield",
        "ID": 31140000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Barricade Shield"
    },
    "Golden Lion Shield": {
        "Weapon Class": "Medium Shield",
        "ID": 31530000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Wooden Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32290000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Lordsworn's Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32300000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Briar Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32050000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Spiked Palisade Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32170000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Icon Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32140000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Golden Beast Crest Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32090000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Manor Towershield": {
        "Weapon Class": "Greatshield",
        "ID": 32190000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Crossed-Tree Towershield": {
        "Weapon Class": "Greatshield",
        "ID": 32200000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Inverted Hawk Towershield": {
        "Weapon Class": "Greatshield",
        "ID": 32210000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Dragon Towershield": {
        "Weapon Class": "Greatshield",
        "ID": 32000000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Distinguished Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32020000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Gilded Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32270000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Cuckoo Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32250000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Redmane Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32230000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Golden Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32260000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Haligtree Crest Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32280000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Black Steel Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Crucible Hornshield": {
        "Weapon Class": "Greatshield",
        "ID": 32030000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Dragonclaw Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32040000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Fingerprint Stone Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32130000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Eclipse Crest Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32240000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "No Skill"
    },
    "Ant's Skull Plate": {
        "Weapon Class": "Greatshield",
        "ID": 32220000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Shield Bash"
    },
    "Erdtree Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32080000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Golden Retaliation"
    },
    "Jellyfish Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32120000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Contagious Fury"
    },
    "Visage Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32160000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Tongues of Fire"
    },
    "One-Eyed Shield": {
        "Weapon Class": "Greatshield",
        "ID": 32150000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": "Flame Spit"
    },
    "Verdigris Greatshield": {
        "Weapon Class": "Greatshield",
        "ID": 32520000,
        "isInfuse": false,
        "isReinforce": true,
        "isUnique": true,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Dueling Shield": {
        "Weapon Class": "Thrusting Shield",
        "ID": 62500000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Carian Thrusting Shield": {
        "Weapon Class": "Thrusting Shield",
        "ID": 62510000,
        "isInfuse": true,
        "isReinforce": true,
        "isUnique": false,
        "bothHandsAtkBonus": true,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Fire Pot": {
        "Weapon Class": "Consumable",
        "ID": 830000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Redmane Fire Pot": {
        "Weapon Class": "Consumable",
        "ID": 830100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Giantsflame Fire Pot": {
        "Weapon Class": "Consumable",
        "ID": 830200,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Magic Pot": {
        "Weapon Class": "Consumable",
        "ID": 866000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Academy Magic Pot": {
        "Weapon Class": "Consumable",
        "ID": 866100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Lightning Pot": {
        "Weapon Class": "Consumable",
        "ID": 832000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Ancient Dragonbolt Pot": {
        "Weapon Class": "Consumable",
        "ID": 832100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Holy Water Pot": {
        "Weapon Class": "Consumable",
        "ID": 835000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Sacred Order Pot": {
        "Weapon Class": "Consumable",
        "ID": 835100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Poison Pot": {
        "Weapon Class": "Consumable",
        "ID": 837000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 500370,
        "Default Ash of War": ""
    },
    "Fetid Pot": {
        "Weapon Class": "Consumable",
        "ID": 833000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 3120,
        "Default Ash of War": ""
    },
    "Rot Pot": {
        "Weapon Class": "Consumable",
        "ID": NaN,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 500670,
        "Default Ash of War": ""
    },
    "Swarm Pot": {
        "Weapon Class": "Consumable",
        "ID": 834000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 3126,
        "Default Ash of War": ""
    },
    "Freezing Pot": {
        "Weapon Class": "Consumable",
        "ID": NaN,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 500360,
        "Default Ash of War": ""
    },
    "Sleep Pot": {
        "Weapon Class": "Consumable",
        "ID": 864000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 500640,
        "Default Ash of War": ""
    },
    "Volcano Pot": {
        "Weapon Class": "Consumable",
        "ID": 860000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Rancor Pot": {
        "Weapon Class": "Consumable",
        "ID": 865000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Roped Fire Pot": {
        "Weapon Class": "Consumable",
        "ID": 840000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Roped Magic Pot": {
        "Weapon Class": "Consumable",
        "ID": 846000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Roped Lightning Pot": {
        "Weapon Class": "Consumable",
        "ID": 842000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Roped Holy Water Pot": {
        "Weapon Class": "Consumable",
        "ID": 851000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Roped Poison Pot": {
        "Weapon Class": "Consumable",
        "ID": 844000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 500440,
        "Default Ash of War": ""
    },
    "Roped Fetid Pot": {
        "Weapon Class": "Consumable",
        "ID": 843000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 500430,
        "Default Ash of War": ""
    },
    "Roped Fly Pot": {
        "Weapon Class": "Consumable",
        "ID": 847000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 500470,
        "Default Ash of War": ""
    },
    "Roped Volcano Pot": {
        "Weapon Class": "Consumable",
        "ID": 849000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Spark Aromatic": {
        "Weapon Class": "Consumable",
        "ID": 351000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Poison Spraymist": {
        "Weapon Class": "Consumable",
        "ID": 358000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 503580,
        "Default Ash of War": ""
    },
    "Bone Dart": {
        "Weapon Class": "Consumable",
        "ID": 171000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Poisonbone Dart": {
        "Weapon Class": "Consumable",
        "ID": 172000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 501720,
        "Default Ash of War": ""
    },
    "Crystal Dart": {
        "Weapon Class": "Consumable",
        "ID": 174000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Throwing Dagger": {
        "Weapon Class": "Consumable",
        "ID": 170000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Kukri": {
        "Weapon Class": "Consumable",
        "ID": 173000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 3115,
        "Default Ash of War": ""
    },
    "Fan Daggers": {
        "Weapon Class": "Consumable",
        "ID": 175000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Ruin Fragment": {
        "Weapon Class": "Consumable",
        "ID": 176000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Poisoned Stone": {
        "Weapon Class": "Consumable",
        "ID": 184000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 501840,
        "Default Ash of War": ""
    },
    "Poisoned Stone Clump": {
        "Weapon Class": "Consumable",
        "ID": 184100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": 501841,
        "Default Ash of War": ""
    },
    "Explosive Stone": {
        "Weapon Class": "Consumable",
        "ID": 183000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Explosive Stone Clump": {
        "Weapon Class": "Consumable",
        "ID": 183100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Glintstone Scrap": {
        "Weapon Class": "Consumable",
        "ID": 305000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Large Glintstone Scrap": {
        "Weapon Class": "Consumable",
        "ID": 305100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Cuckoo Glintstone": {
        "Weapon Class": "Consumable",
        "ID": 303000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Gravity Stone Fan": {
        "Weapon Class": "Consumable",
        "ID": 306000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Gravity Stone Chunk": {
        "Weapon Class": "Consumable",
        "ID": 307000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Wraith Calling Bell": {
        "Weapon Class": "Reusable",
        "ID": 308000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Ancestral Infant's Head": {
        "Weapon Class": "Reusable",
        "ID": 300000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Omen Bairn1": {
        "Weapon Class": "Reusable",
        "ID": 301000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Omen Bairn2": {
        "Weapon Class": "Reusable",
        "ID": 301000,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Regal Omen Bairn1": {
        "Weapon Class": "Reusable",
        "ID": 301100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    },
    "Regal Omen Bairn2": {
        "Weapon Class": "Reusable",
        "ID": 301100,
        "isInfuse": false,
        "isReinforce": false,
        "isUnique": false,
        "bothHandsAtkBonus": false,
        "specialStatusSpEffectId": "",
        "Default Ash of War": ""
    }
}

const WeaponClassesToRemove = ["Consumable", "Reusable"]
export const WeaponsOptions = Object.keys(WeaponsData).filter(item => !WeaponClassesToRemove.includes(String(WeaponsData[item]["Weapon Class"]))) 