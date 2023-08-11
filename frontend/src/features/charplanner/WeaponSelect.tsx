import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    armamentSelectorMap,
    armamentReduceractionsMap,
    ArmamentSelectorMapType,
    ArmamentReduceractionsMapType,
} from "./charplannerSlice";
import { WeaponsNames } from "../../../data/WeaponsData";
import { CustomSelect } from "../../components/ui";

type PropsType = {
    id: string,
    label: string
}

const WeaponSelect = ({ id, label }: PropsType): ReactElement => {
    const dispatch = useDispatch();

    const idWeapon = id + "Weapon";

    const weapon = useSelector(armamentSelectorMap[(idWeapon) as keyof ArmamentSelectorMapType]);

    const setWeapon = (input: string) => dispatch(armamentReduceractionsMap[idWeapon as keyof ArmamentReduceractionsMapType](input));

    return (
        <CustomSelect
            id={idWeapon}
            selectedOption={weapon}
            setSelectedOption={setWeapon}
            options={WeaponsNames}
            renderOption={(option: string) => <p className={option === weapon ? "SelectedOption" : ""}>{option}</p>}
            classes={""}
            label={label}
            enableDelete={true}
            searchable={true}
        />
    )
}

export default WeaponSelect