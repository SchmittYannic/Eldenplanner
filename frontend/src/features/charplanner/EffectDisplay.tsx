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
        greatruneactive && greatrune && list.push("Great Rune: " + (EffectData[greatrune]?.["Effects"] ?? fallbackUnknownEffect));
        talisman1 && list.push("Talisman 1: " + (EffectData[talisman1]?.["Effects"] ?? fallbackUnknownEffect));
        talisman2 && list.push("Talisman 2: " + (EffectData[talisman2]?.["Effects"] ?? fallbackUnknownEffect));
        talisman3 && list.push("Talisman 3: " + (EffectData[talisman3]?.["Effects"] ?? fallbackUnknownEffect));
        talisman4 && list.push("Talisman 4: " + (EffectData[talisman4]?.["Effects"] ?? fallbackUnknownEffect));
        head && EffectData[head]?.["Effects"] && list.push("Head: " + EffectData[head]?.["Effects"]);
        chest && EffectData[chest]?.["Effects"] && list.push("Chest: " + EffectData[chest]?.["Effects"]);
        hands && EffectData[hands]?.["Effects"] && list.push("Hands: " + EffectData[hands]?.["Effects"]);
        legs && EffectData[legs]?.["Effects"] && list.push("Legs: " + EffectData[legs]?.["Effects"]);
        return list
    };

    const activeEffects = setEffectList();

    return (
        <CollapsibleList heading={"Active Effects"} items={activeEffects} />
    )
}

export default EffectDisplay