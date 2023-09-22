import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArmorReduceractionsMapType, ArmorStateType, armorReduceractionsMap, selectArmor } from "./charplannerSlice";
import { ArmorOptions, accType } from "../../../data/ArmorData";
import { CustomSelect } from "../../components/ui";
import { capitalizeFirstLetter } from "../../utils/functions";

const ArmorSubSection = (): ReactElement => {

    const dispatch = useDispatch();

    const armor = useSelector(selectArmor);

    const setSelectedArmor = (value: string, slot: string) => {
        dispatch(armorReduceractionsMap[slot as keyof ArmorReduceractionsMapType](value));
    };

    return (
        <div className="ArmorSubSection">
            {Object.keys(ArmorOptions).map((slot, idx) => 
                <CustomSelect
                    key={idx}
                    id={slot}
                    value={armor[slot as keyof ArmorStateType]}
                    setValue={(value: string) => setSelectedArmor(value, slot)}
                    options={ArmorOptions[slot as keyof accType]}
                    label={capitalizeFirstLetter(slot)}
                    enableDelete={true}
                    searchable={true}
                />
            )}
        </div>
    )
}

export default ArmorSubSection