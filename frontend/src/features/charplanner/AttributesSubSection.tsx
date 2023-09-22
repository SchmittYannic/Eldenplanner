import { statsStateKeys } from "./charplannerSlice";
import AttributeRow from "./AttributeRow";
import RuneDisplayWrapper from "./RuneDisplayWrapper";

const AttributesSubSection = () => {

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
                    {statsStateKeys.map((keyName, idx) => (
                        <AttributeRow 
                            key={idx} 
                            keyName={keyName}
                        />
                    ))}
                </>
                <div className="divider-4" />
                <div className="horizontal-divider" />
                <div className="divider-4" />
            </RuneDisplayWrapper>
        </div>
    )
}

export default AttributesSubSection