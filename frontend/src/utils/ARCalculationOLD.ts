import { AttackData } from "../../data/AttackData";
import { WeaponsData } from "../../data/WeaponsData";
import CalcCorrectGraph_ID from "../../data/CalcCorrectGraph_ID";
import ScalingData from "../../data/ScalingData";
import AttackElementCorrectParam from "../../data/AttackElementCorrectParam";
import { StatsStateType } from "../features/charplanner/charplannerSlice";



/*function calculates Weapon AR for the selected weapon*/
/*takes the div element, which will later display the total AR and the value of the weapon select element (which is the name of the selected weapon)*/
/*this function replicates the calculations done in the Excel sheet Elden Ring Weapon Calculator (1.06) -> table Calculations*/
/*https://docs.google.com/spreadsheets/d/1xLMP8BXDFdl1A1TbttVzdBr2Je-WNVQ9y6_HqIMymXI/copy*/
/*the variables reflect cells in the sheet -> see comments*/
export function calcWeaponAttackRating(
    selectedWeapon: string, 
    selectedUpgrade: string,  
    selectedAffinity: string, 
    totalStats: StatsStateType,
    twoHandChecked: boolean
    ): string[] {
    let str = totalStats["strength"];
    const dex = totalStats["dexterity"];
    const int = totalStats["intelligence"];
    const fai = totalStats["faith"];
    const arc = totalStats["arcane"];

    let weaponName = selectedWeapon; //F2
    let upgradeLevel = selectedUpgrade;
    let affinity = selectedAffinity;
    
    let physAttack, magAttack, fireAttack, lighAttack, holyAttack, attackElementCorrectID; //A4 B4 C4 D4 E4 F4

    let strScaling, dexScaling, intScaling, faiScaling, arcScaling; //A6 B6 C6 D6 E6

    let strRequirement, dexRequirement, intRequirement, faiRequirement, arcRequirement; //L2 L4 L6 L8 L10

    let physCalcID, magCalcID, fireCalcID, lighCalcID, holyCalcID  //, passiveArcaneCalcCorrect; //A8 B8 C8 D8 E8 F8

    let physScalesOnStr, physScalesOnDex, physScalesOnInt, physScalesOnFai, physScalesOnArc; //G10 H10 I10 J10 K10
    let magScalesOnStr, magScalesOnDex, magScalesOnInt, magScalesOnFai, magScalesOnArc; //G12 H12 I12 J12 K12
    let fireScalesOnStr, fireScalesOnDex, fireScalesOnInt, fireScalesOnFai, fireScalesOnArc; //G14 H14 I14 J14 K14
    let lighScalesOnStr, lighScalesOnDex, lighScalesOnInt, lighScalesOnFai, lighScalesOnArc; //G16 H16 I16 J16 K16
    let holyScalesOnStr, holyScalesOnDex, holyScalesOnInt, holyScalesOnFai, holyScalesOnArc; //G18 H18 I18 J18 K18

    let physStrCalcCorrect, physDexCalcCorrect, physIntCalcCorrect, physFaiCalcCorrect, physArcCalcCorrect; //A10 B10 C10 D10 E10
    let magStrCalcCorrect, magDexCalcCorrect, magIntCalcCorrect, magFaiCalcCorrect, magArcCalcCorrect; //A12 B12 C12 D12 E12
    let fireStrCalcCorrect, fireDexCalcCorrect, fireIntCalcCorrect, fireFaiCalcCorrect, fireArcCalcCorrect; //A14 B14 C14 D14 E14
    let lighStrCalcCorrect, lighDexCalcCorrect, lighIntCalcCorrect, lighFaiCalcCorrect, lighArcCalcCorrect; //A16 B16 C16 D16 E16
    let holyStrCalcCorrect, holyDexCalcCorrect, holyIntCalcCorrect, holyFaiCalcCorrect, holyArcCalcCorrect; //A18 B18 C18 D18 E18

    let physStrDamage, physDexDamage, physIntDamage, physFaiDamage, physArcDamage; //A20 B20 C20 D20 E20
    let magStrDamage, magDexDamage, magIntDamage, magFaiDamage, magArcDamage; //A22 B22 C22 D22 E22
    let fireStrDamage, fireDexDamage, fireIntDamage, fireFaiDamage, fireArcDamage; //A24 B24 C24 D24 E24
    let lighStrDamage, lighDexDamage, lighIntDamage, lighFaiDamage, lighArcDamage; //A26 B26 C26 D26 E26
    let holyStrDamage, holyDexDamage, holyIntDamage, holyFaiDamage, holyArcDamage; //A28 B28 C28 D28 E28

    let physRequirementMet, magRequirementMet, fireRequirementMet, lighRequirementMet, holyRequirementMet; //L24 L26 L28 L30 L32

    let physDamage, magDamage, fireDamage, lighDamage, holyDamage; //A30 B30 C30 D30 E30

    let physDamageFloored, magDamageFloored, fireDamageFloored, lighDamageFloored, holyDamageFloored; //A32 B32 C32 D32 E32

    let physResultSummed, magResultSummed, fireResultSummed, lighResultSummed, holyResultSummed; //A34 B34 C34 D34 E34

    // let physResultSummedFloored, magResultSummedFloored, fireResultSummedFloored, lighResultSummedFloored, holyResultSummedFloored; //A36 B36 C36 D36 E36

    let strScalingLetter, dexScalingLetter, intScalingLetter, faiScalingLetter, arcScalingLetter;

    let totalAR;

    let tooltipString;

    if (affinity === "Standard" || affinity === "None") {
        /*do nothing*/
    } else {
        let regex = /\w+'*\w*/g ///\w+\'*\w*/g
        let words = weaponName.match(regex)!;
        if (affinity === "Flame Art") {
            words.push("Flame");
            words.push("Art");
        } else {
            words.push(affinity);
        }
        let keys = Object.keys(AttackData)
        for (let key in keys) {
            if (arrayCompare(words, keys[key].match(regex)!)) {
                weaponName = keys[key];
            }
        }
    }

    /*change str depending on the state of the two-hand checkbox and if the weapon can get a str bonus from two handing*/
    if ((twoHandChecked === false || WeaponsData[selectedWeapon]["2H Str Bonus"] === "No") && !(WeaponsData[selectedWeapon]["Weapon Type"] === "Bow" || WeaponsData[selectedWeapon]["Weapon Type"] === "Light Bow" || WeaponsData[selectedWeapon]["Weapon Type"] === "Greatbow")) {
        /*keep str*/
    } else if (str*1.5>150) {
        str = 150;
    } else {
        str = Math.floor(str*1.5);
    }

    physAttack = AttackData[weaponName]["Phys +" + upgradeLevel];
    magAttack = AttackData[weaponName]["Mag +" + upgradeLevel];
    fireAttack = AttackData[weaponName]["Fire +" + upgradeLevel];
    lighAttack = AttackData[weaponName]["Ligh +" + upgradeLevel];
    holyAttack = AttackData[weaponName]["Holy +" + upgradeLevel];
    attackElementCorrectID = CalcCorrectGraph_ID[weaponName]["AttackElementCorrect ID"];

    strScaling = ScalingData[weaponName]["Str +" + upgradeLevel];
    dexScaling = ScalingData[weaponName]["Dex +" + upgradeLevel];
    intScaling = ScalingData[weaponName]["Int +" + upgradeLevel];
    faiScaling = ScalingData[weaponName]["Fai +" + upgradeLevel];
    arcScaling = ScalingData[weaponName]["Arc +" + upgradeLevel];

    strRequirement = WeaponsData[selectedWeapon]["Required (Str)"];
    dexRequirement = WeaponsData[selectedWeapon]["Required (Dex)"];
    intRequirement = WeaponsData[selectedWeapon]["Required (Int)"];
    faiRequirement = WeaponsData[selectedWeapon]["Required (Fai)"];
    arcRequirement = WeaponsData[selectedWeapon]["Required (Arc)"];

    physCalcID = CalcCorrectGraph_ID[weaponName]["Physical"];
    magCalcID = CalcCorrectGraph_ID[weaponName]["Magic"];
    fireCalcID = CalcCorrectGraph_ID[weaponName]["Fire"];
    lighCalcID = CalcCorrectGraph_ID[weaponName]["Lightning"];
    holyCalcID = CalcCorrectGraph_ID[weaponName]["Holy"];
    // passiveArcaneCalcCorrect = (arc>60 ? 90+10*((arc-60)/39) 
    //                             : arc>45 ? 75+15*((arc-45)/15)
    //                             : arc>25 ? 10+65*((arc-25)/20)
    //                             : 10*((arc-1)/24)) / 100
    // ;

    physScalesOnStr = AttackElementCorrectParam[attackElementCorrectID]["isStrengthCorrect_byPhysics"];
    physScalesOnDex = AttackElementCorrectParam[attackElementCorrectID]["isDexterityCorrect_byPhysics"];
    physScalesOnInt = AttackElementCorrectParam[attackElementCorrectID]["isMagicCorrect_byPhysics"];
    physScalesOnFai = AttackElementCorrectParam[attackElementCorrectID]["isFaithCorrect_byPhysics"];
    physScalesOnArc = AttackElementCorrectParam[attackElementCorrectID]["isLuckCorrect_byPhysics"];
    magScalesOnStr = AttackElementCorrectParam[attackElementCorrectID]["isStrengthCorrect_byMagic"];
    magScalesOnDex = AttackElementCorrectParam[attackElementCorrectID]["isDexterityCorrect_byMagic"];
    magScalesOnInt = AttackElementCorrectParam[attackElementCorrectID]["isMagicCorrect_byMagic"];
    magScalesOnFai = AttackElementCorrectParam[attackElementCorrectID]["isFaithCorrect_byMagic"];
    magScalesOnArc = AttackElementCorrectParam[attackElementCorrectID]["isLuckCorrect_byMagic"];
    fireScalesOnStr = AttackElementCorrectParam[attackElementCorrectID]["isStrengthCorrect_byFire"];
    fireScalesOnDex = AttackElementCorrectParam[attackElementCorrectID]["isDexterityCorrect_byFire"];
    fireScalesOnInt = AttackElementCorrectParam[attackElementCorrectID]["isMagicCorrect_byFire"];
    fireScalesOnFai = AttackElementCorrectParam[attackElementCorrectID]["isFaithCorrect_byFire"];
    fireScalesOnArc = AttackElementCorrectParam[attackElementCorrectID]["isLuckCorrect_byFire"];
    lighScalesOnStr = AttackElementCorrectParam[attackElementCorrectID]["isStrengthCorrect_byThunder"];
    lighScalesOnDex = AttackElementCorrectParam[attackElementCorrectID]["isDexterityCorrect_byThunder"];
    lighScalesOnInt = AttackElementCorrectParam[attackElementCorrectID]["isMagicCorrect_byThunder"];
    lighScalesOnFai = AttackElementCorrectParam[attackElementCorrectID]["isFaithCorrect_byThunder"];
    lighScalesOnArc = AttackElementCorrectParam[attackElementCorrectID]["isLuckCorrect_byThunder"];
    holyScalesOnStr = AttackElementCorrectParam[attackElementCorrectID]["isStrengthCorrect_byDark"];
    holyScalesOnDex = AttackElementCorrectParam[attackElementCorrectID]["isDexterityCorrect_byDark"];
    holyScalesOnInt = AttackElementCorrectParam[attackElementCorrectID]["isMagicCorrect_byDark"];
    holyScalesOnFai = AttackElementCorrectParam[attackElementCorrectID]["isFaithCorrect_byDark"];
    holyScalesOnArc = AttackElementCorrectParam[attackElementCorrectID]["isLuckCorrect_byDark"];
    
    physStrCalcCorrect = calcElementStatCalcCorrect(physScalesOnStr, physCalcID, str);
    physDexCalcCorrect = calcElementStatCalcCorrect(physScalesOnDex, physCalcID, dex);
    physIntCalcCorrect = calcElementStatCalcCorrect(physScalesOnInt, physCalcID, int);
    physFaiCalcCorrect = calcElementStatCalcCorrect(physScalesOnFai, physCalcID, fai);
    physArcCalcCorrect = calcElementStatCalcCorrect(physScalesOnArc, physCalcID, arc);
    magStrCalcCorrect = calcElementStatCalcCorrect(magScalesOnStr, magCalcID, str);
    magDexCalcCorrect = calcElementStatCalcCorrect(magScalesOnDex, magCalcID, dex);
    magIntCalcCorrect = calcElementStatCalcCorrect(magScalesOnInt, magCalcID, int);
    magFaiCalcCorrect = calcElementStatCalcCorrect(magScalesOnFai, magCalcID, fai);
    magArcCalcCorrect = calcElementStatCalcCorrect(magScalesOnArc, magCalcID, arc);
    fireStrCalcCorrect = calcElementStatCalcCorrect(fireScalesOnStr, fireCalcID, str);
    fireDexCalcCorrect = calcElementStatCalcCorrect(fireScalesOnDex, fireCalcID, dex);
    fireIntCalcCorrect = calcElementStatCalcCorrect(fireScalesOnInt, fireCalcID, int);
    fireFaiCalcCorrect = calcElementStatCalcCorrect(fireScalesOnFai, fireCalcID, fai);
    fireArcCalcCorrect = calcElementStatCalcCorrect(fireScalesOnArc, fireCalcID, arc);
    lighStrCalcCorrect = calcElementStatCalcCorrect(lighScalesOnStr, lighCalcID, str);
    lighDexCalcCorrect = calcElementStatCalcCorrect(lighScalesOnDex, lighCalcID, dex);
    lighIntCalcCorrect = calcElementStatCalcCorrect(lighScalesOnInt, lighCalcID, int);
    lighFaiCalcCorrect = calcElementStatCalcCorrect(lighScalesOnFai, lighCalcID, fai);
    lighArcCalcCorrect = calcElementStatCalcCorrect(lighScalesOnArc, lighCalcID, arc);
    holyStrCalcCorrect = calcElementStatCalcCorrect(holyScalesOnStr, holyCalcID, str);
    holyDexCalcCorrect = calcElementStatCalcCorrect(holyScalesOnDex, holyCalcID, dex);
    holyIntCalcCorrect = calcElementStatCalcCorrect(holyScalesOnInt, holyCalcID, int);
    holyFaiCalcCorrect = calcElementStatCalcCorrect(holyScalesOnFai, holyCalcID, fai);
    holyArcCalcCorrect = calcElementStatCalcCorrect(holyScalesOnArc, holyCalcID, arc);

    physStrDamage = calcElementStatDamage(physAttack, strScaling, physStrCalcCorrect);
    physDexDamage = calcElementStatDamage(physAttack, dexScaling, physDexCalcCorrect);
    physIntDamage = calcElementStatDamage(physAttack, intScaling, physIntCalcCorrect);
    physFaiDamage = calcElementStatDamage(physAttack, faiScaling, physFaiCalcCorrect);
    physArcDamage = calcElementStatDamage(physAttack, arcScaling, physArcCalcCorrect);
    magStrDamage = calcElementStatDamage(magAttack, strScaling, magStrCalcCorrect);
    magDexDamage = calcElementStatDamage(magAttack, dexScaling, magDexCalcCorrect);
    magIntDamage = calcElementStatDamage(magAttack, intScaling, magIntCalcCorrect);
    magFaiDamage = calcElementStatDamage(magAttack, faiScaling, magFaiCalcCorrect);
    magArcDamage = calcElementStatDamage(magAttack, arcScaling, magArcCalcCorrect);
    fireStrDamage = calcElementStatDamage(fireAttack, strScaling, fireStrCalcCorrect);
    fireDexDamage = calcElementStatDamage(fireAttack, dexScaling, fireDexCalcCorrect);
    fireIntDamage = calcElementStatDamage(fireAttack, intScaling, fireIntCalcCorrect);
    fireFaiDamage = calcElementStatDamage(fireAttack, faiScaling, fireFaiCalcCorrect);
    fireArcDamage = calcElementStatDamage(fireAttack, arcScaling, fireArcCalcCorrect);
    lighStrDamage = calcElementStatDamage(lighAttack, strScaling, lighStrCalcCorrect);
    lighDexDamage = calcElementStatDamage(lighAttack, dexScaling, lighDexCalcCorrect);
    lighIntDamage = calcElementStatDamage(lighAttack, intScaling, lighIntCalcCorrect);
    lighFaiDamage = calcElementStatDamage(lighAttack, faiScaling, lighFaiCalcCorrect);
    lighArcDamage = calcElementStatDamage(lighAttack, arcScaling, lighArcCalcCorrect);
    holyStrDamage = calcElementStatDamage(holyAttack, strScaling, holyStrCalcCorrect);
    holyDexDamage = calcElementStatDamage(holyAttack, dexScaling, holyDexCalcCorrect);
    holyIntDamage = calcElementStatDamage(holyAttack, intScaling, holyIntCalcCorrect);
    holyFaiDamage = calcElementStatDamage(holyAttack, faiScaling, holyFaiCalcCorrect);
    holyArcDamage = calcElementStatDamage(holyAttack, arcScaling, holyArcCalcCorrect);

    physRequirementMet = checkElementRequirementMet([str, dex, int, fai, arc], [strRequirement, dexRequirement, intRequirement, faiRequirement, arcRequirement] as number[], [physScalesOnStr, physScalesOnDex, physScalesOnInt, physScalesOnFai, physScalesOnArc]);
    magRequirementMet  = checkElementRequirementMet([str, dex, int, fai, arc], [strRequirement, dexRequirement, intRequirement, faiRequirement, arcRequirement] as number[], [magScalesOnStr, magScalesOnDex, magScalesOnInt, magScalesOnFai, magScalesOnArc]);
    fireRequirementMet  = checkElementRequirementMet([str, dex, int, fai, arc], [strRequirement, dexRequirement, intRequirement, faiRequirement, arcRequirement] as number[], [fireScalesOnStr, fireScalesOnDex, fireScalesOnInt, fireScalesOnFai, fireScalesOnArc]);
    lighRequirementMet  = checkElementRequirementMet([str, dex, int, fai, arc], [strRequirement, dexRequirement, intRequirement, faiRequirement, arcRequirement] as number[], [lighScalesOnStr, lighScalesOnDex, lighScalesOnInt, lighScalesOnFai, lighScalesOnArc]);
    holyRequirementMet  = checkElementRequirementMet([str, dex, int, fai, arc], [strRequirement, dexRequirement, intRequirement, faiRequirement, arcRequirement] as number[], [holyScalesOnStr, holyScalesOnDex, holyScalesOnInt, holyScalesOnFai, holyScalesOnArc]);

    physDamage = calcElementDamage(physRequirementMet, physAttack, [physStrDamage, physDexDamage, physIntDamage, physFaiDamage, physArcDamage]);
    magDamage = calcElementDamage(magRequirementMet, magAttack, [magStrDamage, magDexDamage, magIntDamage, magFaiDamage, magArcDamage]);
    fireDamage = calcElementDamage(fireRequirementMet, fireAttack, [fireStrDamage, fireDexDamage, fireIntDamage, fireFaiDamage, fireArcDamage]);
    lighDamage = calcElementDamage(lighRequirementMet, lighAttack, [lighStrDamage, lighDexDamage, lighIntDamage, lighFaiDamage, lighArcDamage]);
    holyDamage = calcElementDamage(holyRequirementMet, holyAttack, [holyStrDamage, holyDexDamage, holyIntDamage, holyFaiDamage, holyArcDamage]);

    physDamageFloored = Math.floor(physDamage);
    magDamageFloored = Math.floor(magDamage);
    fireDamageFloored = Math.floor(fireDamage);
    lighDamageFloored = Math.floor(lighDamage);
    holyDamageFloored = Math.floor(holyDamage);

    physResultSummed = physAttack + physDamage;
    magResultSummed = magAttack + magDamage;
    fireResultSummed = fireAttack + fireDamage;
    lighResultSummed = lighAttack + lighDamage;
    holyResultSummed = holyAttack + holyDamage;

    // physResultSummedFloored = Math.floor(physResultSummed);
    // magResultSummedFloored = Math.floor(magResultSummed);
    // fireResultSummedFloored = Math.floor(fireResultSummed);
    // lighResultSummedFloored = Math.floor(lighResultSummed);
    // holyResultSummedFloored = Math.floor(holyResultSummed);

    strScalingLetter = translateScalingToLetter(strScaling);
    dexScalingLetter = translateScalingToLetter(dexScaling);
    intScalingLetter = translateScalingToLetter(intScaling);
    faiScalingLetter = translateScalingToLetter(faiScaling);
    arcScalingLetter = translateScalingToLetter(arcScaling);

    totalAR = Math.floor(physResultSummed + magResultSummed + fireResultSummed + lighResultSummed + holyResultSummed);

    if (physRequirementMet && magRequirementMet && fireRequirementMet && lighRequirementMet && holyRequirementMet) {
        tooltipString = "Attack\xa0\xa0Power:\n\n";
        tooltipString += "\xa0\xa0Physical:\xa0" + Math.floor(physAttack) + (physAttack===0 ? "" : "+\xa0" + physDamageFloored) + "\n\n";
        tooltipString += "\xa0\xa0Magic:\xa0" + Math.floor(magAttack) + (magAttack===0 ? "" : "+\xa0" + magDamageFloored) + "\n\n";
        tooltipString += "\xa0\xa0Fire:\xa0" + Math.floor(fireAttack) + (fireAttack===0 ? "" : "+\xa0" + fireDamageFloored) + "\n\n";
        tooltipString += "\xa0\xa0Lightning:\xa0" + Math.floor(lighAttack) + (lighAttack===0 ? "" : "+\xa0" + lighDamageFloored) + "\n\n";
        tooltipString += "\xa0\xa0Holy:\xa0" + Math.floor(holyAttack) + (holyAttack===0 ? "" : "+\xa0" + holyDamageFloored) + "\n\n";

        tooltipString += "\nScaling:\n\n";
        tooltipString += (strScalingLetter==="-" ? "" : "\xa0\xa0Strength:\xa0" + strScalingLetter + "\n\n");
        tooltipString += (dexScalingLetter==="-" ? "" : "\xa0\xa0Dexterity:\xa0" + dexScalingLetter + "\n\n");
        tooltipString += (intScalingLetter==="-" ? "" : "\xa0\xa0Intelligence:\xa0" + intScalingLetter + "\n\n");
        tooltipString += (faiScalingLetter==="-" ? "" : "\xa0\xa0Faith:\xa0" + faiScalingLetter + "\n\n");
        tooltipString += (arcScalingLetter==="-" ? "" : "\xa0\xa0Arcane:\xa0" + arcScalingLetter + "\n\n");
        tooltipString = tooltipString.trim();

        //document.getElementById(handId + "-attackRating-tooltip").innerText = tooltipString;
        //document.getElementById(handId + "-attackRating-tooltip").style.padding = '10px';
    } else {
        tooltipString = "";
        //document.getElementById(handId + "-attackRating-tooltip").innerText = "";
        //document.getElementById(handId + "-attackRating-tooltip").style.padding = '0px';
    }

    return ["Total AR: " + totalAR, tooltipString];
};

