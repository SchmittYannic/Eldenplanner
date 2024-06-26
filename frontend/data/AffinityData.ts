/*
1. ER - Build Planner spreadsheet
2. table: WeaponsData
3. column o and p
*/

export type AffinityDataType = {
    [key: string]: number
}

export const AffinityData: AffinityDataType = {
    "Standard": 0,
    "Heavy": 100,
    "Keen": 200,
    "Quality": 300,
    "Fire": 400,
    "Flame Art": 500,
    "Lightning": 600,
    "Sacred": 700,
    "Magic": 800,
    "Cold": 900,
    "Poison": 1000,
    "Blood": 1100,
    "Occult": 1200,
}

export const AffinityOptions = Object.keys(AffinityData);