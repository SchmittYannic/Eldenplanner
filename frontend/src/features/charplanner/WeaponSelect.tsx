import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    armamentSelectorMap,
    armamentReduceractionsMap,
    ArmamentSelectorMapType,
    ArmamentReduceractionsMapType,
} from "./charplannerSlice";
import { WeaponsOptions } from "../../../data/WeaponsData";
import { CustomSelect } from "../../components/ui";

type PropsType = {
    id: string,
    label: string
}

const WeaponSelect = ({ id, label }: PropsType): ReactElement => {
    const dispatch = useDispatch();

    const idWeapon = id + "Weapon";
    const idUpgrade = id + "Upgrade";
    const idAffinity = id + "Affinity";
    const idAow = id + "Aow";

    const weapon = useSelector(armamentSelectorMap[(idWeapon) as keyof ArmamentSelectorMapType]);

    const setWeapon = (input: string) => {
        dispatch(armamentReduceractionsMap[idUpgrade as keyof ArmamentReduceractionsMapType]("0"));
        dispatch(armamentReduceractionsMap[idAffinity as keyof ArmamentReduceractionsMapType](""));
        dispatch(armamentReduceractionsMap[idAow as keyof ArmamentReduceractionsMapType](""))
        dispatch(armamentReduceractionsMap[idWeapon as keyof ArmamentReduceractionsMapType](input));
    };

    const tooltipText = `Select Armament in ${id}`;

    return (
        <CustomSelect
            id={idWeapon}
            value={weapon}
            setValue={setWeapon}
            options={WeaponsOptions}
            label={label}
            enableDelete={true}
            searchable={true}
            title={tooltipText}
        />
    )
}

export default WeaponSelect