import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { StatsType, StartingClassData } from "../../../data/StartingClassData";
import {
    selectStartingclass,
    statSelectorsMap,
    statReduceractionsMap
} from "./charplannerSlice";
import AttributeRow from "./AttributeRow";
import RuneDisplayWrapper from "./RuneDisplayWrapper";

const AttributesSubSection = (): ReactElement => {

    const startingclass = useSelector(selectStartingclass);

    const minStats = StartingClassData[startingclass];

    return (
        <div className="AttributesSubSection">
            <RuneDisplayWrapper>
                <div className="AttributeRow">
                    <span>Stat</span>
                    <span>Init</span>
                    <span>Level</span>
                    <span>Total</span>
                    <span></span>
                </div>
                <>
                    {Object.keys(minStats).map((keyName, idx) => (
                        <AttributeRow 
                            key={idx} 
                            keyName={keyName as keyof StatsType}
                            minStat={minStats[keyName as keyof StatsType]}
                            statSelector={statSelectorsMap[keyName as keyof StatsType]}
                            statAction={statReduceractionsMap[keyName as keyof StatsType]}
                        />
                    ))}
                </>
            </RuneDisplayWrapper>
        </div>
    )
}

export default AttributesSubSection