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
        vigor: "",
        mind: "",
        endurance: "",
        strength: "",
        dexterity: "",
        intelligence: "",
        faith: "",
        arcane: "",
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
    }
});

export const selectCharactername = (state: RootState) => state.charplanner.general.charactername;
export const selectStartingclass = (state: RootState) => state.charplanner.general.startingclass;
export const selectGreatrune = (state: RootState) => state.charplanner.general.greatrune;
export const selectGreatruneactive = (state: RootState) => state.charplanner.general.greatruneactive;

export const { 
    changeCharactername,
    changeStartingclass,
    changeGreatrune,
    changeGreatruneactive 
} = charplannerSlice.actions;

export default charplannerSlice.reducer;