/*function compares two arrays to find out if they have the same values*/
/*from https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values */
function arrayCompare(_arr1: string[], _arr2: string[]): boolean {
    if (
      !Array.isArray(_arr1)
      || !Array.isArray(_arr2)
      || _arr1.length !== _arr2.length
      ) {
        return false;
      }
    
    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
         }
    }
    
    return true;
};

/*function calculates the elementStatCalcCorrect for different stats*/
/*function used in calcWeaponAttackRating*/
function calcElementStatCalcCorrect(elementScalesOnStat: number, elementCalcID: number, stat: number): number {
    if (elementScalesOnStat === 0) {
        return 0;
    } else {
        switch(elementCalcID) {
            case 0:
                return stat>80 ? 90+20*(stat-80)/70
                        : stat>60 ? 75+15*(stat-60)/20
                        : stat>18 ? 25+50*(1-(Math.pow((1-((stat-18)/42)), 1.2)))
                        : 25*(Math.pow(((stat-1)/17), 1.2));
            case 1:
                return stat>80 ? 90+20*(stat-80)/70
                        : stat>60 ? 75+15*(stat-60)/20
                        : stat>20 ? 35+40*(1-(Math.pow((1-((stat-20)/40)), 1.2)))
                        : 35*(Math.pow(((stat-1)/19), 1.2));
            case 2:
                return stat>80 ? 90+20*(stat-80)/70
                        : stat>60 ? 75+15*(stat-60)/20
                        : stat>20 ? 35+40*(1-(Math.pow((1-((stat-20)/40)), 1.2)))
                        : 35*(Math.pow(((stat-1)/19), 1.2));
            case 4:
                return stat>80 ? 95+5*(stat-80)/19
                        : stat>50 ? 80+15*(stat-50)/30
                        : stat>20 ? 40+40*(stat-20)/30
                        : 40*((stat-1)/19);
            case 7:
                return stat>80 ? 90+20*(stat-80)/70
                        : stat>60 ? 75+15*(stat-60)/20
                        : stat>20 ? 35+40*(1-(Math.pow((1-((stat-20)/40)), 1.2)))
                        : 35*(Math.pow(((stat-1)/19), 1.2));
            case 8:
                return stat>80 ? 90+20*(stat-80)/70
                        : stat>60 ? 75+15*(stat-60)/20
                        : stat>16 ? 25+50*(1-(Math.pow((1-((stat-16)/44)), 1.2)))
                        : 25*(Math.pow(((stat-1)/15), 1.2));
            case 12:
                return stat>45 ? 75+25*(stat-45)/54
                        : stat>30 ? 55+20*(stat-30)/15
                        : stat>15 ? 10+45*(stat-15)/15
                        : 10*((stat-1)/14);
            case 14:
                return stat>80 ? 85+15*(stat-80)/19
                        : stat>40 ? 60+25*(stat-40)/40
                        : stat>20 ? 40+20*(stat-20)/20
                        : 40*((stat-1)/19);
            case 15:
                return stat>80 ? 95+5*(stat-80)/19
                        : stat>60 ? 65+30*(stat-60)/20
                        : stat>25 ? 25+40*(stat-25)/35
                        : 25*((stat-1)/24);
            case 16:
                return stat>80 ? 90+10*(stat-80)/19
                        : stat>60 ? 75+15*(stat-60)/20
                        : stat>18 ? 20+55*(stat-18)/42
                        : 20*((stat-1)/17);
            default:
                throw new Error("Error in calcElementStatCalcCorrect")
        }
    }
};

