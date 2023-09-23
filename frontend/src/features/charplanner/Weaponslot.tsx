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
        <div className="weaponslot">
            <WeaponSelect id={id} label={label} />
            <ARDisplay id={id} />
            <div className="weaponslot-details">
                <AowSelect id={id} />
                <div className="upgrade-affinity-wrapper">              
                    <UpgradeSelect id={id} />               
                    <AffinitySelect id={id} />
                </div>
            </div>
        </div>
    )
}

export default Weaponslot