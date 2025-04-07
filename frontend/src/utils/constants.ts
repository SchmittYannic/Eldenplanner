export const userProfileImageHeight = 290;
export const userProfileImageWidth = 290;

// AffinityData
/*
1. ER - Build Planner spreadsheet
2. table: WeaponsData
3. column o and p
*/

export type AffinityDataType = {
    [key: string]: number
}

export const AffinityData: AffinityDataType = {
    "Standard": 0,
    "Heavy": 100,
    "Keen": 200,
    "Quality": 300,
    "Fire": 400,
    "Flame Art": 500,
    "Lightning": 600,
    "Sacred": 700,
    "Magic": 800,
    "Cold": 900,
    "Poison": 1000,
    "Blood": 1100,
    "Occult": 1200,
}

export const AffinityOptions = Object.keys(AffinityData);

// ArmorData
/* 
data source:
1. ER - Build Planner spreadsheet
https://docs.google.com/spreadsheets/d/19Op36P7gdVMkPzFQX6OsjZcfyUjdGOj7Cjk9qFAVj-U/copy
2. table: ArmorData
3. get csv of table
4. use https://csvjson.com/csv2json options: Parse numbers, Parse JSON, output: Array
5. use https://jsoneditoronline.org/ to format
6. function for formatting:
function query(data) {
    const filteredData = data.filter(item => item["Type"] === "Head");
    const reducedData = filteredData.reduce((acc, item) => {
        acc[item['Armor PIece']] = item['ID'];
        return acc;
    }, {});

    return reducedData
}
7. Important to change filter from Head to other types to create 4 different objects.
*/

export type ArmorDataType = {
    [key: string]: number
}

export const ArmorHeadData: ArmorDataType = {
    "Commoner's Headband": 810000,
    "Commoner's Headband (Altered)": 811000,
    "Aristocrat Headband": 370000,
    "Aristocrat Hat": 380000,
    "Old Aristocrat Cowl": 390000,
    "Page Hood": 220000,
    "High Page Hood": 1990000,
    "Guardian Mask": 330000,
    "Festive Hood": 800000,
    "Festive Hood (Altered)": 801000,
    "Blue Festive Hood": 802000,
    "Guilty Hood": 160000,
    "Prisoner Iron Mask": 890000,
    "Blackguard's Iron Mask": 891000,
    "Bloodsoaked Mask": 964000,
    "Caterpillar Mask": 5070000,
    "Black Dumpling": 2020000,
    "Mushroom Head": 1130000,
    "Mushroom Crown": 2010000,
    "St. Trina's Blossom": 5300000,
    "Circlet of Light": 5272000,
    "Astrologer Hood": 630000,
    "Juvenile Scholar Cap": 1030000,
    "Karolos Glintstone Crown": 833000,
    "Olivinus Glintstone Crown": 831000,
    "Twinsage Glintstone Crown": 830000,
    "Witch's Glintstone Crown": 834000,
    "Lazuli Glintstone Crown": 832000,
    "Haima Glintstone Crown": 1000000,
    "Hierodas Glintstone Crown": 990000,
    "Spellblade's Pointed Hat": 130000,
    "Alberich's Pointed Hat": 120000,
    "Alberich's Pointed Hat (Altered)": 121000,
    "Preceptor's Big Hat": 910000,
    "Mask of Confidence": 911000,
    "Azur's Glintstone Crown": 581000,
    "Lusat's Glintstone Crown": 580000,
    "Queen's Crescent Crown": 510000,
    "Snow Witch Hat": 1010000,
    "High Priest Hat": 5060000,
    "Fia's Hood": 1940000,
    "Prophet Blindfold": 620000,
    "Traveling Maiden Hood": 900000,
    "Finger Maiden Fillet": 902000,
    "Sage Hood": 430000,
    "Greathood": 1600000,
    "Dane's Hat": 3000000,
    "Radiant Gold Mask": 1040000,
    "Perfumer Hood": 90000,
    "Traveler's Hat": 100000,
    "Depraved Perfumer Headscarf": 540000,
    "Ruler's Mask": 961000,
    "Consort's Mask": 960000,
    "Marais Mask": 963000,
    "Great Horned Headband": 300000,
    "Shining Horned Headband": 301000,
    "Godskin Apostle Hood": 520000,
    "Godskin Noble Hood": 530000,
    "Sanguine Noble Hood": 320000,
    "Wise Man's Mask": 5110000,
    "Crimson Tear Scarab": 1910000,
    "Cerulean Tear Scarab": 1920000,
    "Ash-of-War Scarab": 1900000,
    "Glintstone Scarab": 1902000,
    "Incantation Scarab": 1901000,
    "Imp Head (Cat)": 1080000,
    "Imp Head (Wolf)": 1084000,
    "Imp Head (Fanged)": 1081000,
    "Imp Head (Long-Tongued)": 1082000,
    "Imp Head (Corpse)": 1083000,
    "Imp Head (Elder)": 1085000,
    "Imp Head (Lion)": 5330000,
    "Nox Mirrorhelm": 1300000,
    "Iji's Mirrorhelm": 1301000,
    "Silver Tear Mask": 1090000,
    "Envoy Crown": 820000,
    "Octopus Head": 1110000,
    "Jar": 1120000,
    "Greatjar": 5320000,
    "Albinauric Mask": 1060000,
    "Black Wolf Mask": 170000,
    "Blue Cloth Cowl": 670000,
    "Crimson Hood": 740000,
    "Navy Hood": 741000,
    "White Mask": 680000,
    "Thiollier's Mask": 5030000,
    "Nomadic Merchant's Chapeau": 250000,
    "Bandit Mask": 1401000,
    "Black Hood": 1400000,
    "Confessor Hood": 880000,
    "Confessor Hood (Altered)": 881000,
    "Omensmirk Mask": 1890000,
    "Skeletal Mask": 930000,
    "Gravebird Helm": 5230000,
    "Dancer's Hood": 5080000,
    "Foot Soldier Helm": 1860000,
    "Foot Soldier Helmet": 1840000,
    "Foot Soldier Cap": 1830000,
    "Gilded Foot Soldier Cap": 1850000,
    "Sacred Crown Helm": 1880000,
    "Highwayman Hood": 1980000,
    "Common Soldier Helm": 5240000,
    "Vulgar Militia Helm": 420000,
    "Shadow Militiaman Helm": 5280000,
    "Duelist Helm": 310000,
    "Rotten Duelist Helm": 2000000,
    "Nox Monk Hood": 290000,
    "Nox Monk Hood (Altered)": 291000,
    "Nox Swordstress Crown": 292000,
    "Nox Swordstress Crown (Altered)": 294000,
    "Night Maiden Twin Crown": 293000,
    "Champion Headband": 730000,
    "Leather Headband": 5190000,
    "Leather Crown": 5191000,
    "Fang Helm": 5021000,
    "Igon's Helm": 5100000,
    "Igon's Helm (Altered)": 5101000,
    "Curseblade Mask": 5210000,
    "Pelt of Ralva": 5020000,
    "Chain Coif": 1100000,
    "Iron Helmet": 40000,
    "Godrick Soldier Helm": 1700000,
    "Raya Lucarian Helm": 1710000,
    "Radahn Soldier Helm": 1730000,
    "Leyndell Soldier Helm": 1720000,
    "Haligtree Helm": 1750000,
    "Messmer Soldier Helm": 5140000,
    "Exile Hood": 190000,
    "Kaiden Helm": 50000,
    "Land of Reeds Helm": 870000,
    "Okina Mask": 872000,
    "Iron Kasa": 150000,
    "Eccentric's Hood": 940000,
    "Eccentric's Hood (Altered)": 941000,
    "Freyja's Helm": 5120000,
    "Marionette Soldier Helm": 840000,
    "Marionette Soldier Birdhelm": 850000,
    "Blue Silver Mail Hood": 240000,
    "Fire Monk Hood": 350000,
    "Blackflame Monk Hood": 351000,
    "Zamor Mask": 1070000,
    "Black Knife Hood": 180000,
    "Helm of Night": 5090000,
    "Malenia's Winged Helm": 770000,
    "Elden Lord Crown": 460000,
    "Messmer's Helm": 5220000,
    "Messmer's Helm (Altered)": 5221000,
    "Knight Helm": 1500000,
    "Vagabond Knight Helm": 660000,
    "Greathelm": 1101000,
    "Carian Knight Helm": 980000,
    "Godrick Knight Helm": 1770000,
    "Cuckoo Knight Helm": 1780000,
    "Redmane Knight Helm": 1800000,
    "Gelmir Knight Helm": 1760000,
    "Leyndell Knight Helm": 1790000,
    "Haligtree Knight Helm": 1820000,
    "Black Knight Helm": 5150000,
    "Bloodhound Knight Helm": 790000,
    "Cleanrot Helm": 340000,
    "Cleanrot Helm (Altered)": 341000,
    "Fire Knight Helm": 5180000,
    "Winged Serpent Helm": 5183000,
    "Death Mask Helm": 5182000,
    "Salza's Hood": 5184000,
    "Death Knight Helm": 5200000,
    "Horned Warrior Helm": 5250000,
    "Divine Beast Helm": 5252000,
    "Divine Bird Helm": 5253000,
    "Oathseeker Knight Helm": 5000000,
    "Raging Wolf Helm": 860000,
    "Hoslow's Helm": 650000,
    "Diallos's Mask": 651000,
    "Twinned Helm": 600000,
    "Drake Knight Helm": 60000,
    "Drake Knight Helm (Altered)": 61000,
    "Briar Helm": 210000,
    "Fingerprint Helm": 950000,
    "Rakshasa Helm": 5160000,
    "Royal Remains Helm": 690000,
    "All-Knowing Helm": 590000,
    "Royal Knight Helm": 280000,
    "Rellana's Helm": 5260000,
    "Maliketh's Helm": 760000,
    "Banished Knight Helm": 200000,
    "Banished Knight Helm (Altered)": 201000,
    "Night's Cavalry Helm": 230000,
    "Night's Cavalry Helm (Altered)": 231000,
    "Helm of Solitude": 5130000,
    "Veteran's Helm": 780000,
    "Scaled Helm": 80000,
    "Beast Champion Helm": 720000,
    "Tree Sentinel Helm": 270000,
    "Malformed Dragon Helm": 260000,
    "Crucible Axe Helm": 570000,
    "Crucible Tree Helm": 571000,
    "Crucible Hammer-Helm": 5310000,
    "Gaius's Helm": 3010000,
    "Radahn's Redmane Helm": 470000,
    "Young Lion's Helm": 5270000,
    "Lionel's Helm": 640000,
    "Bull-Goat Helm": 140000,
    "Verdigris Helm": 5010000,
    "Omen Helm": 970000,
    "Fire Prelate Helm": 360000,
    "Pumpkin Helm": 440000,
    "Divine Beast Head": 5290000
}