/*function calculates the elementStatDamage for different element types and stats*/
/*function used in calcWeaponAttackRating*/
function calcElementStatDamage(elementAttack: number, statScaling: number, elementStatCalcCorrect: number): number {
    if (elementAttack > 0) {
        return elementAttack*(statScaling*(elementStatCalcCorrect/100));
    } else {
        return 0;
    }
};

/*function checks if the stat requirement of a specific stat is met for an element type considering the element scales of that stat*/
/*returns true if stat requirement is met for that element type.*/
function checkElementStatRequirementsMet(stat: number, requirement: number, elementScalesOnStat: number): boolean {
    let statRequirementMet = false;
    let elementStatRequirementMet = false;

    if (stat >= requirement) {
        statRequirementMet = true;
    } else {
        statRequirementMet = false;
    }

    if (elementScalesOnStat === 1 && statRequirementMet === false) {
        elementStatRequirementMet = false;
    } else {
        elementStatRequirementMet = true;
    }
    return elementStatRequirementMet;
}

/*function checks if all stat requirements are met for that element type*/
/*takes in 3 arrays*/
/*stats array contains the current character stats for strength, dexterity, intelligence, faith, arcane*/
/*requirements array contains the weapon requirements for the aforementioned stats*/
/*elementScalesOnStats array contains information about the existence of stat scaling for this damage type (1 = true, 0 = false)*/
/*returns ture if all element requirements are met*/
function checkElementRequirementMet(stats: number[], requirements: number[], elementScalesOnStats: number[]): boolean {
    let elementRequirementMet = true;
    for (let s in stats) {
        if (!checkElementStatRequirementsMet(stats[s], requirements[s], elementScalesOnStats[s])) {
            elementRequirementMet = false;
        }
    }
    return elementRequirementMet;
};

