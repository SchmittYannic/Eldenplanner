import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectArmor, selectGreatrune, selectGreatruneactive, selectTalisman } from "./charplannerSlice";
import { EffectData } from "../../../data/EffectData";
import { CollapsibleList } from "../../components/ui";

const EffectDisplay = (): ReactElement => {

    const greatrune = useSelector(selectGreatrune);
    const greatruneactive = useSelector(selectGreatruneactive);
    const { talisman1, talisman2, talisman3, talisman4 } = useSelector(selectTalisman);
    const { head, chest, hands, legs } = useSelector(selectArmor);

    const fallbackUnknownEffect = "unknown effect";

    const setEffectList = (): string[] => {
        let list = [];
        greatruneactive && greatrune && list.push("Great Rune: " + (EffectData[greatrune]?.["Ported Effects"] ?? fallbackUnknownEffect));
        talisman1 && list.push("Talisman 1: " + (EffectData[talisman1]?.["Ported Effects"] ?? fallbackUnknownEffect));
        talisman2 && list.push("Talisman 2: " + (EffectData[talisman2]?.["Ported Effects"] ?? fallbackUnknownEffect));
        talisman3 && list.push("Talisman 3: " + (EffectData[talisman3]?.["Ported Effects"] ?? fallbackUnknownEffect));
        talisman4 && list.push("Talisman 4: " + (EffectData[talisman4]?.["Ported Effects"] ?? fallbackUnknownEffect));
        head && EffectData[head]?.["Ported Effects"] && list.push("Head: " + EffectData[head]?.["Ported Effects"]);
        chest && EffectData[chest]?.["Ported Effects"] && list.push("Chest: " + EffectData[chest]?.["Ported Effects"]);
        hands && EffectData[hands]?.["Ported Effects"] && list.push("Hands: " + EffectData[hands]?.["Ported Effects"]);
        legs && EffectData[legs]?.["Ported Effects"] && list.push("Legs: " + EffectData[legs]?.["Ported Effects"]);
        return list
    };

    const activeEffects = setEffectList();

    return (
        <CollapsibleList heading={"Active Effects"} items={activeEffects} />
    )
}

export default EffectDisplay