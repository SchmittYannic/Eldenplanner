import { AffinityData, ArmorHeadData, ArmorChestData, ArmorHandsData, ArmorLegsData, TalismansData } from "./constants";
import { EffectDataType, EquipParamProtectorDataType, ItemEffectDataType } from "src/types";
import { ArmamentStateType, ArmorStateType, StatsStateType, TalismanStateType } from "src/features/charplanner/charplannerSlice";
import { RootState, store } from "src/app/store";

/*function rounds a number to a decimal place*/
function roundNumber(num: number | string, decimals = 0): number {
    if (typeof num === "string") throw new Error("num must be a number")
    let dec = Math.pow(10, decimals);
    return Math.round((num + Number.EPSILON) * dec) / dec;
}

/*function rounds a number down to a decimal place*/
function roundDownNumber(num: number, decimals = 0): number {
    let dec = Math.pow(10, decimals);
    return Math.floor((num + Number.EPSILON) * dec) / dec;
}

function calcCondition(
    EffectData: EffectDataType,
    slot: string, // EffectData_Active Column C
    isIgnore: boolean, // EffectData_Active Column D
    fallback: number, // EffectData_Active Zeile 1
    paramName: keyof ItemEffectDataType, // EffectData_Active Zeile 2
) {
    if (isIgnore) return fallback
    return EffectData[slot] ? EffectData[slot]?.[paramName] ?? fallback : fallback;
}

function calcSlotModifier(
    slot: string, // EffectData_Active Column C
    ignoreList: string[], // EffectData_Active Column A
    fallback: number,
    paramName: keyof ItemEffectDataType, // EffectData_Active Zeile 2
    lowHp: boolean,
    fullHp: boolean,
): number {

    const state: RootState = store.getState();
    const isFinalError = state.charplannerData.isFinalError;
    const isDataReady = state.charplannerData.isDataReady;

    if (!isDataReady && isFinalError) {
        return fallback;
    } else if (!isDataReady && !isFinalError) {
        return fallback;
    }

    const EffectData = state.charplannerData.EffectData;

    const isIgnore = ignoreList.includes(slot); // EffectData_Active Column D
    if (isIgnore) return fallback

    const conditionFallback = -1;
    const conditionHp = calcCondition(EffectData, slot, isIgnore, conditionFallback, "conditionHp");
    const conditionHpRate = calcCondition(EffectData, slot, isIgnore, conditionFallback, "conditionHpRate");

    if (conditionHp === -1 && conditionHpRate === -1) {
        return EffectData[slot] ? Number(EffectData[slot]?.[paramName]) ?? fallback : fallback;
    }
    if (conditionHp !== -1 && lowHp) {
        return EffectData[slot] ? Number(EffectData[slot]?.[paramName]) ?? fallback : fallback;
    }
    if (conditionHpRate !== -1 && fullHp) {
        return EffectData[slot] ? Number(EffectData[slot]?.[paramName]) ?? fallback : fallback;
    }

    return fallback
}

