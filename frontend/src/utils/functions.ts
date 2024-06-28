import { EffectData, ItemEffectDataType } from "../../data/EffectData";
import { StatsType } from "../../data/StartingClassData";
import { ArmorStateType, StatsStateKeysType, StatsStateType, TalismanStateType } from "../features/charplanner/charplannerSlice";

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
    let x = ((runelevel + 81) - 92) * 0.02;
    if (x < 0) x = 0;
    let nextLevelRunes = ((x + 0.1) * (Math.pow((runelevel + 81), 2))) + 1;
    return Math.floor(nextLevelRunes);
};

const calcTotalRunesSpend = (from: number, to: number): number => {
    let totalRunesSpend = 0;
    for (let i = from; i <= (to - 1); i++) {
        totalRunesSpend += calcNextLevelRunes(i);
    }
    return totalRunesSpend;
};

const addThousandsSeperator = (integer: number): string => {
    let result = "";
    let intAsString = String(integer);
    let length = intAsString.length;
    let iteration = 0;
    for (let i = length - 1; i >= 0; i--) {
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

const calcSumObjectValues = (obj: { [key: string]: number }): number => {
    return Object.values(obj).reduce((a, b) => a + b, 0);
};

const calcStatChange = (
    statName: keyof StatsStateType,
    talismans: TalismanStateType,
    armor: ArmorStateType,
    greatRune: string,
    greatRuneChecked: boolean
): number => {
    type mapStatNameToEffectNameType = {
        [key in StatsStateKeysType as key]: keyof ItemEffectDataType
    }

    const mapStatNameToEffectName: mapStatNameToEffectNameType = {
        vigor: "addLifeForceStatus",
        mind: "addWillpowerStatus",
        endurance: "addEndureStatus",
        strength: "addStrengthStatus",
        dexterity: "addDexterityStatus",
        intelligence: "addMagicStatus",
        faith: "addFaithStatus",
        arcane: "addLuckStatus",
    }

    const { head, chest, hands, legs } = armor
    const { talisman1, talisman2, talisman3, talisman4 } = talismans

    const headEffect = head ? Number(EffectData[head]?.[mapStatNameToEffectName[statName]]) || 0 : 0;
    const chestEffect = chest ? Number(EffectData[chest]?.[mapStatNameToEffectName[statName]]) || 0 : 0;
    const handsEffect = hands ? Number(EffectData[hands]?.[mapStatNameToEffectName[statName]]) || 0 : 0;
    const legsEffect = legs ? Number(EffectData[legs]?.[mapStatNameToEffectName[statName]]) || 0 : 0;
    const talisman1Effect = talisman1 ? Number(EffectData[talisman1]?.[mapStatNameToEffectName[statName]]) || 0 : 0;
    const talisman2Effect = talisman2 ? Number(EffectData[talisman2]?.[mapStatNameToEffectName[statName]]) || 0 : 0;
    const talisman3Effect = talisman3 ? Number(EffectData[talisman3]?.[mapStatNameToEffectName[statName]]) || 0 : 0;
    const talisman4Effect = talisman4 ? Number(EffectData[talisman4]?.[mapStatNameToEffectName[statName]]) || 0 : 0;
    const greatRuneEffect = greatRuneChecked && greatRune ? Number(EffectData[greatRune]?.[mapStatNameToEffectName[statName]]) || 0 : 0;

    return headEffect + chestEffect + handsEffect + legsEffect + talisman1Effect + talisman2Effect + talisman3Effect + talisman4Effect + greatRuneEffect
};

export {
    calcRuneLevel,
    calcNextLevelRunes,
    calcTotalRunesSpend,
    addThousandsSeperator,
    capitalizeFirstLetter,
    calcSumObjectValues,
    calcStatChange,
}