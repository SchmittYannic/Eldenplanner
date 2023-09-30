import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdWarningAmber } from "react-icons/md";
import {
    talismanReduceractionsMap,
    TalismanReduceractionsMapType,
    selectTalisman,
    TalismanStateType
} from "./charplannerSlice";
import { TalismansNames, TalismansData } from "../../../data/TalismansData";
import { CustomSelect, Dialog, DialogButtons, DialogContent, DialogIcon, DialogMain } from "../../components/ui";

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
            dispatch(talismanReduceractionsMap[slot as keyof TalismanReduceractionsMapType](""));
            setIsConflict(true);
            setAlertContent(`The selected Talisman "${value}" is in conflict with a Talisman in a different slot.`);
        }
    };

    return (
        <div className="TalismanSubSection">
            {isConflict && (
                <Dialog className="dialog__conflict" setDialog={setIsConflict}>
                    <DialogMain>
                        <DialogIcon>
                            <MdWarningAmber />
                        </DialogIcon>
                        <DialogContent>
                            <h3>Conflict detected!</h3>

                            <div className="divider-4" />

                            <p>{alertContent}</p>

                            <div className="divider-4" />
                        </DialogContent>
                    </DialogMain>
                    <DialogButtons>
                        <button
                            className="button"
                            type="button"
                            onClick={() => setIsConflict(false)}
                            title={"Close Dialog"}
                        >
                            Close
                        </button>
                    </DialogButtons>
                </Dialog>
            )}
            {TalismanSlots.map((slot, idx) => 
                <CustomSelect
                    key={idx}
                    id={slot}
                    value={talisman[slot as keyof TalismanStateType]}
                    setValue={(value: string) => setSelectedTalisman(value, slot)}
                    options={TalismansNames}
                    label={"Talisman " + slot.slice(-1)}
                    enableDelete={true}
                    searchable={true}
                />
            )}
        </div>
    )
}

export default TalismanSubSection