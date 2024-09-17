import { CommentType, EffectDataType, GetCommentsResponseType, ItemEffectDataType } from "src/types";
import { StatsType } from "./constants";
import { ArmorStateType, StatsStateKeysType, StatsStateType, TalismanStateType } from "src/features/charplanner/charplannerSlice";

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
    EffectData: EffectDataType,
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

const sinceDateInString = (eventTime: Date): string => {
    const now = new Date();
    const diff = now.getTime() - eventTime.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    const pluralize = (value: number, unit: string) => {
        return `${value} ${unit}${value === 1 ? "" : "s"} ago`;
    };

    if (seconds < 60) {
        return pluralize(seconds, "second");
    } else if (minutes < 60) {
        return pluralize(minutes, "minute");
    } else if (hours < 24) {
        return pluralize(hours, "hour");
    } else if (days < 7) {
        return pluralize(days, "day");
    } else if (weeks < 4) {
        return pluralize(weeks, "week");
    } else if (months < 12) {
        return pluralize(months, "month");
    } else {
        return pluralize(years, "year");
    }
}

const isValidCache = <CommentId extends string>(
    cache: GetCommentsResponseType<CommentId> | null,
    //currentTimestamp: string, // Assuming you need to compare with current timestamp or other valid time-based checks
    //maxAgeMs: number = 60000 // Default cache age (e.g., 1 minute)
): boolean => {
    if (!cache) return false;

    //const now = Date.now();

    // Validate that the cache has the expected structure
    if (!Array.isArray(cache.ids) || typeof cache.totalComments !== "number" || typeof cache.entities !== "object") {
        return false;
    }

    // Optional: Check if the cache is not too old (if you have timestamp or last updated field)
    // For example, assume you have `lastUpdatedTimestamp` field in cache
    // const cacheAge = now - new Date(cache.lastUpdatedTimestamp || 0).getTime();
    // return cacheAge < maxAgeMs;

    return true; // If all checks pass, return true indicating the cache is valid
}

const mergeSortedArrays = <CommentId extends string>(
    cacheIds: CommentId[],
    fetchedIds: CommentId[],
    commentEntities: Record<CommentId, CommentType<CommentId>>,
    isAscending: boolean = true,
): CommentId[] => {
    let mergedIds: CommentId[] = [];
    let i = 0; // Pointer for cacheIds
    let j = 0; // Pointer for fetchedIds

    // Merge the arrays based on createdAt
    while (i < cacheIds.length && j < fetchedIds.length) {
        const existingDate = new Date(commentEntities[cacheIds[i]].createdAt);
        const fetchedDate = new Date(commentEntities[fetchedIds[j]].createdAt);

        if (isAscending) {
            // Ascending: Oldest to Newest
            if (existingDate <= fetchedDate) {
                mergedIds.push(cacheIds[i]);
                i++;
            } else {
                mergedIds.push(fetchedIds[j]);
                j++;
            }
        } else {
            // Descending: Newest to Oldest
            if (existingDate >= fetchedDate) {
                mergedIds.push(cacheIds[i]);
                i++;
            } else {
                mergedIds.push(fetchedIds[j]);
                j++;
            }
        }
    }

    // Append any remaining items from cacheIds
    while (i < cacheIds.length) {
        mergedIds.push(cacheIds[i]);
        i++;
    }

    // Append any remaining items from fetchedIds
    while (j < fetchedIds.length) {
        mergedIds.push(fetchedIds[j]);
        j++;
    }

    return mergedIds;
}

const findObjectById = <T extends { id: string }>(array: T[], id: string): T | undefined => {
    return array.find(item => item.id === id);
};

const isEmptyObject = (value: any): boolean => {
    return value && typeof value === "object" && Object.keys(value).length === 0;
};

export {
    calcRuneLevel,
    calcNextLevelRunes,
    calcTotalRunesSpend,
    addThousandsSeperator,
    capitalizeFirstLetter,
    calcSumObjectValues,
    calcStatChange,
    sinceDateInString,
    isValidCache,
    mergeSortedArrays,
    findObjectById,
    isEmptyObject,
}