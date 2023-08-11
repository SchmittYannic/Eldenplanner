import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTwohand, changeTwohand } from "./charplannerSlice";
import Weaponslot from "./Weaponslot";
import { Checkbox } from "../../components/ui";

const WeaponsSubSection = (): ReactElement => {
    const dispatch = useDispatch();

    const twohand: boolean = useSelector(selectTwohand);

    const setTwohand = (input: boolean) => dispatch(changeTwohand(input));

    return (
        <div className="WeaponsSubSection">
            <Weaponslot label={"Left Hand 1"} />
            <Weaponslot label={"Right Hand 1"} />
            <Weaponslot label={"Left Hand 2"} />
            <Weaponslot label={"Right Hand 2"} />
            <Weaponslot label={"Left Hand 3"} />
            <Weaponslot label={"Right Hand 3"} />
            <Checkbox label="Two Hand" checked={twohand} setChecked={setTwohand} />
        </div>
    )
}

export default WeaponsSubSection