export const ArmorChestData: ArmorDataType = {
    "Cloth Garb": 160100,
    "Traveler's Clothes": 1020100,
    "Commoner's Simple Garb": 812000,
    "Commoner's Simple Garb (Altered)": 812100,
    "Commoner's Garb": 810100,
    "Commoner's Garb (Altered)": 811100,
    "Aristocrat Garb": 370100,
    "Aristocrat Garb (Altered)": 371100,
    "Aristocrat Coat": 380100,
    "Old Aristocrat Gown": 390100,
    "Page Garb": 220100,
    "Page Garb (Altered)": 221100,
    "High Page Clothes": 1990100,
    "High Page Clothes (Altered)": 1991100,
    "Guardian Garb": 331100,
    "Guardian Garb (Full Bloom)": 330100,
    "Festive Garb": 800100,
    "Festive Garb (Altered)": 801100,
    "Blue Festive Garb": 802100,
    "Prisoner Clothing": 890100,
    "Braided Cord Robe": 5070100,
    "Mushroom Body": 1130100,
    "Astrologer Robe": 630100,
    "Astrologer Robe (Altered)": 631100,
    "Juvenile Scholar Robe": 1030100,
    "Raya Lucarian Robe": 830100,
    "Lazuli Robe": 2030000,
    "Battlemage Robe": 1000100,
    "Errant Sorcerer Robe": 990100,
    "Errant Sorcerer Robe (Altered)": 991100,
    "Spellblade's Traveling Attire": 130100,
    "Spellblade's Traveling Attire (Altered)": 131100,
    "Alberich's Robe": 120100,
    "Alberich's Robe (Altered)": 121100,
    "Preceptor's Long Gown": 910100,
    "Preceptor's Long Gown (Altered)": 911100,
    "Azur's Glintstone Robe": 581100,
    "Lusat's Robe": 580100,
    "Queen's Robe": 510100,
    "Snow Witch Robe": 1010100,
    "Snow Witch Robe (Altered)": 1011100,
    "High Priest Robe": 5060100,
    "Finger Robe": 5062100,
    "Fia's Robe": 1940100,
    "Fia's Robe (Altered)": 1941100,
    "Deathbed Dress": 1930100,
    "Prophet Robe": 622100,
    "Prophet Robe (Altered)": 621100,
    "Corhyn's Robe": 620100,
    "Traveling Maiden Robe": 900100,
    "Traveling Maiden Robe (Altered)": 901100,
    "Finger Maiden Robe": 902100,
    "Finger Maiden Robe (Altered)": 903100,
    "Dryleaf Robe": 3000100,
    "Dryleaf Robe (Altered)": 3001100,
    "Sage Robe": 430100,
    "Goldmask's Rags": 1040100,
    "Perfumer Robe": 90100,
    "Perfumer Robe (Altered)": 91100,
    "Perfumer's Traveling Garb": 100100,
    "Perfumer's Traveling Garb (Altered)": 101100,
    "Depraved Perfumer Robe": 540100,
    "Depraved Perfumer Robe (Altered)": 541100,
    "Upper-Class Robe": 962100,
    "Ruler's Robe": 961100,
    "Consort's Robe": 960100,
    "Official's Attire": 964100,
    "Marais Robe": 963100,
    "Fur Raiment": 300100,
    "Shaman Furs": 301100,
    "Godskin Apostle Robe": 520100,
    "Godskin Noble Robe": 530100,
    "Fell Omen Cloak": 1050100,
    "Sanguine Noble Robe": 320100,
    "Ansbach's Attire": 5110100,
    "Ansbach's Attire (Altered)": 5111100,
    "Lord of Blood's Robe": 480100,
    "Lord of Blood's Robe (Altered)": 481100,
    "Leather Armor": 1400100,
    "Blue Cloth Vest": 670100,
    "Noble's Traveling Garb": 740100,
    "War Surgeon Gown": 680100,
    "War Surgeon Gown (Altered)": 681100,
    "Thiollier's Garb": 5030100,
    "Thiollier's Garb (Altered)": 5031100,
    "Nomadic Merchant's Finery": 250100,
    "Nomadic Merchant's Finery (Altered)": 251100,
    "Bandit Garb": 931100,
    "Confessor Armor": 880100,
    "Confessor Armor (Altered)": 881100,
    "Omenkiller Robe": 1890100,
    "Raptor's Black Feathers": 930100,
    "Gravebird Armor": 5231100,
    "Gravebird's Blackquill Armor": 5230100,
    "Dancer's Dress": 5080100,
    "Dancer's Dress (Altered)": 5081100,
    "Foot Soldier Tabard": 1840100,
    "Leather-Draped Tabard": 1850100,
    "Chain-Draped Tabard": 1830100,
    "Ivory-Draped Tabard": 1880100,
    "Scarlet Tabard": 1860100,
    "Bloodsoaked Tabard": 1870100,
    "Highwayman Cloth Armor": 1980100,
    "Common Soldier Cloth Armor": 5240100,
    "Vulgar Militia Armor": 420100,
    "Shadow Militiaman Armor": 5280100,
    "Gravekeeper Cloak": 310100,
    "Gravekeeper Cloak (Altered)": 311100,
    "Rotten Gravekeeper Cloak": 2000100,
    "Rotten Gravekeeper Cloak (Altered)": 2001100,
    "Nox Monk Armor": 290100,
    "Nox Monk Armor (Altered)": 291100,
    "Nox Swordstress Armor": 292100,
    "Nox Swordstress Armor (Altered)": 294100,
    "Night Maiden Armor": 293100,
    "Champion Pauldron": 730100,
    "Highland Attire": 5191100,
    "Gloried Attire": 5190100,
    "Iron Rivet Armor": 5020100,
    "Igon's Armor": 5100100,
    "Igon's Armor (Altered)": 5101100,
    "Ascetic's Loincloth": 5210100,
    "Chain Armor": 1100100,
    "Dirty Chainmail": 1060100,
    "Tree Surcoat": 1102100,
    "Eye Surcoat": 1101100,
    "Tree-and-Beast Surcoat": 1700100,
    "Cuckoo Surcoat": 1710100,
    "Redmane Surcoat": 1730100,
    "Erdtree Surcoat": 1720100,
    "Haligtree Crest Surcoat": 1750100,
    "Mausoleum Surcoat": 1740100,
    "Messmer Soldier Armor": 5140100,
    "Messmer Soldier Armor (Altered)": 5141100,
    "Scale Armor": 40100,
    "Exile Armor": 190100,
    "Kaiden Armor": 50100,
    "Land of Reeds Armor": 870100,
    "Land of Reeds Armor (Altered)": 871100,
    "White Reed Armor": 872100,
    "Ronin's Armor": 150100,
    "Ronin's Armor (Altered)": 151100,
    "Eccentric's Armor": 940100,
    "Freyja's Armor": 5120100,
    "Freyja's Armor (Altered)": 5121100,
    "Marionette Soldier Armor": 840100,
    "Blue Silver Mail Armor": 240100,
    "Blue Silver Mail Armor (Altered)": 241100,
    "Fire Monk Armor": 350100,
    "Blackflame Monk Armor": 351100,
    "Zamor Armor": 1070100,
    "Black Knife Armor": 180100,
    "Black Knife Armor (Altered)": 181100,
    "Armor of Night": 5090100,
    "Malenia's Armor": 770100,
    "Malenia's Armor (Altered)": 771100,
    "Elden Lord Armor": 460100,
    "Elden Lord Armor (Altered)": 461100,
    "Messmer's Armor": 5220100,
    "Knight Armor": 1500100,
    "Vagabond Knight Armor": 660100,
    "Vagabond Knight Armor (Altered)": 661100,
    "Carian Knight Armor": 980100,
    "Carian Knight Armor (Altered)": 981100,
    "Godrick Knight Armor": 1770100,
    "Godrick Knight Armor (Altered)": 1771100,
    "Cuckoo Knight Armor": 1780100,
    "Cuckoo Knight Armor (Altered)": 1781100,
    "Redmane Knight Armor": 1800100,
    "Redmane Knight Armor (Altered)": 1801100,
    "Gelmir Knight Armor": 1760100,
    "Gelmir Knight Armor (Altered)": 1761100,
    "Leyndell Knight Armor": 1790100,
    "Leyndell Knight Armor (Altered)": 1791100,
    "Haligtree Knight Armor": 1820100,
    "Haligtree Knight Armor (Altered)": 1821100,
    "Mausoleum Knight Armor": 1810100,
    "Mausoleum Knight Armor (Altered)": 1811100,
    "Black Knight Armor": 5150100,
    "Bloodhound Knight Armor": 790100,
    "Bloodhound Knight Armor (Altered)": 791100,
    "Cleanrot Armor": 340100,
    "Cleanrot Armor (Altered)": 341100,
    "Fire Knight Armor": 5180100,
    "Fire Knight Armor (Altered)": 5181100,
    "Death Knight Armor": 5200100,
    "Horned Warrior Armor": 5250100,
    "Divine Beast Warrior Armor": 5252100,
    "Divine Bird Warrior Armor": 5253100,
    "Oathseeker Knight Armor": 5002100,
    "Leda's Armor": 5000100,
    "Raging Wolf Armor": 860100,
    "Raging Wolf Armor (Altered)": 861100,
    "Hoslow's Armor": 650100,
    "Hoslow's Armor (Altered)": 652100,
    "Twinned Armor": 600100,
    "Twinned Armor (Altered)": 601100,
    "Drake Knight Armor": 60100,
    "Drake Knight Armor (Altered)": 61100,
    "Blaidd's Armor": 170100,
    "Blaidd's Armor (Altered)": 171100,
    "Briar Armor": 210100,
    "Briar Armor (Altered)": 211100,
    "Fingerprint Armor": 950100,
    "Fingerprint Armor (Altered)": 951100,
    "Rakshasa Armor": 5160100,
    "Royal Remains Armor": 690100,
    "All-Knowing Armor": 590100,
    "All-Knowing Armor (Altered)": 591100,
    "Royal Knight Armor": 280100,
    "Royal Knight Armor (Altered)": 281100,
    "Rellana's Armor": 5260100,
    "Maliketh's Armor": 760100,
    "Maliketh's Armor (Altered)": 761100,
    "Banished Knight Armor": 200100,
    "Banished Knight Armor (Altered)": 201100,
    "Night's Cavalry Armor": 230100,
    "Night's Cavalry Armor (Altered)": 231100,
    "Armor of Solitude": 5130100,
    "Armor of Solitude (Altered)": 5131100,
    "Veteran's Armor": 780100,
    "Veteran's Armor (Altered)": 781100,
    "Scaled Armor": 80100,
    "Scaled Armor (Altered)": 81100,
    "Beast Champion Armor": 720100,
    "Beast Champion Armor (Altered)": 721100,
    "Tree Sentinel Armor": 270100,
    "Tree Sentinel Armor (Altered)": 271100,
    "Malformed Dragon Armor": 260100,
    "Crucible Axe Armor": 570100,
    "Crucible Axe Armor (Altered)": 572100,
    "Crucible Tree Armor": 571100,
    "Crucible Tree Armor (Altered)": 573100,
    "Gaius's Armor": 3010100,
    "Radahn's Lion Armor": 470100,
    "Radahn's Lion Armor (Altered)": 471100,
    "Young Lion's Armor": 5270100,
    "Young Lion's Armor (Altered)": 5271100,
    "Lionel's Armor": 640100,
    "Lionel's Armor (Altered)": 641100,
    "Bull-Goat Armor": 140100,
    "Verdigris Armor": 5010100,
    "Omen Armor": 970100,
    "Fire Prelate Armor": 360100,
    "Fire Prelate Armor (Altered)": 361100
}

