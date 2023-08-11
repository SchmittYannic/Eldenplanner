import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { StatsType, StartingClassData } from "../../../data/StartingClassData";
import {
    selectStartingclass,
    selectorsMap,
    reduceractionsMap
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
                            statSelector={selectorsMap[keyName as keyof StatsType]}
                            statAction={reduceractionsMap[keyName as keyof StatsType]}
                        />
                    ))}
                </>
            </RuneDisplayWrapper>
        </div>
    )
}

export default AttributesSubSection