function calcModifier(
    head: string,
    chest: string,
    hands: string,
    legs: string,
    talisman1: string,
    talisman2: string,
    talisman3: string,
    talisman4: string,
    greatRune: string,
    greatruneactive: boolean,
    tear1: string,
    tear2: string,
    tearactive: boolean,
    rh1: string,
    rh2: string,
    rh3: string,
    lh1: string,
    lh2: string,
    lh3: string,
    rain: boolean,
    wet: boolean,
    lowHp: boolean,
    fullHp: boolean,
    fallback: 1 | 0,
    paramName: keyof ItemEffectDataType,
) {
    const ignoreList = ["Rakshasa's Great Katana", "Blue Dancer Charm", "Crucible Scale Talisman"];
    const headModifier = calcSlotModifier(head, ignoreList, fallback, paramName, lowHp, fullHp);
    const chestModifier = calcSlotModifier(chest, ignoreList, fallback, paramName, lowHp, fullHp);
    const handsModifier = calcSlotModifier(hands, ignoreList, fallback, paramName, lowHp, fullHp);
    const legsModifier = calcSlotModifier(legs, ignoreList, fallback, paramName, lowHp, fullHp);
    const talisman1Modifier = calcSlotModifier(talisman1, ignoreList, fallback, paramName, lowHp, fullHp);
    const talisman2Modifier = calcSlotModifier(talisman2, ignoreList, fallback, paramName, lowHp, fullHp);
    const talisman3Modifier = calcSlotModifier(talisman3, ignoreList, fallback, paramName, lowHp, fullHp);
    const talisman4Modifier = calcSlotModifier(talisman4, ignoreList, fallback, paramName, lowHp, fullHp);
    const greatRuneModifier = greatruneactive ? calcSlotModifier(greatRune, ignoreList, fallback, paramName, lowHp, fullHp) : fallback;
    const tear1Modifier = tearactive ? calcSlotModifier(tear1, ignoreList, fallback, paramName, lowHp, fullHp) : fallback;
    const tear2Modifier = tearactive ? calcSlotModifier(tear2, ignoreList, fallback, paramName, lowHp, fullHp) : fallback;
    const rh1Modifier = calcSlotModifier(rh1, ignoreList, fallback, paramName, lowHp, fullHp);
    const rh2Modifier = calcSlotModifier(rh2, ignoreList, fallback, paramName, lowHp, fullHp);
    const rh3Modifier = calcSlotModifier(rh3, ignoreList, fallback, paramName, lowHp, fullHp);
    const lh1Modifier = calcSlotModifier(lh1, ignoreList, fallback, paramName, lowHp, fullHp);
    const lh2Modifier = calcSlotModifier(lh2, ignoreList, fallback, paramName, lowHp, fullHp);
    const lh3Modifier = calcSlotModifier(lh3, ignoreList, fallback, paramName, lowHp, fullHp);
    const rainModifier = rain ? calcSlotModifier("rain", ignoreList, fallback, paramName, lowHp, fullHp) : fallback;
    const wetModifier = wet ? calcSlotModifier("wet", ignoreList, fallback, paramName, lowHp, fullHp) : fallback;

    if (fallback === 0) {
        //addition
        return headModifier + chestModifier + handsModifier + legsModifier + talisman1Modifier + talisman2Modifier + talisman3Modifier + talisman4Modifier + greatRuneModifier + tear1Modifier + tear2Modifier + rh1Modifier + rh2Modifier + rh3Modifier + lh1Modifier + lh2Modifier + lh3Modifier + rainModifier + wetModifier;
    } else {
        //multiplication
        return headModifier * chestModifier * handsModifier * legsModifier * talisman1Modifier * talisman2Modifier * talisman3Modifier * talisman4Modifier * greatRuneModifier * tear1Modifier * tear2Modifier * rh1Modifier * rh2Modifier * rh3Modifier * lh1Modifier * lh2Modifier * lh3Modifier * rainModifier * wetModifier;
    }
}

function calcAbsBase(
    headParam: EquipParamProtectorDataType | undefined,
    chestParam: EquipParamProtectorDataType | undefined,
    handsParam: EquipParamProtectorDataType | undefined,
    legsParam: EquipParamProtectorDataType | undefined,
    fallback: 1 | 0,
    paramName: keyof EquipParamProtectorDataType,
) {
    if (fallback === 0) {
        return (headParam ? Number(headParam[paramName]) : fallback)
            + (chestParam ? Number(chestParam[paramName]) : fallback)
            + (handsParam ? Number(handsParam[paramName]) : fallback)
            + (legsParam ? Number(legsParam[paramName]) : fallback)
            ;
    } else {
        return (headParam ? Number(headParam[paramName]) : fallback)
            * (chestParam ? Number(chestParam[paramName]) : fallback)
            * (handsParam ? Number(handsParam[paramName]) : fallback)
            * (legsParam ? Number(legsParam[paramName]) : fallback)
            ;
    }
}

