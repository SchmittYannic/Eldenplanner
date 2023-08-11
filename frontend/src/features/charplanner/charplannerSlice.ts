import { createSlice } from "@reduxjs/toolkit";
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

export const selectorsMap = {
    vigor: selectVigor,
    mind: selectMind,
    endurance: selectEndurance,
    strength: selectStrength,
    dexterity: selectDexterity,
    intelligence: selectIntelligence,
    faith: selectFaith,
    arcane: selectArcane
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
    changeArcane
} = charplannerSlice.actions;

export const reduceractionsMap = {
    vigor: changeVigor,
    mind: changeMind,
    endurance: changeEndurance,
    strength: changeStrength,
    dexterity: changeDexterity,
    intelligence: changeIntelligence,
    faith: changeFaith,
    arcane: changeArcane
};

export default charplannerSlice.reducer;