import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeChest, changeHands, changeHead, changeLegs, selectArmor } from "./charplannerSlice";
import { ChestOptions, HandsOptions, HeadOptions, LegsOptions } from "../../../data/ArmorData";
import { CustomSelect } from "../../components/ui";

const ArmorSubSection = (): ReactElement => {

    const dispatch = useDispatch();

    const armor = useSelector(selectArmor);

    const setHead = (value: string) => dispatch(changeHead(value));
    const setChest = (value: string) => dispatch(changeChest(value));
    const setHands = (value: string) => dispatch(changeHands(value));
    const setLegs = (value: string) => dispatch(changeLegs(value));

    return (
        <div className="ArmorSubSection">
            <CustomSelect
                id="head"
                value={armor.head}
                setValue={setHead}
                options={HeadOptions}
                label="Head"
                enableDelete={true}
                searchable={true}
            />
            <CustomSelect
                id="chest"
                value={armor.chest}
                setValue={setChest}
                options={ChestOptions}
                label="Chest"
                enableDelete={true}
                searchable={true}
            />
            <CustomSelect
                id="hands"
                value={armor.hands}
                setValue={setHands}
                options={HandsOptions}
                label="Hands"
                enableDelete={true}
                searchable={true}
            />
            <CustomSelect
                id="legs"
                value={armor.legs}
                setValue={setLegs}
                options={LegsOptions}
                label="Legs"
                enableDelete={true}
                searchable={true}
            />
        </div>
    )
}

export default ArmorSubSection