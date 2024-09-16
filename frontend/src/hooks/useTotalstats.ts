import { useSelector } from "react-redux";
import {
    selectStats,
    selectTalisman,
    selectArmor,
    selectGreatrune,
    selectGreatruneactive,
    StatsStateType,
    statSelectorsMap
} from "src/features/charplanner/charplannerSlice";
import { calcStatChange } from "src/utils/functions";
import { selectEffectData } from "src/features/charplanner/charplannerDataSlice";

/*
    Hook calculates the total stat points of a character.
    When given no parameter, it calculates the total stats of all stats.
    Otherwise when given the name of the stat, it will only calculate
    the total stat of this particular stat.
*/
const useTotalstats = (statName?: keyof StatsStateType): StatsStateType | number => {

    const EffectData = useSelector(selectEffectData);

    // select the current value/s of stat/s depending on the existence of a parameter
    const stat = statName ? useSelector(statSelectorsMap[statName]) : null;
    const stats = !statName ? useSelector(selectStats) : null;

    // select currently equiped gear
    const talisman = useSelector(selectTalisman);
    const armor = useSelector(selectArmor);
    const greatrune = useSelector(selectGreatrune);
    const greatruneactive = useSelector(selectGreatruneactive);

    if (statName) {
        // if a parameter was given calculate the change of the stat
        const statChange = calcStatChange(EffectData, statName, talisman, armor, greatrune, greatruneactive);
        const statCurrent = stat as number;
        if (statChange !== 0) {
            // if the change in stat is not 0
            // check if current value of stat + the change exceeds the maximum of 99
            const statNew = statCurrent + statChange > 99 ? 99 : statCurrent + statChange;
            // return the new calculated stat value
            return statNew
        } else {
            // if the change in stat is 0 return the current value of stat
            return statCurrent
        }
    } else {
        // if no parameter was given initialize totalStats object, which will get returned at the end
        const totalStats: StatsStateType = {
            vigor: 0,
            mind: 0,
            endurance: 0,
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            faith: 0,
            arcane: 0,
        };
        // create an Array with all the stats
        const statsArray = Object.keys(stats as StatsStateType);

        /*
            loop through the array, calculate the stat change of
            every stat and update the value in the totalStats object
        */
        for (let stat in statsArray) {
            const statName = statsArray[stat]
            const statChange = calcStatChange(EffectData, statName as keyof StatsStateType, talisman, armor, greatrune, greatruneactive);
            const statCurrent = (stats as StatsStateType)[statName as keyof StatsStateType];
            if (statChange !== 0) {
                const statNew = statCurrent + statChange > 99 ? 99 : statCurrent + statChange;
                totalStats[statName as keyof StatsStateType] = statNew;
            } else {
                totalStats[statName as keyof StatsStateType] = statCurrent;
            }
        }
        // return a copy of the totalStats object
        return { ...totalStats }
    }
}

export default useTotalstats