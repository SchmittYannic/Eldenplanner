/* 
data source:
1. ER - Build Planner spreadsheet
2. table: StatusEffectData
3. get csv of table
5. use https://csvjson.com/csv2json options: Parse numbers, Parse JSON, output: Hash
6. use https://jsoneditoronline.org/ to format
function query(data) {
    let keysToKeep = ["poizonAttackPower", "diseaseAttackPower", "bloodAttackPower", "freezeAttackPower", "sleepAttackPower", "madnessAttackPower", "curseAttackPower"];  // Add any other keys you want to keep

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
    //"statusType": string,
    "poizonAttackPower": number, // used
    "diseaseAttackPower": number, // used
    "bloodAttackPower": number, // used
    "freezeAttackPower": number, // used
    "sleepAttackPower": number, // used
    "madnessAttackPower": number, // used
    "curseAttackPower": number, // used
    //"effectEndurance": number,
    //"changeHpRate": number,
    //"changeHpPoint": number,
    //"changeMpRate": number,
    //"changeMpPoint": number,
    //"neutralDamageCutRate": number
}

type StatusEffectDataType = {
    [key: string]: DataType
}

export const StatusEffectData: StatusEffectDataType = {
    "826": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 30,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "828": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 30,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "829": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 120,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "831": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "833": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "834": {
        "poizonAttackPower": 120,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "870": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 90,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "875": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 70,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "880": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 60,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "881": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 60,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "882": {
        "poizonAttackPower": 60,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "883": {
        "poizonAttackPower": 60,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1530": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 160,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1575": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1576": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 60,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1615": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1616": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 40,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1622": {
        "poizonAttackPower": 250,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1625": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1724": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 35,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1745": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 60,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1753": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 9999,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1756": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1759": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1761": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1764": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1780": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 70,
        "curseAttackPower": 0
    },
    "1781": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 25,
        "curseAttackPower": 0
    },
    "1782": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 4,
        "curseAttackPower": 0
    },
    "1785": {
        "poizonAttackPower": 250,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1789": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 70
    },
    "1794": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 30
    },
    "1800": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 70,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1801": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 110,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1809": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1884": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 20,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1885": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 90,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1894": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1901": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 70,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1939": {
        "poizonAttackPower": 15,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3115": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3120": {
        "poizonAttackPower": 250,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3121": {
        "poizonAttackPower": 200,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3125": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 20,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3126": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3141": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 63,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3143": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3145": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 63,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3147": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3151": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 33,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3153": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 42,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3155": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 33,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3157": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 42,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3176": {
        "poizonAttackPower": 63,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3178": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3180": {
        "poizonAttackPower": 63,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3182": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3191": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3193": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 38,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3195": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3197": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 38,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3300": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 20,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3307": {
        "poizonAttackPower": 150,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3309": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 150,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3311": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 63,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3313": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 80,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3315": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 63,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3317": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 80,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3370": {
        "poizonAttackPower": 20,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3750": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "3751": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 80,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "4002": {
        "poizonAttackPower": 3,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "4004": {
        "poizonAttackPower": 2,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "4051": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 3,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "4053": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 2,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "4055": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 7,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "4525": {
        "poizonAttackPower": 1,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "4555": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 1,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "5184": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 1,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6400": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 45,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6401": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 50,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6402": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 55,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6403": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6404": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 65,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6405": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6406": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 38,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6410": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 50,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6411": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 55,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6412": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6413": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 65,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6414": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6415": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 75,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6450": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 60,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6451": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 66,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6452": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 72,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6453": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 78,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6454": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 84,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6455": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 90,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6456": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 96,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6460": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 50,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6500": {
        "poizonAttackPower": 60,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6501": {
        "poizonAttackPower": 66,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6502": {
        "poizonAttackPower": 72,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6503": {
        "poizonAttackPower": 78,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6504": {
        "poizonAttackPower": 84,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6505": {
        "poizonAttackPower": 90,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6510": {
        "poizonAttackPower": 60,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6511": {
        "poizonAttackPower": 66,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6512": {
        "poizonAttackPower": 72,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6513": {
        "poizonAttackPower": 78,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6514": {
        "poizonAttackPower": 84,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6515": {
        "poizonAttackPower": 90,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6600": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 50,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6601": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 55,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6602": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 60,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6603": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 65,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6604": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 70,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6605": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 75,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6700": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 55,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6701": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 60,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6702": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 65,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6703": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 70,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6704": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 75,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6705": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "6750": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 55,
        "curseAttackPower": 0
    },
    "6751": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 60,
        "curseAttackPower": 0
    },
    "6752": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 65,
        "curseAttackPower": 0
    },
    "6753": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 70,
        "curseAttackPower": 0
    },
    "6754": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 75,
        "curseAttackPower": 0
    },
    "6755": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 80,
        "curseAttackPower": 0
    },
    "6800": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 45
    },
    "6801": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 50
    },
    "6802": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 55
    },
    "6803": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 60
    },
    "6804": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 65
    },
    "6805": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 5
    },
    "8350": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 20
    },
    "8354": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 100
    },
    "8355": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 200
    },
    "8570": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 150,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "8571": {
        "poizonAttackPower": 150,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "10660": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 999,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "10661": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 999,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "10662": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 999,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "10691": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 4,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "11560": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "11561": {
        "poizonAttackPower": 60,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "11605": {
        "poizonAttackPower": 500,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "11606": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 500,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "11612": {
        "poizonAttackPower": 99999,
        "diseaseAttackPower": 90,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "11613": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 100,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "13559": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 120,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "13560": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 110,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "13944": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 20,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "17051": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "17061": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 160,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "17063": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 15,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "18430": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 180,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "18431": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 90,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "18432": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 120,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "18433": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 60,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "19950": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 100,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "19951": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 200,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "19952": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 20,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "19953": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 150,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "19954": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 50,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20000": {
        "poizonAttackPower": 10,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001": {
        "poizonAttackPower": 20,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20002": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20003": {
        "poizonAttackPower": 40,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20004": {
        "poizonAttackPower": 50,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20005": {
        "poizonAttackPower": 60,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20006": {
        "poizonAttackPower": 70,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20007": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20008": {
        "poizonAttackPower": 90,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20009": {
        "poizonAttackPower": 100,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20010": {
        "poizonAttackPower": 110,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20011": {
        "poizonAttackPower": 120,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20012": {
        "poizonAttackPower": 130,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20013": {
        "poizonAttackPower": 140,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20014": {
        "poizonAttackPower": 150,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20015": {
        "poizonAttackPower": 160,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20016": {
        "poizonAttackPower": 170,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20017": {
        "poizonAttackPower": 180,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20018": {
        "poizonAttackPower": 190,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20019": {
        "poizonAttackPower": 200,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20110": {
        "poizonAttackPower": 55,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20120": {
        "poizonAttackPower": 200,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20130": {
        "poizonAttackPower": 120,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20140": {
        "poizonAttackPower": 250,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20141": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20142": {
        "poizonAttackPower": 20,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20150": {
        "poizonAttackPower": 130,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20151": {
        "poizonAttackPower": 20,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20152": {
        "poizonAttackPower": 20,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20160": {
        "poizonAttackPower": 100,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20161": {
        "poizonAttackPower": 150,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20162": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20163": {
        "poizonAttackPower": 120,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20170": {
        "poizonAttackPower": 120,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20175": {
        "poizonAttackPower": 120,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20180": {
        "poizonAttackPower": 100,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20181": {
        "poizonAttackPower": 140,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20190": {
        "poizonAttackPower": 45,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20500": {
        "poizonAttackPower": 10,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20501": {
        "poizonAttackPower": 20,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20502": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20503": {
        "poizonAttackPower": 40,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20504": {
        "poizonAttackPower": 50,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20505": {
        "poizonAttackPower": 60,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20506": {
        "poizonAttackPower": 70,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20507": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20508": {
        "poizonAttackPower": 90,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20509": {
        "poizonAttackPower": 100,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20510": {
        "poizonAttackPower": 110,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20511": {
        "poizonAttackPower": 120,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20512": {
        "poizonAttackPower": 130,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20513": {
        "poizonAttackPower": 140,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20514": {
        "poizonAttackPower": 150,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20515": {
        "poizonAttackPower": 160,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20516": {
        "poizonAttackPower": 170,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20517": {
        "poizonAttackPower": 180,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20518": {
        "poizonAttackPower": 190,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20519": {
        "poizonAttackPower": 200,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20600": {
        "poizonAttackPower": 62,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 10,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 20,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 30,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 40,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 50,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 60,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 70,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 80,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 90,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 100,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 110,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 120,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 130,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 140,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 150,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 160,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 170,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 180,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 190,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 200,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 300,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21101": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 70,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21102": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 100,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 10,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 20,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 40,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 50,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 80,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 90,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 100,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 110,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 120,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 130,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 140,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 150,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 160,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 170,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 180,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 190,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 200,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22101": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 1,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22110": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 150,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22111": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 300,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22120": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 7,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22130": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 999,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22131": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 999,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "22132": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 999,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "23000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 10
    },
    "23001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 20
    },
    "23002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 30
    },
    "23003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 40
    },
    "23004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 50
    },
    "23005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 60
    },
    "23006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 70
    },
    "23007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 80
    },
    "23008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 90
    },
    "23009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 100
    },
    "23010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 110
    },
    "23011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 120
    },
    "23012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 130
    },
    "23013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 140
    },
    "23014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 150
    },
    "23015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 160
    },
    "23016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 170
    },
    "23017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 180
    },
    "23018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 190
    },
    "23019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 200
    },
    "23100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 250
    },
    "23101": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 30
    },
    "23102": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 20
    },
    "23110": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 130
    },
    "23111": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 20
    },
    "23112": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 20
    },
    "23113": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 110
    },
    "23150": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 8
    },
    "24000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 10,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 20,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 30,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 40,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 50,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 60,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 70,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 90,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 110,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 120,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 130,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 140,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 150,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 160,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 170,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 180,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 190,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 200,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24130": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 250,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24131": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 180,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24132": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 50,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24140": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 60,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24150": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 40,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24160": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "24170": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 300,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 10,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 20,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 30,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 40,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 50,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 60,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 70,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 80,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 90,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 100,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 110,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 120,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 130,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 140,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 150,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 160,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 170,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 180,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 190,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "25019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 200,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "26000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 10,
        "curseAttackPower": 0
    },
    "26001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 20,
        "curseAttackPower": 0
    },
    "26002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 30,
        "curseAttackPower": 0
    },
    "26003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 40,
        "curseAttackPower": 0
    },
    "26004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 50,
        "curseAttackPower": 0
    },
    "26005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 60,
        "curseAttackPower": 0
    },
    "26006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 70,
        "curseAttackPower": 0
    },
    "26007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 80,
        "curseAttackPower": 0
    },
    "26008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 90,
        "curseAttackPower": 0
    },
    "26009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 100,
        "curseAttackPower": 0
    },
    "26010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 110,
        "curseAttackPower": 0
    },
    "26011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 120,
        "curseAttackPower": 0
    },
    "26012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 130,
        "curseAttackPower": 0
    },
    "26013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 140,
        "curseAttackPower": 0
    },
    "26014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 150,
        "curseAttackPower": 0
    },
    "26015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 160,
        "curseAttackPower": 0
    },
    "26016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 170,
        "curseAttackPower": 0
    },
    "26017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 180,
        "curseAttackPower": 0
    },
    "26018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 190,
        "curseAttackPower": 0
    },
    "26019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 200,
        "curseAttackPower": 0
    },
    "26100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 80,
        "curseAttackPower": 0
    },
    "26110": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 19,
        "curseAttackPower": 0
    },
    "99050": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 1
    },
    "99400": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 1
    },
    "102306": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 9999,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "102311": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 28,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "102313": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 37,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "102315": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 28,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "102317": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 37,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 57,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 58,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 59,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 61,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 62,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 63,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 64,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 65,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 66,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 67,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 68,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 69,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 71,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 72,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 73,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 74,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 75,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 76,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105020": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 77,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105021": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 78,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105022": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 79,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105023": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 80,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105024": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 81,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105025": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 82,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105050": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 57,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105051": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 58,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105052": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 59,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105053": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105054": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 61,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105055": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 62,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105056": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 63,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105057": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 64,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105058": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 65,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105059": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 66,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105060": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 67,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105061": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 68,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105062": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 69,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105063": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105064": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 71,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105065": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 72,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105066": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 73,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105067": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 74,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105068": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 75,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105069": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 76,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105070": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 77,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105071": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 78,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105072": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 79,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105073": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 80,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105074": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 81,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105075": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 82,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 69,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105101": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105102": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 71,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105103": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 72,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105104": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 73,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105105": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 75,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105106": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 76,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105107": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 77,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105108": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 78,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105109": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 80,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105110": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 81,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105111": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 82,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105112": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 83,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105113": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 85,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105114": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 86,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105115": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 87,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105116": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 88,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105117": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 90,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105118": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 91,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105119": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 92,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105120": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 93,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105121": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 95,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105122": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 96,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105123": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 97,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105124": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 98,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105125": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 100,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105150": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 69,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105151": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105152": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 71,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105153": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 72,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105154": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 73,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105155": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 75,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105156": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 76,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105157": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 77,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105158": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 78,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105159": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 80,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105160": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 81,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105161": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 82,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105162": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 83,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105163": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 85,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105164": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 86,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105165": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 87,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105166": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 88,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105167": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 90,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105168": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 91,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105169": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 92,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105170": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 93,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105171": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 95,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105172": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 96,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105173": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 97,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105174": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 98,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105175": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 100,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105200": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 83,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105201": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 84,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105202": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 85,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105203": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 87,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105204": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 88,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105205": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 90,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105206": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 91,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105207": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 93,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105208": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 94,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105209": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 96,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105210": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 97,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105211": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 99,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105212": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 100,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105213": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 102,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105214": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 103,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105215": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 105,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105216": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 106,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105217": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 108,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105218": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 109,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105219": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 111,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105220": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 112,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105221": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 114,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105222": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 115,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105223": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 117,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105224": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 118,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105225": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 120,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105250": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 83,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105251": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 84,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105252": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 85,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105253": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 87,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105254": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 88,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105255": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 90,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105256": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 91,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105257": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 93,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105258": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 94,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105259": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 96,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105260": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 97,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105261": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 99,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105262": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 100,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105263": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 102,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105264": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 103,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105265": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 105,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105266": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 106,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105267": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 108,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105268": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 109,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105269": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 111,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105270": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 112,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105271": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 114,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105272": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 115,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105273": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 117,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105274": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 118,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105275": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 120,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105300": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 25,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105301": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 25,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105302": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 25,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105303": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 26,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105304": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 26,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105305": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 27,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105306": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 27,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105307": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 27,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105308": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 28,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105309": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 28,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105310": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 29,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105311": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 29,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105312": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 29,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105313": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105314": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105315": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 31,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105316": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 31,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105317": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 31,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105318": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 32,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105319": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 32,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105320": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 33,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105321": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 33,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105322": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 33,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105323": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 34,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105324": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 34,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105325": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 35,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105500": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 66,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105501": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 67,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105502": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 68,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105503": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 69,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105504": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 70,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105505": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 71,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105506": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 73,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105507": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 74,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105508": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 75,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105509": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 76,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105510": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 77,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105511": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 79,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105512": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 80,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105513": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 81,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105514": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 82,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105515": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 83,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105516": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 85,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105517": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 86,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105518": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 87,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105519": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 88,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105520": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 89,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105521": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 90,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105522": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 92,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105523": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 93,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105524": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 94,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105525": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 95,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105550": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 66,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105551": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 67,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105552": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 68,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105553": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 69,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105554": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 70,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105555": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 71,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105556": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 73,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105557": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 74,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105558": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 75,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105559": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 76,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105560": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 77,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105561": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 79,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105562": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 80,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105563": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 81,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105564": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 82,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105565": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 83,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105566": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 85,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105567": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 86,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105568": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 87,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105569": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 88,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105570": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 89,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105571": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 90,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105572": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 92,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105573": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 93,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105574": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 94,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105575": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 95,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105600": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 80,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105601": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 81,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105602": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 82,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105603": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 84,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105604": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 85,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105605": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 87,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105606": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 88,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105607": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 89,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105608": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 91,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105609": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 92,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105610": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 94,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105611": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 95,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105612": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 96,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105613": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 98,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105614": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 99,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105615": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 101,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105616": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 102,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105617": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 103,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105618": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 105,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105619": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 106,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105620": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 108,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105621": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 109,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105622": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 110,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105623": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 112,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105624": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 113,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105625": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 115,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105650": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 80,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105651": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 81,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105652": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 82,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105653": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 84,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105654": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 85,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105655": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 87,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105656": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 88,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105657": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 89,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105658": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 91,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105659": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 92,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105660": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 94,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105661": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 95,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105662": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 96,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105663": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 98,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105664": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 99,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105665": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 101,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105666": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 102,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105667": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 103,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105668": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 105,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105669": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 106,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105670": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 108,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105671": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 109,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105672": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 110,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105673": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 112,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105674": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 113,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105675": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 115,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105700": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 96,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105701": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 97,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105702": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 99,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105703": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 101,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105704": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 102,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105705": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 104,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105706": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 106,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105707": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 107,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105708": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 109,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105709": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 111,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105710": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 112,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105711": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 114,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105712": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 116,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105713": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 117,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105714": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 119,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105715": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 121,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105716": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 122,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105717": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 124,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105718": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 126,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105719": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 127,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105720": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 129,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105721": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 131,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105722": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 132,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105723": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 134,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105724": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 136,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105725": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 138,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105750": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 96,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105751": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 97,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105752": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 99,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105753": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 101,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105754": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 102,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105755": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 104,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105756": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 106,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105757": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 107,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105758": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 109,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105759": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 111,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105760": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 112,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105761": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 114,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105762": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 116,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105763": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 117,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105764": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 119,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105765": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 121,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105766": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 122,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105767": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 124,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105768": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 126,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105769": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 127,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105770": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 129,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105771": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 131,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105772": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 132,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105773": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 134,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105774": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 136,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "105775": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 138,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106000": {
        "poizonAttackPower": 66,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106001": {
        "poizonAttackPower": 67,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106002": {
        "poizonAttackPower": 68,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106003": {
        "poizonAttackPower": 69,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106004": {
        "poizonAttackPower": 70,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106005": {
        "poizonAttackPower": 71,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106006": {
        "poizonAttackPower": 73,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106007": {
        "poizonAttackPower": 74,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106008": {
        "poizonAttackPower": 75,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106009": {
        "poizonAttackPower": 76,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106010": {
        "poizonAttackPower": 77,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106011": {
        "poizonAttackPower": 79,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106012": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106013": {
        "poizonAttackPower": 81,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106014": {
        "poizonAttackPower": 82,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106015": {
        "poizonAttackPower": 83,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106016": {
        "poizonAttackPower": 85,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106017": {
        "poizonAttackPower": 86,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106018": {
        "poizonAttackPower": 87,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106019": {
        "poizonAttackPower": 88,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106020": {
        "poizonAttackPower": 89,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106021": {
        "poizonAttackPower": 90,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106022": {
        "poizonAttackPower": 92,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106023": {
        "poizonAttackPower": 93,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106024": {
        "poizonAttackPower": 94,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106025": {
        "poizonAttackPower": 95,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106050": {
        "poizonAttackPower": 66,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106051": {
        "poizonAttackPower": 67,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106052": {
        "poizonAttackPower": 68,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106053": {
        "poizonAttackPower": 69,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106054": {
        "poizonAttackPower": 70,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106055": {
        "poizonAttackPower": 71,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106056": {
        "poizonAttackPower": 73,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106057": {
        "poizonAttackPower": 74,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106058": {
        "poizonAttackPower": 75,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106059": {
        "poizonAttackPower": 76,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106060": {
        "poizonAttackPower": 77,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106061": {
        "poizonAttackPower": 79,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106062": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106063": {
        "poizonAttackPower": 81,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106064": {
        "poizonAttackPower": 82,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106065": {
        "poizonAttackPower": 83,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106066": {
        "poizonAttackPower": 85,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106067": {
        "poizonAttackPower": 86,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106068": {
        "poizonAttackPower": 87,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106069": {
        "poizonAttackPower": 88,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106070": {
        "poizonAttackPower": 89,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106071": {
        "poizonAttackPower": 90,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106072": {
        "poizonAttackPower": 92,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106073": {
        "poizonAttackPower": 93,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106074": {
        "poizonAttackPower": 94,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106075": {
        "poizonAttackPower": 95,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106100": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106101": {
        "poizonAttackPower": 81,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106102": {
        "poizonAttackPower": 82,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106103": {
        "poizonAttackPower": 84,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106104": {
        "poizonAttackPower": 85,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106105": {
        "poizonAttackPower": 87,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106106": {
        "poizonAttackPower": 88,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106107": {
        "poizonAttackPower": 89,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106108": {
        "poizonAttackPower": 91,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106109": {
        "poizonAttackPower": 92,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106110": {
        "poizonAttackPower": 94,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106111": {
        "poizonAttackPower": 95,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106112": {
        "poizonAttackPower": 96,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106113": {
        "poizonAttackPower": 98,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106114": {
        "poizonAttackPower": 99,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106115": {
        "poizonAttackPower": 101,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106116": {
        "poizonAttackPower": 102,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106117": {
        "poizonAttackPower": 103,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106118": {
        "poizonAttackPower": 105,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106119": {
        "poizonAttackPower": 106,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106120": {
        "poizonAttackPower": 108,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106121": {
        "poizonAttackPower": 109,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106122": {
        "poizonAttackPower": 110,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106123": {
        "poizonAttackPower": 112,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106124": {
        "poizonAttackPower": 113,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106125": {
        "poizonAttackPower": 115,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106150": {
        "poizonAttackPower": 80,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106151": {
        "poizonAttackPower": 81,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106152": {
        "poizonAttackPower": 82,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106153": {
        "poizonAttackPower": 84,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106154": {
        "poizonAttackPower": 85,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106155": {
        "poizonAttackPower": 87,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106156": {
        "poizonAttackPower": 88,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106157": {
        "poizonAttackPower": 89,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106158": {
        "poizonAttackPower": 91,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106159": {
        "poizonAttackPower": 92,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106160": {
        "poizonAttackPower": 94,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106161": {
        "poizonAttackPower": 95,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106162": {
        "poizonAttackPower": 96,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106163": {
        "poizonAttackPower": 98,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106164": {
        "poizonAttackPower": 99,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106165": {
        "poizonAttackPower": 101,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106166": {
        "poizonAttackPower": 102,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106167": {
        "poizonAttackPower": 103,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106168": {
        "poizonAttackPower": 105,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106169": {
        "poizonAttackPower": 106,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106170": {
        "poizonAttackPower": 108,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106171": {
        "poizonAttackPower": 109,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106172": {
        "poizonAttackPower": 110,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106173": {
        "poizonAttackPower": 112,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106174": {
        "poizonAttackPower": 113,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106175": {
        "poizonAttackPower": 115,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106200": {
        "poizonAttackPower": 96,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106201": {
        "poizonAttackPower": 97,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106202": {
        "poizonAttackPower": 99,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106203": {
        "poizonAttackPower": 101,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106204": {
        "poizonAttackPower": 102,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106205": {
        "poizonAttackPower": 104,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106206": {
        "poizonAttackPower": 106,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106207": {
        "poizonAttackPower": 107,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106208": {
        "poizonAttackPower": 109,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106209": {
        "poizonAttackPower": 111,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106210": {
        "poizonAttackPower": 112,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106211": {
        "poizonAttackPower": 114,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106212": {
        "poizonAttackPower": 116,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106213": {
        "poizonAttackPower": 117,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106214": {
        "poizonAttackPower": 119,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106215": {
        "poizonAttackPower": 121,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106216": {
        "poizonAttackPower": 122,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106217": {
        "poizonAttackPower": 124,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106218": {
        "poizonAttackPower": 126,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106219": {
        "poizonAttackPower": 127,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106220": {
        "poizonAttackPower": 129,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106221": {
        "poizonAttackPower": 131,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106222": {
        "poizonAttackPower": 132,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106223": {
        "poizonAttackPower": 134,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106224": {
        "poizonAttackPower": 136,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106225": {
        "poizonAttackPower": 138,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106250": {
        "poizonAttackPower": 96,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106251": {
        "poizonAttackPower": 97,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106252": {
        "poizonAttackPower": 99,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106253": {
        "poizonAttackPower": 101,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106254": {
        "poizonAttackPower": 102,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106255": {
        "poizonAttackPower": 104,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106256": {
        "poizonAttackPower": 106,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106257": {
        "poizonAttackPower": 107,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106258": {
        "poizonAttackPower": 109,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106259": {
        "poizonAttackPower": 111,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106260": {
        "poizonAttackPower": 112,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106261": {
        "poizonAttackPower": 114,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106262": {
        "poizonAttackPower": 116,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106263": {
        "poizonAttackPower": 117,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106264": {
        "poizonAttackPower": 119,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106265": {
        "poizonAttackPower": 121,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106266": {
        "poizonAttackPower": 122,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106267": {
        "poizonAttackPower": 124,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106268": {
        "poizonAttackPower": 126,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106269": {
        "poizonAttackPower": 127,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106270": {
        "poizonAttackPower": 129,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106271": {
        "poizonAttackPower": 131,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106272": {
        "poizonAttackPower": 132,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106273": {
        "poizonAttackPower": 134,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106274": {
        "poizonAttackPower": 136,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106275": {
        "poizonAttackPower": 138,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106300": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106301": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106302": {
        "poizonAttackPower": 30,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106303": {
        "poizonAttackPower": 31,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106304": {
        "poizonAttackPower": 31,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106305": {
        "poizonAttackPower": 32,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106306": {
        "poizonAttackPower": 32,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106307": {
        "poizonAttackPower": 33,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106308": {
        "poizonAttackPower": 33,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106309": {
        "poizonAttackPower": 34,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106310": {
        "poizonAttackPower": 34,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106311": {
        "poizonAttackPower": 35,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106312": {
        "poizonAttackPower": 35,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106313": {
        "poizonAttackPower": 36,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106314": {
        "poizonAttackPower": 36,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106315": {
        "poizonAttackPower": 37,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106316": {
        "poizonAttackPower": 37,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106317": {
        "poizonAttackPower": 38,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106318": {
        "poizonAttackPower": 38,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106319": {
        "poizonAttackPower": 39,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106320": {
        "poizonAttackPower": 39,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106321": {
        "poizonAttackPower": 40,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106322": {
        "poizonAttackPower": 40,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106323": {
        "poizonAttackPower": 41,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106324": {
        "poizonAttackPower": 41,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "106325": {
        "poizonAttackPower": 42,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 57,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 58,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 59,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 60,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 61,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 62,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 63,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 64,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 65,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 66,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 67,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 68,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 69,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 70,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 71,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 72,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 73,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 74,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 75,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 76,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107020": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 77,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107021": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 78,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107022": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 79,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107023": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 80,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107024": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 81,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107025": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 82,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107050": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 57,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107051": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 58,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107052": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 59,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107053": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 60,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107054": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 61,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107055": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 62,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107056": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 63,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107057": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 64,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107058": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 65,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107059": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 66,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107060": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 67,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107061": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 68,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107062": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 69,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107063": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 70,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107064": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 71,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107065": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 72,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107066": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 73,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107067": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 74,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107068": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 75,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107069": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 76,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107070": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 77,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107071": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 78,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107072": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 79,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107073": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 80,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107074": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 81,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107075": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 82,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 69,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107101": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 70,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107102": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 71,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107103": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 72,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107104": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 73,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107105": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 75,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107106": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 76,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107107": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 77,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107108": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 78,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107109": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 80,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107110": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 81,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107111": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 82,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107112": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 83,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107113": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 85,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107114": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 86,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107115": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 87,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107116": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 88,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107117": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 90,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107118": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 91,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107119": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 92,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107120": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 93,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107121": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 95,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107122": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 96,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107123": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 97,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107124": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 98,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107125": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 100,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107150": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 69,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107151": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 70,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107152": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 71,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107153": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 72,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107154": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 73,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107155": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 75,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107156": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 76,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107157": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 77,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107158": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 78,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107159": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 80,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107160": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 81,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107161": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 82,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107162": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 83,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107163": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 85,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107164": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 86,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107165": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 87,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107166": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 88,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107167": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 90,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107168": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 91,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107169": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 92,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107170": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 93,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107171": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 95,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107172": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 96,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107173": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 97,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107174": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 98,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107175": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 100,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107200": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 83,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107201": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 84,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107202": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 85,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107203": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 87,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107204": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 88,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107205": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 90,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107206": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 91,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107207": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 93,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107208": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 94,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107209": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 96,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107210": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 97,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107211": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 99,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107212": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 100,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107213": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 102,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107214": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 103,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107215": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 105,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107216": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 106,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107217": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 108,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107218": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 109,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107219": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 111,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107220": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 112,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107221": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 114,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107222": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 115,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107223": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 117,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107224": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 118,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107225": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 120,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107250": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 83,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107251": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 84,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107252": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 85,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107253": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 87,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107254": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 88,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107255": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 90,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107256": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 91,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107257": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 93,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107258": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 94,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107259": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 96,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107260": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 97,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107261": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 99,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107262": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 100,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107263": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 102,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107264": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 103,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107265": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 105,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107266": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 106,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107267": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 108,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107268": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 109,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107269": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 111,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107270": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 112,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107271": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 114,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107272": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 115,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107273": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 117,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107274": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 118,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107275": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 120,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107500": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 66,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107501": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 67,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107502": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 69,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107503": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 70,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107504": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 72,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107505": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 73,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107506": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 75,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107507": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 77,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107508": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 78,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107509": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107510": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 81,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107511": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 83,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107512": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 85,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107513": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 86,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107514": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 88,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107515": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 89,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107516": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 91,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107517": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 92,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107518": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 94,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107519": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 96,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107520": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 97,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107521": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 99,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107522": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107523": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 102,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107524": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 104,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107525": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 105,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107550": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 66,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107551": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 67,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107552": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 69,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107553": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 70,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107554": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 72,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107555": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 73,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107556": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 75,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107557": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 77,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107558": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 78,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107559": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107560": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 81,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107561": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 83,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107562": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 85,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107563": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 86,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107564": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 88,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107565": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 89,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107566": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 91,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107567": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 92,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107568": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 94,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107569": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 96,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107570": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 97,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107571": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 99,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107572": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107573": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 102,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107574": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 104,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107575": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 105,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107600": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107601": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 81,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107602": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 83,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107603": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 85,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107604": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 87,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107605": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 89,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107606": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 91,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107607": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 93,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107608": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 95,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107609": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 96,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107610": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 98,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107611": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107612": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 102,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107613": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 104,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107614": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 106,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107615": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 108,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107616": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 110,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107617": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 111,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107618": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 113,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107619": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 115,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107620": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 117,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107621": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 119,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107622": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 121,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107623": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 123,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107624": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 125,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107625": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 127,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107650": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107651": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 81,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107652": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 83,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107653": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 85,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107654": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 87,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107655": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 89,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107656": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 91,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107657": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 93,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107658": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 95,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107659": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 96,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107660": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 98,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107661": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107662": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 102,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107663": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 104,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107664": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 106,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107665": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 108,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107666": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 110,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107667": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 111,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107668": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 113,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107669": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 115,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107670": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 117,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107671": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 119,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107672": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 121,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107673": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 123,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107674": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 125,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107675": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 127,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107700": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 96,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107701": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 98,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107702": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107703": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 102,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107704": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 105,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107705": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 107,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107706": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 109,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107707": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 111,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107708": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 114,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107709": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 116,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107710": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 118,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107711": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 121,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107712": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 123,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107713": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 125,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107714": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 127,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107715": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 130,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107716": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 132,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107717": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 134,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107718": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 137,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107719": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 139,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107720": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 141,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107721": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 143,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107722": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 146,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107723": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 148,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107724": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 150,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107725": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 153,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107750": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 96,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107751": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 98,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107752": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107753": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 102,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107754": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 105,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107755": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 107,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107756": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 109,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107757": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 111,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107758": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 114,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107759": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 116,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107760": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 118,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107761": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 121,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107762": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 123,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107763": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 125,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107764": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 127,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107765": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 130,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107766": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 132,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107767": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 134,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107768": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 137,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107769": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 139,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107770": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 141,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107771": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 143,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107772": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 146,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107773": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 148,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107774": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 150,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107775": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 153,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107800": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 30,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107801": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 30,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107802": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 31,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107803": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 31,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107804": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 32,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107805": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 33,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107806": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 33,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107807": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 34,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107808": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 34,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107809": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 35,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107810": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 36,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107811": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 36,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107812": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 37,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107813": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 37,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107814": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 38,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107815": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 39,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107816": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 39,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107817": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 40,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107818": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 40,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107819": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 41,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107820": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 42,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107821": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 42,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107822": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 43,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107823": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 43,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107824": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 44,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "107825": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 45,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "108000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 66
    },
    "108001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 67
    },
    "108002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 69
    },
    "108003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 70
    },
    "108004": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 72
    },
    "108005": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 73
    },
    "108006": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 75
    },
    "108007": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 77
    },
    "108008": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 78
    },
    "108009": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 80
    },
    "108010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 81
    },
    "108011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 83
    },
    "108012": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 85
    },
    "108013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 86
    },
    "108014": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 88
    },
    "108015": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 89
    },
    "108016": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 91
    },
    "108017": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 92
    },
    "108018": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 94
    },
    "108019": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 96
    },
    "108020": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 97
    },
    "108021": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 99
    },
    "108022": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 100
    },
    "108023": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 102
    },
    "108024": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 104
    },
    "108025": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 105
    },
    "108050": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 66
    },
    "108051": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 67
    },
    "108052": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 69
    },
    "108053": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 70
    },
    "108054": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 72
    },
    "108055": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 73
    },
    "108056": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 75
    },
    "108057": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 77
    },
    "108058": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 78
    },
    "108059": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 80
    },
    "108060": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 81
    },
    "108061": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 83
    },
    "108062": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 85
    },
    "108063": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 86
    },
    "108064": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 88
    },
    "108065": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 89
    },
    "108066": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 91
    },
    "108067": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 92
    },
    "108068": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 94
    },
    "108069": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 96
    },
    "108070": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 97
    },
    "108071": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 99
    },
    "108072": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 100
    },
    "108073": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 102
    },
    "108074": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 104
    },
    "108075": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 105
    },
    "108100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 80
    },
    "108101": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 81
    },
    "108102": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 83
    },
    "108103": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 85
    },
    "108104": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 87
    },
    "108105": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 89
    },
    "108106": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 91
    },
    "108107": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 93
    },
    "108108": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 95
    },
    "108109": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 96
    },
    "108110": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 98
    },
    "108111": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 100
    },
    "108112": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 102
    },
    "108113": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 104
    },
    "108114": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 106
    },
    "108115": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 108
    },
    "108116": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 110
    },
    "108117": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 111
    },
    "108118": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 113
    },
    "108119": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 115
    },
    "108120": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 117
    },
    "108121": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 119
    },
    "108122": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 121
    },
    "108123": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 123
    },
    "108124": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 125
    },
    "108125": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 127
    },
    "108150": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 80
    },
    "108151": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 81
    },
    "108152": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 83
    },
    "108153": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 85
    },
    "108154": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 87
    },
    "108155": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 89
    },
    "108156": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 91
    },
    "108157": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 93
    },
    "108158": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 95
    },
    "108159": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 96
    },
    "108160": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 98
    },
    "108161": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 100
    },
    "108162": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 102
    },
    "108163": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 104
    },
    "108164": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 106
    },
    "108165": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 108
    },
    "108166": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 110
    },
    "108167": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 111
    },
    "108168": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 113
    },
    "108169": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 115
    },
    "108170": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 117
    },
    "108171": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 119
    },
    "108172": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 121
    },
    "108173": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 123
    },
    "108174": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 125
    },
    "108175": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 127
    },
    "108200": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 96
    },
    "108201": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 98
    },
    "108202": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 100
    },
    "108203": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 102
    },
    "108204": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 105
    },
    "108205": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 107
    },
    "108206": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 109
    },
    "108207": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 111
    },
    "108208": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 114
    },
    "108209": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 116
    },
    "108210": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 118
    },
    "108211": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 121
    },
    "108212": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 123
    },
    "108213": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 125
    },
    "108214": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 127
    },
    "108215": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 130
    },
    "108216": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 132
    },
    "108217": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 134
    },
    "108218": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 137
    },
    "108219": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 139
    },
    "108220": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 141
    },
    "108221": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 143
    },
    "108222": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 146
    },
    "108223": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 148
    },
    "108224": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 150
    },
    "108225": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 153
    },
    "108250": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 96
    },
    "108251": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 98
    },
    "108252": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 100
    },
    "108253": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 102
    },
    "108254": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 105
    },
    "108255": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 107
    },
    "108256": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 109
    },
    "108257": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 111
    },
    "108258": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 114
    },
    "108259": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 116
    },
    "108260": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 118
    },
    "108261": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 121
    },
    "108262": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 123
    },
    "108263": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 125
    },
    "108264": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 127
    },
    "108265": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 130
    },
    "108266": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 132
    },
    "108267": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 134
    },
    "108268": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 137
    },
    "108269": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 139
    },
    "108270": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 141
    },
    "108271": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 143
    },
    "108272": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 146
    },
    "108273": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 148
    },
    "108274": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 150
    },
    "108275": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 153
    },
    "500360": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 380,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "500370": {
        "poizonAttackPower": 200,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "500430": {
        "poizonAttackPower": 250,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "500431": {
        "poizonAttackPower": 200,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "500440": {
        "poizonAttackPower": 200,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "500470": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 70,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "500480": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 380,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "500640": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 29,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "500670": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 300,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "501236": {
        "poizonAttackPower": 99999,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "501720": {
        "poizonAttackPower": 58,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "501840": {
        "poizonAttackPower": 100,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "501841": {
        "poizonAttackPower": 45,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "503314": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 15,
        "curseAttackPower": 0
    },
    "503580": {
        "poizonAttackPower": 26,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1436100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 270,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1440000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 100,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1441000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1442000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 20,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1443100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 120,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1443101": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 35,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1449001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 63,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1490001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 30,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1490010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 95,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1491001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 25,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1491010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 72,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1501000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 130,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1501001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 38,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1502000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 20
    },
    "1504000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 50
    },
    "1504001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 30
    },
    "1630001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 5,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1631001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 3,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1632002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 2,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1692100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 120,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1702000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 110,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1702100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 110,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1703000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 65,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1703100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 65,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1721001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 4,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1721002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 40,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1722000": {
        "poizonAttackPower": 20,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1723001": {
        "poizonAttackPower": 70,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1724000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 150,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1724001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 50,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "1730000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 50,
        "curseAttackPower": 0
    },
    "1730001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 14,
        "curseAttackPower": 0
    },
    "1730002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 9,
        "curseAttackPower": 0
    },
    "1731000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 21,
        "curseAttackPower": 0
    },
    "1731001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 28,
        "curseAttackPower": 0
    },
    "1731002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 4,
        "curseAttackPower": 0
    },
    "1731003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 4,
        "curseAttackPower": 0
    },
    "1731100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 40,
        "curseAttackPower": 0
    },
    "1731101": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 3,
        "curseAttackPower": 0
    },
    "1732000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 90,
        "curseAttackPower": 0
    },
    "1732001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 105,
        "curseAttackPower": 0
    },
    "1732002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 20,
        "curseAttackPower": 0
    },
    "1732003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 30,
        "curseAttackPower": 0
    },
    "1733001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 35,
        "curseAttackPower": 0
    },
    "1733002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 6,
        "curseAttackPower": 0
    },
    "20000802": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 3,
        "curseAttackPower": 0
    },
    "20000820": {
        "poizonAttackPower": 155,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20000821": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 250,
        "curseAttackPower": 0
    },
    "20000862": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 160,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20000874": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20000884": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001029": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 42,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001034": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 15,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001035": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 70,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001039": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 42,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001042": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 55,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001050": {
        "poizonAttackPower": 10,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001090": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 20,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001091": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 20,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20001092": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 80,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20004006": {
        "poizonAttackPower": 1,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20004057": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 12,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20010462": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 150,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20010758": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 5,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20010781": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 6,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20010784": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 60,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20010786": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 4,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20020100": {
        "poizonAttackPower": 250,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20022100": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 40,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20024130": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 70,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20024131": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 25,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20024132": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 190,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20025000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 200,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20025001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 200,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20500330": {
        "poizonAttackPower": 500,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20500331": {
        "poizonAttackPower": 200,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20500360": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 400,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20500370": {
        "poizonAttackPower": 400,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20500620": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 130,
        "curseAttackPower": 0
    },
    "20500670": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 400,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20500710": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 90,
        "curseAttackPower": 0
    },
    "20500740": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 29,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "20500911": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 20,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21490003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 25,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21491001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 25,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21491010": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 17,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21500000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 19,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21500001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 23,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21620000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 170,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21621000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 40,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21621001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 120,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21621002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 50,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21621003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 150,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21630001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 3,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21630003": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 3,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21630011": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 3,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21630013": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 3,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21702000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 55,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21720000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 80,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21720001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 20,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 0,
        "curseAttackPower": 0
    },
    "21730000": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 30,
        "curseAttackPower": 0
    },
    "21730001": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 6,
        "curseAttackPower": 0
    },
    "21730002": {
        "poizonAttackPower": 0,
        "diseaseAttackPower": 0,
        "bloodAttackPower": 0,
        "freezeAttackPower": 0,
        "sleepAttackPower": 0,
        "madnessAttackPower": 10,
        "curseAttackPower": 0
    }
}