import { ReactElement } from "react";
import WeaponSelect from "./WeaponSelect";
import AowSelect from "./AowSelect";
import UpgradeSelect from "./UpgradeSelect";
import AffinitySelect from "./AffinitySelect";
import ARDisplay from "./ARDisplay";

type PropsType = {
    label: string
};

const Weaponslot = ({ label }: PropsType): ReactElement  => {

    const id = label.replace(/\s/g, '').toLowerCase();

    return (
        <div>
            <WeaponSelect id={id} label={label} />
            <ARDisplay id={id} />
            <div style={{ paddingLeft: ".7em", paddingRight: ".7em" }}>
                <AowSelect id={id} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                    <span style={{ paddingRight: ".1em"}}>
                        <UpgradeSelect id={id} />
                    </span>
                    <span style={{ paddingLeft: ".1em"}}>
                        <AffinitySelect id={id} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Weaponslot