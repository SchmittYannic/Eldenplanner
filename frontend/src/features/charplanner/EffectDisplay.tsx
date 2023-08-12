import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectGreatrune, selectGreatruneactive, selectTalisman } from "./charplannerSlice";
import { TalismansData } from "../../../data/TalismansData";
import { CollapsibleList } from "../../components/ui";

const EffectDisplay = (): ReactElement => {

    const greatrune = useSelector(selectGreatrune);
    const greatruneactive = useSelector(selectGreatruneactive);
    const { talisman1, talisman2, talisman3, talisman4 } = useSelector(selectTalisman);

    type greatRuneDataType = {
        [key: string]: {effect: string}
    }

    const greatruneData: greatRuneDataType = {
        "Godrick's Great Rune": {
            effect: "Raises all attributes by 5"
        },
        "Malenia's Great Rune": {
            effect: "Attacks recover HP after damage is taken"
        },
        "Radahn's Great Rune": {
            effect: "Raises maximum HP, FP and stamina by 15%"
        },
        "Morgott's Great Rune": {
            effect: "Greatly raises maximum HP by 25%"
        },
        "Rykard's Great Rune": {
            effect: "Restores HP upon defeating enemies"
        },
        "Mohg's Great Rune": {
            effect: "Grants a blessing of blood to phantoms"
        }
    };

    const setEffectList = (): string[] => {
        let list = [];
        greatruneactive && greatrune && list.push("Great Rune: " + greatruneData[greatrune]["effect"]);
        talisman1 && list.push("Talisman 1: " + TalismansData[talisman1]["summary"]);
        talisman2 && list.push("Talisman 2: " + TalismansData[talisman2]["summary"]);
        talisman3 && list.push("Talisman 3: " + TalismansData[talisman3]["summary"]);
        talisman4 && list.push("Talisman 4: " + TalismansData[talisman4]["summary"]);
        return list
    };

    const activeEffects = setEffectList();

    return (
        <CollapsibleList heading={"Active Effects"} items={activeEffects} />
    )
}

export default EffectDisplay