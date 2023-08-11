import { StatsType } from "../../data/StartingClassData";
import { ArmorStateType, TalismanStateType } from "../features/charplanner/charplannerSlice";

const calcRuneLevel = (statsObj: StatsType): number => {
    const objKeys = Object.keys(statsObj);
    let level = 1;

    objKeys.map((keyName) => {
        level += statsObj[keyName as keyof StatsType] - 10
        return level
    })
    return level
};

const calcNextLevelRunes = (runelevel: number): number => {
    let x = ((runelevel+81)-92)*0.02;
    if (x < 0) x = 0;
    let nextLevelRunes = ((x+0.1)*(Math.pow((runelevel+81), 2)))+1;
    return Math.floor(nextLevelRunes);
};

const calcTotalRunesSpend = (from: number, to: number): number => {
    let totalRunesSpend = 0;
    for (let i = from; i <= (to-1); i++) {
        totalRunesSpend += calcNextLevelRunes(i);
    }
    return totalRunesSpend;
};

const addThousandsSeperator = (integer: number): string => {
    let result = "";
    let intAsString = String(integer);
    let length = intAsString.length;
    let iteration = 0;
    for (let i = length-1; i >= 0; i--) {
        iteration++;
        result = intAsString[i] + result;
        if (iteration % 3 === 0 && i !== 0) {
            result = "," + result;
        }
    }
    return result;
};

