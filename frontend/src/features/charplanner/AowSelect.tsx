import { ReactElement, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    armamentSelectorMap,
    armamentReduceractionsMap,
    ArmamentSelectorMapType,
    ArmamentReduceractionsMapType
} from "./charplannerSlice";
import { CompatibleAowData } from "../../../data/CompatibleAowData";
import { CustomSelect } from "../../components/ui";
import { WeaponsData } from "../../../data/WeaponsData";

type PropsType = {
    id: string
}

const AowSelect = ({ id }: PropsType): ReactElement => {

    const dispatch = useDispatch();

    const idWeapon = id + "Weapon";
    const idAow = id + "Aow";

    const weapon = useSelector(armamentSelectorMap[(idWeapon) as keyof ArmamentSelectorMapType]);
    const aow = useSelector(armamentSelectorMap[(idAow) as keyof ArmamentSelectorMapType]);

    const setAow = (input: string) => dispatch(armamentReduceractionsMap[idAow as keyof ArmamentReduceractionsMapType](input));

    const [disableAow, setDisableAow] = useState(true);
    const [aowOptions, setAowOptions] = useState<string[]>([]);

    useEffect(() => {
        const weaponClass = weapon ? WeaponsData[weapon]["Weapon Class"] : undefined;
        const isInfuse = weapon ? WeaponsData[weapon]["isInfuse"] : undefined;
        const compatibleAow = weaponClass ? CompatibleAowData[weaponClass] : undefined;
        //const defaultAowName = "default"; // add into future dataset the default aow of weapons

        if (weapon === "" || !compatibleAow || compatibleAow.length === 0 || !isInfuse) {
            setDisableAow(true);
            setAowOptions([]);
            setAow("");
        } else {
            setDisableAow(false);
            setAowOptions(compatibleAow);
            setAow("");
        }
    }, [weapon])

    return (
        <CustomSelect
            id={idAow}
            value={aow}
            setValue={setAow}
            options={aowOptions}
            className={disableAow ? "customselect style1 disabled" : "customselect style1"}
            label="Ash of War"
            enableDelete={true}
            searchable={true}
            disabled={disableAow}
        />
    )
}

export default AowSelect