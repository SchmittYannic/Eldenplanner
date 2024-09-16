import { staticDataSlice } from "src/app/api/staticDataSlice";

export const charplannerStaticDataSlice = staticDataSlice.injectEndpoints({
    endpoints: builder => ({
        getAttackElementCorrectParam: builder.query({
            query: (version) => ({
                url: `/data/AttackElementCorrectParam-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getCalcCorrectGraphEz: builder.query({
            query: (version) => ({
                url: `/data/CalcCorrectGraphEz-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getCompatibleAowData: builder.query({
            query: (version) => ({
                url: `/data/CompatibleAowData-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getConsumableData: builder.query({
            query: (version) => ({
                url: `/data/ConsumableData-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getEffectData: builder.query({
            query: (version) => ({
                url: `/data/EffectData-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getEquipParamProtector: builder.query({
            query: (version) => ({
                url: `/data/EquipParamProtector-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getEquipParamWeapon: builder.query({
            query: (version) => ({
                url: `/data/EquipParamWeapon-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getReinforceParamWeapon: builder.query({
            query: (version) => ({
                url: `/data/ReinforceParamWeapon-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getStatusEffectData: builder.query({
            query: (version) => ({
                url: `/data/StatusEffectData-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        getWeaponsData: builder.query({
            query: (version) => ({
                url: `/data/WeaponsData-${version}.json`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
    })
});

export const {
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
} = charplannerStaticDataSlice;