export const ArmorHandsData: ArmorDataType = {
    "Traveler's Manchettes": 1020200,
    "Guardian Bracers": 330200,
    "Bloodsoaked Manchettes": 963200,
    "Braided Arm Wraps": 5070200,
    "Mushroom Arms": 1130200,
    "Astrologer Gloves": 630200,
    "Sorcerer Manchettes": 830200,
    "Battlemage Manchettes": 1000200,
    "Errant Sorcerer Manchettes": 990200,
    "Spellblade's Gloves": 130200,
    "Alberich's Bracers": 120200,
    "Preceptor's Gloves": 910200,
    "High Priest Gloves": 5060200,
    "Azur's Manchettes": 581200,
    "Lusat's Manchettes": 580200,
    "Queen's Bracelets": 510200,
    "Traveling Maiden Gloves": 900200,
    "Dryleaf Arm Wraps": 3000200,
    "Gold Bracelets": 1040200,
    "Perfumer Gloves": 90200,
    "Traveler's Gloves": 100200,
    "Depraved Perfumer Gloves": 540200,
    "Godskin Apostle Bracelets": 520200,
    "Godskin Noble Bracelets": 530200,
    "Ansbach's Manchettes": 5110200,
    "Leather Gloves": 1400200,
    "Warrior Gauntlets": 670200,
    "Noble's Gloves": 740200,
    "War Surgeon Gloves": 680200,
    "Thiollier's Gloves": 5030200,
    "Bandit Manchettes": 930200,
    "Confessor Gloves": 880200,
    "Omenkiller Long Gloves": 1890200,
    "Gravebird Bracelets": 5230200,
    "Dancer's Bracer": 5080200,
    "Foot Soldier Gauntlets": 1830200,
    "Highwayman Gauntlets": 1980200,
    "Common Soldier Gauntlets": 5240200,
    "Vulgar Militia Gauntlets": 420200,
    "Shadow Militiaman Gauntlets": 5280200,
    "Nox Bracelets": 290200,
    "Champion Bracers": 730200,
    "Leather Arm Wraps": 5190200,
    "Iron Rivet Gauntlets": 5020200,
    "Igon's Gauntlets": 5100200,
    "Ascetic's Wrist Guards": 5210200,
    "Chain Gauntlets": 1100200,
    "Iron Gauntlets": 40200,
    "Godrick Soldier Gauntlets": 1700200,
    "Raya Lucarian Gauntlets": 1710200,
    "Radahn Soldier Gauntlets": 1730200,
    "Leyndell Soldier Gauntlets": 1720200,
    "Haligtree Gauntlets": 1750200,
    "Mausoleum Gauntlets": 1740200,
    "Messmer Soldier Gauntlets": 5140200,
    "Exile Gauntlets": 190200,
    "Kaiden Gauntlets": 50200,
    "Land of Reeds Gauntlets": 870200,
    "White Reed Gauntlets": 872200,
    "Ronin's Gauntlets": 150200,
    "Eccentric's Manchettes": 940200,
    "Freyja's Gauntlets": 5120200,
    "Blue Silver Bracelets": 240200,
    "Fire Monk Gauntlets": 350200,
    "Blackflame Monk Gauntlets": 351200,
    "Zamor Bracelets": 1070200,
    "Black Knife Gauntlets": 180200,
    "Gauntlets of Night": 5090200,
    "Malenia's Gauntlet": 770200,
    "Elden Lord Bracers": 460200,
    "Messmer's Gauntlets": 5220200,
    "Knight Gauntlets": 1500200,
    "Vagabond Knight Gauntlets": 660200,
    "Carian Knight Gauntlets": 980200,
    "Godrick Knight Gauntlets": 1770200,
    "Cuckoo Knight Gauntlets": 1780200,
    "Redmane Knight Gauntlets": 1800200,
    "Gelmir Knight Gauntlets": 1760200,
    "Leyndell Knight Gauntlets": 1790200,
    "Haligtree Knight Gauntlets": 1820200,
    "Mausoleum Knight Gauntlets": 1810200,
    "Black Knight Gauntlets": 5150200,
    "Bloodhound Knight Gauntlets": 790200,
    "Cleanrot Gauntlets": 340200,
    "Fire Knight Gauntlets": 5180200,
    "Death Knight Gauntlets": 5200200,
    "Horned Warrior Gauntlets": 5250200,
    "Divine Bird Warrior Gauntlets": 5253200,
    "Oathseeker Knight Gauntlets": 5000200,
    "Raging Wolf Gauntlets": 860200,
    "Hoslow's Gauntlets": 650200,
    "Twinned Gauntlets": 600200,
    "Drake Knight Gauntlets": 60200,
    "Blaidd's Gauntlets": 170200,
    "Briar Gauntlets": 210200,
    "Fingerprint Gauntlets": 950200,
    "Rakshasa Gauntlets": 5160200,
    "Royal Remains Gauntlets": 690200,
    "All-Knowing Gauntlets": 590200,
    "Royal Knight Gauntlets": 280200,
    "Rellana's Gloves": 5260200,
    "Maliketh's Gauntlets": 760200,
    "Banished Knight Gauntlets": 200200,
    "Night's Cavalry Gauntlets": 230200,
    "Gauntlets of Solitude": 5130200,
    "Veteran's Gauntlets": 780200,
    "Scaled Gauntlets": 80200,
    "Beast Champion Gauntlets": 720200,
    "Tree Sentinel Gauntlets": 270200,
    "Malformed Dragon Gauntlets": 260200,
    "Crucible Gauntlets": 570200,
    "Gaius's Gauntlets": 3010200,
    "Radahn's Gauntlets": 470200,
    "Young Lion's Gauntlets": 5270200,
    "Lionel's Gauntlets": 640200,
    "Bull-Goat Gauntlets": 140200,
    "Verdigris Gauntlets": 5010200,
    "Omen Gauntlets": 970200,
    "Fire Prelate Gauntlets": 360200
}

