import { ActionCreatorWithPayload, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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
        changeTwohand: (state, action) => {
            state.armament.twohand = action.payload;
        }
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
export const selectRighthand1Weapon = (state: RootState) => state.charplanner.armament.righthand1.weapon;
export const selectRighthand1Aow = (state: RootState) => state.charplanner.armament.righthand1.aow;
export const selectRighthand1Upgrade = (state: RootState) => state.charplanner.armament.righthand1.upgrade;
export const selectRighthand1Affinity = (state: RootState) => state.charplanner.armament.righthand1.affinity;
export const selectTwohand = (state: RootState) => state.charplanner.armament.twohand;

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
    righthand1Weapon: (state: RootState) => string,
    righthand1Aow: (state: RootState) => string,
    righthand1Upgrade: (state: RootState) => string,
    righthand1Affinity: (state: RootState) => string,
};

export const armamentSelectorMap: ArmamentSelectorMapType = {
    lefthand1Weapon: selectLefthand1Weapon,
    lefthand1Aow: selectLefthand1Aow,
    lefthand1Upgrade: selectLefthand1Upgrade,
    lefthand1Affinity: selectLefthand1Affinity,
    righthand1Weapon: selectRighthand1Weapon,
    righthand1Aow: selectRighthand1Aow,
    righthand1Upgrade: selectRighthand1Upgrade,
    righthand1Affinity: selectRighthand1Affinity,
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
    changeRighthand1Weapon,
    changeRighthand1Aow,
    changeRighthand1Upgrade,
    changeRighthand1Affinity,
    changeTwohand
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
    righthand1Weapon: ActionCreatorWithPayload<any, string>,
    righthand1Aow: ActionCreatorWithPayload<any, string>,
    righthand1Upgrade: ActionCreatorWithPayload<any, string>,
    righthand1Affinity: ActionCreatorWithPayload<any, string>,
};

export const armamentReduceractionsMap: ArmamentReduceractionsMapType = {
    lefthand1Weapon: changeLefthand1Weapon,
    lefthand1Aow: changeLefthand1Aow,
    lefthand1Upgrade: changeLefthand1Upgrade,
    lefthand1Affinity: changeLefthand1Affinity,
    righthand1Weapon: changeRighthand1Weapon,
    righthand1Aow: changeRighthand1Aow,
    righthand1Upgrade: changeRighthand1Upgrade,
    righthand1Affinity: changeRighthand1Affinity,
};

export default charplannerSlice.reducer;