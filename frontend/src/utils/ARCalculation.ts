import { AffinityData } from "../../data/AffinityData";
import { WeaponsData } from "../../data/WeaponsData";
import { EquipParamWeapon } from "../../data/EquipParamWeapon";
import { ConsumableData } from "../../data/ConsumableData";
import { ReinforceParamWeapon } from "../../data/ReinforceParamWeapon";
import { AttackElementCorrectParam } from "../../data/AttackElementCorrectParam";
import { CalcCorrectGraphEz } from "../../data/CalcCorrectGraphEz";
import { StatsStateType } from "../features/charplanner/charplannerSlice";

export function calcWeaponAttackRating(
    selectedWeapon: string,
    selectedUpgrade: string,
    selectedAffinity: string,
    totalStats: StatsStateType,
    twoHandChecked: boolean
) {

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

    if (typeof weaponId === "undefined") {
        throw new Error(`Weapon ID for selected weapon (${selectedWeapon}) is undefined`);
    }

    const isInfuse = weaponData["isInfuse"];
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

    // CN2 - CR2
    // !important there is one more multiplier in the OG spreadsheet, which is currently excluded
    const PhysAtk = atkPhysical + atkPhysical * (physAtkPenalty ? -lowStatus_AtkPowDown : scalePhys);
    const MagAtk = atkMagic + atkMagic * (magAtkPenalty ? -lowStatus_AtkPowDown : scaleMag);
    const FireAtk = atkFire + atkFire * (fireAtkPenalty ? -lowStatus_AtkPowDown : scaleFire);
    const LightningAtk = atkLightning + atkLightning * (thunAtkPenalty ? -lowStatus_AtkPowDown : scaleThunder);
    const HolyAtk = atkHoly + atkHoly * (darkAtkPenalty ? -lowStatus_AtkPowDown : scaleDark);

    console.log(
        "PhysAtk: " + PhysAtk,
        "MagAtk: " + MagAtk,
        "FireAtk: " + FireAtk,
        "LightningAtk: " + LightningAtk,
        "HolyAtk: " + HolyAtk,
    )

    return scalePhys
}