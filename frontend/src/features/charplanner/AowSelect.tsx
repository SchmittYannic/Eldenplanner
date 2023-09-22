import { ReactElement, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    armamentSelectorMap,
    armamentReduceractionsMap,
    ArmamentSelectorMapType,
    ArmamentReduceractionsMapType
} from "./charplannerSlice";
import { CompatibleAow } from "../../../data/CompatibleAow";
import { CustomSelect } from "../../components/ui";

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
        if (weapon === "") {
            setDisableAow(true);
            setAowOptions([]);
            setAow("");
        } else {
            const compatibleAow = CompatibleAow[weapon];
            const defaultAowName = compatibleAow["Default Ash of War"];
            const aowKeys = Object.keys(compatibleAow).filter(option => option !== "Default Ash of War");
            const aowOptionNames = aowKeys.map((keyName) => compatibleAow[keyName]).filter(option => option !== "");
            aowOptionNames.length === 0 ? setDisableAow(true) : setDisableAow(false);
            setAowOptions(aowOptionNames);
            setAow(defaultAowName);
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