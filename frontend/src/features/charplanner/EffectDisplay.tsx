import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectArmor, selectGreatrune, selectGreatruneactive, selectTalisman } from "./charplannerSlice";
import { CollapsibleList } from "src/components/ui";
import { selectEffectData } from "./charplannerDataSlice";

const EffectDisplay = (): ReactElement => {

    const EffectData = useSelector(selectEffectData);
    const greatrune = useSelector(selectGreatrune);
    const greatruneactive = useSelector(selectGreatruneactive);
    const { talisman1, talisman2, talisman3, talisman4 } = useSelector(selectTalisman);
    const { head, chest, hands, legs } = useSelector(selectArmor);

    const fallbackUnknownEffect = "unknown effect";

    const setEffectList = (): string[] => {
        let list = [];
        greatruneactive && greatrune && list.push("Great Rune: " + (EffectData[greatrune]?.["Import Effects"] ?? fallbackUnknownEffect));
        talisman1 && list.push("Talisman 1: " + (EffectData[talisman1]?.["Import Effects"] ?? fallbackUnknownEffect));
        talisman2 && list.push("Talisman 2: " + (EffectData[talisman2]?.["Import Effects"] ?? fallbackUnknownEffect));
        talisman3 && list.push("Talisman 3: " + (EffectData[talisman3]?.["Import Effects"] ?? fallbackUnknownEffect));
        talisman4 && list.push("Talisman 4: " + (EffectData[talisman4]?.["Import Effects"] ?? fallbackUnknownEffect));
        head && EffectData[head]?.["Import Effects"] && list.push("Head: " + EffectData[head]?.["Import Effects"]);
        chest && EffectData[chest]?.["Import Effects"] && list.push("Chest: " + EffectData[chest]?.["Import Effects"]);
        hands && EffectData[hands]?.["Import Effects"] && list.push("Hands: " + EffectData[hands]?.["Import Effects"]);
        legs && EffectData[legs]?.["Import Effects"] && list.push("Legs: " + EffectData[legs]?.["Import Effects"]);
        return list
    };

    const activeEffects = setEffectList();

    return (
        <CollapsibleList heading={"Active Effects"} items={activeEffects} />
    )
}

export default EffectDisplay