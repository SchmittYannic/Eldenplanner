import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    armamentSelectorMap,
    armamentReduceractionsMap,
    ArmamentSelectorMapType,
    ArmamentReduceractionsMapType
} from "./charplannerSlice";
import { WeaponsData } from "../../../data/WeaponsData";
import { AffinityOptions } from "../../../data/AffinityData"
import { CustomSelect } from "../../components/ui";

type PropsType = {
    id: string
};

const AffinitySelect = ({ id }: PropsType): ReactElement => {

    const dispatch = useDispatch();

    const idWeapon = id + "Weapon";
    const idAffinity = id + "Affinity";

    const weapon = useSelector(armamentSelectorMap[(idWeapon) as keyof ArmamentSelectorMapType]);
    const affinity = useSelector(armamentSelectorMap[(idAffinity) as keyof ArmamentSelectorMapType]);

    const setAffinity = (input: string) => dispatch(armamentReduceractionsMap[idAffinity as keyof ArmamentReduceractionsMapType](input));

    const [disableAffinity, setDisableAffinity] = useState(true);

    useEffect(() => {
        if (weapon === "") {
            setDisableAffinity(true);
            setAffinity("");
        } else {
            const isInfuse = WeaponsData[weapon]["isInfuse"];
            isInfuse ? setDisableAffinity(false) : setDisableAffinity(true);
            !isInfuse && setAffinity("");
        }
    }, [weapon]);

    return (
        <CustomSelect
            id={idAffinity}
            value={affinity}
            setValue={setAffinity}
            options={AffinityOptions}
            className={disableAffinity ? "customselect style1 disabled" : "customselect style1"}
            label="Imbue"
            enableDelete={true}
            searchable={true}
            disabled={disableAffinity}
        />
    )
}

export default AffinitySelect