const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const calcStatChange = (
    statName: string,
    talismans: TalismanStateType,
    armor: ArmorStateType,
    greatRune: string,
    greatRuneChecked: boolean
): number => {
    const talisman1 = talismans.talisman1;
    const talisman2 = talismans.talisman2;
    const talisman3 = talismans.talisman3;
    const talisman4 = talismans.talisman4;
    const head = armor.head
    const chest = armor.chest

    let result = 0;
    result += greatRuneChecked ? (greatRune === "Godrick's Great Rune" ? 5 : 0) : 0;

    switch(statName) {
        case "vigor":
            result += (head === "Crimson Hood" ? 1 : 0);

            result += (talisman1 === "Radagon's Soreseal" 
            || talisman2 === "Radagon's Soreseal"
            || talisman3 === "Radagon's Soreseal"
            || talisman4 === "Radagon's Soreseal")
            ? 5 : 0;

            result += (talisman1 === "Radagon's Scarseal" 
            || talisman2 === "Radagon's Scarseal" 
            || talisman3 === "Radagon's Scarseal" 
            || talisman4 === "Radagon's Scarseal" )
            ? 3 : 0;
            break;

        case "mind":
            result += (head === "Navy Hood" ? 1 : 0);
            result += (head === "Preceptor's Big Hat" ? 3 : 0);

            result += (talisman1 === "Marika's Soreseal" 
            || talisman2 === "Marika's Soreseal"
            || talisman3 === "Marika's Soreseal"
            || talisman4 === "Marika's Soreseal")
            ? 5 : 0;

            result += (talisman1 === "Marika's Scarseal" 
            || talisman2 === "Marika's Scarseal"
            || talisman3 === "Marika's Scarseal"
            || talisman4 === "Marika's Scarseal")
            ? 3 : 0;
            break;

        case "endurance":
            result += (head === "Hierodas Glintstone Crown" ? 2 : 0);
            result += (head === "Imp Head (Wolf)" ? 2 : 0);

            result += (talisman1 === "Radagon's Soreseal" 
            || talisman2 === "Radagon's Soreseal"
            || talisman3 === "Radagon's Soreseal"
            || talisman4 === "Radagon's Soreseal")
            ? 5 : 0;

            result += (talisman1 === "Radagon's Scarseal" 
            || talisman2 === "Radagon's Scarseal" 
            || talisman3 === "Radagon's Scarseal" 
            || talisman4 === "Radagon's Scarseal" )
            ? 3 : 0;
            break;

        case "strength":
            result += (talisman1 === "Starscourge Heirloom" 
            || talisman2 === "Starscourge Heirloom"
            || talisman3 === "Starscourge Heirloom"
            || talisman4 === "Starscourge Heirloom")
            ? 5 : 0;

            result += (talisman1 === "Radagon's Soreseal" 
            || talisman2 === "Radagon's Soreseal"
            || talisman3 === "Radagon's Soreseal"
            || talisman4 === "Radagon's Soreseal")
            ? 5 : 0;

            result += (talisman1 === "Radagon's Scarseal" 
            || talisman2 === "Radagon's Scarseal" 
            || talisman3 === "Radagon's Scarseal" 
            || talisman4 === "Radagon's Scarseal" )
            ? 3 : 0;

            result += (head === "Haima Glintstone Crown" ? 2 : 0);
            result += (head === "Imp Head (Fanged)" ? 2 : 0);
            result += (head === "Omensmirk Mask" ? 2 : 0);
            break;
            
        case "dexterity":
            result += (talisman1 === "Prosthesis-Wearer Heirloom" 
            || talisman2 === "Prosthesis-Wearer Heirloom"
            || talisman3 === "Prosthesis-Wearer Heirloom"
            || talisman4 === "Prosthesis-Wearer Heirloom")
            ? 5 : 0;

            result += (talisman1 === "Millicent's Prosthesis" 
            || talisman2 === "Millicent's Prosthesis"
            || talisman3 === "Millicent's Prosthesis"
            || talisman4 === "Millicent's Prosthesis")
            ? 5 : 0;

            result += (talisman1 === "Radagon's Soreseal" 
            || talisman2 === "Radagon's Soreseal"
            || talisman3 === "Radagon's Soreseal"
            || talisman4 === "Radagon's Soreseal")
            ? 5 : 0;

            result += (talisman1 === "Radagon's Scarseal" 
            || talisman2 === "Radagon's Scarseal" 
            || talisman3 === "Radagon's Scarseal" 
            || talisman4 === "Radagon's Scarseal" )
            ? 3 : 0;

            result += (head === "Lazuli Glintstone Crown" ? 3 : 0);
            result += (head === "Imp Head (Long-Tongued)" ? 2 : 0);
            result += (head === "Consort's Mask" ? 1 : 0);
            result += (head === "Okina Mask" ? 3 : 0);
            break;

        case "intelligence":
            result += (talisman1 === "Stargazer Heirloom" 
            || talisman2 === "Stargazer Heirloom"
            || talisman3 === "Stargazer Heirloom"
            || talisman4 === "Stargazer Heirloom")
            ? 5 : 0;

            result += (talisman1 === "Marika's Soreseal" 
            || talisman2 === "Marika's Soreseal"
            || talisman3 === "Marika's Soreseal"
            || talisman4 === "Marika's Soreseal")
            ? 5 : 0;

            result += (talisman1 === "Marika's Scarseal" 
            || talisman2 === "Marika's Scarseal"
            || talisman3 === "Marika's Scarseal"
            || talisman4 === "Marika's Scarseal")
            ? 3 : 0;

            result += (head === "Hierodas Glintstone Crown" ? 2 : 0);
            result += (head === "Lazuli Glintstone Crown" ? 3 : 0);
            result += (head === "Karolos Glintstone Crown" ? 3 : 0);
            result += (head === "Olivinus Glintstone Crown" ? 3 : 0);
            result += (head === "Twinsage Glintstone Crown" ? 6 : 0);
            result += (head === "Haima Glintstone Crown" ? 2 : 0);
            result += (head === "Witch's Glintstone Crown" ? 3 : 0);
            result += (head === "Imp Head (Cat)" ? 2 : 0);
            result += (head === "Queen's Crescent Crown" ? 3 : 0);
            result += (head === "Greathood" ? 2 : 0);
            break;

        case "faith":
            result += (talisman1 === "Two Fingers Heirloom" 
            || talisman2 === "Two Fingers Heirloom" 
            || talisman3 === "Two Fingers Heirloom" 
            || talisman4 === "Two Fingers Heirloom")
            ? 5 : 0;

            result += (talisman1 === "Marika's Soreseal" 
            || talisman2 === "Marika's Soreseal"
            || talisman3 === "Marika's Soreseal"
            || talisman4 === "Marika's Soreseal")
            ? 5 : 0;

            result += (talisman1 === "Marika's Scarseal" 
            || talisman2 === "Marika's Scarseal"
            || talisman3 === "Marika's Scarseal"
            || talisman4 === "Marika's Scarseal")
            ? 3 : 0;

            result += (head === "Imp Head (Corpse)" ? 2 : 0);
            result += (head === "Ruler's Mask" ? 1 : 0);
            result += (head === "Sacred Crown Helm" ? 1 : 0);
            result += (head === "Haligtree Helm" ? 1 : 0);
            result += (head === "Haligtree Knight Helm" ? 2 : 0);
            result += (head === "Greathood" ? 2 : 0);
            result += (chest === "Commoner's Garb" ? 1 : 0);
            result += (chest === "Commoner's Simple Garb" ? 1 : 0);
            break;
        
        case "arcane":
            result += (talisman1 === "Marika's Soreseal" 
            || talisman2 === "Marika's Soreseal"
            || talisman3 === "Marika's Soreseal"
            || talisman4 === "Marika's Soreseal")
            ? 5 : 0;

            result += (talisman1 === "Marika's Scarseal" 
            || talisman2 === "Marika's Scarseal"
            || talisman3 === "Marika's Scarseal"
            || talisman4 === "Marika's Scarseal")
            ? 3 : 0;

            result += (head === "Witch's Glintstone Crown" ? 3 : 0);
            result += (head === "Imp Head (Elder)" ? 2 : 0);
            result += (head === "Marais Mask" ? 1 : 0);
            result += (head === "Mask of Confidence" ? 3 : 0);
            result += (head === "Albinauric Mask" ? 4 : 0);
            result += (head === "Silver Tear Mask" ? 8 : 0);
            break;
        default:
            //do nothing;              
    }

    return result;
};

export {
    calcRuneLevel,
    calcNextLevelRunes,
    calcTotalRunesSpend,
    addThousandsSeperator,
    capitalizeFirstLetter,
    calcStatChange
}