/*function calculate the damage of a damage type*/
/*elementRequirementMet is a bool reflecting, if the requirement for an element is met*/
/*elementAttack is an integer reflecting the base element Attack Rating*/
/*elementStatDamage Array is an array containing the scaling damage of each stat*/
/*returns the element damage*/
function calcElementDamage(elementRequirementMet: boolean, elementAttack: number, elementStatDamageArray: number[]): number {
    if (!elementRequirementMet) {
        let result = elementAttack*(-0.4);
        if (result === 0) {
            return 0
        }
        return result;
    } else {
        let result = 0;
        for (let d in elementStatDamageArray) {
            result += elementStatDamageArray[d];
        }
        return result;
    }
};

/*function translates the scaling value used to calculate scaling damage into the letter, that gets displayed by the game*/
/*takes the scaling value as input*/
function translateScalingToLetter(scaling: number):string {
    if (scaling === 0) {
        return "-";
    } else {
        let result = "";
        if (scaling > 1.75) {
            result += "S";
        } else if (scaling >= 1.4) {
            result += "A";
        } else if (scaling >= 0.9) {
            result += "B";
        } else if (scaling >= 0.6) {
            result += "C";
        } else if (scaling >= 0.25) {
            result += "D";
        } else {
            result += "E";
        }
        result += " (" + Math.floor(scaling*100) + ")";
        return result;
    }
};

export default calcWeaponAttackRating