export const ArmorLegsData: ArmorDataType = {
    "Cloth Trousers": 160300,
    "Traveler's Boots": 1020300,
    "Commoner's Shoes": 810300,
    "Aristocrat Boots": 370300,
    "Old Aristocrat Shoes": 390300,
    "Page Trousers": 220300,
    "Guardian Greaves": 330300,
    "Prisoner Trousers": 890300,
    "Soiled Loincloth": 5070300,
    "Mushroom Legs": 1130300,
    "Astrologer Trousers": 630300,
    "Sorcerer Leggings": 830300,
    "Battlemage Legwraps": 1000300,
    "Errant Sorcerer Boots": 990300,
    "Spellblade's Trousers": 130300,
    "Alberich's Trousers": 120300,
    "Preceptor's Trousers": 910300,
    "Old Sorcerer's Legwraps": 580300,
    "Queen's Leggings": 510300,
    "Snow Witch Skirt": 1010300,
    "High Priest Undergarments": 5060300,
    "Prophet Trousers": 620300,
    "Traveling Maiden Boots": 900300,
    "Finger Maiden Shoes": 902300,
    "Sage Trousers": 430300,
    "Dryleaf Cuissardes": 3000300,
    "Gold Waistwrap": 1040300,
    "Perfumer Sarong": 90300,
    "Traveler's Slops": 100300,
    "Depraved Perfumer Trousers": 540300,
    "Consort's Trousers": 960300,
    "Fur Leggings": 300300,
    "Shaman Leggings": 301300,
    "Godskin Apostle Trousers": 520300,
    "Godskin Noble Trousers": 530300,
    "Sanguine Noble Waistcloth": 320300,
    "Ansbach's Boots": 5110300,
    "Leather Trousers": 40300,
    "Leather Boots": 1400300,
    "Warrior Greaves": 670300,
    "Noble's Trousers": 740300,
    "War Surgeon Trousers": 680300,
    "Thiollier's Trousers": 5030300,
    "Nomadic Merchant's Trousers": 250300,
    "Bandit Boots": 930300,
    "Confessor Boots": 880300,
    "Omenkiller Boots": 1890300,
    "Gravebird Anklets": 5230300,
    "Dancer's Trousers": 5080300,
    "Foot Soldier Greaves": 1830300,
    "Common Soldier Greaves": 5240300,
    "Vulgar Militia Greaves": 420300,
    "Shadow Militiaman Greaves": 5280300,
    "Duelist Greaves": 310300,
    "Rotten Duelist Greaves": 2000300,
    "Nox Greaves": 290300,
    "Champion Gaiters": 730300,
    "Leather Leg Wraps": 5190300,
    "Iron Rivet Greaves": 5020300,
    "Igon's Loincloth": 5100300,
    "Ascetic's Ankle Guards": 5210300,
    "Chain Leggings": 1100300,
    "Godrick Soldier Greaves": 1700300,
    "Raya Lucarian Greaves": 1710300,
    "Radahn Soldier Greaves": 1730300,
    "Leyndell Soldier Greaves": 1720300,
    "Haligtree Greaves": 1750300,
    "Mausoleum Greaves": 1740300,
    "Messmer Soldier Greaves": 5140300,
    "Exile Greaves": 190300,
    "Kaiden Trousers": 50300,
    "Land of Reeds Greaves": 870300,
    "White Reed Greaves": 872300,
    "Ronin's Greaves": 150300,
    "Eccentric's Breeches": 940300,
    "Freyja's Greaves": 5120300,
    "Blue Silver Mail Skirt": 240300,
    "Fire Monk Greaves": 350300,
    "Blackflame Monk Greaves": 351300,
    "Zamor Legwraps": 1070300,
    "Black Knife Greaves": 180300,
    "Greaves of Night": 5090300,
    "Malenia's Greaves": 770300,
    "Elden Lord Greaves": 460300,
    "Messmer's Greaves": 5220300,
    "Knight Greaves": 1500300,
    "Vagabond Knight Greaves": 660300,
    "Carian Knight Greaves": 980300,
    "Godrick Knight Greaves": 1770300,
    "Cuckoo Knight Greaves": 1780300,
    "Redmane Knight Greaves": 1800300,
    "Gelmir Knight Greaves": 1760300,
    "Leyndell Knight Greaves": 1790300,
    "Haligtree Knight Greaves": 1820300,
    "Mausoleum Knight Greaves": 1810300,
    "Black Knight Greaves": 5150300,
    "Bloodhound Knight Greaves": 790300,
    "Cleanrot Greaves": 340300,
    "Fire Knight Greaves": 5180300,
    "Death Knight Greaves": 5200300,
    "Horned Warrior Greaves": 5250300,
    "Divine Bird Warrior Greaves": 5253300,
    "Oathseeker Knight Greaves": 5000300,
    "Raging Wolf Greaves": 860300,
    "Hoslow's Greaves": 650300,
    "Twinned Greaves": 600300,
    "Drake Knight Greaves": 60300,
    "Blaidd's Greaves": 170300,
    "Briar Greaves": 210300,
    "Fingerprint Greaves": 950300,
    "Rakshasa Greaves": 5160300,
    "Royal Remains Greaves": 690300,
    "All-Knowing Greaves": 590300,
    "Royal Knight Greaves": 280300,
    "Rellana's Greaves": 5260300,
    "Maliketh's Greaves": 760300,
    "Banished Knight Greaves": 200300,
    "Night's Cavalry Greaves": 230300,
    "Greaves of Solitude": 5130300,
    "Veteran's Greaves": 780300,
    "Scaled Greaves": 80300,
    "Beast Champion Greaves": 720300,
    "Tree Sentinel Greaves": 270300,
    "Malformed Dragon Greaves": 260300,
    "Crucible Greaves": 570300,
    "Gaius's Greaves": 3010300,
    "Radahn's Greaves": 470300,
    "Young Lion's Greaves": 5270300,
    "Lionel's Greaves": 640300,
    "Bull-Goat Greaves": 140300,
    "Verdigris Greaves": 5010300,
    "Omen Greaves": 970300,
    "Fire Prelate Greaves": 360300
}

export const HeadOptions = Object.keys(ArmorHeadData);
export const ChestOptions = Object.keys(ArmorChestData);
export const HandsOptions = Object.keys(ArmorHandsData);
export const LegsOptions = Object.keys(ArmorLegsData);

