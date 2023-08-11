import { StatsType } from "../../data/StartingClassData";

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

export {
    calcRuneLevel,
    calcNextLevelRunes,
    calcTotalRunesSpend,
    addThousandsSeperator,
    capitalizeFirstLetter
}