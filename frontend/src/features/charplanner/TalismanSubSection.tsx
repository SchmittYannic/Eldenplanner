import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    talismanReduceractionsMap,
    TalismanReduceractionsMapType,
    selectTalisman,
    TalismanStateType
} from "./charplannerSlice";
import { TalismansNames, TalismansData } from "../../../data/TalismansData";
import { Alert, CustomSelect } from "../../components/ui";

const TalismanSubSection = (): ReactElement => {

    const dispatch = useDispatch();

    const talisman = useSelector(selectTalisman);

    const [isConflict, setIsConflict] = useState(false);
    const [alertContent, setAlertContent] = useState("");
    const TalismanSlots: string[] = ["talisman1", "talisman2", "talisman3", "talisman4"];

    const setSelectedTalisman = (value: string, slot: string) => {
        const conflicts: string[] = [];
        const otherSlots = TalismanSlots.filter(item => item !== slot);
        for (let s in otherSlots) {
            const slot = otherSlots[s] as keyof TalismanStateType
            talisman[slot] && conflicts.push(...TalismansData[talisman[slot]]["conflicts"] as string[]);
        }

        if(!conflicts.includes(value)) {
            dispatch(talismanReduceractionsMap[slot as keyof TalismanReduceractionsMapType](value));
        } else {
            setIsConflict(true);
            setAlertContent(`The selected Talisman "${value}" is in conflict with Talisman in different slot.`);
        }
    };

    return (
        <div className="TalismanSubSection">
            {isConflict && (
                <Alert classes={"alert--conflict"} setAlert={setIsConflict}>
                    <>
                        <br />
                        <p>Conflict detected!</p>
                        <br />
                        <p>{alertContent}</p>
                    </>
                </Alert>
            )}
            {TalismanSlots.map((slot, idx) => 
                <CustomSelect
                    key={idx}
                    id={slot}
                    selectedOption={talisman[slot as keyof TalismanStateType]}
                    setSelectedOption={(value: string) => setSelectedTalisman(value, slot)}
                    options={TalismansNames}
                    renderOption={(option: string) => <p className={option === talisman[slot as keyof TalismanStateType] ? "SelectedOption" : ""}>{option}</p>}
                    classes={""}
                    label={"Talisman " + slot.slice(-1)}
                    enableDelete={true}
                    searchable={true}
                />
            )}
        </div>
    )
}

export default TalismanSubSection