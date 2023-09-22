import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    armamentSelectorMap,
    armamentReduceractionsMap,
    ArmamentSelectorMapType,
    ArmamentReduceractionsMapType
} from "./charplannerSlice";
import { WeaponsData } from "../../../data/WeaponsData";
import { CustomSelect } from "../../components/ui";

type PropsType = {
    id: string
};

const UpgradeSelect = ({ id }: PropsType): ReactElement => {

    const dispatch = useDispatch();

    const idWeapon = id + "Weapon";
    const idUpgrade = id + "Upgrade";

    const weapon = useSelector(armamentSelectorMap[(idWeapon) as keyof ArmamentSelectorMapType]);
    const upgrade = useSelector(armamentSelectorMap[(idUpgrade) as keyof ArmamentSelectorMapType]);

    const setUpgrade = (input: string) => dispatch(armamentReduceractionsMap[idUpgrade as keyof ArmamentReduceractionsMapType](input));

    const [disableUpgrade, setDisableUpgrade] = useState(true);
    const [upgradeOptions, setUpgradeOptions] = useState<string[]>([]);

    useEffect(() => {
        if (weapon === "") {
            setDisableUpgrade(true);
            setUpgradeOptions([]);
            setUpgrade("0");
        } else {
            const UpgradeNormalOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
            const UpgradeSpecialOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
            const maxUpgrade = WeaponsData[weapon]["Max Upgrade"]
            const upgradeOptionsList = maxUpgrade === 25 ? UpgradeNormalOptions : UpgradeSpecialOptions;
            setUpgradeOptions(upgradeOptionsList);
            setUpgrade("0");
            setDisableUpgrade(false);
        }
    }, [weapon]);

    return (
        <CustomSelect
            id={idUpgrade}
            value={upgrade}
            setValue={setUpgrade}
            options={upgradeOptions}
            className={disableUpgrade ? "CustomSelect style1 disabled" : "CustomSelect style1"}
            label="0"
            disabled={disableUpgrade}
        />
    )
}

export default UpgradeSelect