// TalismanData
/* 
data source:
1. ER - Build Planner spreadsheet
2. table: EquipParamAccessory
3. get csv of table
4. swap ID and Name column so Name is first
5. use https://csvjson.com/csv2json options: Parse numbers, Parse JSON, output: Hash
6. use https://jsoneditoronline.org/ to format
function query(data) {
    let keysToKeep = ["weight", "accessoryGroup"];  // Add any other keys you want to keep

    let newObj = {};

    Object.keys(data).forEach(key => {
        newObj[key] = {};  // Initialize an empty object for each key in the main object
        Object.keys(data[key]).forEach(innerKey => {
            if (keysToKeep.includes(innerKey)) {
                newObj[key][innerKey] = data[key][innerKey];
            }
        });
    });

    return newObj
}
*/

type DataType = {
    //"ID": number,
    //"refId": number,
    "weight": number, // used
    //"sortId": number,
    "accessoryGroup": number, // used
    //"residentSpEffectId1": number,
    //"residentSpEffectId2": number,
    //"residentSpEffectId3": number,
    //"residentSpEffectId4": number
}

type TalismansDataType = {
    [key: string]: DataType
}

export const TalismansData: TalismansDataType = {
    "Crimson Amber Medallion": {
        "weight": 0.3,
        "accessoryGroup": 1000
    },
    "Crimson Amber Medallion +1": {
        "weight": 0.3,
        "accessoryGroup": 1000
    },
    "Crimson Amber Medallion +2": {
        "weight": 0.3,
        "accessoryGroup": 1000
    },
    "Cerulean Amber Medallion": {
        "weight": 0.3,
        "accessoryGroup": 1010
    },
    "Cerulean Amber Medallion +1": {
        "weight": 0.3,
        "accessoryGroup": 1010
    },
    "Cerulean Amber Medallion +2": {
        "weight": 0.3,
        "accessoryGroup": 1010
    },
    "Viridian Amber Medallion": {
        "weight": 0.3,
        "accessoryGroup": 1020
    },
    "Viridian Amber Medallion +1": {
        "weight": 0.3,
        "accessoryGroup": 1020
    },
    "Viridian Amber Medallion +2": {
        "weight": 0.3,
        "accessoryGroup": 1020
    },
    "Arsenal Charm": {
        "weight": 1.5,
        "accessoryGroup": 1030
    },
    "Arsenal Charm +1": {
        "weight": 1.5,
        "accessoryGroup": 1030
    },
    "Great-Jar's Arsenal": {
        "weight": 1.5,
        "accessoryGroup": 1030
    },
    "Erdtree's Favor": {
        "weight": 1.5,
        "accessoryGroup": 1040
    },
    "Erdtree's Favor +1": {
        "weight": 1.5,
        "accessoryGroup": 1040
    },
    "Erdtree's Favor +2": {
        "weight": 1.5,
        "accessoryGroup": 1040
    },
    "Radagon's Scarseal": {
        "weight": 0.8,
        "accessoryGroup": 1050
    },
    "Radagon's Soreseal": {
        "weight": 0.8,
        "accessoryGroup": 1050
    },
    "Starscourge Heirloom": {
        "weight": 0.8,
        "accessoryGroup": 1060
    },
    "Prosthesis-Wearer Heirloom": {
        "weight": 0.8,
        "accessoryGroup": 1070
    },
    "Stargazer Heirloom": {
        "weight": 0.6,
        "accessoryGroup": 1080
    },
    "Two Fingers Heirloom": {
        "weight": 0.6,
        "accessoryGroup": 1090
    },
    "Silver Scarab": {
        "weight": 1.2,
        "accessoryGroup": 1100
    },
    "Gold Scarab": {
        "weight": 1.2,
        "accessoryGroup": 1110
    },
    "Moon of Nokstella": {
        "weight": 0.8,
        "accessoryGroup": 1140
    },
    "Green Turtle Talisman": {
        "weight": 0.7,
        "accessoryGroup": 1150
    },
    "Stalwart Horn Charm": {
        "weight": 0.6,
        "accessoryGroup": 1160
    },
    "Stalwart Horn Charm +1": {
        "weight": 0.6,
        "accessoryGroup": 1160
    },
    "Immunizing Horn Charm": {
        "weight": 0.6,
        "accessoryGroup": 1170
    },
    "Immunizing Horn Charm +1": {
        "weight": 0.6,
        "accessoryGroup": 1170
    },
    "Clarifying Horn Charm": {
        "weight": 0.6,
        "accessoryGroup": 1180
    },
    "Clarifying Horn Charm +1": {
        "weight": 0.6,
        "accessoryGroup": 1180
    },
    "Prince of Death's Pustule": {
        "weight": 0.6,
        "accessoryGroup": 1190
    },
    "Prince of Death's Cyst": {
        "weight": 0.6,
        "accessoryGroup": 1190
    },
    "Mottled Necklace": {
        "weight": 0.9,
        "accessoryGroup": 1200
    },
    "Mottled Necklace +1": {
        "weight": 0.9,
        "accessoryGroup": 1200
    },
    "Bull-Goat's Talisman": {
        "weight": 0.5,
        "accessoryGroup": 1210
    },
    "Marika's Scarseal": {
        "weight": 0.8,
        "accessoryGroup": 1220
    },
    "Marika's Soreseal": {
        "weight": 0.8,
        "accessoryGroup": 1220
    },
    "Warrior Jar Shard": {
        "weight": 0.9,
        "accessoryGroup": 1230
    },
    "Shard of Alexander": {
        "weight": 0.9,
        "accessoryGroup": 1230
    },
    "Millicent's Prosthesis": {
        "weight": 1.6,
        "accessoryGroup": 1250
    },
    "Magic Scorpion Charm": {
        "weight": 0.8,
        "accessoryGroup": 2000
    },
    "Lightning Scorpion Charm": {
        "weight": 0.8,
        "accessoryGroup": 2010
    },
    "Fire Scorpion Charm": {
        "weight": 0.8,
        "accessoryGroup": 2020
    },
    "Sacred Scorpion Charm": {
        "weight": 0.8,
        "accessoryGroup": 2030
    },
    "Red-Feathered Branchsword": {
        "weight": 1.4,
        "accessoryGroup": 2040
    },
    "Ritual Sword Talisman": {
        "weight": 0.9,
        "accessoryGroup": 2050
    },
    "Spear Talisman": {
        "weight": 0.5,
        "accessoryGroup": 2060
    },
    "Hammer Talisman": {
        "weight": 0.9,
        "accessoryGroup": 2070
    },
    "Winged Sword Insignia": {
        "weight": 1.4,
        "accessoryGroup": 2080
    },
    "Rotten Winged Sword Insignia": {
        "weight": 1.4,
        "accessoryGroup": 2080
    },
    "Dagger Talisman": {
        "weight": 1.1,
        "accessoryGroup": 2090
    },
    "Arrow's Reach Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2100
    },
    "Blue Dancer Charm": {
        "weight": 0.9,
        "accessoryGroup": 2110
    },
    "Twinblade Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2120
    },
    "Axe Talisman": {
        "weight": 0.8,
        "accessoryGroup": 2130
    },
    "Lance Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2140
    },
    "Arrow's Sting Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2150
    },
    "Lord of Blood's Exultation": {
        "weight": 0.9,
        "accessoryGroup": 2160
    },
    "Kindred of Rot's Exultation": {
        "weight": 0.9,
        "accessoryGroup": 2170
    },
    "Claw Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2180
    },
    "Roar Medallion": {
        "weight": 0.7,
        "accessoryGroup": 2190
    },
    "Curved Sword Talisman": {
        "weight": 0.7,
        "accessoryGroup": 2200
    },
    "Companion Jar": {
        "weight": 0.6,
        "accessoryGroup": 2210
    },
    "Perfumer's Talisman": {
        "weight": 0.6,
        "accessoryGroup": 2220
    },
    "Graven-School Talisman": {
        "weight": 0.7,
        "accessoryGroup": 3000
    },
    "Graven-Mass Talisman": {
        "weight": 1,
        "accessoryGroup": 3001
    },
    "Faithful's Canvas Talisman": {
        "weight": 0.7,
        "accessoryGroup": 3040
    },
    "Flock's Canvas Talisman": {
        "weight": 1,
        "accessoryGroup": 3050
    },
    "Old Lord's Talisman": {
        "weight": 0.5,
        "accessoryGroup": 3060
    },
    "Radagon Icon": {
        "weight": 0.7,
        "accessoryGroup": 3070
    },
    "Primal Glintstone Blade": {
        "weight": 0.6,
        "accessoryGroup": 3080
    },
    "Godfrey Icon": {
        "weight": 0.8,
        "accessoryGroup": 3090
    },
    "Dragoncrest Shield Talisman": {
        "weight": 0.8,
        "accessoryGroup": 4000
    },
    "Dragoncrest Shield Talisman +1": {
        "weight": 0.8,
        "accessoryGroup": 4000
    },
    "Dragoncrest Shield Talisman +2": {
        "weight": 0.8,
        "accessoryGroup": 4000
    },
    "Dragoncrest Greatshield Talisman": {
        "weight": 0.8,
        "accessoryGroup": 4000
    },
    "Spelldrake Talisman": {
        "weight": 0.6,
        "accessoryGroup": 4010
    },
    "Spelldrake Talisman +1": {
        "weight": 0.6,
        "accessoryGroup": 4010
    },
    "Spelldrake Talisman +2": {
        "weight": 0.6,
        "accessoryGroup": 4010
    },
    "Flamedrake Talisman": {
        "weight": 0.6,
        "accessoryGroup": 4020
    },
    "Flamedrake Talisman +1": {
        "weight": 0.6,
        "accessoryGroup": 4020
    },
    "Flamedrake Talisman +2": {
        "weight": 0.6,
        "accessoryGroup": 4020
    },
    "Boltdrake Talisman": {
        "weight": 0.6,
        "accessoryGroup": 4030
    },
    "Boltdrake Talisman +1": {
        "weight": 0.6,
        "accessoryGroup": 4030
    },
    "Boltdrake Talisman +2": {
        "weight": 0.6,
        "accessoryGroup": 4030
    },
    "Haligdrake Talisman": {
        "weight": 0.6,
        "accessoryGroup": 4040
    },
    "Haligdrake Talisman +1": {
        "weight": 0.6,
        "accessoryGroup": 4040
    },
    "Haligdrake Talisman +2": {
        "weight": 0.6,
        "accessoryGroup": 4040
    },
    "Pearldrake Talisman": {
        "weight": 0.9,
        "accessoryGroup": 4050
    },
    "Pearldrake Talisman +1": {
        "weight": 0.9,
        "accessoryGroup": 4050
    },
    "Pearldrake Talisman +2": {
        "weight": 0.9,
        "accessoryGroup": 4050
    },
    "Crucible Scale Talisman": {
        "weight": 1.1,
        "accessoryGroup": 4060
    },
    "Crucible Feather Talisman": {
        "weight": 0.8,
        "accessoryGroup": 4070
    },
    "Blue-Feathered Branchsword": {
        "weight": 1.1,
        "accessoryGroup": 4080
    },
    "Ritual Shield Talisman": {
        "weight": 0.9,
        "accessoryGroup": 4090
    },
    "Greatshield Talisman": {
        "weight": 0.9,
        "accessoryGroup": 4100
    },
    "Crucible Knot Talisman": {
        "weight": 0.5,
        "accessoryGroup": 4110
    },
    "Crimson Seed Talisman": {
        "weight": 0.8,
        "accessoryGroup": 5000
    },
    "Cerulean Seed Talisman": {
        "weight": 0.8,
        "accessoryGroup": 5010
    },
    "Blessed Dew Talisman": {
        "weight": 0.6,
        "accessoryGroup": 5020
    },
    "Taker's Cameo": {
        "weight": 1,
        "accessoryGroup": 5030
    },
    "Godskin Swaddling Cloth": {
        "weight": 0.9,
        "accessoryGroup": 5040
    },
    "Assassin's Crimson Dagger": {
        "weight": 0.8,
        "accessoryGroup": 5050
    },
    "Assassin's Cerulean Dagger": {
        "weight": 0.8,
        "accessoryGroup": 5060
    },
    "Crepus's Vial": {
        "weight": 0.7,
        "accessoryGroup": 6000
    },
    "Concealing Veil": {
        "weight": 0.9,
        "accessoryGroup": 6010
    },
    "Carian Filigreed Crest": {
        "weight": 0.8,
        "accessoryGroup": 6020
    },
    "Longtail Cat Talisman": {
        "weight": 0.6,
        "accessoryGroup": 6040
    },
    "Shabriri's Woe": {
        "weight": 0.6,
        "accessoryGroup": 6050
    },
    "Daedicar's Woe": {
        "weight": 0.8,
        "accessoryGroup": 6060
    },
    "Sacrificial Twig": {
        "weight": 1,
        "accessoryGroup": 6070
    },
    "Furled Finger's Trick-Mirror": {
        "weight": 0.7,
        "accessoryGroup": 6080
    },
    "Host's Trick-Mirror": {
        "weight": 0.7,
        "accessoryGroup": 6080
    },
    "Entwining Umbilical Cord": {
        "weight": 0.5,
        "accessoryGroup": 6100
    },
    "Ancestral Spirit's Horn": {
        "weight": 1.2,
        "accessoryGroup": 6110
    },
    "Crimson Amber Medallion +3": {
        "weight": 0.6,
        "accessoryGroup": 1000
    },
    "Cerulean Amber Medallion +3": {
        "weight": 0.6,
        "accessoryGroup": 1010
    },
    "Viridian Amber Medallion +3": {
        "weight": 0.6,
        "accessoryGroup": 1020
    },
    "Two-Headed Turtle Talisman": {
        "weight": 1,
        "accessoryGroup": 1150
    },
    "Stalwart Horn Charm +2": {
        "weight": 0.9,
        "accessoryGroup": 1160
    },
    "Immunizing Horn Charm +2": {
        "weight": 0.9,
        "accessoryGroup": 1170
    },
    "Clarifying Horn Charm +2": {
        "weight": 0.9,
        "accessoryGroup": 1180
    },
    "Mottled Necklace +2": {
        "weight": 1.2,
        "accessoryGroup": 1200
    },
    "Spelldrake Talisman +3": {
        "weight": 0.9,
        "accessoryGroup": 4010
    },
    "Flamedrake Talisman +3": {
        "weight": 0.9,
        "accessoryGroup": 4020
    },
    "Boltdrake Talisman +3": {
        "weight": 0.9,
        "accessoryGroup": 4030
    },
    "Golden Braid": {
        "weight": 0.9,
        "accessoryGroup": 4040
    },
    "Pearldrake Talisman +3": {
        "weight": 1.2,
        "accessoryGroup": 4050
    },
    "Crimson Seed Talisman +1": {
        "weight": 1.1,
        "accessoryGroup": 5000
    },
    "Cerulean Seed Talisman +1": {
        "weight": 1.1,
        "accessoryGroup": 5010
    },
    "Blessed Blue Dew Talisman": {
        "weight": 1.2,
        "accessoryGroup": 8000
    },
    "Fine Crucible Feather Talisman": {
        "weight": 0.6,
        "accessoryGroup": 8010
    },
    "Outer God Heirloom": {
        "weight": 0.6,
        "accessoryGroup": 8020
    },
    "Shattered Stone Talisman": {
        "weight": 0.8,
        "accessoryGroup": 8030
    },
    "Two-Handed Sword Talisman": {
        "weight": 1.2,
        "accessoryGroup": 8040
    },
    "Crusade Insignia": {
        "weight": 1.2,
        "accessoryGroup": 8050
    },
    "Aged One's Exultation": {
        "weight": 0.9,
        "accessoryGroup": 8060
    },
    "Arrow's Soaring Sting Talisman": {
        "weight": 1.1,
        "accessoryGroup": 2100
    },
    "Pearl Shield Talisman": {
        "weight": 0.9,
        "accessoryGroup": 8090
    },
    "Dried Bouquet": {
        "weight": 0.8,
        "accessoryGroup": 8100
    },
    "Smithing Talisman": {
        "weight": 1.3,
        "accessoryGroup": 8110
    },
    "Ailment Talisman": {
        "weight": 0.6,
        "accessoryGroup": 8120
    },
    "Retaliatory Crossed-Tree": {
        "weight": 0.8,
        "accessoryGroup": 8130
    },
    "Lacerating Crossed-Tree": {
        "weight": 0.8,
        "accessoryGroup": 8140
    },
    "Sharpshot Talisman": {
        "weight": 0.6,
        "accessoryGroup": 8150
    },
    "St. Trina's Smile": {
        "weight": 0.9,
        "accessoryGroup": 8160
    },
    "Talisman of the Dread": {
        "weight": 0.6,
        "accessoryGroup": 8170
    },
    "Enraged Divine Beast": {
        "weight": 0.7,
        "accessoryGroup": 8180
    },
    "Beloved Stardust": {
        "weight": 1.3,
        "accessoryGroup": 3070
    },
    "Talisman of Lord's Bestowal": {
        "weight": 3,
        "accessoryGroup": 8200
    },
    "Verdigris Discus": {
        "weight": 4.5,
        "accessoryGroup": 8210
    },
    "Rellana's Cameo": {
        "weight": 0.8,
        "accessoryGroup": 8220
    },
    "Blade of Mercy": {
        "weight": 1.3,
        "accessoryGroup": 8230
    },
    "Talisman of All Crucibles": {
        "weight": 1.9,
        "accessoryGroup": 4060
    }
}

