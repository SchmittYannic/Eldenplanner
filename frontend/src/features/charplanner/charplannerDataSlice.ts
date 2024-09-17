import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { charplannerStaticDataSlice } from "./charplannerStaticDataSlice";
import {
    AttackElementCorrectParamType,
    CalcCorrectGraphEzType,
    CompatibleAowDataType,
    ConsumableDataType,
    EffectDataType,
    EquipParamProtectorType,
    EquipParamWeaponType,
    ReinforceParamWeaponType,
    StatusEffectDataType,
    WeaponsDataType,
} from "src/types";
import { RootState } from "src/app/store";
import { isEmptyObject } from "src/utils/functions";

type CharplannerDataStateType = {
    isFinalError: boolean,
    isDataReady: boolean,
    AttackElementCorrectParam: AttackElementCorrectParamType,
    CalcCorrectGraphEz: CalcCorrectGraphEzType,
    CompatibleAowData: CompatibleAowDataType,
    ConsumableData: ConsumableDataType,
    EffectData: EffectDataType,
    EquipParamProtector: EquipParamProtectorType,
    EquipParamWeapon: EquipParamWeaponType,
    ReinforceParamWeapon: ReinforceParamWeaponType,
    StatusEffectData: StatusEffectDataType,
    WeaponsData: WeaponsDataType,
    dataLoading: {
        AttackElementCorrectParam: boolean;
        CalcCorrectGraphEz: boolean;
        CompatibleAowData: boolean;
        ConsumableData: boolean;
        EffectData: boolean;
        EquipParamProtector: boolean;
        EquipParamWeapon: boolean;
        ReinforceParamWeapon: boolean;
        StatusEffectData: boolean;
        WeaponsData: boolean;
    }
}

const initialState: CharplannerDataStateType = {
    isFinalError: false,
    isDataReady: false,
    AttackElementCorrectParam: {},
    CalcCorrectGraphEz: {},
    CompatibleAowData: {},
    ConsumableData: {},
    EffectData: {},
    EquipParamProtector: {},
    EquipParamWeapon: {},
    ReinforceParamWeapon: {},
    StatusEffectData: {},
    WeaponsData: {},
    dataLoading: {
        AttackElementCorrectParam: true,
        CalcCorrectGraphEz: true,
        CompatibleAowData: true,
        ConsumableData: true,
        EffectData: true,
        EquipParamProtector: true,
        EquipParamWeapon: true,
        ReinforceParamWeapon: true,
        StatusEffectData: true,
        WeaponsData: true
    }
}

export const charplannerDataSlice = createSlice({
    name: "charplannerData",
    initialState,
    reducers: {
        setIsFinalError(state, { payload }: PayloadAction<boolean>) {
            state.isFinalError = payload;
        },
    },
    extraReducers: (builder) => {
        const checkDataReady = (state: CharplannerDataStateType) => {
            const allDataLoaded = Object.values(state.dataLoading).every(loading => !loading);
            const allDataNotEmpty = [
                state.AttackElementCorrectParam,
                state.CalcCorrectGraphEz,
                state.CompatibleAowData,
                state.ConsumableData,
                state.EffectData,
                state.EquipParamProtector,
                state.EquipParamWeapon,
                state.ReinforceParamWeapon,
                state.StatusEffectData,
                state.WeaponsData
            ].every(entry => !isEmptyObject(entry));

            if (allDataLoaded) {
                state.isDataReady = allDataNotEmpty;
                state.isFinalError = !allDataNotEmpty;
            }
        };

        builder
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getAttackElementCorrectParam.matchFulfilled,
                (state, action) => {
                    state.AttackElementCorrectParam = action.payload;
                    state.dataLoading.AttackElementCorrectParam = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getCalcCorrectGraphEz.matchFulfilled,
                (state, action) => {
                    state.CalcCorrectGraphEz = action.payload;
                    state.dataLoading.CalcCorrectGraphEz = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getCompatibleAowData.matchFulfilled,
                (state, action) => {
                    state.CompatibleAowData = action.payload;
                    state.dataLoading.CompatibleAowData = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getConsumableData.matchFulfilled,
                (state, action) => {
                    state.ConsumableData = action.payload;
                    state.dataLoading.ConsumableData = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getEffectData.matchFulfilled,
                (state, action) => {
                    state.EffectData = action.payload;
                    state.dataLoading.EffectData = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getEquipParamProtector.matchFulfilled,
                (state, action) => {
                    state.EquipParamProtector = action.payload;
                    state.dataLoading.EquipParamProtector = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getEquipParamWeapon.matchFulfilled,
                (state, action) => {
                    state.EquipParamWeapon = action.payload;
                    state.dataLoading.EquipParamWeapon = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getReinforceParamWeapon.matchFulfilled,
                (state, action) => {
                    state.ReinforceParamWeapon = action.payload;
                    state.dataLoading.ReinforceParamWeapon = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getStatusEffectData.matchFulfilled,
                (state, action) => {
                    state.StatusEffectData = action.payload;
                    state.dataLoading.StatusEffectData = false;
                    checkDataReady(state);
                }
            )
            .addMatcher(
                charplannerStaticDataSlice.endpoints.getWeaponsData.matchFulfilled,
                (state, action) => {
                    state.WeaponsData = action.payload;
                    state.dataLoading.WeaponsData = false;
                    checkDataReady(state);
                }
            )
    }
});

export const {
    setIsFinalError,
} = charplannerDataSlice.actions;

export const selectIsDataReady = (state: RootState): boolean => state.charplannerData.isDataReady;
export const selectIsFinalError = (state: RootState): boolean => state.charplannerData.isFinalError;
export const selectAttackElementCorrectParam = (state: RootState): AttackElementCorrectParamType => state.charplannerData.AttackElementCorrectParam;
export const selectCalcCorrectGraphEz = (state: RootState): CalcCorrectGraphEzType => state.charplannerData.CalcCorrectGraphEz;
export const selectCompatibleAowData = (state: RootState): CompatibleAowDataType => state.charplannerData.CompatibleAowData;
export const selectConsumableData = (state: RootState): ConsumableDataType => state.charplannerData.ConsumableData;
export const selectEffectData = (state: RootState): EffectDataType => state.charplannerData.EffectData;
export const selectEquipParamProtector = (state: RootState): EquipParamProtectorType => state.charplannerData.EquipParamProtector;
export const selectEquipParamWeapon = (state: RootState): EquipParamWeaponType => state.charplannerData.EquipParamWeapon;
export const selectReinforceParamWeapon = (state: RootState): ReinforceParamWeaponType => state.charplannerData.ReinforceParamWeapon;
export const selectStatusEffectData = (state: RootState): StatusEffectDataType => state.charplannerData.StatusEffectData;
export const selectWeaponsData = (state: RootState): WeaponsDataType => state.charplannerData.WeaponsData;

export default charplannerDataSlice.reducer;