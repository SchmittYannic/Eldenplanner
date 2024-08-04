import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdWarningAmber } from "react-icons/md";
import {
    talismanReduceractionsMap,
    TalismanReduceractionsMapType,
    selectTalisman,
    TalismanStateType
} from "./charplannerSlice";
import { TalismansOptions, TalismansData } from "../../../data/TalismanData";
import { CustomSelect, Dialog, DialogButtons, DialogContent, DialogIcon, DialogMain } from "../../components/ui";

const TalismanSubSection = (): ReactElement => {

    const dispatch = useDispatch();

    const talisman = useSelector(selectTalisman);

    const [isConflict, setIsConflict] = useState(false);
    const [conflictTalisman, setConflictTalisman] = useState("");
    const TalismanSlots: string[] = ["talisman1", "talisman2", "talisman3", "talisman4"];

    const setSelectedTalisman = (value: string, slot: string) => {
        const conflicts: number[] = [];
        const otherSlots = TalismanSlots.filter(item => item !== slot);
        for (let s in otherSlots) {
            const slot = otherSlots[s] as keyof TalismanStateType
            talisman[slot] && conflicts.push(TalismansData[talisman[slot]]["accessoryGroup"]);
        }

        if (value && !conflicts.includes(TalismansData[value]["accessoryGroup"])) {
            dispatch(talismanReduceractionsMap[slot as keyof TalismanReduceractionsMapType](value));
        } else if (value && conflicts.includes(TalismansData[value]["accessoryGroup"])) {
            dispatch(talismanReduceractionsMap[slot as keyof TalismanReduceractionsMapType](""));
            setIsConflict(true);
            setConflictTalisman(value);
        } else {
            dispatch(talismanReduceractionsMap[slot as keyof TalismanReduceractionsMapType](""));
        }
    };

    const closeDialog = () => {
        setIsConflict(false);
        setConflictTalisman("");
    };

    return (
        <div className="TalismanSubSection">
            {isConflict && (
                <Dialog className="dialog__conflict" callback={closeDialog}>
                    <DialogMain>
                        <DialogIcon>
                            <MdWarningAmber />
                        </DialogIcon>
                        <DialogContent>
                            <h3>Conflict detected!</h3>

                            <div className="divider-4" />

                            <p>
                                The selected Talisman <span style={{ color: "white" }}>{`"${conflictTalisman}"`}</span> is in conflict with a Talisman in a different slot.
                            </p>

                            <div className="divider-4" />
                        </DialogContent>
                    </DialogMain>
                    <DialogButtons>
                        <button
                            className="button"
                            type="button"
                            onClick={closeDialog}
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
                    options={TalismansOptions}
                    label={"Talisman " + slot.slice(-1)}
                    enableDelete={true}
                    searchable={true}
                />
            )}
        </div>
    )
}

export default TalismanSubSection