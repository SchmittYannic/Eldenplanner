import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
    useGetAttackElementCorrectParamQuery,
    useGetCalcCorrectGraphEzQuery,
    useGetCompatibleAowDataQuery,
    useGetConsumableDataQuery,
    useGetEffectDataQuery,
    useGetEquipParamProtectorQuery,
    useGetEquipParamWeaponQuery,
    useGetReinforceParamWeaponQuery,
    useGetStatusEffectDataQuery,
    useGetWeaponsDataQuery,
} from "src/features/charplanner/charplannerStaticDataSlice";
import { setIsFinalError } from "src/features/charplanner/charplannerDataSlice";

const Prefetch = () => {

    const dispatch = useDispatch();

    const currentVersion = String(import.meta.env.VITE_CHARPLANNER_DATA_VERSION);

    // Trigger all queries
    const { isFetching: isFetchingAttackElementCorrectParam, isError: isErrorAttackElementCorrectParam } = useGetAttackElementCorrectParamQuery(currentVersion);
    const { isFetching: isFetchingCalcCorrectGraphEz, isError: isErrorCalcCorrectGraphEz } = useGetCalcCorrectGraphEzQuery(currentVersion);
    const { isFetching: isFetchingCompatibleAowData, isError: isErrorCompatibleAowData } = useGetCompatibleAowDataQuery(currentVersion);
    const { isFetching: isFetchingConsumableData, isError: isErrorConsumableData } = useGetConsumableDataQuery(currentVersion);
    const { isFetching: isFetchingEffectData, isError: isErrorEffectData } = useGetEffectDataQuery(currentVersion);
    const { isFetching: isFetchingEquipParamProtector, isError: isErrorEquipParamProtector } = useGetEquipParamProtectorQuery(currentVersion);
    const { isFetching: isFetchingEquipParamWeapon, isError: isErrorEquipParamWeapon } = useGetEquipParamWeaponQuery(currentVersion);
    const { isFetching: isFetchingReinforceParamWeapon, isError: isErrorReinforceParamWeapon } = useGetReinforceParamWeaponQuery(currentVersion);
    const { isFetching: isFetchingStatusEffectData, isError: isErrorStatusEffectData } = useGetStatusEffectDataQuery(currentVersion);
    const { isFetching: isFetchingWeaponsData, isError: isErrorWeaponsData } = useGetWeaponsDataQuery(currentVersion);

    useEffect(() => {
        // if still fetching do nothing
        if (
            isFetchingAttackElementCorrectParam
            || isFetchingCalcCorrectGraphEz
            || isFetchingCompatibleAowData
            || isFetchingConsumableData
            || isFetchingEffectData
            || isFetchingEquipParamProtector
            || isFetchingEquipParamWeapon
            || isFetchingReinforceParamWeapon
            || isFetchingStatusEffectData
            || isFetchingWeaponsData
        ) {
            return
        }

        // if atleast on query has an error
        if (
            isErrorAttackElementCorrectParam
            || isErrorCalcCorrectGraphEz
            || isErrorCompatibleAowData
            || isErrorConsumableData
            || isErrorEffectData
            || isErrorEquipParamProtector
            || isErrorEquipParamWeapon
            || isErrorReinforceParamWeapon
            || isErrorStatusEffectData
            || isErrorWeaponsData
        ) {
            dispatch(setIsFinalError(true));
        }
    }, [
        isFetchingAttackElementCorrectParam,
        isFetchingCalcCorrectGraphEz,
        isFetchingCompatibleAowData,
        isFetchingConsumableData,
        isFetchingEffectData,
        isFetchingEquipParamProtector,
        isFetchingEquipParamWeapon,
        isFetchingReinforceParamWeapon,
        isFetchingStatusEffectData,
        isFetchingWeaponsData,
        isErrorAttackElementCorrectParam,
        isErrorCalcCorrectGraphEz,
        isErrorCompatibleAowData,
        isErrorConsumableData,
        isErrorEffectData,
        isErrorEquipParamProtector,
        isErrorEquipParamWeapon,
        isErrorReinforceParamWeapon,
        isErrorStatusEffectData,
        isErrorWeaponsData,
        dispatch,
    ])

    // useEffect(() => {
    //     //prefetch here
    //     store.dispatch(usersApiSlice.util.prefetch("getUsers", "usersList", { force: true }));
    //     store.dispatch(buildsApiSlice.util.prefetch("getAllBuilds", "buildsList", { force: true }));
    // }, []);

    return <Outlet />
}
export default Prefetch