export const TalismansOptions = Object.keys(TalismansData);

// WeaponsData
export const WeaponsOptions = [
    "Dagger",
    "Parrying Dagger",
    "Miséricorde",
    "Great Knife",
    "Bloodstained Dagger",
    "Erdsteel Dagger",
    "Fire Knight's Shortsword",
    "Wakizashi",
    "Main-gauche",
    "Celebrant's Sickle",
    "Ivory Sickle",
    "Crystal Knife",
    "Scorpion's Stinger",
    "Cinquedea",
    "Glintstone Kris",
    "Reduvia",
    "Blade of Calling",
    "Black Knife",
    "Smithscript Dagger",
    "Short Sword",
    "Longsword",
    "Broadsword",
    "Weathered Straight Sword",
    "Lordsworn's Straight Sword",
    "Noble's Slender Sword",
    "Cane Sword",
    "Stone-Sheathed Sword",
    "Warhawk's Talon",
    "Lazuli Glintstone Sword",
    "Carian Knight's Sword",
    "Crystal Sword",
    "Rotten Crystal Sword",
    "Miquellan Knight's Sword",
    "Ornamental Straight Sword",
    "Golden Epitaph",
    "Sword of St. Trina",
    "Velvet Sword of St. Trina",
    "Regalia of Eochaid",
    "Coded Sword",
    "Sword of Night and Flame",
    "Sword of Light",
    "Sword of Darkness",
    "Milady",
    "Leda's Sword",
    "Rellana's Twin Blades",
    "Bastard Sword",
    "Claymore",
    "Iron Greatsword",
    "Lordsworn's Greatsword",
    "Knight's Greatsword",
    "Banished Knight's Greatsword",
    "Forked Greatsword",
    "Lizard Greatsword",
    "Flamberge",
    "Gargoyle's Greatsword",
    "Gargoyle's Blackblade",
    "Inseparable Sword",
    "Sword of Milos",
    "Marais Executioner's Sword",
    "Greatsword of Solitude",
    "Ordovis's Greatsword",
    "Alabaster Lord's Sword",
    "Death's Poker",
    "Helphen's Steeple",
    "Blasphemous Blade",
    "Golden Order Greatsword",
    "Dark Moon Greatsword",
    "Greatsword of Damnation",
    "Sacred Relic Sword",
    "Zweihander",
    "Greatsword",
    "Watchdog's Greatsword",
    "Fire Knight's Greatsword",
    "Troll's Golden Sword",
    "Troll Knight's Sword",
    "Moonrithyll's Knight Sword",
    "Royal Greatsword",
    "Grafted Blade Greatsword",
    "Ruins Greatsword",
    "Ancient Meteoric Ore Greatsword",
    "Starscourge Greatsword",
    "Greatsword of Radahn (Lord)",
    "Greatsword of Radahn (Light)",
    "Godslayer's Greatsword",
    "Maliketh's Black Blade",
    "Rapier",
    "Estoc",
    "Noble's Estoc",
    "Cleanrot Knight's Sword",
    "Rogier's Rapier",
    "Antspur Rapier",
    "Frozen Needle",
    "Carian Sorcery Sword",
    "Great Épée",
    "Godskin Stitcher",
    "Queelign's Greatsword",
    "Bloody Helice",
    "Dragon King's Cragblade",
    "Sword Lance",
    "Scimitar",
    "Falchion",
    "Shamshir",
    "Grossmesser",
    "Bandit's Curved Sword",
    "Shotel",
    "Scavenger's Curved Sword",
    "Mantis Blade",
    "Beastman's Curved Sword",
    "Flowing Curved Sword",
    "Serpent-God's Curved Sword",
    "Magma Blade",
    "Spirit Sword",
    "Nox Flowing Sword",
    "Wing of Astel",
    "Falx",
    "Dancing Blade of Ranah",
    "Horned Warrior's Sword",
    "Eclipse Shotel",
    "Dismounter",
    "Omen Cleaver",
    "Monk's Flameblade",
    "Beastman's Cleaver",
    "Freyja's Greatsword",
    "Bloodhound's Fang",
    "Onyx Lord's Greatsword",
    "Zamor Curved Sword",
    "Magma Wyrm's Scalesword",
    "Horned Warrior's Greatsword",
    "Morgott's Cursed Sword",
    "Backhand Blade",
    "Smithscript Cirque",
    "Curseblade's Cirque",
    "Uchigatana",
    "Nagakiba",
    "Serpentbone Blade",
    "Meteoric Ore Blade",
    "Moonveil",
    "Sword of Night",
    "Rivers of Blood",
    "Dragonscale Blade",
    "Star-Lined Sword",
    "Hand of Malenia",
    "Great Katana",
    "Dragon-Hunter's Great Katana",
    "Rakshasa's Great Katana",
    "Twinblade",
    "Twinned Knight Swords",
    "Black Steel Twinblade",
    "Godskin Peeler",
    "Gargoyle's Twinblade",
    "Gargoyle's Black Blades",
    "Eleonora's Poleblade",
    "Euporia",
    "Hand Axe",
    "Forked Hatchet",
    "Forked-Tongue Hatchet",
    "Battle Axe",
    "Messmer Soldier's Axe",
    "Warped Axe",
    "Jawbone Axe",
    "Iron Cleaver",
    "Highland Axe",
    "Smithscript Axe",
    "Celebrant's Cleaver",
    "Sacrificial Axe",
    "Icerind Hatchet",
    "Ripple Blade",
    "Stormhawk Axe",
    "Rosus' Axe",
    "Death Knight's Twin Axes",
    "Greataxe",
    "Crescent Moon Axe",
    "Longhaft Axe",
    "Executioner's Greataxe",
    "Great Omenkiller Cleaver",
    "Rusted Anchor",
    "Butchering Knife",
    "Bonny Butchering Knife",
    "Gargoyle's Great Axe",
    "Gargoyle's Black Axe",
    "Death Knight's Longhaft Axe",
    "Winged Greathorn",
    "Axe of Godrick",
    "Putrescence Cleaver",
    "Club",
    "Curved Club",
    "Spiked Club",
    "Stone Club",
    "Mace",
    "Morning Star",
    "Warpick",
    "Hammer",
    "Monk's Flamemace",
    "Varré's Bouquet",
    "Envoy's Horn",
    "Nox Flowing Hammer",
    "Ringed Finger",
    "Scepter of the All-Knowing",
    "Flowerstone Gavel",
    "Marika's Hammer",
    "Flail",
    "Nightrider Flail",
    "Chainlink Flail",
    "Family Heads",
    "Serpent Flail",
    "Bastard's Stars",
    "Large Club",
    "Curved Great Club",
    "Great Mace",
    "Pickaxe",
    "Brick Hammer",
    "Battle Hammer",
    "Rotten Battle Hammer",
    "Celebrant's Skull",
    "Great Stars",
    "Black Steel Greathammer",
    "Smithscript Greathammer",
    "Greathorn Hammer",
    "Envoy's Long Horn",
    "Cranial Vessel Candlestand",
    "Beastclaw Greathammer",
    "Devourer's Scepter",
    "Duelist Greataxe",
    "Rotten Greataxe",
    "Golem's Halberd",
    "Giant-Crusher",
    "Prelate's Inferno Crozier",
    "Great Club",
    "Troll's Hammer",
    "Dragon Greatclaw",
    "Bloodfiend's Arm",
    "Watchdog's Staff",
    "Staff of the Avatar",
    "Rotten Staff",
    "Envoy's Greathorn",
    "Ghiza's Wheel",
    "Fallingstar Beast Jaw",
    "Anvil Hammer",
    "Devonia's Hammer",
    "Axe of Godfrey",
    "Shadow Sunflower Blossom",
    "Gazing Finger",
    "Short Spear",
    "Iron Spear",
    "Spear",
    "Partisan",
    "Pike",
    "Swift Spear",
    "Spiked Spear",
    "Cross-Naginata",
    "Clayman's Harpoon",
    "Bloodfiend's Fork",
    "Celebrant's Rib-Rake",
    "Torchpole",
    "Smithscript Spear",
    "Inquisitor's Girandole",
    "Crystal Spear",
    "Rotten Crystal Spear",
    "Cleanrot Spear",
    "Death Ritual Spear",
    "Bolt of Gransax",
    "Lance",
    "Messmer Soldier's Spear",
    "Treespear",
    "Serpent-Hunter",
    "Siluria's Tree",
    "Vyke's War Spear",
    "Barbed Staff-Spear",
    "Bloodfiend's Sacred Spear",
    "Mohgwyn's Sacred Spear",
    "Spear of the Impaler",
    "Halberd",
    "Banished Knight's Halberd",
    "Lucerne",
    "Glaive",
    "Vulgar Militia Shotel",
    "Vulgar Militia Saw",
    "Guardian's Swordspear",
    "Gargoyle's Halberd",
    "Gargoyle's Black Halberd",
    "Nightrider Glaive",
    "Pest's Glaive",
    "Ripple Crescent Halberd",
    "Golden Halberd",
    "Dragon Halberd",
    "Loretta's War Sickle",
    "Commander's Standard",
    "Spirit Glaive",
    "Poleblade of the Bud",
    "Scythe",
    "Grave Scythe",
    "Halo Scythe",
    "Winged Scythe",
    "Obsidian Lamina",
    "Whip",
    "Thorned Whip",
    "Urumi",
    "Hoslow's Petal Whip",
    "Tooth Whip",
    "Magma Whip Candlestick",
    "Giant's Red Braid",
    "Unarmed",
    "Caestus",
    "Spiked Caestus",
    "Katar",
    "Pata",
    "Iron Ball",
    "Star Fist",
    "Clinging Bone",
    "Veteran's Prosthesis",
    "Cipher Pata",
    "Poisoned Hand",
    "Madding Hand",
    "Thiollier's Hidden Needle",
    "Golem Fist",
    "Grafted Dragon",
    "Dryleaf Arts",
    "Dane's Footwork",
    "Hookclaws",
    "Bloodhound Claws",
    "Venomous Fang",
    "Raptor Talons",
    "Claws of Night",
    "Beast Claw",
    "Red Bear's Claw",
    "Firespark Perfume Bottle",
    "Lightning Perfume Bottle",
    "Chilling Perfume Bottle",
    "Frenzyflame Perfume Bottle",
    "Deadly Poison Perfume Bottle",
    "Shortbow",
    "Composite Bow",
    "Red Branch Shortbow",
    "Misbegotten Shortbow",
    "Harp Bow",
    "Bone Bow",
    "Longbow",
    "Albinauric Bow",
    "Black Bow",
    "Ansbach's Longbow",
    "Pulley Bow",
    "Horn Bow",
    "Serpent Bow",
    "Erdtree Bow",
    "Greatbow",
    "Golem Greatbow",
    "Erdtree Greatbow",
    "Igon's Greatbow",
    "Lion Greatbow",
    "Soldier's Crossbow",
    "Light Crossbow",
    "Heavy Crossbow",
    "Arbalest",
    "Crepus's Black-Key Crossbow",
    "Pulley Crossbow",
    "Repeating Crossbow",
    "Spread Crossbow",
    "Full Moon Crossbow",
    "Hand Ballista",
    "Jar Cannon",
    "Rabbath's Cannon",
    "Astrologer's Staff",
    "Glintstone Staff",
    "Academy Glintstone Staff",
    "Digger's Staff",
    "Demi-Human Queen's Staff",
    "Azur's Glintstone Staff",
    "Lusat's Glintstone Staff",
    "Carian Glintstone Staff",
    "Carian Glintblade Staff",
    "Carian Regal Scepter",
    "Albinauric Staff",
    "Staff of Loss",
    "Gelmir Glintstone Staff",
    "Crystal Staff",
    "Rotten Crystal Staff",
    "Meteorite Staff",
    "Staff of the Guilty",
    "Prince of Death's Staff",
    "Maternal Staff",
    "Staff of the Great Beyond",
    "Finger Seal",
    "Erdtree Seal",
    "Golden Order Seal",
    "Dryleaf Seal",
    "Fire Knight's Seal",
    "Spiraltree Seal",
    "Gravel Stone Seal",
    "Giant's Seal",
    "Godslayer's Seal",
    "Clawmark Seal",
    "Frenzied Flame Seal",
    "Dragon Communion Seal",
    "Torch",
    "Beast-Repellent Torch",
    "Steel-Wire Torch",
    "Sentry's Torch",
    "Ghostflame Torch",
    "St. Trina's Torch",
    "Nanaya's Torch",
    "Lamenting Visage",
    "Rickety Shield",
    "Riveted Wooden Shield",
    "Blue-White Wooden Shield",
    "Scripture Wooden Shield",
    "Red Thorn Roundshield",
    "Pillory Shield",
    "Buckler",
    "Iron Roundshield",
    "Gilded Iron Shield",
    "Man-Serpent's Shield",
    "Ice Crest Shield",
    "Rift Shield",
    "Perfumer's Shield",
    "Shield of the Guilty",
    "Spiralhorn Shield",
    "Smoldering Shield",
    "Coil Shield",
    "Smithscript Shield",
    "Shield of Night",
    "Hawk Crest Wooden Shield",
    "Horse Crest Wooden Shield",
    "Candletree Wooden Shield",
    "Flame Crest Wooden Shield",
    "Marred Wooden Shield",
    "Sun Realm Shield",
    "Round Shield",
    "Large Leather Shield",
    "Black Leather Shield",
    "Marred Leather Shield",
    "Heater Shield",
    "Blue Crest Heater Shield",
    "Red Crest Heater Shield",
    "Beast Crest Heater Shield",
    "Inverted Hawk Heater Shield",
    "Eclipse Crest Heater Shield",
    "Kite Shield",
    "Blue-Gold Kite Shield",
    "Scorpion Kite Shield",
    "Twinbird Kite Shield",
    "Brass Shield",
    "Messmer Soldier Shield",
    "Banished Knight's Shield",
    "Wolf Crest Shield",
    "Serpent Crest Shield",
    "Albinauric Shield",
    "Beastman's Jar-Shield",
    "Carian Knight's Shield",
    "Silver Mirrorshield",
    "Great Turtle Shell",
    "Golden Lion Shield",
    "Wooden Greatshield",
    "Lordsworn's Shield",
    "Briar Greatshield",
    "Spiked Palisade Shield",
    "Icon Shield",
    "Golden Beast Crest Shield",
    "Manor Towershield",
    "Crossed-Tree Towershield",
    "Inverted Hawk Towershield",
    "Dragon Towershield",
    "Distinguished Greatshield",
    "Gilded Greatshield",
    "Cuckoo Greatshield",
    "Redmane Greatshield",
    "Golden Greatshield",
    "Haligtree Crest Greatshield",
    "Black Steel Greatshield",
    "Crucible Hornshield",
    "Dragonclaw Shield",
    "Fingerprint Stone Shield",
    "Eclipse Crest Greatshield",
    "Ant's Skull Plate",
    "Erdtree Greatshield",
    "Jellyfish Shield",
    "Visage Shield",
    "One-Eyed Shield",
    "Verdigris Greatshield",
    "Dueling Shield",
    "Carian Thrusting Shield"
];


