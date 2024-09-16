import { AffinityData } from "./constants";
import { StatsStateType } from "../features/charplanner/charplannerSlice";
import { RootState, store } from "src/app/store";

export function calcWeaponAttackRating(
    selectedWeapon: string,
    selectedUpgrade: string,
    selectedAffinity: string,
    totalStats: StatsStateType,
    twoHandChecked: boolean
): string[] {

    const state: RootState = store.getState();
    const isFinalError = state.charplannerData.isFinalError;
    const isDataReady = state.charplannerData.isDataReady;

    if (!isDataReady && isFinalError) {
        return ["!ERROR", ""];
    } else if (!isDataReady && !isFinalError) {
        return ["", ""];
    }

    const AttackElementCorrectParam = state.charplannerData.AttackElementCorrectParam;
    const CalcCorrectGraphEz = state.charplannerData.CalcCorrectGraphEz;
    const ConsumableData = state.charplannerData.ConsumableData;
    const EquipParamWeapon = state.charplannerData.EquipParamWeapon;
    const ReinforceParamWeapon = state.charplannerData.ReinforceParamWeapon;
    const StatusEffectData = state.charplannerData.StatusEffectData;
    const WeaponsData = state.charplannerData.WeaponsData;


    // console.log(
    //     "ARCalculation for weapon: " + selectedWeapon,
    // )

    const str = twoHandChecked ? Math.floor(1.5 * totalStats["strength"]) : totalStats["strength"];
    const dex = totalStats["dexterity"];
    const int = totalStats["intelligence"];
    const fai = totalStats["faith"];
    const arc = totalStats["arcane"];

    const weaponData = WeaponsData[selectedWeapon];

    const weaponId = weaponData["ID"] // PlannerData R2

    const weaponClass = weaponData["Weapon Class"];

    if (typeof weaponId === "undefined") {
        throw new Error(`Weapon ID for selected weapon (${selectedWeapon}) is undefined`);
    }

    const isThrowable = weaponData["throwable"]; // X2
    const affinityId = AffinityData[selectedAffinity] ?? 0 // PlannerData S2

    const weaponIdWithAffinity = weaponId + affinityId;

    if (isNaN(weaponIdWithAffinity)) {
        throw new Error(`Weapon ID with Affinity is not allowed to be NaN`);
    }

    const weaponParameter = EquipParamWeapon[weaponIdWithAffinity];

    const reinforceTypeId = weaponParameter["reinforceTypeId"]; // U2
    const reinforceFullId = reinforceTypeId + Number(selectedUpgrade);

    if (isNaN(reinforceFullId)) {
        throw new Error(`reinforceFullId is not allowed to be NaN`);
    }

    //weapon stat requirements
    const strReq = weaponParameter["properStrength"] ?? 0; // Y2
    const dexReq = weaponParameter["properAgility"] ?? 0; // Z2
    const intReq = weaponParameter["properMagic"] ?? 0; // AA2
    const faiReq = weaponParameter["properFaith"] ?? 0; // AB2
    const arcReq = weaponParameter["properLuck"] ?? 0; // AC2

    const isStrReq = str >= strReq; // AD2
    const isDexReq = dex >= dexReq; // AE2
    const isIntReq = int >= intReq; // AF2
    const isFaiReq = fai >= faiReq; // AG2
    const isArcReq = arc >= arcReq; // AH2

    // base ar portion of weapon without scaling
    const atkBasePhysical = isThrowable ? ConsumableData[selectedWeapon]["attackBasePhysics"] : weaponParameter["attackBasePhysics"];
    const atkBaseMagic = isThrowable ? ConsumableData[selectedWeapon]["attackBaseMagic"] : weaponParameter["attackBaseMagic"];
    const atkBaseFire = isThrowable ? ConsumableData[selectedWeapon]["attackBaseFire"] : weaponParameter["attackBaseFire"];
    const atkBaseLightning = isThrowable ? ConsumableData[selectedWeapon]["attackBaseThunder"] : weaponParameter["attackBaseThunder"];
    const atkBaseHoly = isThrowable ? ConsumableData[selectedWeapon]["attackBaseDark"] : weaponParameter["attackBaseDark"];

    const reinforcedWeaponParameter = ReinforceParamWeapon[reinforceFullId];

    const physicsAtkRate = reinforcedWeaponParameter["physicsAtkRate"];
    const magicAtkRate = reinforcedWeaponParameter["magicAtkRate"];
    const fireAtkRate = reinforcedWeaponParameter["fireAtkRate"];
    const lightningAtkRate = reinforcedWeaponParameter["thunderAtkRate"];
    const holyAtkRate = reinforcedWeaponParameter["darkAtkRate"];

    const atkPhysical = Math.round(atkBasePhysical * physicsAtkRate * 1000) / 1000; // AI2
    const atkMagic = Math.round(atkBaseMagic * magicAtkRate * 1000) / 1000; // AJ2
    const atkFire = Math.round(atkBaseFire * fireAtkRate * 1000) / 1000; // AK2
    const atkLightning = Math.round(atkBaseLightning * lightningAtkRate * 1000) / 1000; // AL2
    const atkHoly = Math.round(atkBaseHoly * holyAtkRate * 1000) / 1000; // AM2


    const correctBaseStr = weaponParameter["correctStrength"];
    const correctBaseDex = weaponParameter["correctAgility"];
    const correctBaseInt = weaponParameter["correctMagic"];
    const correctBaseFai = weaponParameter["correctFaith"];
    const correctBaseArc = weaponParameter["correctLuck"];

    const correctStrRate = reinforcedWeaponParameter["correctStrengthRate"];
    const correctDexRate = reinforcedWeaponParameter["correctAgilityRate"];
    const correctIntRate = reinforcedWeaponParameter["correctMagicRate"];
    const correctFaiRate = reinforcedWeaponParameter["correctFaithRate"];
    const correctArcRate = reinforcedWeaponParameter["correctLuckRate"];

    const correctStr = Math.round(correctBaseStr * correctStrRate * 1000) / 1000 ?? 0; // AN2
    const correctDex = Math.round(correctBaseDex * correctDexRate * 1000) / 1000 ?? 0; // AO2
    const correctInt = Math.round(correctBaseInt * correctIntRate * 1000) / 1000 ?? 0; // AP2
    const correctFai = Math.round(correctBaseFai * correctFaiRate * 1000) / 1000 ?? 0; // AQ2
    const correctArc = Math.round(correctBaseArc * correctArcRate * 1000) / 1000 ?? 0; // AR2

    const correctType_Physics = weaponParameter["correctType_Physics"]; // AY2
    const correctType_Magic = weaponParameter["correctType_Magic"]; // AZ2
    const correctType_Fire = weaponParameter["correctType_Fire"]; // BA2
    const correctType_Thunder = weaponParameter["correctType_Thunder"]; // BB2
    const correctType_Dark = weaponParameter["correctType_Dark"]; // BC2
    const correctType_Poison = weaponParameter["correctType_Poison"]; // BD2
    const correctType_Blood = weaponParameter["correctType_Blood"]; // BE2
    const correctType_Sleep = weaponParameter["correctType_Sleep"]; // BF2
    const correctType_Madness = weaponParameter["correctType_Madness"]; // BG2
    const AttackElementCorrectId = weaponParameter["attackElementCorrectId"]; // BH2

    // console.log(
    //     "correctType_Physics: " + correctType_Physics,
    //     "correctType_Magic: " + correctType_Magic,
    //     "correctType_Fire: " + correctType_Fire,
    //     "correctType_Thunder: " + correctType_Thunder,
    //     "correctType_Dark: " + correctType_Dark,
    //     "correctType_Poison: " + correctType_Poison,
    //     "correctType_Blood: " + correctType_Blood,
    //     "correctType_Sleep: " + correctType_Sleep,
    //     "correctType_Madness: " + correctType_Madness,
    //     "AttackElementCorrectId: " + AttackElementCorrectId,
    // )

    const weaponAttackElementCorrect = AttackElementCorrectParam[AttackElementCorrectId];

    const isStrengthCorrect_byPhysics = weaponAttackElementCorrect["isStrengthCorrect_byPhysics"];
    const isDexterityCorrect_byPhysics = weaponAttackElementCorrect["isDexterityCorrect_byPhysics"];
    const isMagicCorrect_byPhysics = weaponAttackElementCorrect["isMagicCorrect_byPhysics"];
    const isFaithCorrect_byPhysics = weaponAttackElementCorrect["isFaithCorrect_byPhysics"];
    const isLuckCorrect_byPhysics = weaponAttackElementCorrect["isLuckCorrect_byPhysics"];
    const isStrengthCorrect_byMagic = weaponAttackElementCorrect["isStrengthCorrect_byMagic"];
    const isDexterityCorrect_byMagic = weaponAttackElementCorrect["isDexterityCorrect_byMagic"];
    const isMagicCorrect_byMagic = weaponAttackElementCorrect["isMagicCorrect_byMagic"];
    const isFaithCorrect_byMagic = weaponAttackElementCorrect["isFaithCorrect_byMagic"];
    const isLuckCorrect_byMagic = weaponAttackElementCorrect["isLuckCorrect_byMagic"];
    const isStrengthCorrect_byFire = weaponAttackElementCorrect["isStrengthCorrect_byFire"];
    const isDexterityCorrect_byFire = weaponAttackElementCorrect["isDexterityCorrect_byFire"];
    const isMagicCorrect_byFire = weaponAttackElementCorrect["isMagicCorrect_byFire"];
    const isFaithCorrect_byFire = weaponAttackElementCorrect["isFaithCorrect_byFire"];
    const isLuckCorrect_byFire = weaponAttackElementCorrect["isLuckCorrect_byFire"];
    const isStrengthCorrect_byThunder = weaponAttackElementCorrect["isStrengthCorrect_byThunder"];
    const isDexterityCorrect_byThunder = weaponAttackElementCorrect["isDexterityCorrect_byThunder"];
    const isMagicCorrect_byThunder = weaponAttackElementCorrect["isMagicCorrect_byThunder"];
    const isFaithCorrect_byThunder = weaponAttackElementCorrect["isFaithCorrect_byThunder"];
    const isLuckCorrect_byThunder = weaponAttackElementCorrect["isLuckCorrect_byThunder"];
    const isStrengthCorrect_byDark = weaponAttackElementCorrect["isStrengthCorrect_byDark"];
    const isDexterityCorrect_byDark = weaponAttackElementCorrect["isDexterityCorrect_byDark"];
    const isMagicCorrect_byDark = weaponAttackElementCorrect["isMagicCorrect_byDark"];
    const isFaithCorrect_byDark = weaponAttackElementCorrect["isFaithCorrect_byDark"];
    const isLuckCorrect_byDark = weaponAttackElementCorrect["isLuckCorrect_byDark"];

    const CalcCorrectGraph_Physics = CalcCorrectGraphEz[correctType_Physics];
    const CalcCorrectGraph_Magic = CalcCorrectGraphEz[correctType_Magic];
    const CalcCorrectGraph_Fire = CalcCorrectGraphEz[correctType_Fire];
    const CalcCorrectGraph_Thunder = CalcCorrectGraphEz[correctType_Thunder];
    const CalcCorrectGraph_Dark = CalcCorrectGraphEz[correctType_Dark];

    const StrengthCorrect_byPhysics = isStrengthCorrect_byPhysics ? CalcCorrectGraph_Physics[str] : 0; // BI2
    const DexterityCorrect_byPhysics = isDexterityCorrect_byPhysics ? CalcCorrectGraph_Physics[dex] : 0;  // BN2
    const MagicCorrect_byPhysics = isMagicCorrect_byPhysics ? CalcCorrectGraph_Physics[int] : 0; // BS2
    const FaithCorrect_byPhysics = isFaithCorrect_byPhysics ? CalcCorrectGraph_Physics[fai] : 0; // BX2
    const LuckCorrect_byPhysics = isLuckCorrect_byPhysics ? CalcCorrectGraph_Physics[arc] : 0;  // CC2
    const StrengthCorrect_byMagic = isStrengthCorrect_byMagic ? CalcCorrectGraph_Magic[str] : 0; // BJ2
    const DexterityCorrect_byMagic = isDexterityCorrect_byMagic ? CalcCorrectGraph_Magic[dex] : 0;  // BO2
    const MagicCorrect_byMagic = isMagicCorrect_byMagic ? CalcCorrectGraph_Magic[int] : 0;  // BT2
    const FaithCorrect_byMagic = isFaithCorrect_byMagic ? CalcCorrectGraph_Magic[fai] : 0;  // BY2
    const LuckCorrect_byMagic = isLuckCorrect_byMagic ? CalcCorrectGraph_Magic[arc] : 0;  // CD2
    const StrengthCorrect_byFire = isStrengthCorrect_byFire ? CalcCorrectGraph_Fire[str] : 0;  // BK2
    const DexterityCorrect_byFire = isDexterityCorrect_byFire ? CalcCorrectGraph_Fire[dex] : 0; // BP2
    const MagicCorrect_byFire = isMagicCorrect_byFire ? CalcCorrectGraph_Fire[int] : 0; // BU2
    const FaithCorrect_byFire = isFaithCorrect_byFire ? CalcCorrectGraph_Fire[fai] : 0; // BZ2
    const LuckCorrect_byFire = isLuckCorrect_byFire ? CalcCorrectGraph_Fire[arc] : 0;  // CE2
    const StrengthCorrect_byThunder = isStrengthCorrect_byThunder ? CalcCorrectGraph_Thunder[str] : 0;  // BL2
    const DexterityCorrect_byThunder = isDexterityCorrect_byThunder ? CalcCorrectGraph_Thunder[dex] : 0;  // BQ2
    const MagicCorrect_byThunder = isMagicCorrect_byThunder ? CalcCorrectGraph_Thunder[int] : 0; // BV2
    const FaithCorrect_byThunder = isFaithCorrect_byThunder ? CalcCorrectGraph_Thunder[fai] : 0; // CA2
    const LuckCorrect_byThunder = isLuckCorrect_byThunder ? CalcCorrectGraph_Thunder[arc] : 0;  // CF2
    const StrengthCorrect_byDark = isStrengthCorrect_byDark ? CalcCorrectGraph_Dark[str] : 0;  // BM2
    const DexterityCorrect_byDark = isDexterityCorrect_byDark ? CalcCorrectGraph_Dark[dex] : 0;  // BR2
    const MagicCorrect_byDark = isMagicCorrect_byDark ? CalcCorrectGraph_Dark[int] : 0; // BW2
    const FaithCorrect_byDark = isFaithCorrect_byDark ? CalcCorrectGraph_Dark[fai] : 0;  // CB2
    const LuckCorrect_byDark = isLuckCorrect_byDark ? CalcCorrectGraph_Dark[arc] : 0;  // CG2

    // console.log(
    //     "StrengthCorrect_byPhysics: " + StrengthCorrect_byPhysics,
    //     "DexterityCorrect_byPhysics: " + DexterityCorrect_byPhysics,
    //     "MagicCorrect_byPhysics: " + MagicCorrect_byPhysics,
    //     "FaithCorrect_byPhysics: " + FaithCorrect_byPhysics,
    //     "LuckCorrect_byPhysics: " + LuckCorrect_byPhysics,
    //     "StrengthCorrect_byMagic: " + StrengthCorrect_byMagic,
    //     "DexterityCorrect_byMagic: " + DexterityCorrect_byMagic,
    //     "MagicCorrect_byMagic: " + MagicCorrect_byMagic,
    //     "FaithCorrect_byMagic: " + FaithCorrect_byMagic,
    //     "LuckCorrect_byMagic: " + LuckCorrect_byMagic,
    //     "StrengthCorrect_byFire: " + StrengthCorrect_byFire,
    //     "DexterityCorrect_byFire: " + DexterityCorrect_byFire,
    //     "MagicCorrect_byFire: " + MagicCorrect_byFire,
    //     "FaithCorrect_byFire: " + FaithCorrect_byFire,
    //     "LuckCorrect_byFire: " + LuckCorrect_byFire,
    //     "StrengthCorrect_byThunder: " + StrengthCorrect_byThunder,
    //     "DexterityCorrect_byThunder: " + DexterityCorrect_byThunder,
    //     "MagicCorrect_byThunder: " + MagicCorrect_byThunder,
    //     "FaithCorrect_byThunder: " + FaithCorrect_byThunder,
    //     "LuckCorrect_byThunder: " + LuckCorrect_byThunder,
    //     "StrengthCorrect_byDark: " + StrengthCorrect_byDark,
    //     "DexterityCorrect_byDark: " + DexterityCorrect_byDark,
    //     "MagicCorrect_byDark: " + MagicCorrect_byDark,
    //     "FaithCorrect_byDark: " + FaithCorrect_byDark,
    //     "LuckCorrect_byDark: " + LuckCorrect_byDark,
    // )

    // CH2 - CM2 
    const physAtkPenalty = (!isStrReq && StrengthCorrect_byPhysics > 0) || (!isDexReq && DexterityCorrect_byPhysics > 0) || (!isIntReq && MagicCorrect_byPhysics > 0) || (!isFaiReq && FaithCorrect_byPhysics > 0) || (!isArcReq && LuckCorrect_byPhysics > 0);
    const magAtkPenalty = (!isStrReq && StrengthCorrect_byMagic > 0) || (!isDexReq && DexterityCorrect_byMagic > 0) || (!isIntReq && MagicCorrect_byMagic > 0) || (!isFaiReq && FaithCorrect_byMagic > 0) || (!isArcReq && LuckCorrect_byMagic > 0);
    const fireAtkPenalty = (!isStrReq && StrengthCorrect_byFire > 0) || (!isDexReq && DexterityCorrect_byFire > 0) || (!isIntReq && MagicCorrect_byFire > 0) || (!isFaiReq && FaithCorrect_byFire > 0) || (!isArcReq && LuckCorrect_byFire > 0);
    const thunAtkPenalty = (!isStrReq && StrengthCorrect_byThunder > 0) || (!isDexReq && DexterityCorrect_byThunder > 0) || (!isIntReq && MagicCorrect_byThunder > 0) || (!isFaiReq && FaithCorrect_byThunder > 0) || (!isArcReq && LuckCorrect_byThunder > 0);
    const darkAtkPenalty = (!isStrReq && StrengthCorrect_byDark > 0) || (!isDexReq && DexterityCorrect_byDark > 0) || (!isIntReq && MagicCorrect_byDark > 0) || (!isFaiReq && FaithCorrect_byDark > 0) || (!isArcReq && LuckCorrect_byDark > 0);
    const statusAtkPenalty = !isArcReq

    const scalePhys = correctStr * 0.01 * StrengthCorrect_byPhysics * 0.01 + correctDex * 0.01 * DexterityCorrect_byPhysics * 0.01 + correctInt * 0.01 * MagicCorrect_byPhysics * 0.01 + correctFai * 0.01 * FaithCorrect_byPhysics * 0.01 + correctArc * 0.01 * LuckCorrect_byPhysics * 0.01;
    const scaleMag = correctStr * 0.01 * StrengthCorrect_byMagic * 0.01 + correctDex * 0.01 * DexterityCorrect_byMagic * 0.01 + correctInt * 0.01 * MagicCorrect_byMagic * 0.01 + correctFai * 0.01 * FaithCorrect_byMagic * 0.01 + correctArc * 0.01 * LuckCorrect_byMagic * 0.01;
    const scaleFire = correctStr * 0.01 * StrengthCorrect_byFire * 0.01 + correctDex * 0.01 * DexterityCorrect_byFire * 0.01 + correctInt * 0.01 * MagicCorrect_byFire * 0.01 + correctFai * 0.01 * FaithCorrect_byFire * 0.01 + correctArc * 0.01 * LuckCorrect_byFire * 0.01;
    const scaleThunder = correctStr * 0.01 * StrengthCorrect_byThunder * 0.01 + correctDex * 0.01 * DexterityCorrect_byThunder * 0.01 + correctInt * 0.01 * MagicCorrect_byThunder * 0.01 + correctFai * 0.01 * FaithCorrect_byThunder * 0.01 + correctArc * 0.01 * LuckCorrect_byThunder * 0.01;
    const scaleDark = correctStr * 0.01 * StrengthCorrect_byDark * 0.01 + correctDex * 0.01 * DexterityCorrect_byDark * 0.01 + correctInt * 0.01 * MagicCorrect_byDark * 0.01 + correctFai * 0.01 * FaithCorrect_byDark * 0.01 + correctArc * 0.01 * LuckCorrect_byDark * 0.01;

    const lowStatus_AtkPowDown = 0.4;

    const scalePhysAtk = atkPhysical * (physAtkPenalty ? -lowStatus_AtkPowDown : scalePhys);
    const scaleMagAtk = atkMagic * (magAtkPenalty ? -lowStatus_AtkPowDown : scaleMag);
    const scaleFireAtk = atkFire * (fireAtkPenalty ? -lowStatus_AtkPowDown : scaleFire);
    const scaleLightningAtk = atkLightning * (thunAtkPenalty ? -lowStatus_AtkPowDown : scaleThunder);
    const scaleHolyAtk = atkHoly * (darkAtkPenalty ? -lowStatus_AtkPowDown : scaleDark);

    // CN2 - CR2
    // !important there is one more multiplier in the OG spreadsheet, which is currently excluded
    const PhysAtk = Math.floor(atkPhysical) + Math.floor(scalePhysAtk);
    const MagAtk = Math.floor(atkMagic) + Math.floor(scaleMagAtk);
    const FireAtk = Math.floor(atkFire) + Math.floor(scaleFireAtk);
    const LightningAtk = Math.floor(atkLightning) + Math.floor(scaleLightningAtk);
    const HolyAtk = Math.floor(atkHoly) + Math.floor(scaleHolyAtk);

    // console.log(
    //     "PhysAtk: " + PhysAtk,
    //     "MagAtk: " + MagAtk,
    //     "FireAtk: " + FireAtk,
    //     "LightningAtk: " + LightningAtk,
    //     "HolyAtk: " + HolyAtk,
    // )

    const canWeaponCast = weaponParameter["enableMagic"] || weaponParameter["enableMiracle"];
    const isPenalty = physAtkPenalty || magAtkPenalty || fireAtkPenalty || thunAtkPenalty || darkAtkPenalty;

    // possible to calc intspellbuff and faithspellbuff seperately
    const spellbuff = canWeaponCast ? 100 + 100 * (isPenalty ? -lowStatus_AtkPowDown : scaleMag) : 0 ?? 0;

    // status calculations
    // CV2 - CZ2
    const specialStatusSpEffectId = weaponData["specialStatusSpEffectId"];
    const StatusSpEffectId1 = specialStatusSpEffectId && typeof specialStatusSpEffectId !== "string" ? specialStatusSpEffectId : weaponParameter["spEffectBehaviorId0"];
    const StatusSpEffectId2 = weaponParameter["spEffectBehaviorId1"];
    const SpEffectId1Offset = reinforcedWeaponParameter["spEffectId1"] ?? 0;
    const SpEffectId2Offset = reinforcedWeaponParameter["spEffectId2"] ?? 0;

    const StatusSpEffectFullId1 = StatusSpEffectId1 + SpEffectId1Offset;
    const StatusSpEffectFullId2 = StatusSpEffectId2 + SpEffectId2Offset;

    // DA2 - DD2
    const PoisonArc = CalcCorrectGraphEz[correctType_Poison][arc] ?? 0;
    const BleedArc = CalcCorrectGraphEz[correctType_Blood][arc] ?? 0;
    const SleepArc = CalcCorrectGraphEz[correctType_Sleep][arc] ?? 0;
    const MadnessArc = CalcCorrectGraphEz[correctType_Madness][arc] ?? 0;

    // DE2 - DK2
    const poisonAttackPower = Math.max(StatusEffectData[StatusSpEffectFullId1]?.["poizonAttackPower"] ?? 0, StatusEffectData[StatusSpEffectFullId2]?.["poizonAttackPower"] ?? 0);
    const bloodAttackPower = Math.max(StatusEffectData[StatusSpEffectFullId1]?.["bloodAttackPower"] ?? 0, StatusEffectData[StatusSpEffectFullId2]?.["bloodAttackPower"] ?? 0);
    const sleepAttackPower = Math.max(StatusEffectData[StatusSpEffectFullId1]?.["sleepAttackPower"] ?? 0, StatusEffectData[StatusSpEffectFullId2]?.["sleepAttackPower"] ?? 0);
    const madnessAttackPower = Math.max(StatusEffectData[StatusSpEffectFullId1]?.["madnessAttackPower"] ?? 0, StatusEffectData[StatusSpEffectFullId2]?.["madnessAttackPower"] ?? 0);
    const diseaseAttackPower = Math.max(StatusEffectData[StatusSpEffectFullId1]?.["diseaseAttackPower"] ?? 0, StatusEffectData[StatusSpEffectFullId2]?.["diseaseAttackPower"] ?? 0);
    const freezeAttackPower = Math.max(StatusEffectData[StatusSpEffectFullId1]?.["freezeAttackPower"] ?? 0, StatusEffectData[StatusSpEffectFullId2]?.["freezeAttackPower"] ?? 0);
    const curseAttackPower = Math.max(StatusEffectData[StatusSpEffectFullId1]?.["curseAttackPower"] ?? 0, StatusEffectData[StatusSpEffectFullId2]?.["curseAttackPower"] ?? 0);

    // console.log(
    //     "poisonAttackPower: " + poisonAttackPower,
    //     "bloodAttackPower: " + bloodAttackPower,
    //     "sleepAttackPower: " + sleepAttackPower,
    //     "madnessAttackPower: " + madnessAttackPower,
    //     "diseaseAttackPower: " + diseaseAttackPower,
    //     "freezeAttackPower: " + freezeAttackPower,
    //     "curseAttackPower: " + curseAttackPower,
    // )

    const scalePoison = correctArc * 0.01 * PoisonArc * 0.01;
    const scaleBleed = correctArc * 0.01 * BleedArc * 0.01;
    const scaleSleep = correctArc * 0.01 * SleepArc * 0.01;
    const scaleMadness = correctArc * 0.01 * MadnessArc * 0.01;

    // DL2 - DR2
    const AtkPoison = Math.floor(poisonAttackPower + poisonAttackPower * (statusAtkPenalty ? -lowStatus_AtkPowDown : scalePoison));
    const AtkBleed = Math.floor(bloodAttackPower + bloodAttackPower * (statusAtkPenalty ? -lowStatus_AtkPowDown : scaleBleed));
    const AtkSleep = Math.floor(sleepAttackPower + sleepAttackPower * (statusAtkPenalty ? -lowStatus_AtkPowDown : scaleSleep));
    const AtkMadness = Math.floor(madnessAttackPower + madnessAttackPower * (statusAtkPenalty ? -lowStatus_AtkPowDown : scaleMadness));
    const AtkRot = Math.floor(diseaseAttackPower);
    const AtkFrost = Math.floor(freezeAttackPower);
    const AtkDeath = Math.floor(curseAttackPower);

    // console.log(
    //     "AtkPoison: " + AtkPoison,
    //     "AtkBleed: " + AtkBleed,
    //     "AtkSleep: " + AtkSleep,
    //     "AtkMadness: " + AtkMadness,
    //     "AtkRot: " + AtkRot,
    //     "AtkFrost: " + AtkFrost,
    //     "AtkDeath: " + AtkDeath,
    // )

    const strScalingLetter = translateScalingToLetter(correctStr);
    const dexScalingLetter = translateScalingToLetter(correctDex);
    const intScalingLetter = translateScalingToLetter(correctInt);
    const faiScalingLetter = translateScalingToLetter(correctFai);
    const arcScalingLetter = translateScalingToLetter(correctArc);

    const totalAR = Math.floor(PhysAtk + MagAtk + FireAtk + LightningAtk + HolyAtk);

    // console.log(
    //     "PhysAtk: " + PhysAtk,
    //     "scalePhysAtk: " + scalePhysAtk,
    //     "atkPhysical: " + atkPhysical,
    // )

    // if the weapon is a staff or seal the spellbuff is the more important stat and will be displayed primarily instead of the AR
    const displayString = weaponClass === "Glintstone Staff" || weaponClass === "Sacred Seal" ? "Spellbuff: " + Math.floor(spellbuff) : "Total AR: " + totalAR;

    let tooltipString;

    if (isStrReq && isDexReq && isIntReq && isFaiReq && isArcReq) {
        tooltipString = "Attack\xa0\xa0Power:\n\n";
        tooltipString += "\xa0\xa0Physical:\xa0" + Math.floor(atkPhysical) + (atkPhysical === 0 ? "" : "+\xa0" + Math.floor(scalePhysAtk)) + "\n\n";
        tooltipString += "\xa0\xa0Magic:\xa0" + Math.floor(atkMagic) + (atkMagic === 0 ? "" : "+\xa0" + Math.floor(scaleMagAtk)) + "\n\n";
        tooltipString += "\xa0\xa0Fire:\xa0" + Math.floor(atkFire) + (atkFire === 0 ? "" : "+\xa0" + Math.floor(scaleFireAtk)) + "\n\n";
        tooltipString += "\xa0\xa0Lightning:\xa0" + Math.floor(atkLightning) + (atkLightning === 0 ? "" : "+\xa0" + Math.floor(scaleLightningAtk)) + "\n\n";
        tooltipString += "\xa0\xa0Holy:\xa0" + Math.floor(atkHoly) + (atkHoly === 0 ? "" : "+\xa0" + Math.floor(scaleHolyAtk)) + "\n\n";

        tooltipString += "\nScaling:\n\n";
        tooltipString += (strScalingLetter === "-" ? "" : "\xa0\xa0Strength:\xa0" + strScalingLetter + "\n\n");
        tooltipString += (dexScalingLetter === "-" ? "" : "\xa0\xa0Dexterity:\xa0" + dexScalingLetter + "\n\n");
        tooltipString += (intScalingLetter === "-" ? "" : "\xa0\xa0Intelligence:\xa0" + intScalingLetter + "\n\n");
        tooltipString += (faiScalingLetter === "-" ? "" : "\xa0\xa0Faith:\xa0" + faiScalingLetter + "\n\n");
        tooltipString += (arcScalingLetter === "-" ? "" : "\xa0\xa0Arcane:\xa0" + arcScalingLetter + "\n\n");

        if (AtkPoison || AtkBleed || AtkSleep || AtkMadness || AtkRot || AtkFrost || AtkDeath) {
            tooltipString += "\nStatus:\n\n";
            tooltipString += AtkPoison ? "\xa0\xa0Poison:\xa0" + AtkPoison + "\n\n" : "";
            tooltipString += AtkBleed ? "\xa0\xa0Bleed:\xa0" + AtkBleed + "\n\n" : "";
            tooltipString += AtkSleep ? "\xa0\xa0Sleep:\xa0" + AtkSleep + "\n\n" : "";
            tooltipString += AtkMadness ? "\xa0\xa0Madness:\xa0" + AtkMadness + "\n\n" : "";
            tooltipString += AtkRot ? "\xa0\xa0Rot:\xa0" + AtkRot + "\n\n" : "";
            tooltipString += AtkFrost ? "\xa0\xa0Frost:\xa0" + AtkFrost + "\n\n" : "";
            tooltipString += AtkDeath ? "\xa0\xa0Death:\xa0" + AtkDeath + "\n\n" : "";
        }

        tooltipString = tooltipString.trim();
    } else {
        tooltipString = "";
    }

    return [displayString, tooltipString];
}

/*function translates the scaling value used to calculate scaling damage into the letter, that gets displayed by the game*/
/*takes the scaling value as input*/
function translateScalingToLetter(scaling: number): string {
    if (scaling === 0) {
        return "-";
    } else {
        let result = "";
        if (scaling > 175) {
            result += "S";
        } else if (scaling >= 140) {
            result += "A";
        } else if (scaling >= 90) {
            result += "B";
        } else if (scaling >= 60) {
            result += "C";
        } else if (scaling >= 25) {
            result += "D";
        } else {
            result += "E";
        }
        result += " (" + Math.floor(scaling) + ")";
        return result;
    }
};