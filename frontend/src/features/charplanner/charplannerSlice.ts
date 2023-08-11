import { ActionCreatorWithPayload, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type TalismanStateType = {
    talisman1: string,
    talisman2: string,
    talisman3: string,
    talisman4: string,
};

export type ArmorStateType = {
    head: string,
    chest: string,
    legs: string,
    hands: string,
};

const initialState = {
    general: {
        charactername: "Tarnished",
        startingclass: "Hero",
        greatrune: "",
        greatruneactive: false,
    },
    stats: {
        vigor: 14,
        mind: 9,
        endurance: 12,
        strength: 16,
        dexterity: 9,
        intelligence: 7,
        faith: 8,
        arcane: 11
    },
    armament: {
        lefthand1: {
            weapon: "",
            aow: "",
            affinity: "",
            upgrade: "",
        },
        lefthand2: {
            weapon: "",
            aow: "",
            affinity: "",
            upgrade: "",
        },
        lefthand3: {
            weapon: "",
            aow: "",
            affinity: "",
            upgrade: "",
        },
        righthand1: {
            weapon: "",
            aow: "",
            affinity: "",
            upgrade: "",
        },
        righthand2: {
            weapon: "",
            aow: "",
            affinity: "",
            upgrade: "",
        },
        righthand3: {
            weapon: "",
            aow: "",
            affinity: "",
            upgrade: "",
        },
        twohand: false,
    },
    armor: {
        head: "",
        chest: "",
        legs: "",
        hands: "",
    },
    talisman: {
        talisman1: "",
        talisman2: "",
        talisman3: "",
        talisman4: "",
    }
};

export const charplannerSlice = createSlice({
    name: "charplanner",
    initialState,
    reducers: {
        /* general */
        changeCharactername: (state, action) => {
            state.general.charactername = action.payload;
        },
        changeStartingclass: (state, action) => {
            state.general.startingclass = action.payload;
        },
        changeGreatrune: (state, action) => {
            state.general.greatrune = action.payload;
        },
        changeGreatruneactive: (state, action) => {
            state.general.greatruneactive = action.payload;
        },

        /* stats */

        changeVigor: (state, action) => {
            state.stats.vigor = action.payload;
        },
        changeMind: (state, action) => {
            state.stats.mind = action.payload;
        },
        changeEndurance: (state, action) => {
            state.stats.endurance = action.payload;
        },
        changeStrength: (state, action) => {
            state.stats.strength = action.payload;
        },
        changeDexterity: (state, action) => {
            state.stats.dexterity = action.payload;
        },
        changeIntelligence: (state, action) => {
            state.stats.intelligence = action.payload;
        },
        changeFaith: (state, action) => {
            state.stats.faith = action.payload;
        },
        changeArcane: (state, action) => {
            state.stats.arcane = action.payload;
        },

        /* armament */

        changeLefthand1Weapon: (state, action) => {
            state.armament.lefthand1.weapon = action.payload;
        },
        changeLefthand1Aow: (state, action) => {
            state.armament.lefthand1.aow = action.payload;
        },
        changeLefthand1Upgrade: (state, action) => {
            state.armament.lefthand1.upgrade = action.payload;
        },
        changeLefthand1Affinity: (state, action) => {
            state.armament.lefthand1.affinity = action.payload;
        },


        changeLefthand2Weapon: (state, action) => {
            state.armament.lefthand2.weapon = action.payload;
        },
        changeLefthand2Aow: (state, action) => {
            state.armament.lefthand2.aow = action.payload;
        },
        changeLefthand2Upgrade: (state, action) => {
            state.armament.lefthand2.upgrade = action.payload;
        },
        changeLefthand2Affinity: (state, action) => {
            state.armament.lefthand2.affinity = action.payload;
        },


        changeLefthand3Weapon: (state, action) => {
            state.armament.lefthand3.weapon = action.payload;
        },
        changeLefthand3Aow: (state, action) => {
            state.armament.lefthand3.aow = action.payload;
        },
        changeLefthand3Upgrade: (state, action) => {
            state.armament.lefthand3.upgrade = action.payload;
        },
        changeLefthand3Affinity: (state, action) => {
            state.armament.lefthand3.affinity = action.payload;
        },


        changeRighthand1Weapon: (state, action) => {
            state.armament.righthand1.weapon = action.payload;
        },
        changeRighthand1Aow: (state, action) => {
            state.armament.righthand1.aow = action.payload;
        },
        changeRighthand1Upgrade: (state, action) => {
            state.armament.righthand1.upgrade = action.payload;
        },
        changeRighthand1Affinity: (state, action) => {
            state.armament.righthand1.affinity = action.payload;
        },


        changeRighthand2Weapon: (state, action) => {
            state.armament.righthand2.weapon = action.payload;
        },
        changeRighthand2Aow: (state, action) => {
            state.armament.righthand2.aow = action.payload;
        },
        changeRighthand2Upgrade: (state, action) => {
            state.armament.righthand2.upgrade = action.payload;
        },
        changeRighthand2Affinity: (state, action) => {
            state.armament.righthand2.affinity = action.payload;
        },


        changeRighthand3Weapon: (state, action) => {
            state.armament.righthand3.weapon = action.payload;
        },
        changeRighthand3Aow: (state, action) => {
            state.armament.righthand3.aow = action.payload;
        },
        changeRighthand3Upgrade: (state, action) => {
            state.armament.righthand3.upgrade = action.payload;
        },
        changeRighthand3Affinity: (state, action) => {
            state.armament.righthand3.affinity = action.payload;
        },

        changeTwohand: (state, action) => {
            state.armament.twohand = action.payload;
        },

        /* Talisman */

        changeTalisman1: (state, action) => {
            state.talisman.talisman1 = action.payload;
        },
        changeTalisman2: (state, action) => {
            state.talisman.talisman2 = action.payload;
        },
        changeTalisman3: (state, action) => {
            state.talisman.talisman3 = action.payload;
        },
        changeTalisman4: (state, action) => {
            state.talisman.talisman4 = action.payload;
        },

        /* Armor */

        changeHead: (state, action) => {
            state.armor.head = action.payload;
        },
        changeChest: (state, action) => {
            state.armor.chest = action.payload;
        },
        changeHands: (state, action) => {
            state.armor.hands = action.payload;
        },
        changeLegs: (state, action) => {
            state.armor.legs = action.payload;
        },
    }
});

export const selectCharactername = (state: RootState) => state.charplanner.general.charactername;
export const selectStartingclass = (state: RootState) => state.charplanner.general.startingclass;
export const selectGreatrune = (state: RootState) => state.charplanner.general.greatrune;
export const selectGreatruneactive = (state: RootState) => state.charplanner.general.greatruneactive;


export const selectVigor = (state: RootState) => state.charplanner.stats.vigor;
export const selectMind = (state: RootState) => state.charplanner.stats.mind;
export const selectEndurance = (state: RootState) => state.charplanner.stats.endurance;
export const selectStrength = (state: RootState) => state.charplanner.stats.strength;
export const selectDexterity = (state: RootState) => state.charplanner.stats.dexterity;
export const selectIntelligence = (state: RootState) => state.charplanner.stats.intelligence;
export const selectFaith = (state: RootState) => state.charplanner.stats.faith;
export const selectArcane = (state: RootState) => state.charplanner.stats.arcane;


export const selectLefthand1Weapon = (state: RootState) => state.charplanner.armament.lefthand1.weapon;
export const selectLefthand1Aow = (state: RootState) => state.charplanner.armament.lefthand1.aow;
export const selectLefthand1Upgrade = (state: RootState) => state.charplanner.armament.lefthand1.upgrade;
export const selectLefthand1Affinity = (state: RootState) => state.charplanner.armament.lefthand1.affinity;

export const selectLefthand2Weapon = (state: RootState) => state.charplanner.armament.lefthand2.weapon;
export const selectLefthand2Aow = (state: RootState) => state.charplanner.armament.lefthand2.aow;
export const selectLefthand2Upgrade = (state: RootState) => state.charplanner.armament.lefthand2.upgrade;
export const selectLefthand2Affinity = (state: RootState) => state.charplanner.armament.lefthand2.affinity;

export const selectLefthand3Weapon = (state: RootState) => state.charplanner.armament.lefthand3.weapon;
export const selectLefthand3Aow = (state: RootState) => state.charplanner.armament.lefthand3.aow;
export const selectLefthand3Upgrade = (state: RootState) => state.charplanner.armament.lefthand3.upgrade;
export const selectLefthand3Affinity = (state: RootState) => state.charplanner.armament.lefthand3.affinity;

export const selectRighthand1Weapon = (state: RootState) => state.charplanner.armament.righthand1.weapon;
export const selectRighthand1Aow = (state: RootState) => state.charplanner.armament.righthand1.aow;
export const selectRighthand1Upgrade = (state: RootState) => state.charplanner.armament.righthand1.upgrade;
export const selectRighthand1Affinity = (state: RootState) => state.charplanner.armament.righthand1.affinity;

export const selectRighthand2Weapon = (state: RootState) => state.charplanner.armament.righthand2.weapon;
export const selectRighthand2Aow = (state: RootState) => state.charplanner.armament.righthand2.aow;
export const selectRighthand2Upgrade = (state: RootState) => state.charplanner.armament.righthand2.upgrade;
export const selectRighthand2Affinity = (state: RootState) => state.charplanner.armament.righthand2.affinity;

export const selectRighthand3Weapon = (state: RootState) => state.charplanner.armament.righthand3.weapon;
export const selectRighthand3Aow = (state: RootState) => state.charplanner.armament.righthand3.aow;
export const selectRighthand3Upgrade = (state: RootState) => state.charplanner.armament.righthand3.upgrade;
export const selectRighthand3Affinity = (state: RootState) => state.charplanner.armament.righthand3.affinity;

export const selectTwohand = (state: RootState) => state.charplanner.armament.twohand;


export const selectTalisman = (state: RootState) => state.charplanner.talisman;
export const selectTalisman1 = (state: RootState) => state.charplanner.talisman.talisman1;
export const selectTalisman2 = (state: RootState) => state.charplanner.talisman.talisman2;
export const selectTalisman3 = (state: RootState) => state.charplanner.talisman.talisman3;
export const selectTalisman4 = (state: RootState) => state.charplanner.talisman.talisman4;

export const selectArmor = (state: RootState) => state.charplanner.armor;
export const selectHead = (state: RootState) => state.charplanner.armor.head;
export const selectChest = (state: RootState) => state.charplanner.armor.chest;
export const selectHands = (state: RootState) => state.charplanner.armor.hands;
export const selectLegs = (state: RootState) => state.charplanner.armor.legs;

export const statSelectorsMap = {
    vigor: selectVigor,
    mind: selectMind,
    endurance: selectEndurance,
    strength: selectStrength,
    dexterity: selectDexterity,
    intelligence: selectIntelligence,
    faith: selectFaith,
    arcane: selectArcane
};

export type ArmamentSelectorMapType = {
    lefthand1Weapon: (state: RootState) => string,
    lefthand1Aow: (state: RootState) => string,
    lefthand1Upgrade: (state: RootState) => string,
    lefthand1Affinity: (state: RootState) => string,
    lefthand2Weapon: (state: RootState) => string,
    lefthand2Aow: (state: RootState) => string,
    lefthand2Upgrade: (state: RootState) => string,
    lefthand2Affinity: (state: RootState) => string,
    lefthand3Weapon: (state: RootState) => string,
    lefthand3Aow: (state: RootState) => string,
    lefthand3Upgrade: (state: RootState) => string,
    lefthand3Affinity: (state: RootState) => string,
    righthand1Weapon: (state: RootState) => string,
    righthand1Aow: (state: RootState) => string,
    righthand1Upgrade: (state: RootState) => string,
    righthand1Affinity: (state: RootState) => string,
    righthand2Weapon: (state: RootState) => string,
    righthand2Aow: (state: RootState) => string,
    righthand2Upgrade: (state: RootState) => string,
    righthand2Affinity: (state: RootState) => string,
    righthand3Weapon: (state: RootState) => string,
    righthand3Aow: (state: RootState) => string,
    righthand3Upgrade: (state: RootState) => string,
    righthand3Affinity: (state: RootState) => string,
};

export const armamentSelectorMap: ArmamentSelectorMapType = {
    lefthand1Weapon: selectLefthand1Weapon,
    lefthand1Aow: selectLefthand1Aow,
    lefthand1Upgrade: selectLefthand1Upgrade,
    lefthand1Affinity: selectLefthand1Affinity,
    lefthand2Weapon: selectLefthand2Weapon,
    lefthand2Aow: selectLefthand2Aow,
    lefthand2Upgrade: selectLefthand2Upgrade,
    lefthand2Affinity: selectLefthand2Affinity,
    lefthand3Weapon: selectLefthand3Weapon,
    lefthand3Aow: selectLefthand3Aow,
    lefthand3Upgrade: selectLefthand3Upgrade,
    lefthand3Affinity: selectLefthand3Affinity,
    righthand1Weapon: selectRighthand1Weapon,
    righthand1Aow: selectRighthand1Aow,
    righthand1Upgrade: selectRighthand1Upgrade,
    righthand1Affinity: selectRighthand1Affinity,
    righthand2Weapon: selectRighthand2Weapon,
    righthand2Aow: selectRighthand2Aow,
    righthand2Upgrade: selectRighthand2Upgrade,
    righthand2Affinity: selectRighthand2Affinity,
    righthand3Weapon: selectRighthand3Weapon,
    righthand3Aow: selectRighthand3Aow,
    righthand3Upgrade: selectRighthand3Upgrade,
    righthand3Affinity: selectRighthand3Affinity,
};

export const { 
    changeCharactername,
    changeStartingclass,
    changeGreatrune,
    changeGreatruneactive,
    changeVigor,
    changeMind,
    changeEndurance,
    changeStrength,
    changeDexterity,
    changeIntelligence,
    changeFaith,
    changeArcane,
    changeLefthand1Weapon,
    changeLefthand1Aow,
    changeLefthand1Upgrade,
    changeLefthand1Affinity,
    changeLefthand2Weapon,
    changeLefthand2Aow,
    changeLefthand2Upgrade,
    changeLefthand2Affinity,
    changeLefthand3Weapon,
    changeLefthand3Aow,
    changeLefthand3Upgrade,
    changeLefthand3Affinity,
    changeRighthand1Weapon,
    changeRighthand1Aow,
    changeRighthand1Upgrade,
    changeRighthand1Affinity,
    changeRighthand2Weapon,
    changeRighthand2Aow,
    changeRighthand2Upgrade,
    changeRighthand2Affinity,
    changeRighthand3Weapon,
    changeRighthand3Aow,
    changeRighthand3Upgrade,
    changeRighthand3Affinity,
    changeTwohand,
    changeTalisman1,
    changeTalisman2,
    changeTalisman3,
    changeTalisman4,
    changeHead,
    changeChest,
    changeHands,
    changeLegs
} = charplannerSlice.actions;

export const statReduceractionsMap = {
    vigor: changeVigor,
    mind: changeMind,
    endurance: changeEndurance,
    strength: changeStrength,
    dexterity: changeDexterity,
    intelligence: changeIntelligence,
    faith: changeFaith,
    arcane: changeArcane
};

export type ArmamentReduceractionsMapType = {
    lefthand1Weapon: ActionCreatorWithPayload<any, string>,
    lefthand1Aow: ActionCreatorWithPayload<any, string>,
    lefthand1Upgrade: ActionCreatorWithPayload<any, string>,
    lefthand1Affinity: ActionCreatorWithPayload<any, string>,
    lefthand2Weapon: ActionCreatorWithPayload<any, string>,
    lefthand2Aow: ActionCreatorWithPayload<any, string>,
    lefthand2Upgrade: ActionCreatorWithPayload<any, string>,
    lefthand2Affinity: ActionCreatorWithPayload<any, string>,
    lefthand3Weapon: ActionCreatorWithPayload<any, string>,
    lefthand3Aow: ActionCreatorWithPayload<any, string>,
    lefthand3Upgrade: ActionCreatorWithPayload<any, string>,
    lefthand3Affinity: ActionCreatorWithPayload<any, string>,
    righthand1Weapon: ActionCreatorWithPayload<any, string>,
    righthand1Aow: ActionCreatorWithPayload<any, string>,
    righthand1Upgrade: ActionCreatorWithPayload<any, string>,
    righthand1Affinity: ActionCreatorWithPayload<any, string>,
    righthand2Weapon: ActionCreatorWithPayload<any, string>,
    righthand2Aow: ActionCreatorWithPayload<any, string>,
    righthand2Upgrade: ActionCreatorWithPayload<any, string>,
    righthand2Affinity: ActionCreatorWithPayload<any, string>,
    righthand3Weapon: ActionCreatorWithPayload<any, string>,
    righthand3Aow: ActionCreatorWithPayload<any, string>,
    righthand3Upgrade: ActionCreatorWithPayload<any, string>,
    righthand3Affinity: ActionCreatorWithPayload<any, string>,
};

export const armamentReduceractionsMap: ArmamentReduceractionsMapType = {
    lefthand1Weapon: changeLefthand1Weapon,
    lefthand1Aow: changeLefthand1Aow,
    lefthand1Upgrade: changeLefthand1Upgrade,
    lefthand1Affinity: changeLefthand1Affinity,
    lefthand2Weapon: changeLefthand2Weapon,
    lefthand2Aow: changeLefthand2Aow,
    lefthand2Upgrade: changeLefthand2Upgrade,
    lefthand2Affinity: changeLefthand2Affinity,
    lefthand3Weapon: changeLefthand3Weapon,
    lefthand3Aow: changeLefthand3Aow,
    lefthand3Upgrade: changeLefthand3Upgrade,
    lefthand3Affinity: changeLefthand3Affinity,
    righthand1Weapon: changeRighthand1Weapon,
    righthand1Aow: changeRighthand1Aow,
    righthand1Upgrade: changeRighthand1Upgrade,
    righthand1Affinity: changeRighthand1Affinity,
    righthand2Weapon: changeRighthand2Weapon,
    righthand2Aow: changeRighthand2Aow,
    righthand2Upgrade: changeRighthand2Upgrade,
    righthand2Affinity: changeRighthand2Affinity,
    righthand3Weapon: changeRighthand3Weapon,
    righthand3Aow: changeRighthand3Aow,
    righthand3Upgrade: changeRighthand3Upgrade,
    righthand3Affinity: changeRighthand3Affinity,
};

export type TalismanReduceractionsMapType = {
    talisman1: ActionCreatorWithPayload<any, string>,
    talisman2: ActionCreatorWithPayload<any, string>,
    talisman3: ActionCreatorWithPayload<any, string>,
    talisman4: ActionCreatorWithPayload<any, string>,
};

export const talismanReduceractionsMap: TalismanReduceractionsMapType = {
    talisman1: changeTalisman1,
    talisman2: changeTalisman2,
    talisman3: changeTalisman3,
    talisman4: changeTalisman4,
};

export type ArmorReduceractionsMapType = {
    head: ActionCreatorWithPayload<any, string>,
    chest: ActionCreatorWithPayload<any, string>,
    hands: ActionCreatorWithPayload<any, string>,
    legs: ActionCreatorWithPayload<any, string>,
};

export const armorReduceractionsMap: ArmorReduceractionsMapType = {
    head: changeHead,
    chest: changeChest,
    hands: changeHands,
    legs: changeLegs,
};

export default charplannerSlice.reducer;