function calcStatus(
    greatRune: string,
    greatRuneChecked: boolean,
    totalStats: StatsStateType,
    talismans: TalismanStateType,
    armor: ArmorStateType,
    armament: ArmamentStateType,
) {
    const state: RootState = store.getState();
    const isFinalError = state.charplannerData.isFinalError;
    const isDataReady = state.charplannerData.isDataReady;

    if (!isDataReady && isFinalError) {
        return ["!ERROR", ""];
    } else if (!isDataReady && !isFinalError) {
        return ["", ""];
    }

    const CalcCorrectGraphEz = state.charplannerData.CalcCorrectGraphEz;
    const EquipParamProtector = state.charplannerData.EquipParamProtector;
    const EquipParamWeapon = state.charplannerData.EquipParamWeapon;
    const WeaponsData = state.charplannerData.WeaponsData;

    /* these are currently constants but can be later controlled by the user input */
    const tear1 = "";
    const tear2 = "";
    const tearactive = false;
    const rain = false;
    const wet = false;
    const lowHp = false;
    const fullHp = false;


    const { vigor, mind, endurance, strength, dexterity, intelligence, faith, arcane } = totalStats;
    const totalAmount = vigor + mind + endurance + strength + dexterity + intelligence + faith + arcane;

    const { head, chest, hands, legs } = armor;
    const { talisman1, talisman2, talisman3, talisman4 } = talismans;
    const {
        righthand1: rh1,
        righthand2: rh2,
        righthand3: rh3,
        lefthand1: lh1,
        lefthand2: lh2,
        lefthand3: lh3,
    } = armament;

    const headParam = head ? EquipParamProtector[ArmorHeadData[head]] : undefined;
    const chestParam = chest ? EquipParamProtector[ArmorChestData[chest]] : undefined;
    const handsParam = hands ? EquipParamProtector[ArmorHandsData[hands]] : undefined;
    const legsParam = legs ? EquipParamProtector[ArmorLegsData[legs]] : undefined;

    const rh1Data = rh1.weapon ? WeaponsData[rh1.weapon] : undefined;
    const rh1AffinityId = rh1.affinity ? AffinityData[rh1.affinity] : 0;
    const rh1Param = rh1Data ? EquipParamWeapon[rh1Data["ID"] + rh1AffinityId] : undefined;
    const rh2Data = rh2.weapon ? WeaponsData[rh2.weapon] : undefined;
    const rh2AffinityId = rh2.affinity ? AffinityData[rh2.affinity] : 0;
    const rh2Param = rh2Data ? EquipParamWeapon[rh2Data["ID"] + rh2AffinityId] : undefined;
    const rh3Data = rh3.weapon ? WeaponsData[rh3.weapon] : undefined;
    const rh3AffinityId = rh3.affinity ? AffinityData[rh3.affinity] : 0;
    const rh3Param = rh3Data ? EquipParamWeapon[rh3Data["ID"] + rh3AffinityId] : undefined;
    const lh1Data = lh1.weapon ? WeaponsData[lh1.weapon] : undefined;
    const lh1AffinityId = lh1.affinity ? AffinityData[lh1.affinity] : 0;
    const lh1Param = lh1Data ? EquipParamWeapon[lh1Data["ID"] + lh1AffinityId] : undefined;
    const lh2Data = lh2.weapon ? WeaponsData[lh2.weapon] : undefined;
    const lh2AffinityId = lh2.affinity ? AffinityData[lh2.affinity] : 0;
    const lh2Param = lh2Data ? EquipParamWeapon[lh2Data["ID"] + lh2AffinityId] : undefined;
    const lh3Data = lh3.weapon ? WeaponsData[lh3.weapon] : undefined;
    const lh3AffinityId = lh3.affinity ? AffinityData[lh3.affinity] : 0;
    const lh3Param = lh3Data ? EquipParamWeapon[lh3Data["ID"] + lh3AffinityId] : undefined;


    const head_weight = headParam ? headParam["weight"] : 0;  //F2
    const chest_weight = chestParam ? chestParam["weight"] : 0;  //F3
    const hands_weight = handsParam ? handsParam["weight"] : 0;  //F4
    const legs_weight = legsParam ? legsParam["weight"] : 0;  //F5
    const talisman1_weight = talisman1 ? TalismansData[talisman1]["weight"] : 0;  //F7
    const talisman2_weight = talisman2 ? TalismansData[talisman2]["weight"] : 0;  //F8
    const talisman3_weight = talisman3 ? TalismansData[talisman3]["weight"] : 0;  //F9
    const talisman4_weight = talisman4 ? TalismansData[talisman4]["weight"] : 0;  //F10
    const rh1_weight = rh1Param ? rh1Param["weight"] : 0;  //F15
    const rh2_weight = rh2Param ? rh2Param["weight"] : 0;  //F16
    const rh3_weight = rh3Param ? rh3Param["weight"] : 0;  //F17
    const lh1_weight = lh1Param ? lh1Param["weight"] : 0;  //F18
    const lh2_weight = lh2Param ? lh2Param["weight"] : 0;  //F19
    const lh3_weight = lh3Param ? lh3Param["weight"] : 0;  //F20

    const hp_base = Math.floor(CalcCorrectGraphEz["100"][vigor]);  //I2
    const fp_base = Math.floor(CalcCorrectGraphEz["101"][mind]);  //I3
    const stamina_base = Math.floor(CalcCorrectGraphEz["104"][endurance]);  //I4
    const equip_load_base = CalcCorrectGraphEz["220"][endurance];  //I5
    const dicovery_base = CalcCorrectGraphEz["140"][arcane];  //I6

    const physical_def = Math.floor(CalcCorrectGraphEz["102"][totalAmount] + CalcCorrectGraphEz["130"][strength]);  //I7
    const magic_def = Math.floor(CalcCorrectGraphEz["102"][totalAmount] + CalcCorrectGraphEz["132"][intelligence]);  //I8
    const fire_def = Math.floor(CalcCorrectGraphEz["102"][totalAmount] + CalcCorrectGraphEz["133"][vigor]);  //I9
    const lightning_def = Math.floor(CalcCorrectGraphEz["102"][totalAmount]);  //I10
    const holy_def = Math.floor(CalcCorrectGraphEz["102"][totalAmount] + CalcCorrectGraphEz["135"][arcane]);  //I11

    const immunity_base = Math.floor(CalcCorrectGraphEz["110"][totalAmount] + CalcCorrectGraphEz["120"][vigor]);  //I12
    const robustness_base = Math.floor(CalcCorrectGraphEz["112"][totalAmount] + CalcCorrectGraphEz["122"][endurance]);  //I13
    const focus_base = Math.floor(CalcCorrectGraphEz["114"][totalAmount] + CalcCorrectGraphEz["124"][mind]);  //I14
    const vitality_base = Math.floor(CalcCorrectGraphEz["116"][totalAmount] + CalcCorrectGraphEz["126"][arcane]);  //I15

    // J2 - J6
    const hp_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "maxHpRate");
    const fp_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "maxMpRate");
    const stamina_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "maxStaminaRate");
    const equip_load_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "equipWeightChangeRate");
    const discovery_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 0, "itemDropRate");

    // J12 - J15
    const immunity_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 0, "changePoisonResistPoint");
    const robustness_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 0, "changeBloodResistPoint");
    const focus_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 0, "changeSleepResistPoint");
    const vitality_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 0, "changeCurseResistPoint");

    const hp_total = Math.floor(hp_base * hp_modifier);  //K2
    const fp_total = Math.floor(fp_base * fp_modifier);  //K3
    const stamina_total = Math.floor(stamina_base * stamina_modifier);  //K4
    const equip_load_total = equip_load_base * equip_load_modifier;  //K5
    const discovery_total = dicovery_base + discovery_modifier;  //K6

    const immunity_total = immunity_base + immunity_modifier;  //K12
    const robustness_total = robustness_base + robustness_modifier;  //K13
    const focus_total = focus_base + focus_modifier;  //K14
    const vitality_total = vitality_base + vitality_modifier;  //K15

    const weight_total = head_weight + chest_weight + hands_weight + legs_weight
        + talisman1_weight + talisman2_weight + talisman3_weight + talisman4_weight
        + rh1_weight + rh2_weight + rh3_weight + lh1_weight + lh2_weight + lh3_weight
        ;  //F21
    const encumberance = roundNumber((weight_total / equip_load_total) * 100, 2);  //J20

    /*will be used for later -> optimizer. Commented out until its used*/
    /*
    const weight_left = weight_total<equip_load_total*0.3 ? roundDownNumber(equip_load_total*0.3-weight_total, 1)
        : weight_total<equip_load_total*0.7 ? roundDownNumber(equip_load_total*0.7-weight_total, 1)
        : weight_total<equip_load_total ? roundDownNumber(equip_load_total-weight_total, 1)
        : roundDownNumber(equip_load_total-weight_total, 1)
    ;*/  //I21

    const load_type = weight_total < equip_load_total * 0.3 ? "Light Load"
        : weight_total < equip_load_total * 0.7 ? "Med. Load"
            : weight_total < equip_load_total ? "Heavy Load" : "Overloaded"
        ;

    const head_poise = headParam ? headParam["toughnessCorrectRate"] * 1000 : 0;
    const chest_poise = chestParam ? chestParam["toughnessCorrectRate"] * 1000 : 0;
    const hands_poise = handsParam ? handsParam["toughnessCorrectRate"] * 1000 : 0;
    const legs_poise = legsParam ? legsParam["toughnessCorrectRate"] * 1000 : 0;
    const armor_poise = head_poise + chest_poise + legs_poise + hands_poise;  //J18
    const poise_talisman_modifier = (talisman1 === "Bull-Goat's Talisman" || talisman2 === "Bull-Goat's Talisman" || talisman3 === "Bull-Goat's Talisman" || talisman4 === "Bull-Goat's Talisman") ? 0.75 : 1;  //J18
    const poise_total = roundDownNumber(((armor_poise / 1000) / poise_talisman_modifier) * 1000, 2);
    const poise_total_ingame = roundNumber(((armor_poise / 1000) / poise_talisman_modifier) * 1000);

    const physical_abs_base = calcAbsBase(headParam, chestParam, handsParam, legsParam, 1, "neutralDamageCutRate"); // I23
    const strike_abs_base = calcAbsBase(headParam, chestParam, handsParam, legsParam, 1, "blowDamageCutRate");  //I24
    const slash_abs_base = calcAbsBase(headParam, chestParam, handsParam, legsParam, 1, "slashDamageCutRate");  //I25
    const pierce_abs_base = calcAbsBase(headParam, chestParam, handsParam, legsParam, 1, "thrustDamageCutRate");  //I26
    const magic_abs_base = calcAbsBase(headParam, chestParam, handsParam, legsParam, 1, "magicDamageCutRate"); //I27
    const fire_abs_base = calcAbsBase(headParam, chestParam, handsParam, legsParam, 1, "fireDamageCutRate");  //I28
    const lightning_abs_base = calcAbsBase(headParam, chestParam, handsParam, legsParam, 1, "thunderDamageCutRate");  //I29
    const holy_abs_base = calcAbsBase(headParam, chestParam, handsParam, legsParam, 1, "darkDamageCutRate");  //I30

    const physical_abs_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "neutralDamageCutRate");
    const strike_abs_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "blowDamageCutRate");
    const slash_abs_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "slashDamageCutRate");
    const pierce_abs_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "thrustDamageCutRate");
    const magic_abs_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "magicDamageCutRate");
    const fire_abs_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "fireDamageCutRate");
    const lightning_abs_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "thunderDamageCutRate");
    const holy_abs_modifier = calcModifier(head, chest, hands, legs, talisman1, talisman2, talisman3, talisman4, greatRune, greatRuneChecked, tear1, tear2, tearactive, rh1.weapon, rh2.weapon, rh3.weapon, lh1.weapon, lh2.weapon, lh3.weapon, rain, wet, lowHp, fullHp, 1, "darkDamageCutRate");

    const physical_abs_total = physical_abs_base * physical_abs_modifier;  //K23
    const strike_abs_total = strike_abs_base * strike_abs_modifier;  //K24
    const slash_abs_total = slash_abs_base * slash_abs_modifier;  //K25
    const pierce_abs_total = pierce_abs_base * pierce_abs_modifier;  //K26
    const magic_abs_total = magic_abs_base * magic_abs_modifier;  //K27
    const fire_abs_total = fire_abs_base * fire_abs_modifier;  //K28
    const lightning_abs_total = lightning_abs_base * lightning_abs_modifier;  //K29
    const holy_abs_total = holy_abs_base * holy_abs_modifier;  //K30

    const immunity_armor = calcAbsBase(headParam, chestParam, handsParam, legsParam, 0, "resistPoison");  //I31
    const robustness_armor = calcAbsBase(headParam, chestParam, handsParam, legsParam, 0, "resistBlood")  //I31
    const focus_armor = calcAbsBase(headParam, chestParam, handsParam, legsParam, 0, "resistSleep")  //I31
    const vitality_armor = calcAbsBase(headParam, chestParam, handsParam, legsParam, 0, "resistCurse")  //I31

    const immunity_final = immunity_total + immunity_armor;  //K31
    const robustness_final = robustness_total + robustness_armor;  //K32
    const focus_final = focus_total + focus_armor;  //K33
    const vitality_final = vitality_total + vitality_armor;  //K34

    const resultObject = {
        hp: hp_total,
        fp: fp_total,
        stamina: stamina_total,
        equipLoad: roundNumber(weight_total, 1) + " / " + roundNumber(equip_load_total, 1) + " (" + encumberance + "%)",
        loadType: load_type,
        poise: poise_total + " (" + poise_total_ingame + ")",
        discovery: roundNumber(discovery_total * 100, 2).toFixed(1),
        physicalDefense: physical_def,
        strikeDefense: physical_def,
        slashDefense: physical_def,
        pierceDefense: physical_def,
        magicDefense: magic_def,
        fireDefense: fire_def,
        lightningDefense: lightning_def,
        holyDefense: holy_def,
        physicalNegation: roundNumber(100 * (1 - physical_abs_total), 3),
        strikeNegation: roundNumber(100 * (1 - strike_abs_total), 3),
        slashNegation: roundNumber(100 * (1 - slash_abs_total), 3),
        pierceNegation: roundNumber(100 * (1 - pierce_abs_total), 3),
        magicNegation: roundNumber(100 * (1 - magic_abs_total), 3),
        fireNegation: roundNumber(100 * (1 - fire_abs_total), 3),
        lightningNegation: roundNumber(100 * (1 - lightning_abs_total), 3),
        holyNegation: roundNumber(100 * (1 - holy_abs_total), 3),
        immunityRes: immunity_final,
        robustnessRes: robustness_final,
        focusRes: focus_final,
        vitalityRes: vitality_final,
        immunityArmor: immunity_armor,
        robustnessArmor: robustness_armor,
        focusArmor: focus_armor,
        vitalityArmor: vitality_armor
    };

    return resultObject;
}

export default calcStatus