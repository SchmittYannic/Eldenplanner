import { Outlet } from "react-router-dom";

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

const Prefetch = () => {

    const currentDataVersion = String(import.meta.env.VITE_CHARPLANNER_DATA_VERSION);

    // Trigger all queries
    // Not using prefetch because this way it uses auto retries
    useGetAttackElementCorrectParamQuery(currentDataVersion);
    useGetCalcCorrectGraphEzQuery(currentDataVersion);
    useGetCompatibleAowDataQuery(currentDataVersion);
    useGetConsumableDataQuery(currentDataVersion);
    useGetEffectDataQuery(currentDataVersion);
    useGetEquipParamProtectorQuery(currentDataVersion);
    useGetEquipParamWeaponQuery(currentDataVersion);
    useGetReinforceParamWeaponQuery(currentDataVersion);
    useGetStatusEffectDataQuery(currentDataVersion);
    useGetWeaponsDataQuery(currentDataVersion);

    // useEffect(() => {
    //     // prefetch here
    //     store.dispatch(usersApiSlice.util.prefetch("getUsers", "usersList", { force: true }));
    //     store.dispatch(buildsApiSlice.util.prefetch("getAllBuilds", "buildsList", { force: true }));
    // }, []);

    return <Outlet />
}
export default Prefetch