// StartingClassData
export type StatsType = {
    vigor: number,
    mind: number,
    endurance: number,
    strength: number,
    dexterity: number,
    intelligence: number,
    faith: number,
    arcane: number,
}

export type StartingClassDataType = {
    [key: string]: StatsType
}

export const StartingClassData: StartingClassDataType = {
    "Hero": {
        vigor: 14,
        mind: 9,
        endurance: 12,
        strength: 16,
        dexterity: 9,
        intelligence: 7,
        faith: 8,
        arcane: 11
    },

    "Bandit": {
        vigor: 10,
        mind: 11,
        endurance: 10,
        strength: 9,
        dexterity: 13,
        intelligence: 9,
        faith: 8,
        arcane: 14
    },

    "Astrologer": {
        vigor: 9,
        mind: 15,
        endurance: 9,
        strength: 8,
        dexterity: 12,
        intelligence: 16,
        faith: 7,
        arcane: 9
    },

    "Warrior": {
        vigor: 11,
        mind: 12,
        endurance: 11,
        strength: 10,
        dexterity: 16,
        intelligence: 10,
        faith: 8,
        arcane: 9
    },

    "Prisoner": {
        vigor: 11,
        mind: 12,
        endurance: 11,
        strength: 11,
        dexterity: 14,
        intelligence: 14,
        faith: 6,
        arcane: 9
    },

    "Confessor": {
        vigor: 10,
        mind: 13,
        endurance: 10,
        strength: 12,
        dexterity: 12,
        intelligence: 9,
        faith: 14,
        arcane: 9
    },

    "Wretch": {
        vigor: 10,
        mind: 10,
        endurance: 10,
        strength: 10,
        dexterity: 10,
        intelligence: 10,
        faith: 10,
        arcane: 10
    },

    "Vagabond": {
        vigor: 15,
        mind: 10,
        endurance: 11,
        strength: 14,
        dexterity: 13,
        intelligence: 9,
        faith: 9,
        arcane: 7
    },

    "Prophet": {
        vigor: 10,
        mind: 14,
        endurance: 8,
        strength: 11,
        dexterity: 10,
        intelligence: 7,
        faith: 16,
        arcane: 10
    },

    "Samurai": {
        vigor: 12,
        mind: 11,
        endurance: 13,
        strength: 12,
        dexterity: 15,
        intelligence: 9,
        faith: 8,
        arcane: 8
    }
};