type AbsResType = {
    [key: string]: number
}

export type ArmorType = {
    id: number,
    category: string,
    weight: number,
    absorptions: AbsResType,
    resistances: AbsResType,
    effects: Object
}

export type ArmorDataType = {
    [key: string]: ArmorType
}

export const ArmorData: ArmorDataType = {
    "Iron Helmet": {
      "id": 40000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.1,
        "slash": 4,
        "pierce": 4.2,
        "magic": 2.5,
        "fire": 3.1,
        "lightning": 2.3,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Scale Armor": {
      "id": 40100,
      "category": "body",
      "weight": 8.8,
      "absorptions": {
        "physical": 11.9,
        "strike": 10.2,
        "slash": 12.4,
        "pierce": 10.9,
        "magic": 7.1,
        "fire": 10.9,
        "lightning": 6.7,
        "holy": 8
      },
      "resistances": {
        "immunity": 25,
        "robustness": 46,
        "focus": 11,
        "vitality": 21,
        "poise": 18
      },
      "effects": {}
    },
    "Iron Gauntlets": {
      "id": 40200,
      "category": "arms",
      "weight": 2.9,
      "absorptions": {
        "physical": 2.8,
        "strike": 2.3,
        "slash": 2.9,
        "pierce": 2.9,
        "magic": 2.1,
        "fire": 2.3,
        "lightning": 1.5,
        "holy": 1.9
      },
      "resistances": {
        "immunity": 8,
        "robustness": 15,
        "focus": 6,
        "vitality": 4,
        "poise": 4
      },
      "effects": {}
    },
    "Leather Trousers": {
      "id": 40300,
      "category": "legs",
      "weight": 5.5,
      "absorptions": {
        "physical": 6.5,
        "strike": 5.4,
        "slash": 6.8,
        "pierce": 6.8,
        "magic": 5,
        "fire": 5.4,
        "lightning": 3.4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 16,
        "robustness": 29,
        "focus": 11,
        "vitality": 7,
        "poise": 11
      },
      "effects": {}
    },
    "Kaiden Helm": {
      "id": 50000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.4,
        "slash": 4.4,
        "pierce": 4.4,
        "magic": 3.1,
        "fire": 3.4,
        "lightning": 2.8,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 22,
        "focus": 9,
        "vitality": 9,
        "poise": 7
      },
      "effects": {}
    },
    "Kaiden Armor": {
      "id": 50100,
      "category": "body",
      "weight": 8.8,
      "absorptions": {
        "physical": 11.9,
        "strike": 8.8,
        "slash": 11.9,
        "pierce": 11.9,
        "magic": 8,
        "fire": 8.8,
        "lightning": 7.1,
        "holy": 8
      },
      "resistances": {
        "immunity": 25,
        "robustness": 55,
        "focus": 11,
        "vitality": 11,
        "poise": 18
      },
      "effects": {}
    },
    "Kaiden Gauntlets": {
      "id": 50200,
      "category": "arms",
      "weight": 2.9,
      "absorptions": {
        "physical": 2.9,
        "strike": 2.1,
        "slash": 2.9,
        "pierce": 2.9,
        "magic": 1.9,
        "fire": 2.1,
        "lightning": 1.7,
        "holy": 1.9
      },
      "resistances": {
        "immunity": 8,
        "robustness": 15,
        "focus": 6,
        "vitality": 6,
        "poise": 4
      },
      "effects": {}
    },
    "Kaiden Trousers": {
      "id": 50300,
      "category": "legs",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.5,
        "strike": 4.5,
        "slash": 6.5,
        "pierce": 6.5,
        "magic": 4,
        "fire": 4.5,
        "lightning": 3.8,
        "holy": 4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 26,
        "focus": 7,
        "vitality": 7,
        "poise": 10
      },
      "effects": {}
    },
    "Drake Knight Helm": {
      "id": 60000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4,
        "strike": 3.4,
        "slash": 4.2,
        "pierce": 4,
        "magic": 3.6,
        "fire": 4,
        "lightning": 3.1,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 11,
        "robustness": 20,
        "focus": 9,
        "vitality": 9,
        "poise": 6
      },
      "effects": {}
    },
    "Drake Knight Armor": {
      "id": 60100,
      "category": "body",
      "weight": 9.2,
      "absorptions": {
        "physical": 11.4,
        "strike": 9.5,
        "slash": 11.9,
        "pierce": 11.4,
        "magic": 10.2,
        "fire": 11.4,
        "lightning": 8.8,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 25,
        "robustness": 46,
        "focus": 21,
        "vitality": 21,
        "poise": 19
      },
      "effects": {}
    },
    "Drake Knight Gauntlets": {
      "id": 60200,
      "category": "arms",
      "weight": 3.1,
      "absorptions": {
        "physical": 2.8,
        "strike": 2.3,
        "slash": 2.9,
        "pierce": 2.8,
        "magic": 2.5,
        "fire": 2.8,
        "lightning": 2.1,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 8,
        "robustness": 15,
        "focus": 7,
        "vitality": 7,
        "poise": 4
      },
      "effects": {}
    },
    "Drake Knight Greaves": {
      "id": 60300,
      "category": "legs",
      "weight": 5.7,
      "absorptions": {
        "physical": 6.5,
        "strike": 5.4,
        "slash": 6.8,
        "pierce": 6.5,
        "magic": 5.8,
        "fire": 6.5,
        "lightning": 5,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 16,
        "robustness": 29,
        "focus": 13,
        "vitality": 13,
        "poise": 11
      },
      "effects": {}
    },
    "Drake Knight Helm (Altered)": {
      "id": 61000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.6,
        "strike": 2.9,
        "slash": 3.8,
        "pierce": 3.6,
        "magic": 3.2,
        "fire": 3.6,
        "lightning": 2.6,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 9,
        "robustness": 16,
        "focus": 7,
        "vitality": 7,
        "poise": 6
      },
      "effects": {}
    },
    "Drake Knight Armor (Altered)": {
      "id": 61100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 11.2,
        "strike": 8.6,
        "slash": 11.2,
        "pierce": 10.7,
        "magic": 8,
        "fire": 9.5,
        "lightning": 6.7,
        "holy": 8
      },
      "resistances": {
        "immunity": 21,
        "robustness": 34,
        "focus": 10,
        "vitality": 10,
        "poise": 16
      },
      "effects": {}
    },
    "Scaled Helm": {
      "id": 80000,
      "category": "head",
      "weight": 6.8,
      "absorptions": {
        "physical": 5.8,
        "strike": 5,
        "slash": 6.1,
        "pierce": 5.8,
        "magic": 4.8,
        "fire": 5,
        "lightning": 4.6,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 24,
        "robustness": 35,
        "focus": 16,
        "vitality": 16,
        "poise": 11
      },
      "effects": {}
    },
    "Scaled Armor": {
      "id": 80100,
      "category": "body",
      "weight": 16,
      "absorptions": {
        "physical": 16,
        "strike": 13.9,
        "slash": 16.8,
        "pierce": 16,
        "magic": 13.5,
        "fire": 14.1,
        "lightning": 13,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 57,
        "robustness": 83,
        "focus": 38,
        "vitality": 38,
        "poise": 33
      },
      "effects": {}
    },
    "Scaled Gauntlets": {
      "id": 80200,
      "category": "arms",
      "weight": 5.3,
      "absorptions": {
        "physical": 4,
        "strike": 3.4,
        "slash": 4.2,
        "pierce": 4,
        "magic": 3.3,
        "fire": 3.5,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 19,
        "robustness": 28,
        "focus": 13,
        "vitality": 13,
        "poise": 7
      },
      "effects": {}
    },
    "Scaled Greaves": {
      "id": 80300,
      "category": "legs",
      "weight": 9.9,
      "absorptions": {
        "physical": 9.2,
        "strike": 8,
        "slash": 9.6,
        "pierce": 9.2,
        "magic": 7.7,
        "fire": 8.1,
        "lightning": 7.4,
        "holy": 7.7
      },
      "resistances": {
        "immunity": 35,
        "robustness": 51,
        "focus": 24,
        "vitality": 24,
        "poise": 20
      },
      "effects": {}
    },
    "Scaled Armor (Altered)": {
      "id": 81100,
      "category": "body",
      "weight": 15,
      "absorptions": {
        "physical": 15.3,
        "strike": 13.4,
        "slash": 16,
        "pierce": 15.3,
        "magic": 12.8,
        "fire": 13.3,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 45,
        "robustness": 64,
        "focus": 29,
        "vitality": 29,
        "poise": 30
      },
      "effects": {}
    },
    "Perfumer Hood": {
      "id": 90000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.4,
        "strike": 2.1,
        "slash": 1.8,
        "pierce": 1.4,
        "magic": 4.6,
        "fire": 4.2,
        "lightning": 4.4,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 26,
        "robustness": 8,
        "focus": 27,
        "vitality": 29,
        "poise": 3
      },
      "effects": {}
    },
    "Perfumer Robe": {
      "id": 90100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.7,
        "slash": 6.1,
        "pierce": 5.3,
        "magic": 13,
        "fire": 12.4,
        "lightning": 12.6,
        "holy": 13
      },
      "resistances": {
        "immunity": 63,
        "robustness": 21,
        "focus": 71,
        "vitality": 76,
        "poise": 10
      },
      "effects": {}
    },
    "Perfumer Gloves": {
      "id": 90200,
      "category": "arms",
      "weight": 1.4,
      "absorptions": {
        "physical": 1,
        "strike": 1.5,
        "slash": 1.3,
        "pierce": 1,
        "magic": 3.2,
        "fire": 2.9,
        "lightning": 3.1,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 20,
        "robustness": 6,
        "focus": 21,
        "vitality": 22,
        "poise": 2
      },
      "effects": {}
    },
    "Perfumer Sarong": {
      "id": 90300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 2.3,
        "strike": 3.4,
        "slash": 3,
        "pierce": 2.3,
        "magic": 7.3,
        "fire": 6.8,
        "lightning": 7.1,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 37,
        "robustness": 11,
        "focus": 39,
        "vitality": 41,
        "poise": 4
      },
      "effects": {}
    },
    "Perfumer Robe (Altered)": {
      "id": 91100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 4.2,
        "strike": 6.1,
        "slash": 5.3,
        "pierce": 4.2,
        "magic": 12.8,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 54,
        "robustness": 18,
        "focus": 57,
        "vitality": 67,
        "poise": 8
      },
      "effects": {}
    },
    "Traveler's Hat": {
      "id": 100000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.8,
        "strike": 1.8,
        "slash": 1.4,
        "pierce": 0.9,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.4,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 23,
        "robustness": 9,
        "focus": 29,
        "vitality": 27,
        "poise": 3
      },
      "effects": {}
    },
    "Perfumer's Traveling Garb": {
      "id": 100100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.1,
        "slash": 5.3,
        "pierce": 4.2,
        "magic": 13,
        "fire": 13,
        "lightning": 12.6,
        "holy": 13
      },
      "resistances": {
        "immunity": 57,
        "robustness": 23,
        "focus": 76,
        "vitality": 71,
        "poise": 10
      },
      "effects": {}
    },
    "Traveler's Gloves": {
      "id": 100200,
      "category": "arms",
      "weight": 1.4,
      "absorptions": {
        "physical": 1.3,
        "strike": 1.3,
        "slash": 1,
        "pierce": 0.6,
        "magic": 3.2,
        "fire": 3.2,
        "lightning": 3.1,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 18,
        "robustness": 7,
        "focus": 22,
        "vitality": 21,
        "poise": 2
      },
      "effects": {}
    },
    "Traveler's Slops": {
      "id": 100300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3,
        "strike": 3,
        "slash": 2.3,
        "pierce": 1.5,
        "magic": 7.3,
        "fire": 7.3,
        "lightning": 7.1,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 34,
        "robustness": 13,
        "focus": 41,
        "vitality": 39,
        "poise": 5
      },
      "effects": {}
    },
    "Perfumer's Traveling Garb (Altered)": {
      "id": 101100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 5.3,
        "slash": 4.2,
        "pierce": 2.7,
        "magic": 12.8,
        "fire": 12.8,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 55,
        "robustness": 21,
        "focus": 67,
        "vitality": 63,
        "poise": 8
      },
      "effects": {}
    },
    "Alberich's Pointed Hat": {
      "id": 120000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.8,
        "strike": 1.4,
        "slash": 1.8,
        "pierce": 1.8,
        "magic": 4.6,
        "fire": 4.2,
        "lightning": 4.4,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 16,
        "robustness": 10,
        "focus": 29,
        "vitality": 31,
        "poise": 2
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.06,
          "conditions": {
            "0": "Thorn Spell"
          }
        }
      }
    },
    "Alberich's Robe": {
      "id": 120100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 4.2,
        "slash": 5.3,
        "pierce": 5.3,
        "magic": 12.8,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 38,
        "robustness": 23,
        "focus": 67,
        "vitality": 71,
        "poise": 7
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.06,
          "conditions": {
            "0": "Thorn Spell"
          }
        }
      }
    },
    "Alberich's Bracers": {
      "id": 120200,
      "category": "arms",
      "weight": 1.4,
      "absorptions": {
        "physical": 1.3,
        "strike": 1,
        "slash": 1.3,
        "pierce": 1.3,
        "magic": 3.2,
        "fire": 2.9,
        "lightning": 3.1,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 13,
        "robustness": 8,
        "focus": 22,
        "vitality": 24,
        "poise": 1
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.06,
          "conditions": {
            "0": "Thorn Spell"
          }
        }
      }
    },
    "Alberich's Trousers": {
      "id": 120300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3,
        "strike": 2.3,
        "slash": 3,
        "pierce": 3,
        "magic": 7.3,
        "fire": 6.8,
        "lightning": 7.2,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 26,
        "robustness": 14,
        "focus": 41,
        "vitality": 44,
        "poise": 5
      },
      "effects": {}
    },
    "Alberich's Pointed Hat (Altered)": {
      "id": 121000,
      "category": "head",
      "weight": 1,
      "absorptions": {
        "physical": 0.9,
        "strike": 0.2,
        "slash": 0.9,
        "pierce": 0.9,
        "magic": 4.4,
        "fire": 3.8,
        "lightning": 4,
        "holy": 4.4
      },
      "resistances": {
        "immunity": 12,
        "robustness": 7,
        "focus": 23,
        "vitality": 24,
        "poise": 1
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.06,
          "conditions": {
            "0": "Thorn Spell"
          }
        }
      }
    },
    "Alberich's Robe (Altered)": {
      "id": 121100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 4.2,
        "strike": 2.7,
        "slash": 4.2,
        "pierce": 4.2,
        "magic": 12.6,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 32,
        "robustness": 19,
        "focus": 57,
        "vitality": 61,
        "poise": 5
      },
      "effects": {}
    },
    "Spellblade's Pointed Hat": {
      "id": 130000,
      "category": "head",
      "weight": 1.5,
      "absorptions": {
        "physical": 1.3,
        "strike": 0.8,
        "slash": 1.3,
        "pierce": 1.3,
        "magic": 4.5,
        "fire": 3.9,
        "lightning": 4.1,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 15,
        "robustness": 8,
        "focus": 25,
        "vitality": 27,
        "poise": 2
      },
      "effects": {
        "0": {
          "attribute": "Magic Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.02,
          "conditions": {
            "0": "Charged Skill Attack",
            "1": "Skill Attack"
          }
        }
      }
    },
    "Spellblade's Traveling Attire": {
      "id": 130100,
      "category": "body",
      "weight": 3.3,
      "absorptions": {
        "physical": 4.1,
        "strike": 2.6,
        "slash": 4.1,
        "pierce": 4.1,
        "magic": 12.7,
        "fire": 11.3,
        "lightning": 11.8,
        "holy": 12.7
      },
      "resistances": {
        "immunity": 35,
        "robustness": 17,
        "focus": 59,
        "vitality": 63,
        "poise": 7
      },
      "effects": {
        "0": {
          "attribute": "Magic Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.02,
          "conditions": {
            "0": "Charged Skill Attack",
            "1": "Skill Attack"
          }
        }
      }
    },
    "Spellblade's Gloves": {
      "id": 130200,
      "category": "arms",
      "weight": 1.2,
      "absorptions": {
        "physical": 0.9,
        "strike": 0.5,
        "slash": 0.9,
        "pierce": 0.9,
        "magic": 3.1,
        "fire": 2.7,
        "lightning": 2.8,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 11,
        "robustness": 6,
        "focus": 19,
        "vitality": 20,
        "poise": 1
      },
      "effects": {
        "0": {
          "attribute": "Magic Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.02,
          "conditions": {
            "0": "Charged Skill Attack",
            "1": "Skill Attack"
          }
        }
      }
    },
    "Spellblade's Trousers": {
      "id": 130300,
      "category": "legs",
      "weight": 2.6,
      "absorptions": {
        "physical": 2.9,
        "strike": 2.2,
        "slash": 2.9,
        "pierce": 2.9,
        "magic": 7.3,
        "fire": 6.7,
        "lightning": 7,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 25,
        "robustness": 13,
        "focus": 38,
        "vitality": 41,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Magic Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.02,
          "conditions": {
            "0": "Charged Skill Attack",
            "1": "Skill Attack"
          }
        }
      }
    },
    "Spellblade's Traveling Attire (Altered)": {
      "id": 131100,
      "category": "body",
      "weight": 2.5,
      "absorptions": {
        "physical": 2.6,
        "strike": 0.5,
        "slash": 2.6,
        "pierce": 2.6,
        "magic": 12.6,
        "fire": 10.9,
        "lightning": 11.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 32,
        "robustness": 10,
        "focus": 54,
        "vitality": 57,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Magic Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.02,
          "conditions": {
            "0": "Charged Skill Attack",
            "1": "Skill Attack"
          }
        }
      }
    },
    "Bull-Goat Helm": {
      "id": 140000,
      "category": "head",
      "weight": 11.3,
      "absorptions": {
        "physical": 7.5,
        "strike": 7.4,
        "slash": 6.7,
        "pierce": 6.7,
        "magic": 4.7,
        "fire": 4.8,
        "lightning": 5.3,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 31,
        "robustness": 35,
        "focus": 20,
        "vitality": 23,
        "poise": 15
      },
      "effects": {}
    },
    "Bull-Goat Armor": {
      "id": 140100,
      "category": "body",
      "weight": 26.5,
      "absorptions": {
        "physical": 20.4,
        "strike": 20.2,
        "slash": 18.3,
        "pierce": 18.3,
        "magic": 13.3,
        "fire": 13.5,
        "lightning": 14.9,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 71,
        "robustness": 83,
        "focus": 46,
        "vitality": 55,
        "poise": 47
      },
      "effects": {}
    },
    "Bull-Goat Gauntlets": {
      "id": 140200,
      "category": "arms",
      "weight": 8.8,
      "absorptions": {
        "physical": 5.2,
        "strike": 5.2,
        "slash": 4.6,
        "pierce": 4.6,
        "magic": 3.3,
        "fire": 3.3,
        "lightning": 3.7,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 24,
        "robustness": 28,
        "focus": 15,
        "vitality": 18,
        "poise": 10
      },
      "effects": {}
    },
    "Bull-Goat Greaves": {
      "id": 140300,
      "category": "legs",
      "weight": 16.4,
      "absorptions": {
        "physical": 11.9,
        "strike": 11.8,
        "slash": 10.6,
        "pierce": 10.6,
        "magic": 7.6,
        "fire": 7.7,
        "lightning": 8.5,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 44,
        "robustness": 51,
        "focus": 29,
        "vitality": 34,
        "poise": 28
      },
      "effects": {}
    },
    "Iron Kasa": {
      "id": 150000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 3.6,
        "strike": 3.6,
        "slash": 4.2,
        "pierce": 3.6,
        "magic": 4,
        "fire": 4.2,
        "lightning": 4.4,
        "holy": 4
      },
      "resistances": {
        "immunity": 30,
        "robustness": 23,
        "focus": 24,
        "vitality": 24,
        "poise": 6
      },
      "effects": {}
    },
    "Ronin's Armor": {
      "id": 150100,
      "category": "body",
      "weight": 8.5,
      "absorptions": {
        "physical": 10.5,
        "strike": 10.5,
        "slash": 11.2,
        "pierce": 10.5,
        "magic": 11.9,
        "fire": 12.4,
        "lightning": 13.4,
        "holy": 11.9
      },
      "resistances": {
        "immunity": 66,
        "robustness": 48,
        "focus": 52,
        "vitality": 57,
        "poise": 16
      },
      "effects": {}
    },
    "Ronin's Gauntlets": {
      "id": 150200,
      "category": "arms",
      "weight": 3.1,
      "absorptions": {
        "physical": 2.7,
        "strike": 2.7,
        "slash": 2.8,
        "pierce": 2.7,
        "magic": 2.9,
        "fire": 3.1,
        "lightning": 3.2,
        "holy": 2.9
      },
      "resistances": {
        "immunity": 25,
        "robustness": 19,
        "focus": 20,
        "vitality": 21,
        "poise": 4
      },
      "effects": {}
    },
    "Ronin's Greaves": {
      "id": 150300,
      "category": "legs",
      "weight": 5.7,
      "absorptions": {
        "physical": 6.2,
        "strike": 6.2,
        "slash": 6.5,
        "pierce": 6.2,
        "magic": 6.8,
        "fire": 7.1,
        "lightning": 7.3,
        "holy": 6.8
      },
      "resistances": {
        "immunity": 46,
        "robustness": 35,
        "focus": 36,
        "vitality": 38,
        "poise": 11
      },
      "effects": {}
    },
    "Ronin's Armor (Altered)": {
      "id": 151100,
      "category": "body",
      "weight": 7.6,
      "absorptions": {
        "physical": 8.8,
        "strike": 8.8,
        "slash": 9.5,
        "pierce": 8.8,
        "magic": 10.2,
        "fire": 10.9,
        "lightning": 11.9,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 54,
        "robustness": 38,
        "focus": 42,
        "vitality": 45,
        "poise": 15
      },
      "effects": {}
    },
    "Guilty Hood": {
      "id": 160000,
      "category": "head",
      "weight": 1.4,
      "absorptions": {
        "physical": 0.9,
        "strike": 1.4,
        "slash": 1.8,
        "pierce": 0.2,
        "magic": 4.4,
        "fire": 4,
        "lightning": 4.5,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 15,
        "robustness": 9,
        "focus": 27,
        "vitality": 31,
        "poise": 2
      },
      "effects": {}
    },
    "Cloth Garb": {
      "id": 160100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 5.3,
        "strike": 4.2,
        "slash": 2.7,
        "pierce": 4.2,
        "magic": 12.8,
        "fire": 12.4,
        "lightning": 11.9,
        "holy": 12.4
      },
      "resistances": {
        "immunity": 42,
        "robustness": 23,
        "focus": 60,
        "vitality": 60,
        "poise": 5
      },
      "effects": {}
    },
    "Cloth Trousers": {
      "id": 160300,
      "category": "legs",
      "weight": 2,
      "absorptions": {
        "physical": 3,
        "strike": 2.3,
        "slash": 1.5,
        "pierce": 2.3,
        "magic": 7.3,
        "fire": 7.1,
        "lightning": 6.8,
        "holy": 7.1
      },
      "resistances": {
        "immunity": 26,
        "robustness": 14,
        "focus": 37,
        "vitality": 37,
        "poise": 3
      },
      "effects": {}
    },
    "Black Wolf Mask": {
      "id": 170000,
      "category": "head",
      "weight": 5.9,
      "absorptions": {
        "physical": 5.2,
        "strike": 4.6,
        "slash": 5.2,
        "pierce": 5.5,
        "magic": 4,
        "fire": 4.5,
        "lightning": 3.6,
        "holy": 4.2
      },
      "resistances": {
        "immunity": 16,
        "robustness": 33,
        "focus": 11,
        "vitality": 11,
        "poise": 9
      },
      "effects": {}
    },
    "Blaidd's Armor": {
      "id": 170100,
      "category": "body",
      "weight": 13.7,
      "absorptions": {
        "physical": 14.6,
        "strike": 12.9,
        "slash": 14.6,
        "pierce": 15.3,
        "magic": 11.4,
        "fire": 12.6,
        "lightning": 10.2,
        "holy": 11.9
      },
      "resistances": {
        "immunity": 38,
        "robustness": 76,
        "focus": 25,
        "vitality": 25,
        "poise": 28
      },
      "effects": {}
    },
    "Blaidd's Gauntlets": {
      "id": 170200,
      "category": "arms",
      "weight": 4.6,
      "absorptions": {
        "physical": 3.6,
        "strike": 3.2,
        "slash": 3.6,
        "pierce": 3.8,
        "magic": 2.8,
        "fire": 3.2,
        "lightning": 2.7,
        "holy": 2.9
      },
      "resistances": {
        "immunity": 13,
        "robustness": 21,
        "focus": 8,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Blaidd's Greaves": {
      "id": 170300,
      "category": "legs",
      "weight": 8.5,
      "absorptions": {
        "physical": 8.4,
        "strike": 7.3,
        "slash": 8.4,
        "pierce": 8.8,
        "magic": 6.5,
        "fire": 7.3,
        "lightning": 6.2,
        "holy": 6.8
      },
      "resistances": {
        "immunity": 24,
        "robustness": 39,
        "focus": 16,
        "vitality": 16,
        "poise": 17
      },
      "effects": {}
    },
    "Blaidd's Armor (Altered)": {
      "id": 171100,
      "category": "body",
      "weight": 12.5,
      "absorptions": {
        "physical": 14,
        "strike": 12.4,
        "slash": 14,
        "pierce": 14.6,
        "magic": 10.9,
        "fire": 12.4,
        "lightning": 9.5,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 32,
        "robustness": 57,
        "focus": 22,
        "vitality": 21,
        "poise": 27
      },
      "effects": {}
    },
    "Black Knife Hood": {
      "id": 180000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 3.8,
        "strike": 3.6,
        "slash": 4.2,
        "pierce": 4.2,
        "magic": 2.8,
        "fire": 3.1,
        "lightning": 2.1,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 9,
        "vitality": 9,
        "poise": 6
      },
      "effects": {}
    },
    "Black Knife Armor": {
      "id": 180100,
      "category": "body",
      "weight": 9.2,
      "absorptions": {
        "physical": 11.4,
        "strike": 10.9,
        "slash": 12.4,
        "pierce": 12.4,
        "magic": 8.8,
        "fire": 9.5,
        "lightning": 6.7,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 28,
        "robustness": 46,
        "focus": 23,
        "vitality": 23,
        "poise": 19
      },
      "effects": {
        "0": {
          "attribute": "Enemy Hearing",
          "model": "multiplicative",
          "type": "positive",
          "value": 0
        }
      }
    },
    "Black Knife Gauntlets": {
      "id": 180200,
      "category": "arms",
      "weight": 3.1,
      "absorptions": {
        "physical": 2.8,
        "strike": 2.7,
        "slash": 3.1,
        "pierce": 3.1,
        "magic": 2.1,
        "fire": 2.3,
        "lightning": 1.6,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 9,
        "robustness": 15,
        "focus": 8,
        "vitality": 8,
        "poise": 4
      },
      "effects": {}
    },
    "Black Knife Greaves": {
      "id": 180300,
      "category": "legs",
      "weight": 5.7,
      "absorptions": {
        "physical": 6.5,
        "strike": 6.2,
        "slash": 7.1,
        "pierce": 7.1,
        "magic": 5,
        "fire": 5.4,
        "lightning": 3.8,
        "holy": 6.5
      },
      "resistances": {
        "immunity": 17,
        "robustness": 29,
        "focus": 14,
        "vitality": 14,
        "poise": 11
      },
      "effects": {}
    },
    "Black Knife Armor (Altered)": {
      "id": 181100,
      "category": "body",
      "weight": 9,
      "absorptions": {
        "physical": 11.3,
        "strike": 10.8,
        "slash": 12.3,
        "pierce": 12.3,
        "magic": 8.7,
        "fire": 9.4,
        "lightning": 6.6,
        "holy": 11.3
      },
      "resistances": {
        "immunity": 25,
        "robustness": 42,
        "focus": 21,
        "vitality": 21,
        "poise": 19
      },
      "effects": {}
    },
    "Exile Hood": {
      "id": 190000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.4,
        "slash": 4.6,
        "pierce": 4.4,
        "magic": 2.8,
        "fire": 3.8,
        "lightning": 2.3,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 12,
        "robustness": 23,
        "focus": 9,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Exile Armor": {
      "id": 190100,
      "category": "body",
      "weight": 9.2,
      "absorptions": {
        "physical": 12.4,
        "strike": 9.5,
        "slash": 12.9,
        "pierce": 12.4,
        "magic": 8,
        "fire": 10.9,
        "lightning": 6.7,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 28,
        "robustness": 55,
        "focus": 21,
        "vitality": 18,
        "poise": 19
      },
      "effects": {}
    },
    "Exile Gauntlets": {
      "id": 190200,
      "category": "arms",
      "weight": 2.9,
      "absorptions": {
        "physical": 2.9,
        "strike": 2.1,
        "slash": 3.1,
        "pierce": 2.9,
        "magic": 1.7,
        "fire": 2.5,
        "lightning": 1.5,
        "holy": 2.1
      },
      "resistances": {
        "immunity": 8,
        "robustness": 17,
        "focus": 6,
        "vitality": 4,
        "poise": 4
      },
      "effects": {}
    },
    "Exile Greaves": {
      "id": 190300,
      "category": "legs",
      "weight": 5.7,
      "absorptions": {
        "physical": 7.1,
        "strike": 5.4,
        "slash": 7.4,
        "pierce": 7.1,
        "magic": 4.5,
        "fire": 6.2,
        "lightning": 3.8,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 17,
        "robustness": 34,
        "focus": 13,
        "vitality": 11,
        "poise": 11
      },
      "effects": {}
    },
    "Banished Knight Helm": {
      "id": 200000,
      "category": "head",
      "weight": 7.5,
      "absorptions": {
        "physical": 6.8,
        "strike": 5.4,
        "slash": 7,
        "pierce": 6.3,
        "magic": 4.8,
        "fire": 4.8,
        "lightning": 4.6,
        "holy": 4.7
      },
      "resistances": {
        "immunity": 26,
        "robustness": 35,
        "focus": 16,
        "vitality": 18,
        "poise": 11
      },
      "effects": {}
    },
    "Banished Knight Armor": {
      "id": 200100,
      "category": "body",
      "weight": 17.5,
      "absorptions": {
        "physical": 18.7,
        "strike": 15,
        "slash": 19.2,
        "pierce": 17.5,
        "magic": 13.5,
        "fire": 13.5,
        "lightning": 13,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 60,
        "robustness": 83,
        "focus": 38,
        "vitality": 42,
        "poise": 34
      },
      "effects": {}
    },
    "Banished Knight Gauntlets": {
      "id": 200200,
      "category": "arms",
      "weight": 5.8,
      "absorptions": {
        "physical": 4.7,
        "strike": 3.7,
        "slash": 4.9,
        "pierce": 4.4,
        "magic": 3.3,
        "fire": 3.3,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 20,
        "robustness": 28,
        "focus": 13,
        "vitality": 14,
        "poise": 7
      },
      "effects": {}
    },
    "Banished Knight Greaves": {
      "id": 200300,
      "category": "legs",
      "weight": 10.8,
      "absorptions": {
        "physical": 10.8,
        "strike": 8.6,
        "slash": 11.1,
        "pierce": 10.1,
        "magic": 7.7,
        "fire": 7.7,
        "lightning": 7.4,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 37,
        "robustness": 51,
        "focus": 24,
        "vitality": 26,
        "poise": 20
      },
      "effects": {}
    },
    "Banished Knight Helm (Altered)": {
      "id": 201000,
      "category": "head",
      "weight": 7.1,
      "absorptions": {
        "physical": 6.7,
        "strike": 5.2,
        "slash": 6.8,
        "pierce": 6.1,
        "magic": 4.7,
        "fire": 4.7,
        "lightning": 4.6,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 21,
        "robustness": 30,
        "focus": 13,
        "vitality": 14,
        "poise": 11
      },
      "effects": {}
    },
    "Banished Knight Armor (Altered)": {
      "id": 201100,
      "category": "body",
      "weight": 16.5,
      "absorptions": {
        "physical": 18.3,
        "strike": 14.4,
        "slash": 18.7,
        "pierce": 16.8,
        "magic": 13.3,
        "fire": 13.3,
        "lightning": 12.8,
        "holy": 13
      },
      "resistances": {
        "immunity": 52,
        "robustness": 69,
        "focus": 32,
        "vitality": 34,
        "poise": 33
      },
      "effects": {}
    },
    "Briar Helm": {
      "id": 210000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.6,
        "strike": 4,
        "slash": 4.8,
        "pierce": 4.4,
        "magic": 3.8,
        "fire": 4.4,
        "lightning": 3.1,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 15,
        "robustness": 31,
        "focus": 10,
        "vitality": 10,
        "poise": 9
      },
      "effects": {}
    },
    "Briar Armor": {
      "id": 210100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 12.9,
        "strike": 11.4,
        "slash": 13.5,
        "pierce": 12.4,
        "magic": 10.9,
        "fire": 12.4,
        "lightning": 8.8,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 35,
        "robustness": 71,
        "focus": 24,
        "vitality": 24,
        "poise": 21
      },
      "effects": {}
    },
    "Briar Gauntlets": {
      "id": 210200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.2,
        "strike": 2.8,
        "slash": 3.3,
        "pierce": 3.1,
        "magic": 2.7,
        "fire": 3.1,
        "lightning": 2.1,
        "holy": 2.7
      },
      "resistances": {
        "immunity": 12,
        "robustness": 24,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Briar Greaves": {
      "id": 210300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.4,
        "strike": 6.5,
        "slash": 7.7,
        "pierce": 7.1,
        "magic": 6.2,
        "fire": 7.1,
        "lightning": 5,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 22,
        "robustness": 44,
        "focus": 15,
        "vitality": 15,
        "poise": 12
      },
      "effects": {}
    },
    "Briar Armor (Altered)": {
      "id": 211100,
      "category": "body",
      "weight": 10.7,
      "absorptions": {
        "physical": 12.4,
        "strike": 10.9,
        "slash": 12.4,
        "pierce": 11.9,
        "magic": 10.2,
        "fire": 11.4,
        "lightning": 7.1,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 29,
        "robustness": 61,
        "focus": 21,
        "vitality": 21,
        "poise": 19
      },
      "effects": {}
    },
    "Page Hood": {
      "id": 220000,
      "category": "head",
      "weight": 1.4,
      "absorptions": {
        "physical": 1.8,
        "strike": 1.4,
        "slash": 0.9,
        "pierce": 0.9,
        "magic": 4.4,
        "fire": 4.2,
        "lightning": 4.5,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 15,
        "robustness": 8,
        "focus": 29,
        "vitality": 29,
        "poise": 2
      },
      "effects": {}
    },
    "Page Garb": {
      "id": 220100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.7,
        "strike": 6.1,
        "slash": 5.3,
        "pierce": 5.3,
        "magic": 12.8,
        "fire": 12.6,
        "lightning": 13,
        "holy": 13
      },
      "resistances": {
        "immunity": 42,
        "robustness": 23,
        "focus": 83,
        "vitality": 83,
        "poise": 10
      },
      "effects": {}
    },
    "Page Trousers": {
      "id": 220300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3.4,
        "strike": 3,
        "slash": 2.3,
        "pierce": 2.3,
        "magic": 7.2,
        "fire": 7.1,
        "lightning": 7.3,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 24,
        "robustness": 13,
        "focus": 44,
        "vitality": 44,
        "poise": 5
      },
      "effects": {}
    },
    "Page Garb (Altered)": {
      "id": 221100,
      "category": "body",
      "weight": 4.5,
      "absorptions": {
        "physical": 6.3,
        "strike": 5.5,
        "slash": 4.4,
        "pierce": 4.4,
        "magic": 12.8,
        "fire": 12.6,
        "lightning": 13,
        "holy": 13
      },
      "resistances": {
        "immunity": 34,
        "robustness": 19,
        "focus": 64,
        "vitality": 64,
        "poise": 8
      },
      "effects": {}
    },
    "Night's Cavalry Helm": {
      "id": 230000,
      "category": "head",
      "weight": 5.5,
      "absorptions": {
        "physical": 5,
        "strike": 4.6,
        "slash": 5,
        "pierce": 4.8,
        "magic": 3.8,
        "fire": 4.5,
        "lightning": 3.8,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 16,
        "robustness": 24,
        "focus": 10,
        "vitality": 10,
        "poise": 8
      },
      "effects": {}
    },
    "Night's Cavalry Armor": {
      "id": 230100,
      "category": "body",
      "weight": 12.8,
      "absorptions": {
        "physical": 14,
        "strike": 12.9,
        "slash": 14,
        "pierce": 13.5,
        "magic": 10.9,
        "fire": 12.6,
        "lightning": 10.9,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 38,
        "robustness": 57,
        "focus": 24,
        "vitality": 24,
        "poise": 25
      },
      "effects": {}
    },
    "Night's Cavalry Gauntlets": {
      "id": 230200,
      "category": "arms",
      "weight": 4.3,
      "absorptions": {
        "physical": 3.5,
        "strike": 3.2,
        "slash": 3.5,
        "pierce": 3.3,
        "magic": 2.7,
        "fire": 3.1,
        "lightning": 2.7,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 13,
        "robustness": 19,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Night's Cavalry Greaves": {
      "id": 230300,
      "category": "legs",
      "weight": 7.9,
      "absorptions": {
        "physical": 8,
        "strike": 7.3,
        "slash": 8,
        "pierce": 7.7,
        "magic": 6.2,
        "fire": 7.2,
        "lightning": 6.2,
        "holy": 7.2
      },
      "resistances": {
        "immunity": 24,
        "robustness": 35,
        "focus": 15,
        "vitality": 15,
        "poise": 15
      },
      "effects": {}
    },
    "Night's Cavalry Helm (Altered)": {
      "id": 231000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.8,
        "strike": 4.4,
        "slash": 4.8,
        "pierce": 4.4,
        "magic": 3.6,
        "fire": 4.4,
        "lightning": 3.6,
        "holy": 4.4
      },
      "resistances": {
        "immunity": 13,
        "robustness": 21,
        "focus": 9,
        "vitality": 9,
        "poise": 8
      },
      "effects": {}
    },
    "Night's Cavalry Armor (Altered)": {
      "id": 231100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 12.4,
        "slash": 13.5,
        "pierce": 12.4,
        "magic": 10.2,
        "fire": 12.4,
        "lightning": 10.2,
        "holy": 12.4
      },
      "resistances": {
        "immunity": 32,
        "robustness": 50,
        "focus": 21,
        "vitality": 21,
        "poise": 24
      },
      "effects": {}
    },
    "Blue Silver Mail Hood": {
      "id": 240000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 4.2,
        "strike": 3.1,
        "slash": 4.4,
        "pierce": 3.8,
        "magic": 3.6,
        "fire": 3.4,
        "lightning": 2.5,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 10,
        "robustness": 24,
        "focus": 5,
        "vitality": 5,
        "poise": 6
      },
      "effects": {}
    },
    "Blue Silver Mail Armor": {
      "id": 240100,
      "category": "body",
      "weight": 9.2,
      "absorptions": {
        "physical": 12.4,
        "strike": 9.5,
        "slash": 12.9,
        "pierce": 11.4,
        "magic": 10.9,
        "fire": 10.2,
        "lightning": 8,
        "holy": 8
      },
      "resistances": {
        "immunity": 25,
        "robustness": 60,
        "focus": 18,
        "vitality": 18,
        "poise": 19
      },
      "effects": {}
    },
    "Blue Silver Bracelets": {
      "id": 240200,
      "category": "arms",
      "weight": 2.1,
      "absorptions": {
        "physical": 2.3,
        "strike": 1.5,
        "slash": 2.5,
        "pierce": 1.9,
        "magic": 1.9,
        "fire": 1.6,
        "lightning": 1,
        "holy": 1
      },
      "resistances": {
        "immunity": 4,
        "robustness": 14,
        "focus": 4,
        "vitality": 4,
        "poise": 3
      },
      "effects": {}
    },
    "Blue Silver Mail Skirt": {
      "id": 240300,
      "category": "legs",
      "weight": 5.5,
      "absorptions": {
        "physical": 6.8,
        "strike": 5,
        "slash": 7.1,
        "pierce": 6.2,
        "magic": 5.8,
        "fire": 5.4,
        "lightning": 4,
        "holy": 4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 35,
        "focus": 7,
        "vitality": 7,
        "poise": 10
      },
      "effects": {}
    },
    "Blue Silver Mail Armor (Altered)": {
      "id": 241100,
      "category": "body",
      "weight": 8.5,
      "absorptions": {
        "physical": 12.1,
        "strike": 9,
        "slash": 12.6,
        "pierce": 11.1,
        "magic": 10.4,
        "fire": 9.7,
        "lightning": 7.3,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 21,
        "robustness": 52,
        "focus": 10,
        "vitality": 10,
        "poise": 17
      },
      "effects": {}
    },
    "Nomadic Merchant's Chapeau": {
      "id": 250000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.1,
        "slash": 2.5,
        "pierce": 2.3,
        "magic": 3.4,
        "fire": 3.4,
        "lightning": 3.4,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 24,
        "robustness": 14,
        "focus": 31,
        "vitality": 20,
        "poise": 4
      },
      "effects": {}
    },
    "Nomadic Merchant's Finery": {
      "id": 250100,
      "category": "body",
      "weight": 7.2,
      "absorptions": {
        "physical": 8,
        "strike": 8.8,
        "slash": 7.1,
        "pierce": 6.7,
        "magic": 9.5,
        "fire": 9.5,
        "lightning": 9.5,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 57,
        "robustness": 32,
        "focus": 71,
        "vitality": 46,
        "poise": 13
      },
      "effects": {}
    },
    "Nomadic Merchant's Trousers": {
      "id": 250300,
      "category": "legs",
      "weight": 4.4,
      "absorptions": {
        "physical": 4.5,
        "strike": 5,
        "slash": 4,
        "pierce": 3.8,
        "magic": 5.4,
        "fire": 5.4,
        "lightning": 5.4,
        "holy": 5
      },
      "resistances": {
        "immunity": 35,
        "robustness": 20,
        "focus": 44,
        "vitality": 29,
        "poise": 8
      },
      "effects": {}
    },
    "Nomadic Merchant's Finery (Altered)": {
      "id": 251100,
      "category": "body",
      "weight": 6.1,
      "absorptions": {
        "physical": 7,
        "strike": 7.9,
        "slash": 6.6,
        "pierce": 6,
        "magic": 8.7,
        "fire": 8.7,
        "lightning": 8.7,
        "holy": 7.9
      },
      "resistances": {
        "immunity": 50,
        "robustness": 25,
        "focus": 61,
        "vitality": 38,
        "poise": 12
      },
      "effects": {}
    },
    "Malformed Dragon Helm": {
      "id": 260000,
      "category": "head",
      "weight": 6.8,
      "absorptions": {
        "physical": 6.1,
        "strike": 5.4,
        "slash": 6.3,
        "pierce": 6.1,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.9,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 24,
        "robustness": 33,
        "focus": 16,
        "vitality": 16,
        "poise": 10
      },
      "effects": {}
    },
    "Malformed Dragon Armor": {
      "id": 260100,
      "category": "body",
      "weight": 16,
      "absorptions": {
        "physical": 16.8,
        "strike": 15,
        "slash": 17.5,
        "pierce": 16.8,
        "magic": 13,
        "fire": 13,
        "lightning": 13.8,
        "holy": 13
      },
      "resistances": {
        "immunity": 57,
        "robustness": 76,
        "focus": 38,
        "vitality": 38,
        "poise": 31
      },
      "effects": {}
    },
    "Malformed Dragon Gauntlets": {
      "id": 260200,
      "category": "arms",
      "weight": 5.3,
      "absorptions": {
        "physical": 4.2,
        "strike": 3.7,
        "slash": 4.4,
        "pierce": 4.2,
        "magic": 3.2,
        "fire": 3.2,
        "lightning": 3.4,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 19,
        "robustness": 25,
        "focus": 13,
        "vitality": 13,
        "poise": 7
      },
      "effects": {}
    },
    "Malformed Dragon Greaves": {
      "id": 260300,
      "category": "legs",
      "weight": 9.9,
      "absorptions": {
        "physical": 9.6,
        "strike": 8.6,
        "slash": 10.1,
        "pierce": 9.6,
        "magic": 7.4,
        "fire": 7.4,
        "lightning": 7.9,
        "holy": 7.4
      },
      "resistances": {
        "immunity": 35,
        "robustness": 47,
        "focus": 24,
        "vitality": 24,
        "poise": 19
      },
      "effects": {}
    },
    "Tree Sentinel Helm": {
      "id": 270000,
      "category": "head",
      "weight": 8.1,
      "absorptions": {
        "physical": 6.8,
        "strike": 5.4,
        "slash": 6.8,
        "pierce": 6.3,
        "magic": 4.6,
        "fire": 6.2,
        "lightning": 4.5,
        "holy": 5
      },
      "resistances": {
        "immunity": 29,
        "robustness": 39,
        "focus": 18,
        "vitality": 20,
        "poise": 12
      },
      "effects": {}
    },
    "Tree Sentinel Armor": {
      "id": 270100,
      "category": "body",
      "weight": 18.9,
      "absorptions": {
        "physical": 18.7,
        "strike": 15,
        "slash": 18.7,
        "pierce": 17.5,
        "magic": 13,
        "fire": 17.1,
        "lightning": 12.6,
        "holy": 14.1
      },
      "resistances": {
        "immunity": 67,
        "robustness": 90,
        "focus": 42,
        "vitality": 46,
        "poise": 39
      },
      "effects": {}
    },
    "Tree Sentinel Gauntlets": {
      "id": 270200,
      "category": "arms",
      "weight": 6.3,
      "absorptions": {
        "physical": 4.7,
        "strike": 3.7,
        "slash": 4.7,
        "pierce": 4.4,
        "magic": 3.2,
        "fire": 4.3,
        "lightning": 3.1,
        "holy": 3.5
      },
      "resistances": {
        "immunity": 22,
        "robustness": 30,
        "focus": 14,
        "vitality": 15,
        "poise": 8
      },
      "effects": {}
    },
    "Tree Sentinel Greaves": {
      "id": 270300,
      "category": "legs",
      "weight": 11.7,
      "absorptions": {
        "physical": 10.8,
        "strike": 8.6,
        "slash": 10.8,
        "pierce": 10.1,
        "magic": 7.4,
        "fire": 9.9,
        "lightning": 7.2,
        "holy": 8.1
      },
      "resistances": {
        "immunity": 41,
        "robustness": 56,
        "focus": 26,
        "vitality": 29,
        "poise": 23
      },
      "effects": {}
    },
    "Tree Sentinel Armor (Altered)": {
      "id": 271100,
      "category": "body",
      "weight": 18.1,
      "absorptions": {
        "physical": 18.5,
        "strike": 14.8,
        "slash": 18.5,
        "pierce": 17.3,
        "magic": 12.6,
        "fire": 16.4,
        "lightning": 12.4,
        "holy": 14
      },
      "resistances": {
        "immunity": 57,
        "robustness": 75,
        "focus": 34,
        "vitality": 38,
        "poise": 35
      },
      "effects": {}
    },
    "Royal Knight Helm": {
      "id": 280000,
      "category": "head",
      "weight": 6.6,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.2,
        "slash": 6.3,
        "pierce": 6.1,
        "magic": 5,
        "fire": 4.7,
        "lightning": 4.4,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 22,
        "robustness": 29,
        "focus": 15,
        "vitality": 15,
        "poise": 9
      },
      "effects": {}
    },
    "Royal Knight Armor": {
      "id": 280100,
      "category": "body",
      "weight": 15.5,
      "absorptions": {
        "physical": 16,
        "strike": 14.4,
        "slash": 17.5,
        "pierce": 16.8,
        "magic": 14.1,
        "fire": 13.3,
        "lightning": 12.4,
        "holy": 13
      },
      "resistances": {
        "immunity": 50,
        "robustness": 67,
        "focus": 35,
        "vitality": 35,
        "poise": 24
      },
      "effects": {}
    },
    "Royal Knight Gauntlets": {
      "id": 280200,
      "category": "arms",
      "weight": 5.2,
      "absorptions": {
        "physical": 4,
        "strike": 3.6,
        "slash": 4.4,
        "pierce": 4.2,
        "magic": 3.5,
        "fire": 3.3,
        "lightning": 3.1,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 17,
        "robustness": 22,
        "focus": 12,
        "vitality": 12,
        "poise": 6
      },
      "effects": {}
    },
    "Royal Knight Greaves": {
      "id": 280300,
      "category": "legs",
      "weight": 9.6,
      "absorptions": {
        "physical": 9.2,
        "strike": 8.3,
        "slash": 10.1,
        "pierce": 9.6,
        "magic": 8.1,
        "fire": 7.6,
        "lightning": 7.1,
        "holy": 7.4
      },
      "resistances": {
        "immunity": 31,
        "robustness": 41,
        "focus": 22,
        "vitality": 22,
        "poise": 14
      },
      "effects": {}
    },
    "Royal Knight Armor (Altered)": {
      "id": 281100,
      "category": "body",
      "weight": 15,
      "absorptions": {
        "physical": 15.8,
        "strike": 14.2,
        "slash": 17.3,
        "pierce": 16.6,
        "magic": 13.9,
        "fire": 13.1,
        "lightning": 12.2,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 45,
        "robustness": 61,
        "focus": 32,
        "vitality": 32,
        "poise": 28
      },
      "effects": {}
    },
    "Nox Monk Hood": {
      "id": 290000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.1,
        "slash": 2.8,
        "pierce": 2.5,
        "magic": 4,
        "fire": 3.8,
        "lightning": 3.8,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 24,
        "robustness": 15,
        "focus": 18,
        "vitality": 18,
        "poise": 4
      },
      "effects": {}
    },
    "Nox Monk Armor": {
      "id": 290100,
      "category": "body",
      "weight": 8.1,
      "absorptions": {
        "physical": 9.3,
        "strike": 10,
        "slash": 9.3,
        "pierce": 8.6,
        "magic": 12.2,
        "fire": 11.7,
        "lightning": 11.7,
        "holy": 10
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 50,
        "vitality": 50,
        "poise": 16
      },
      "effects": {}
    },
    "Nox Bracelets": {
      "id": 290200,
      "category": "arms",
      "weight": 2.6,
      "absorptions": {
        "physical": 2.1,
        "strike": 2.3,
        "slash": 2.1,
        "pierce": 1.9,
        "magic": 2.9,
        "fire": 2.8,
        "lightning": 2.8,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 20,
        "robustness": 13,
        "focus": 15,
        "vitality": 15,
        "poise": 3
      },
      "effects": {}
    },
    "Nox Greaves": {
      "id": 290300,
      "category": "legs",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.4,
        "strike": 5.8,
        "slash": 5.4,
        "pierce": 5,
        "magic": 7.1,
        "fire": 6.8,
        "lightning": 6.8,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 39,
        "robustness": 26,
        "focus": 31,
        "vitality": 31,
        "poise": 10
      },
      "effects": {}
    },
    "Nox Monk Hood (Altered)": {
      "id": 291000,
      "category": "head",
      "weight": 2.7,
      "absorptions": {
        "physical": 2.5,
        "strike": 2.8,
        "slash": 2.5,
        "pierce": 2.3,
        "magic": 3.8,
        "fire": 3.6,
        "lightning": 3.6,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 21,
        "robustness": 12,
        "focus": 14,
        "vitality": 14,
        "poise": 3
      },
      "effects": {}
    },
    "Nox Monk Armor (Altered)": {
      "id": 291100,
      "category": "body",
      "weight": 7.4,
      "absorptions": {
        "physical": 8.6,
        "strike": 9.3,
        "slash": 8.6,
        "pierce": 7.8,
        "magic": 11.7,
        "fire": 11.2,
        "lightning": 11.2,
        "holy": 9.3
      },
      "resistances": {
        "immunity": 54,
        "robustness": 34,
        "focus": 42,
        "vitality": 42,
        "poise": 15
      },
      "effects": {}
    },
    "Nox Swordstress Crown": {
      "id": 292000,
      "category": "head",
      "weight": 3.3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.4,
        "slash": 2.8,
        "pierce": 3.1,
        "magic": 4.4,
        "fire": 3.6,
        "lightning": 4.2,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 24,
        "robustness": 15,
        "focus": 22,
        "vitality": 22,
        "poise": 5
      },
      "effects": {}
    },
    "Nox Swordstress Armor": {
      "id": 292100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 8.8,
        "strike": 10.2,
        "slash": 8.8,
        "pierce": 9.5,
        "magic": 12.6,
        "fire": 10.9,
        "lightning": 12.4,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 60,
        "robustness": 38,
        "focus": 55,
        "vitality": 55,
        "poise": 17
      },
      "effects": {}
    },
    "Night Maiden Twin Crown": {
      "id": 293000,
      "category": "head",
      "weight": 3.3,
      "absorptions": {
        "physical": 2.5,
        "strike": 3.1,
        "slash": 2.5,
        "pierce": 3.4,
        "magic": 4.2,
        "fire": 3.8,
        "lightning": 4,
        "holy": 4.2
      },
      "resistances": {
        "immunity": 26,
        "robustness": 15,
        "focus": 22,
        "vitality": 22,
        "poise": 5
      },
      "effects": {}
    },
    "Night Maiden Armor": {
      "id": 293100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 8,
        "strike": 9.5,
        "slash": 8,
        "pierce": 10.2,
        "magic": 12.4,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 12.4
      },
      "resistances": {
        "immunity": 63,
        "robustness": 38,
        "focus": 55,
        "vitality": 55,
        "poise": 16
      },
      "effects": {}
    },
    "Nox Swordstress Crown (Altered)": {
      "id": 294000,
      "category": "head",
      "weight": 2.7,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.8,
        "slash": 2.3,
        "pierce": 2.5,
        "magic": 4,
        "fire": 3.1,
        "lightning": 3.8,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 21,
        "robustness": 11,
        "focus": 17,
        "vitality": 17,
        "poise": 2
      },
      "effects": {}
    },
    "Nox Swordstress Armor (Altered)": {
      "id": 294100,
      "category": "body",
      "weight": 7.5,
      "absorptions": {
        "physical": 8,
        "strike": 9.5,
        "slash": 8,
        "pierce": 8.8,
        "magic": 12.4,
        "fire": 10.2,
        "lightning": 11.9,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 56,
        "robustness": 34,
        "focus": 49,
        "vitality": 49,
        "poise": 16
      },
      "effects": {}
    },
    "Great Horned Headband": {
      "id": 300000,
      "category": "head",
      "weight": 3.3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.1,
        "slash": 2.8,
        "pierce": 2.8,
        "magic": 3.1,
        "fire": 3.4,
        "lightning": 3.8,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 33,
        "robustness": 23,
        "focus": 27,
        "vitality": 22,
        "poise": 4
      },
      "effects": {}
    },
    "Fur Raiment": {
      "id": 300100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.7,
        "slash": 6.1,
        "pierce": 6.1,
        "magic": 6.7,
        "fire": 7.1,
        "lightning": 8.8,
        "holy": 7.1
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 55,
        "vitality": 38,
        "poise": 8
      },
      "effects": {}
    },
    "Fur Leggings": {
      "id": 300300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.8,
        "slash": 3.4,
        "pierce": 3.4,
        "magic": 3.8,
        "fire": 4,
        "lightning": 5,
        "holy": 4
      },
      "resistances": {
        "immunity": 39,
        "robustness": 26,
        "focus": 34,
        "vitality": 24,
        "poise": 5
      },
      "effects": {}
    },
    "Shining Horned Headband": {
      "id": 301000,
      "category": "head",
      "weight": 3.3,
      "absorptions": {
        "physical": 2.5,
        "strike": 2.8,
        "slash": 2.5,
        "pierce": 3.6,
        "magic": 3.6,
        "fire": 3.4,
        "lightning": 3.6,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 33,
        "robustness": 23,
        "focus": 27,
        "vitality": 20,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.2,
          "conditions": {
            "0": "Vapor Attack"
          }
        }
      }
    },
    "Shaman Furs": {
      "id": 301100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.1,
        "slash": 5.3,
        "pierce": 8,
        "magic": 8,
        "fire": 7.1,
        "lightning": 8,
        "holy": 6.7
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 55,
        "vitality": 35,
        "poise": 10
      },
      "effects": {}
    },
    "Shaman Leggings": {
      "id": 301300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 3,
        "strike": 3.4,
        "slash": 3,
        "pierce": 4.5,
        "magic": 4.5,
        "fire": 4,
        "lightning": 4.5,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 39,
        "robustness": 26,
        "focus": 34,
        "vitality": 22,
        "poise": 4
      },
      "effects": {}
    },
    "Duelist Helm": {
      "id": 310000,
      "category": "head",
      "weight": 6.2,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.2,
        "slash": 6.1,
        "pierce": 6.1,
        "magic": 4,
        "fire": 4.5,
        "lightning": 3.6,
        "holy": 4.2
      },
      "resistances": {
        "immunity": 24,
        "robustness": 24,
        "focus": 11,
        "vitality": 12,
        "poise": 10
      },
      "effects": {}
    },
    "Gravekeeper Cloak": {
      "id": 310100,
      "category": "body",
      "weight": 6.3,
      "absorptions": {
        "physical": 7.1,
        "strike": 8.8,
        "slash": 7.1,
        "pierce": 7.1,
        "magic": 8,
        "fire": 9.5,
        "lightning": 10.2,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 63,
        "robustness": 25,
        "focus": 42,
        "vitality": 42,
        "poise": 12
      },
      "effects": {
        "0": {
          "attribute": "Fall Damage",
          "model": "multiplicative",
          "type": "positive",
          "value": 0
        },
        "1": {
          "attribute": "Maximum Equip Load",
          "model": "multiplicative",
          "type": "negative",
          "value": 0
        },
        "2": {
          "attribute": "Rune Acquisition",
          "model": "multiplicative",
          "type": "negative",
          "value": 0
        }
      }
    },
    "Duelist Greaves": {
      "id": 310300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 8,
        "strike": 7.1,
        "slash": 8,
        "pierce": 7.4,
        "magic": 5.8,
        "fire": 6.8,
        "lightning": 5.4,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 29,
        "robustness": 31,
        "focus": 15,
        "vitality": 15,
        "poise": 14
      },
      "effects": {}
    },
    "Gravekeeper Cloak (Altered)": {
      "id": 311100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.7,
        "strike": 8,
        "slash": 6.7,
        "pierce": 6.7,
        "magic": 7.1,
        "fire": 8.8,
        "lightning": 9.5,
        "holy": 8
      },
      "resistances": {
        "immunity": 54,
        "robustness": 22,
        "focus": 34,
        "vitality": 34,
        "poise": 8
      },
      "effects": {}
    },
    "Sanguine Noble Hood": {
      "id": 320000,
      "category": "head",
      "weight": 1.4,
      "absorptions": {
        "physical": 1.4,
        "strike": 0.9,
        "slash": 0.9,
        "pierce": 0.9,
        "magic": 4.6,
        "fire": 3.8,
        "lightning": 4.5,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 18,
        "robustness": 5,
        "focus": 29,
        "vitality": 27,
        "poise": 2
      },
      "effects": {}
    },
    "Sanguine Noble Robe": {
      "id": 320100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 5.3,
        "slash": 5.3,
        "pierce": 5.3,
        "magic": 13.3,
        "fire": 11.9,
        "lightning": 13,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 50,
        "robustness": 21,
        "focus": 83,
        "vitality": 76,
        "poise": 10
      },
      "effects": {}
    },
    "Sanguine Noble Waistcloth": {
      "id": 320300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3,
        "strike": 2.3,
        "slash": 2.3,
        "pierce": 2.3,
        "magic": 7.4,
        "fire": 6.5,
        "lightning": 7.3,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 29,
        "robustness": 11,
        "focus": 44,
        "vitality": 41,
        "poise": 5
      },
      "effects": {}
    },
    "Guardian Mask": {
      "id": 330000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 3.8,
        "strike": 3.6,
        "slash": 3.6,
        "pierce": 3.4,
        "magic": 4.2,
        "fire": 4,
        "lightning": 4.2,
        "holy": 4.2
      },
      "resistances": {
        "immunity": 33,
        "robustness": 22,
        "focus": 26,
        "vitality": 24,
        "poise": 5
      },
      "effects": {}
    },
    "Guardian Garb (Full Bloom)": {
      "id": 330100,
      "category": "body",
      "weight": 8.8,
      "absorptions": {
        "physical": 10.2,
        "strike": 10.2,
        "slash": 9.5,
        "pierce": 9.5,
        "magic": 11.9,
        "fire": -2.3,
        "lightning": 11.9,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 71,
        "robustness": 46,
        "focus": 57,
        "vitality": 55,
        "poise": 15
      },
      "effects": {
        "0": {
          "attribute": "Flask Health Restoration",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1
        }
      }
    },
    "Guardian Bracers": {
      "id": 330200,
      "category": "arms",
      "weight": 2.9,
      "absorptions": {
        "physical": 2.7,
        "strike": 2.5,
        "slash": 2.5,
        "pierce": 2.3,
        "magic": 2.9,
        "fire": 2.8,
        "lightning": 2.9,
        "holy": 2.9
      },
      "resistances": {
        "immunity": 25,
        "robustness": 17,
        "focus": 20,
        "vitality": 19,
        "poise": 3
      },
      "effects": {}
    },
    "Guardian Greaves": {
      "id": 330300,
      "category": "legs",
      "weight": 5.5,
      "absorptions": {
        "physical": 6.2,
        "strike": 5.8,
        "slash": 5.8,
        "pierce": 5.4,
        "magic": 6.8,
        "fire": 6.5,
        "lightning": 6.8,
        "holy": 6.8
      },
      "resistances": {
        "immunity": 47,
        "robustness": 31,
        "focus": 37,
        "vitality": 35,
        "poise": 9
      },
      "effects": {}
    },
    "Guardian Garb": {
      "id": 331100,
      "category": "body",
      "weight": 7.7,
      "absorptions": {
        "physical": 9.5,
        "strike": 9.5,
        "slash": 8.8,
        "pierce": 8,
        "magic": 10.9,
        "fire": 10.2,
        "lightning": 10.9,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 61,
        "robustness": 38,
        "focus": 50,
        "vitality": 42,
        "poise": 15
      },
      "effects": {}
    },
    "Cleanrot Helm": {
      "id": 340000,
      "category": "head",
      "weight": 6.4,
      "absorptions": {
        "physical": 5.2,
        "strike": 4.8,
        "slash": 5.8,
        "pierce": 6.3,
        "magic": 4.5,
        "fire": 4.6,
        "lightning": 4,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 27,
        "robustness": 29,
        "focus": 12,
        "vitality": 14,
        "poise": 9
      },
      "effects": {}
    },
    "Cleanrot Armor": {
      "id": 340100,
      "category": "body",
      "weight": 15,
      "absorptions": {
        "physical": 14.6,
        "strike": 13.4,
        "slash": 16,
        "pierce": 17.5,
        "magic": 12.6,
        "fire": 12.8,
        "lightning": 11.4,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 63,
        "robustness": 67,
        "focus": 28,
        "vitality": 32,
        "poise": 27
      },
      "effects": {}
    },
    "Cleanrot Gauntlets": {
      "id": 340200,
      "category": "arms",
      "weight": 5,
      "absorptions": {
        "physical": 3.6,
        "strike": 3.3,
        "slash": 4,
        "pierce": 4.4,
        "magic": 3.1,
        "fire": 3.2,
        "lightning": 2.8,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 21,
        "robustness": 22,
        "focus": 9,
        "vitality": 11,
        "poise": 6
      },
      "effects": {}
    },
    "Cleanrot Greaves": {
      "id": 340300,
      "category": "legs",
      "weight": 9.3,
      "absorptions": {
        "physical": 8.4,
        "strike": 7.6,
        "slash": 9.2,
        "pierce": 10.1,
        "magic": 7.2,
        "fire": 7.3,
        "lightning": 6.5,
        "holy": 7.7
      },
      "resistances": {
        "immunity": 39,
        "robustness": 41,
        "focus": 17,
        "vitality": 20,
        "poise": 16
      },
      "effects": {}
    },
    "Cleanrot Helm (Altered)": {
      "id": 341000,
      "category": "head",
      "weight": 5.5,
      "absorptions": {
        "physical": 4.6,
        "strike": 4.2,
        "slash": 5,
        "pierce": 5.5,
        "magic": 4,
        "fire": 4.2,
        "lightning": 3.4,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 21,
        "robustness": 21,
        "focus": 9,
        "vitality": 10,
        "poise": 7
      },
      "effects": {}
    },
    "Cleanrot Armor (Altered)": {
      "id": 341100,
      "category": "body",
      "weight": 13.7,
      "absorptions": {
        "physical": 13.5,
        "strike": 12.4,
        "slash": 14.6,
        "pierce": 16,
        "magic": 11.9,
        "fire": 12.4,
        "lightning": 10.2,
        "holy": 13
      },
      "resistances": {
        "immunity": 52,
        "robustness": 54,
        "focus": 22,
        "vitality": 22,
        "poise": 24
      },
      "effects": {}
    },
    "Fire Monk Hood": {
      "id": 350000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.6,
        "strike": 3.8,
        "slash": 4.2,
        "pierce": 4,
        "magic": 3.1,
        "fire": 4.5,
        "lightning": 2.5,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 11,
        "robustness": 20,
        "focus": 9,
        "vitality": 9,
        "poise": 6
      },
      "effects": {}
    },
    "Fire Monk Armor": {
      "id": 350100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 14,
        "strike": 12.4,
        "slash": 13.5,
        "pierce": 12.4,
        "magic": 10.9,
        "fire": 13.3,
        "lightning": 9.5,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 55,
        "focus": 24,
        "vitality": 24,
        "poise": 22
      },
      "effects": {}
    },
    "Fire Monk Gauntlets": {
      "id": 350200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.5,
        "strike": 3.1,
        "slash": 3.3,
        "pierce": 3.1,
        "magic": 2.7,
        "fire": 3.3,
        "lightning": 2.3,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Fire Monk Greaves": {
      "id": 350300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 8,
        "strike": 7.1,
        "slash": 7.7,
        "pierce": 7.1,
        "magic": 6.2,
        "fire": 7.6,
        "lightning": 5.4,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 20,
        "robustness": 34,
        "focus": 15,
        "vitality": 15,
        "poise": 13
      },
      "effects": {}
    },
    "Blackflame Monk Hood": {
      "id": 351000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.4,
        "slash": 4.6,
        "pierce": 4.2,
        "magic": 2.8,
        "fire": 4.4,
        "lightning": 2.1,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 11,
        "robustness": 20,
        "focus": 5,
        "vitality": 11,
        "poise": 7
      },
      "effects": {}
    },
    "Blackflame Monk Armor": {
      "id": 351100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.4,
        "slash": 14.6,
        "pierce": 12.9,
        "magic": 10.2,
        "fire": 13,
        "lightning": 8,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 32,
        "robustness": 55,
        "focus": 21,
        "vitality": 32,
        "poise": 24
      },
      "effects": {}
    },
    "Blackflame Monk Gauntlets": {
      "id": 351200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.8,
        "slash": 3.6,
        "pierce": 3.2,
        "magic": 2.5,
        "fire": 3.2,
        "lightning": 1.9,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 7,
        "vitality": 11,
        "poise": 5
      },
      "effects": {}
    },
    "Blackflame Monk Greaves": {
      "id": 351300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.5,
        "slash": 8.4,
        "pierce": 7.4,
        "magic": 5.8,
        "fire": 7.4,
        "lightning": 4.5,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 20,
        "robustness": 34,
        "focus": 13,
        "vitality": 20,
        "poise": 14
      },
      "effects": {}
    },
    "Fire Prelate Helm": {
      "id": 360000,
      "category": "head",
      "weight": 10.6,
      "absorptions": {
        "physical": 7,
        "strike": 6.1,
        "slash": 6.7,
        "pierce": 6.7,
        "magic": 4.8,
        "fire": 7.2,
        "lightning": 4.6,
        "holy": 4.7
      },
      "resistances": {
        "immunity": 29,
        "robustness": 27,
        "focus": 39,
        "vitality": 22,
        "poise": 14
      },
      "effects": {}
    },
    "Fire Prelate Armor": {
      "id": 360100,
      "category": "body",
      "weight": 24.7,
      "absorptions": {
        "physical": 19.2,
        "strike": 17,
        "slash": 18.3,
        "pierce": 18.3,
        "magic": 13.5,
        "fire": 19.8,
        "lightning": 13,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 67,
        "robustness": 63,
        "focus": 90,
        "vitality": 50,
        "poise": 45
      },
      "effects": {}
    },
    "Fire Prelate Gauntlets": {
      "id": 360200,
      "category": "arms",
      "weight": 8.2,
      "absorptions": {
        "physical": 4.9,
        "strike": 4.3,
        "slash": 4.6,
        "pierce": 4.6,
        "magic": 3.3,
        "fire": 5,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 22,
        "robustness": 21,
        "focus": 30,
        "vitality": 17,
        "poise": 10
      },
      "effects": {}
    },
    "Fire Prelate Greaves": {
      "id": 360300,
      "category": "legs",
      "weight": 15.3,
      "absorptions": {
        "physical": 11.1,
        "strike": 9.8,
        "slash": 10.6,
        "pierce": 10.6,
        "magic": 7.7,
        "fire": 11.5,
        "lightning": 7.4,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 41,
        "robustness": 39,
        "focus": 56,
        "vitality": 31,
        "poise": 27
      },
      "effects": {}
    },
    "Fire Prelate Armor (Altered)": {
      "id": 361100,
      "category": "body",
      "weight": 23.6,
      "absorptions": {
        "physical": 18.7,
        "strike": 16.3,
        "slash": 17.5,
        "pierce": 17.5,
        "magic": 13.3,
        "fire": 18.3,
        "lightning": 12.8,
        "holy": 13
      },
      "resistances": {
        "immunity": 57,
        "robustness": 54,
        "focus": 75,
        "vitality": 42,
        "poise": 43
      },
      "effects": {}
    },
    "Aristocrat Headband": {
      "id": 370000,
      "category": "head",
      "weight": 1.2,
      "absorptions": {
        "physical": 1.9,
        "strike": 1.9,
        "slash": 1.9,
        "pierce": 1.6,
        "magic": 4,
        "fire": 3.6,
        "lightning": 3.8,
        "holy": 4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 10,
        "focus": 25,
        "vitality": 22,
        "poise": 2
      },
      "effects": {}
    },
    "Aristocrat Garb": {
      "id": 370100,
      "category": "body",
      "weight": 4.9,
      "absorptions": {
        "physical": 7.8,
        "strike": 8.6,
        "slash": 7.8,
        "pierce": 7.8,
        "magic": 6.5,
        "fire": 6.9,
        "lightning": 7.8,
        "holy": 6.5
      },
      "resistances": {
        "immunity": 47,
        "robustness": 33,
        "focus": 36,
        "vitality": 30,
        "poise": 12
      },
      "effects": {}
    },
    "Aristocrat Boots": {
      "id": 370300,
      "category": "legs",
      "weight": 2.9,
      "absorptions": {
        "physical": 4.3,
        "strike": 4.8,
        "slash": 4.3,
        "pierce": 4.3,
        "magic": 3.6,
        "fire": 3.8,
        "lightning": 4.3,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 29,
        "robustness": 21,
        "focus": 23,
        "vitality": 19,
        "poise": 7
      },
      "effects": {}
    },
    "Aristocrat Garb (Altered)": {
      "id": 371100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 7.1,
        "strike": 8,
        "slash": 7.1,
        "pierce": 7.1,
        "magic": 6.1,
        "fire": 6.7,
        "lightning": 7.1,
        "holy": 6.1
      },
      "resistances": {
        "immunity": 42,
        "robustness": 29,
        "focus": 32,
        "vitality": 25,
        "poise": 10
      },
      "effects": {}
    },
    "Aristocrat Hat": {
      "id": 380000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 3.1,
        "strike": 3.1,
        "slash": 2.8,
        "pierce": 3.1,
        "magic": 3.8,
        "fire": 4,
        "lightning": 3.8,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 22,
        "robustness": 14,
        "focus": 18,
        "vitality": 20,
        "poise": 4
      },
      "effects": {}
    },
    "Aristocrat Coat": {
      "id": 380100,
      "category": "body",
      "weight": 7.1,
      "absorptions": {
        "physical": 8.8,
        "strike": 8.8,
        "slash": 8,
        "pierce": 8.8,
        "magic": 10.9,
        "fire": 11.4,
        "lightning": 10.9,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 50,
        "robustness": 32,
        "focus": 42,
        "vitality": 46,
        "poise": 13
      },
      "effects": {}
    },
    "Old Aristocrat Cowl": {
      "id": 390000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 2.5,
        "strike": 2.5,
        "slash": 2.3,
        "pierce": 2.5,
        "magic": 3.4,
        "fire": 3.6,
        "lightning": 3.4,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 18,
        "robustness": 11,
        "focus": 15,
        "vitality": 16,
        "poise": 3
      },
      "effects": {}
    },
    "Old Aristocrat Gown": {
      "id": 390100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 7.1,
        "strike": 7.1,
        "slash": 6.7,
        "pierce": 7.1,
        "magic": 9.5,
        "fire": 10.2,
        "lightning": 9.5,
        "holy": 7.1
      },
      "resistances": {
        "immunity": 42,
        "robustness": 25,
        "focus": 35,
        "vitality": 38,
        "poise": 10
      },
      "effects": {}
    },
    "Old Aristocrat Shoes": {
      "id": 390300,
      "category": "legs",
      "weight": 2,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.4,
        "slash": 3,
        "pierce": 3.4,
        "magic": 4.5,
        "fire": 5,
        "lightning": 4.5,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 22,
        "robustness": 15,
        "focus": 17,
        "vitality": 20,
        "poise": 2
      },
      "effects": {}
    },
    "Vulgar Militia Helm": {
      "id": 420000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.8,
        "slash": 3.6,
        "pierce": 3.1,
        "magic": 3.8,
        "fire": 3.8,
        "lightning": 4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 31,
        "robustness": 16,
        "focus": 23,
        "vitality": 23,
        "poise": 6
      },
      "effects": {}
    },
    "Vulgar Militia Armor": {
      "id": 420100,
      "category": "body",
      "weight": 7.7,
      "absorptions": {
        "physical": 8.8,
        "strike": 10.2,
        "slash": 9.5,
        "pierce": 8,
        "magic": 10.2,
        "fire": 10.2,
        "lightning": 10.9,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 67,
        "robustness": 35,
        "focus": 50,
        "vitality": 50,
        "poise": 16
      },
      "effects": {}
    },
    "Vulgar Militia Gauntlets": {
      "id": 420200,
      "category": "arms",
      "weight": 2.1,
      "absorptions": {
        "physical": 1.7,
        "strike": 2.1,
        "slash": 1.9,
        "pierce": 1.6,
        "magic": 2.1,
        "fire": 2.1,
        "lightning": 2.3,
        "holy": 2.1
      },
      "resistances": {
        "immunity": 20,
        "robustness": 9,
        "focus": 14,
        "vitality": 14,
        "poise": 3
      },
      "effects": {}
    },
    "Vulgar Militia Greaves": {
      "id": 420300,
      "category": "legs",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.4,
        "strike": 6.2,
        "slash": 5.8,
        "pierce": 5,
        "magic": 6.2,
        "fire": 6.2,
        "lightning": 6.5,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 44,
        "robustness": 24,
        "focus": 34,
        "vitality": 34,
        "poise": 10
      },
      "effects": {}
    },
    "Sage Hood": {
      "id": 430000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.1,
        "slash": 2.1,
        "pierce": 1.4,
        "magic": 4.8,
        "fire": 4.5,
        "lightning": 4.6,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 16,
        "robustness": 10,
        "focus": 31,
        "vitality": 33,
        "poise": 3
      },
      "effects": {}
    },
    "Sage Robe": {
      "id": 430100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.7,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 4.2,
        "magic": 13.5,
        "fire": 12.6,
        "lightning": 13,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 38,
        "robustness": 23,
        "focus": 71,
        "vitality": 76,
        "poise": 8
      },
      "effects": {}
    },
    "Sage Trousers": {
      "id": 430300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3.4,
        "strike": 3,
        "slash": 3,
        "pierce": 1.5,
        "magic": 7.6,
        "fire": 7.1,
        "lightning": 7.3,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 22,
        "robustness": 13,
        "focus": 39,
        "vitality": 41,
        "poise": 4
      },
      "effects": {}
    },
    "Pumpkin Helm": {
      "id": 440000,
      "category": "head",
      "weight": 12.3,
      "absorptions": {
        "physical": 7,
        "strike": 5.9,
        "slash": 6.7,
        "pierce": 6.7,
        "magic": 4.6,
        "fire": 4.7,
        "lightning": 5.2,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 27,
        "robustness": 42,
        "focus": 44,
        "vitality": 18,
        "poise": 11
      },
      "effects": {
        "0": {
          "attribute": "Reduce Headshot Impact",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Elden Lord Crown": {
      "id": 460000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.8,
        "strike": 3.4,
        "slash": 3.6,
        "pierce": 4,
        "magic": 2.5,
        "fire": 3.6,
        "lightning": 2.1,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 11,
        "robustness": 20,
        "focus": 0,
        "vitality": 5,
        "poise": 5
      },
      "effects": {}
    },
    "Elden Lord Armor": {
      "id": 460100,
      "category": "body",
      "weight": 9.2,
      "absorptions": {
        "physical": 11.9,
        "strike": 10.9,
        "slash": 11.4,
        "pierce": 12.4,
        "magic": 8.8,
        "fire": 11.4,
        "lightning": 7.1,
        "holy": 8
      },
      "resistances": {
        "immunity": 32,
        "robustness": 55,
        "focus": 18,
        "vitality": 21,
        "poise": 19
      },
      "effects": {}
    },
    "Elden Lord Bracers": {
      "id": 460200,
      "category": "arms",
      "weight": 3.1,
      "absorptions": {
        "physical": 2.9,
        "strike": 2.7,
        "slash": 2.8,
        "pierce": 3.1,
        "magic": 2.1,
        "fire": 2.8,
        "lightning": 1.7,
        "holy": 1.9
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 6,
        "vitality": 7,
        "poise": 4
      },
      "effects": {}
    },
    "Elden Lord Greaves": {
      "id": 460300,
      "category": "legs",
      "weight": 5.5,
      "absorptions": {
        "physical": 6.5,
        "strike": 5.8,
        "slash": 6.2,
        "pierce": 6.8,
        "magic": 4.5,
        "fire": 6.2,
        "lightning": 3.8,
        "holy": 4
      },
      "resistances": {
        "immunity": 16,
        "robustness": 31,
        "focus": 7,
        "vitality": 11,
        "poise": 10
      },
      "effects": {}
    },
    "Elden Lord Armor (Altered)": {
      "id": 461100,
      "category": "body",
      "weight": 8.4,
      "absorptions": {
        "physical": 11.1,
        "strike": 9.9,
        "slash": 10.6,
        "pierce": 11.6,
        "magic": 7.7,
        "fire": 10.6,
        "lightning": 6.4,
        "holy": 6.8
      },
      "resistances": {
        "immunity": 22,
        "robustness": 45,
        "focus": 10,
        "vitality": 16,
        "poise": 17
      },
      "effects": {}
    },
    "Radahn's Redmane Helm": {
      "id": 470000,
      "category": "head",
      "weight": 7.5,
      "absorptions": {
        "physical": 6.8,
        "strike": 5.4,
        "slash": 6.7,
        "pierce": 6.3,
        "magic": 4.8,
        "fire": 5,
        "lightning": 4.5,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 26,
        "robustness": 42,
        "focus": 18,
        "vitality": 16,
        "poise": 11
      },
      "effects": {}
    },
    "Radahn's Lion Armor": {
      "id": 470100,
      "category": "body",
      "weight": 17.5,
      "absorptions": {
        "physical": 18.7,
        "strike": 15,
        "slash": 18.3,
        "pierce": 17.5,
        "magic": 13.5,
        "fire": 14.1,
        "lightning": 12.6,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 60,
        "robustness": 99,
        "focus": 42,
        "vitality": 38,
        "poise": 34
      },
      "effects": {}
    },
    "Radahn's Gauntlets": {
      "id": 470200,
      "category": "arms",
      "weight": 5.8,
      "absorptions": {
        "physical": 4.7,
        "strike": 3.7,
        "slash": 4.6,
        "pierce": 4.4,
        "magic": 3.3,
        "fire": 3.5,
        "lightning": 3.1,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 20,
        "robustness": 33,
        "focus": 14,
        "vitality": 13,
        "poise": 7
      },
      "effects": {}
    },
    "Radahn's Greaves": {
      "id": 470300,
      "category": "legs",
      "weight": 10.8,
      "absorptions": {
        "physical": 10.8,
        "strike": 8.6,
        "slash": 10.6,
        "pierce": 10.1,
        "magic": 7.7,
        "fire": 8.1,
        "lightning": 7.2,
        "holy": 7.7
      },
      "resistances": {
        "immunity": 37,
        "robustness": 61,
        "focus": 26,
        "vitality": 24,
        "poise": 20
      },
      "effects": {}
    },
    "Radahn's Lion Armor (Altered)": {
      "id": 471100,
      "category": "body",
      "weight": 16.4,
      "absorptions": {
        "physical": 18.5,
        "strike": 14.6,
        "slash": 17.7,
        "pierce": 17,
        "magic": 13.3,
        "fire": 14,
        "lightning": 12.4,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 52,
        "robustness": 82,
        "focus": 34,
        "vitality": 32,
        "poise": 33
      },
      "effects": {}
    },
    "Lord of Blood's Robe": {
      "id": 480100,
      "category": "body",
      "weight": 8.1,
      "absorptions": {
        "physical": 9.3,
        "strike": 10,
        "slash": 8.6,
        "pierce": 8.6,
        "magic": 10,
        "fire": 12.2,
        "lightning": 12.2,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 63,
        "robustness": 23,
        "focus": 55,
        "vitality": 55,
        "poise": 17
      },
      "effects": {}
    },
    "Lord of Blood's Robe (Altered)": {
      "id": 481100,
      "category": "body",
      "weight": 7.3,
      "absorptions": {
        "physical": 8.9,
        "strike": 9.6,
        "slash": 8.1,
        "pierce": 8.1,
        "magic": 9.6,
        "fire": 12,
        "lightning": 12,
        "holy": 13.4
      },
      "resistances": {
        "immunity": 57,
        "robustness": 19,
        "focus": 47,
        "vitality": 47,
        "poise": 16
      },
      "effects": {}
    },
    "Queen's Crescent Crown": {
      "id": 510000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 2.1,
        "strike": 1.8,
        "slash": 1.8,
        "pierce": 1.4,
        "magic": 4.9,
        "fire": 4.5,
        "lightning": 4.6,
        "holy": 4.7
      },
      "resistances": {
        "immunity": 18,
        "robustness": 11,
        "focus": 31,
        "vitality": 35,
        "poise": 3
      },
      "effects": {
        "0": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 3
        }
      }
    },
    "Queen's Robe": {
      "id": 510100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 5.3,
        "slash": 5.3,
        "pierce": 4.2,
        "magic": 13.8,
        "fire": 12.6,
        "lightning": 12.8,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 42,
        "robustness": 25,
        "focus": 71,
        "vitality": 83,
        "poise": 8
      },
      "effects": {}
    },
    "Queen's Bracelets": {
      "id": 510200,
      "category": "arms",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.5,
        "strike": 1.3,
        "slash": 1.3,
        "pierce": 1,
        "magic": 3.4,
        "fire": 3.1,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 14,
        "robustness": 8,
        "focus": 24,
        "vitality": 28,
        "poise": 2
      },
      "effects": {}
    },
    "Queen's Leggings": {
      "id": 510300,
      "category": "legs",
      "weight": 2,
      "absorptions": {
        "physical": 2.3,
        "strike": 1.5,
        "slash": 1.5,
        "pierce": 0.3,
        "magic": 7.6,
        "fire": 6.8,
        "lightning": 7.1,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 22,
        "robustness": 14,
        "focus": 37,
        "vitality": 41,
        "poise": 3
      },
      "effects": {}
    },
    "Godskin Apostle Hood": {
      "id": 520000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.1,
        "slash": 2.1,
        "pierce": 1.4,
        "magic": 4.6,
        "fire": 4.4,
        "lightning": 4.5,
        "holy": 5
      },
      "resistances": {
        "immunity": 20,
        "robustness": 10,
        "focus": 33,
        "vitality": 31,
        "poise": 3
      },
      "effects": {}
    },
    "Godskin Apostle Robe": {
      "id": 520100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 5.3,
        "slash": 5.3,
        "pierce": 2.7,
        "magic": 12.6,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 13.8
      },
      "resistances": {
        "immunity": 42,
        "robustness": 21,
        "focus": 67,
        "vitality": 63,
        "poise": 8
      },
      "effects": {}
    },
    "Godskin Apostle Bracelets": {
      "id": 520200,
      "category": "arms",
      "weight": 2.1,
      "absorptions": {
        "physical": 1.7,
        "strike": 1.6,
        "slash": 1.6,
        "pierce": 1.3,
        "magic": 3.2,
        "fire": 3.1,
        "lightning": 3.2,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 17,
        "robustness": 8,
        "focus": 28,
        "vitality": 25,
        "poise": 3
      },
      "effects": {}
    },
    "Godskin Apostle Trousers": {
      "id": 520300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3.4,
        "strike": 3,
        "slash": 3,
        "pierce": 1.5,
        "magic": 7.2,
        "fire": 6.8,
        "lightning": 7.1,
        "holy": 7.9
      },
      "resistances": {
        "immunity": 26,
        "robustness": 13,
        "focus": 41,
        "vitality": 39,
        "poise": 5
      },
      "effects": {}
    },
    "Godskin Noble Hood": {
      "id": 530000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.4,
        "strike": 2.8,
        "slash": 1.8,
        "pierce": 1.4,
        "magic": 4.5,
        "fire": 4,
        "lightning": 4.2,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 16,
        "robustness": 10,
        "focus": 27,
        "vitality": 29,
        "poise": 3
      },
      "effects": {}
    },
    "Godskin Noble Robe": {
      "id": 530100,
      "category": "body",
      "weight": 6.3,
      "absorptions": {
        "physical": 6.1,
        "strike": 9.5,
        "slash": 6.7,
        "pierce": 6.1,
        "magic": 13,
        "fire": 12.4,
        "lightning": 12.6,
        "holy": 14.1
      },
      "resistances": {
        "immunity": 46,
        "robustness": 25,
        "focus": 76,
        "vitality": 83,
        "poise": 12
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.2,
          "conditions": {
            "0": "Godslayer Spell"
          }
        }
      }
    },
    "Godskin Noble Bracelets": {
      "id": 530200,
      "category": "arms",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.3,
        "strike": 2.1,
        "slash": 1.5,
        "pierce": 1.3,
        "magic": 3.2,
        "fire": 2.9,
        "lightning": 3.1,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 14,
        "robustness": 8,
        "focus": 24,
        "vitality": 25,
        "poise": 3
      },
      "effects": {}
    },
    "Godskin Noble Trousers": {
      "id": 530300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 2.3,
        "strike": 4.5,
        "slash": 3,
        "pierce": 2.3,
        "magic": 7.2,
        "fire": 6.5,
        "lightning": 6.8,
        "holy": 7.7
      },
      "resistances": {
        "immunity": 24,
        "robustness": 14,
        "focus": 39,
        "vitality": 41,
        "poise": 6
      },
      "effects": {}
    },
    "Depraved Perfumer Headscarf": {
      "id": 540000,
      "category": "head",
      "weight": 2.1,
      "absorptions": {
        "physical": 2,
        "strike": 2,
        "slash": 1.7,
        "pierce": 1.3,
        "magic": 4.6,
        "fire": 4.5,
        "lightning": 4.4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 28,
        "robustness": 10,
        "focus": 25,
        "vitality": 34,
        "poise": 3
      },
      "effects": {}
    },
    "Depraved Perfumer Robe": {
      "id": 540100,
      "category": "body",
      "weight": 5,
      "absorptions": {
        "physical": 6,
        "strike": 6,
        "slash": 5.2,
        "pierce": 4.1,
        "magic": 13.2,
        "fire": 12.7,
        "lightning": 12.5,
        "holy": 12.7
      },
      "resistances": {
        "immunity": 65,
        "robustness": 22,
        "focus": 55,
        "vitality": 80,
        "poise": 8
      },
      "effects": {}
    },
    "Depraved Perfumer Gloves": {
      "id": 540200,
      "category": "arms",
      "weight": 2,
      "absorptions": {
        "physical": 1.5,
        "strike": 1.5,
        "slash": 1.4,
        "pierce": 1.2,
        "magic": 3.2,
        "fire": 3.1,
        "lightning": 3.1,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 23,
        "robustness": 8,
        "focus": 20,
        "vitality": 28,
        "poise": 2
      },
      "effects": {}
    },
    "Depraved Perfumer Trousers": {
      "id": 540300,
      "category": "legs",
      "weight": 4.3,
      "absorptions": {
        "physical": 3.9,
        "strike": 3.9,
        "slash": 3.7,
        "pierce": 3.3,
        "magic": 7.8,
        "fire": 7.5,
        "lightning": 7.3,
        "holy": 7.5
      },
      "resistances": {
        "immunity": 46,
        "robustness": 15,
        "focus": 40,
        "vitality": 58,
        "poise": 7
      },
      "effects": {}
    },
    "Depraved Perfumer Robe (Altered)": {
      "id": 541100,
      "category": "body",
      "weight": 4,
      "absorptions": {
        "physical": 5.3,
        "strike": 5.2,
        "slash": 4.1,
        "pierce": 2.6,
        "magic": 13,
        "fire": 12.6,
        "lightning": 12.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 63,
        "robustness": 18,
        "focus": 48,
        "vitality": 63,
        "poise": 7
      },
      "effects": {}
    },
    "Crucible Axe Helm": {
      "id": 570000,
      "category": "head",
      "weight": 6.6,
      "absorptions": {
        "physical": 6.3,
        "strike": 5,
        "slash": 6.1,
        "pierce": 6.1,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 22,
        "robustness": 31,
        "focus": 15,
        "vitality": 15,
        "poise": 11
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.04,
          "conditions": {
            "0": "Primordial Crucible Spell"
          }
        }
      }
    },
    "Crucible Axe Armor": {
      "id": 570100,
      "category": "body",
      "weight": 15.5,
      "absorptions": {
        "physical": 17.5,
        "strike": 13.9,
        "slash": 16.8,
        "pierce": 16.8,
        "magic": 13,
        "fire": 12.8,
        "lightning": 11.4,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 50,
        "robustness": 71,
        "focus": 35,
        "vitality": 35,
        "poise": 33
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.04,
          "conditions": {
            "0": "Primordial Crucible Spell"
          }
        }
      }
    },
    "Crucible Gauntlets": {
      "id": 570200,
      "category": "arms",
      "weight": 5.2,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.4,
        "slash": 4.2,
        "pierce": 4.2,
        "magic": 3.2,
        "fire": 3.2,
        "lightning": 2.8,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 17,
        "robustness": 24,
        "focus": 12,
        "vitality": 12,
        "poise": 7
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.04,
          "conditions": {
            "0": "Primordial Crucible Spell"
          }
        }
      }
    },
    "Crucible Greaves": {
      "id": 570300,
      "category": "legs",
      "weight": 9.6,
      "absorptions": {
        "physical": 10.1,
        "strike": 8,
        "slash": 9.6,
        "pierce": 9.6,
        "magic": 7.4,
        "fire": 7.3,
        "lightning": 6.5,
        "holy": 7.7
      },
      "resistances": {
        "immunity": 31,
        "robustness": 44,
        "focus": 22,
        "vitality": 22,
        "poise": 20
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.04,
          "conditions": {
            "0": "Primordial Crucible Spell"
          }
        }
      }
    },
    "Crucible Tree Helm": {
      "id": 571000,
      "category": "head",
      "weight": 6.6,
      "absorptions": {
        "physical": 6.5,
        "strike": 5,
        "slash": 6.3,
        "pierce": 5.6,
        "magic": 4.6,
        "fire": 4.2,
        "lightning": 4,
        "holy": 5.2
      },
      "resistances": {
        "immunity": 22,
        "robustness": 31,
        "focus": 15,
        "vitality": 15,
        "poise": 11
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.04,
          "conditions": {
            "0": "Primordial Crucible Spell"
          }
        }
      }
    },
    "Crucible Tree Armor": {
      "id": 571100,
      "category": "body",
      "weight": 15.5,
      "absorptions": {
        "physical": 17.7,
        "strike": 13.9,
        "slash": 17.5,
        "pierce": 15.8,
        "magic": 13,
        "fire": 11.9,
        "lightning": 11.4,
        "holy": 14.5
      },
      "resistances": {
        "immunity": 50,
        "robustness": 71,
        "focus": 35,
        "vitality": 35,
        "poise": 33
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.04,
          "conditions": {
            "0": "Primordial Crucible Spell"
          }
        }
      }
    },
    "Crucible Axe Armor (Altered)": {
      "id": 572100,
      "category": "body",
      "weight": 14.9,
      "absorptions": {
        "physical": 16.8,
        "strike": 13.4,
        "slash": 16,
        "pierce": 16,
        "magic": 12.8,
        "fire": 12.6,
        "lightning": 10.9,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 42,
        "robustness": 61,
        "focus": 29,
        "vitality": 29,
        "poise": 31
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.04,
          "conditions": {
            "0": "Primordial Crucible Spell"
          }
        }
      }
    },
    "Crucible Tree Armor (Altered)": {
      "id": 573100,
      "category": "body",
      "weight": 14.9,
      "absorptions": {
        "physical": 17,
        "strike": 13.4,
        "slash": 16,
        "pierce": 15.6,
        "magic": 12.8,
        "fire": 11.4,
        "lightning": 10.9,
        "holy": 14.1
      },
      "resistances": {
        "immunity": 42,
        "robustness": 61,
        "focus": 29,
        "vitality": 29,
        "poise": 31
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.04,
          "conditions": {
            "0": "Primordial Crucible Spell"
          }
        }
      }
    },
    "Lusat's Glintstone Crown": {
      "id": 580000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.1,
        "strike": 2.3,
        "slash": 3.1,
        "pierce": 2.3,
        "magic": 5.5,
        "fire": 4.6,
        "lightning": 4.8,
        "holy": 4.9
      },
      "resistances": {
        "immunity": 23,
        "robustness": 11,
        "focus": 39,
        "vitality": 44,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "conditions": {
            "0": "Olivinus Spell"
          }
        },
        "1": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.15,
          "conditions": {
            "0": "Lusat Spell"
          }
        },
        "2": {
          "attribute": "Sorcery Focus Consumption",
          "model": "multiplicative",
          "type": "negative",
          "value": 1.15,
          "conditions": {
            "0": "Olivinus Spell"
          }
        }
      }
    },
    "Lusat's Robe": {
      "id": 580100,
      "category": "body",
      "weight": 7.1,
      "absorptions": {
        "physical": 8,
        "strike": 6.1,
        "slash": 8,
        "pierce": 6.1,
        "magic": 15.4,
        "fire": 12.8,
        "lightning": 13.3,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 50,
        "robustness": 25,
        "focus": 83,
        "vitality": 99,
        "poise": 12
      },
      "effects": {}
    },
    "Lusat's Manchettes": {
      "id": 580200,
      "category": "arms",
      "weight": 1.1,
      "absorptions": {
        "physical": 1.3,
        "strike": 0.1,
        "slash": 1.3,
        "pierce": 0.1,
        "magic": 3.4,
        "fire": 2.8,
        "lightning": 3.1,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 6,
        "focus": 20,
        "vitality": 22,
        "poise": 1
      },
      "effects": {}
    },
    "Old Sorcerer's Legwraps": {
      "id": 580300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3.4,
        "strike": 1.5,
        "slash": 3.4,
        "pierce": 1.5,
        "magic": 8.1,
        "fire": 6.8,
        "lightning": 7.2,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 24,
        "robustness": 13,
        "focus": 39,
        "vitality": 44,
        "poise": 4
      },
      "effects": {}
    },
    "Azur's Glintstone Crown": {
      "id": 581000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 2.8,
        "strike": 2.3,
        "slash": 2.5,
        "pierce": 2.5,
        "magic": 5.8,
        "fire": 4.6,
        "lightning": 4.7,
        "holy": 5
      },
      "resistances": {
        "immunity": 23,
        "robustness": 14,
        "focus": 44,
        "vitality": 39,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "conditions": {
            "0": "Karolos Spell"
          }
        },
        "1": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.15,
          "conditions": {
            "0": "Azur Spell"
          }
        },
        "2": {
          "attribute": "Sorcery Focus Consumption",
          "model": "multiplicative",
          "type": "negative",
          "value": 1.15,
          "conditions": {
            "0": "Karolos Spell"
          }
        }
      }
    },
    "Azur's Glintstone Robe": {
      "id": 581100,
      "category": "body",
      "weight": 7.1,
      "absorptions": {
        "physical": 7.1,
        "strike": 6.1,
        "slash": 6.7,
        "pierce": 6.7,
        "magic": 15.4,
        "fire": 12.8,
        "lightning": 13,
        "holy": 13.8
      },
      "resistances": {
        "immunity": 50,
        "robustness": 28,
        "focus": 99,
        "vitality": 83,
        "poise": 12
      },
      "effects": {}
    },
    "Azur's Manchettes": {
      "id": 581200,
      "category": "arms",
      "weight": 1.1,
      "absorptions": {
        "physical": 1,
        "strike": 0.1,
        "slash": 0.6,
        "pierce": 0.6,
        "magic": 3.4,
        "fire": 2.8,
        "lightning": 2.9,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 12,
        "robustness": 8,
        "focus": 22,
        "vitality": 20,
        "poise": 1
      },
      "effects": {}
    },
    "All-Knowing Helm": {
      "id": 590000,
      "category": "head",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.6,
        "strike": 4.2,
        "slash": 4.8,
        "pierce": 4.2,
        "magic": 4.4,
        "fire": 3.4,
        "lightning": 3.6,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 20,
        "focus": 9,
        "vitality": 9,
        "poise": 7
      },
      "effects": {}
    },
    "All-Knowing Armor": {
      "id": 590100,
      "category": "body",
      "weight": 10.7,
      "absorptions": {
        "physical": 12.9,
        "strike": 11.9,
        "slash": 13.5,
        "pierce": 11.9,
        "magic": 12.4,
        "fire": 9.5,
        "lightning": 10.2,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 28,
        "robustness": 46,
        "focus": 21,
        "vitality": 21,
        "poise": 22
      },
      "effects": {}
    },
    "All-Knowing Gauntlets": {
      "id": 590200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.2,
        "strike": 2.9,
        "slash": 3.3,
        "pierce": 2.9,
        "magic": 3.1,
        "fire": 2.3,
        "lightning": 2.5,
        "holy": 2.1
      },
      "resistances": {
        "immunity": 9,
        "robustness": 15,
        "focus": 7,
        "vitality": 7,
        "poise": 5
      },
      "effects": {}
    },
    "All-Knowing Greaves": {
      "id": 590300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.4,
        "strike": 6.8,
        "slash": 7.7,
        "pierce": 6.8,
        "magic": 7.1,
        "fire": 5.4,
        "lightning": 5.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 17,
        "robustness": 29,
        "focus": 13,
        "vitality": 13,
        "poise": 13
      },
      "effects": {}
    },
    "All-Knowing Armor (Altered)": {
      "id": 591100,
      "category": "body",
      "weight": 9.3,
      "absorptions": {
        "physical": 12.4,
        "strike": 10.9,
        "slash": 12.9,
        "pierce": 11.4,
        "magic": 11.4,
        "fire": 8.8,
        "lightning": 9.5,
        "holy": 8
      },
      "resistances": {
        "immunity": 22,
        "robustness": 38,
        "focus": 16,
        "vitality": 16,
        "poise": 21
      },
      "effects": {}
    },
    "Twinned Helm": {
      "id": 600000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.8,
        "strike": 4.4,
        "slash": 5.2,
        "pierce": 4.2,
        "magic": 4,
        "fire": 4,
        "lightning": 3.1,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 14,
        "robustness": 23,
        "focus": 9,
        "vitality": 23,
        "poise": 7
      },
      "effects": {}
    },
    "Twinned Armor": {
      "id": 600100,
      "category": "body",
      "weight": 13.7,
      "absorptions": {
        "physical": 14.6,
        "strike": 13.4,
        "slash": 16,
        "pierce": 13.5,
        "magic": 12.4,
        "fire": 12.4,
        "lightning": 10.2,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 38,
        "robustness": 60,
        "focus": 24,
        "vitality": 60,
        "poise": 25
      },
      "effects": {}
    },
    "Twinned Gauntlets": {
      "id": 600200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.3,
        "strike": 3.1,
        "slash": 3.6,
        "pierce": 2.9,
        "magic": 2.8,
        "fire": 2.8,
        "lightning": 2.1,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 7,
        "vitality": 18,
        "poise": 5
      },
      "effects": {}
    },
    "Twinned Greaves": {
      "id": 600300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 7.1,
        "slash": 8.4,
        "pierce": 6.8,
        "magic": 6.5,
        "fire": 6.5,
        "lightning": 5,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 20,
        "robustness": 34,
        "focus": 13,
        "vitality": 34,
        "poise": 13
      },
      "effects": {}
    },
    "Twinned Armor (Altered)": {
      "id": 601100,
      "category": "body",
      "weight": 12.8,
      "absorptions": {
        "physical": 14,
        "strike": 12.9,
        "slash": 15.3,
        "pierce": 12.9,
        "magic": 11.9,
        "fire": 11.9,
        "lightning": 9.5,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 32,
        "robustness": 52,
        "focus": 21,
        "vitality": 52,
        "poise": 24
      },
      "effects": {}
    },
    "Ragged Hat": {
      "id": 610000,
      "category": "head",
      "weight": 3.3,
      "absorptions": {
        "physical": 3.1,
        "strike": 3.4,
        "slash": 3.1,
        "pierce": 3.1,
        "magic": 3.6,
        "fire": 3.8,
        "lightning": 4,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 26,
        "robustness": 16,
        "focus": 22,
        "vitality": 22,
        "poise": 4
      },
      "effects": {}
    },
    "Ragged Armor": {
      "id": 610100,
      "category": "body",
      "weight": 9.2,
      "absorptions": {
        "physical": 9.5,
        "strike": 10.2,
        "slash": 9.5,
        "pierce": 9.5,
        "magic": 10.9,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 55,
        "vitality": 55,
        "poise": 17
      },
      "effects": {}
    },
    "Ragged Gloves": {
      "id": 610200,
      "category": "arms",
      "weight": 2.9,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.5,
        "slash": 2.3,
        "pierce": 2.3,
        "magic": 2.7,
        "fire": 2.8,
        "lightning": 2.9,
        "holy": 2.7
      },
      "resistances": {
        "immunity": 21,
        "robustness": 14,
        "focus": 18,
        "vitality": 18,
        "poise": 4
      },
      "effects": {}
    },
    "Ragged Loincloth": {
      "id": 610300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 4,
        "strike": 4.5,
        "slash": 4,
        "pierce": 4,
        "magic": 5,
        "fire": 5.4,
        "lightning": 5.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 34,
        "robustness": 20,
        "focus": 26,
        "vitality": 26,
        "poise": 3
      },
      "effects": {}
    },
    "Ragged Hat (Altered)": {
      "id": 611000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.1,
        "slash": 2.8,
        "pierce": 2.8,
        "magic": 3.4,
        "fire": 3.6,
        "lightning": 3.8,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 21,
        "robustness": 13,
        "focus": 18,
        "vitality": 18,
        "poise": 3
      },
      "effects": {}
    },
    "Ragged Armor (Altered)": {
      "id": 611100,
      "category": "body",
      "weight": 8.5,
      "absorptions": {
        "physical": 9.1,
        "strike": 9.8,
        "slash": 9.1,
        "pierce": 9.1,
        "magic": 10.5,
        "fire": 11.2,
        "lightning": 11.7,
        "holy": 10.5
      },
      "resistances": {
        "immunity": 60,
        "robustness": 38,
        "focus": 50,
        "vitality": 50,
        "poise": 16
      },
      "effects": {}
    },
    "Prophet Blindfold": {
      "id": 620000,
      "category": "head",
      "weight": 1,
      "absorptions": {
        "physical": 0.2,
        "strike": 0.9,
        "slash": 0.9,
        "pierce": 0.2,
        "magic": 4.5,
        "fire": 4.2,
        "lightning": 4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 14,
        "robustness": 5,
        "focus": 27,
        "vitality": 27,
        "poise": 1
      },
      "effects": {}
    },
    "Corhyn's Robe": {
      "id": 620100,
      "category": "body",
      "weight": 6.3,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.7,
        "slash": 6.7,
        "pierce": 6.1,
        "magic": 13.3,
        "fire": 12.8,
        "lightning": 12.8,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 46,
        "robustness": 24,
        "focus": 107,
        "vitality": 76,
        "poise": 10
      },
      "effects": {}
    },
    "Prophet Trousers": {
      "id": 620300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 3,
        "strike": 3.4,
        "slash": 3.4,
        "pierce": 3,
        "magic": 7.6,
        "fire": 7.3,
        "lightning": 7.2,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 26,
        "robustness": 14,
        "focus": 47,
        "vitality": 51,
        "poise": 3
      },
      "effects": {}
    },
    "Prophet Robe (Altered)": {
      "id": 621100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.1,
        "slash": 5.3,
        "pierce": 6.1,
        "magic": 13.3,
        "fire": 12.4,
        "lightning": 12.8,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 38,
        "robustness": 22,
        "focus": 69,
        "vitality": 75,
        "poise": 10
      },
      "effects": {}
    },
    "Prophet Robe": {
      "id": 622100,
      "category": "body",
      "weight": 6.3,
      "absorptions": {
        "physical": 6.7,
        "strike": 6.7,
        "slash": 6.1,
        "pierce": 6.7,
        "magic": 13.5,
        "fire": 12.6,
        "lightning": 13,
        "holy": 13
      },
      "resistances": {
        "immunity": 46,
        "robustness": 25,
        "focus": 83,
        "vitality": 90,
        "poise": 12
      },
      "effects": {}
    },
    "Astrologer Hood": {
      "id": 630000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.8,
        "strike": 1.4,
        "slash": 1.4,
        "pierce": 1.4,
        "magic": 4.6,
        "fire": 4.5,
        "lightning": 4.6,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 18,
        "robustness": 9,
        "focus": 31,
        "vitality": 27,
        "poise": 3
      },
      "effects": {}
    },
    "Astrologer Robe": {
      "id": 630100,
      "category": "body",
      "weight": 6.3,
      "absorptions": {
        "physical": 6.7,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 6.1,
        "magic": 13.5,
        "fire": 13,
        "lightning": 13.3,
        "holy": 13
      },
      "resistances": {
        "immunity": 50,
        "robustness": 24,
        "focus": 90,
        "vitality": 76,
        "poise": 12
      },
      "effects": {}
    },
    "Astrologer Gloves": {
      "id": 630200,
      "category": "arms",
      "weight": 1.4,
      "absorptions": {
        "physical": 1.3,
        "strike": 1,
        "slash": 1,
        "pierce": 1,
        "magic": 3.2,
        "fire": 3.1,
        "lightning": 3.2,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 14,
        "robustness": 7,
        "focus": 24,
        "vitality": 21,
        "poise": 2
      },
      "effects": {}
    },
    "Astrologer Trousers": {
      "id": 630300,
      "category": "legs",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.8,
        "strike": 3.4,
        "slash": 3.4,
        "pierce": 3.4,
        "magic": 7.7,
        "fire": 7.4,
        "lightning": 7.6,
        "holy": 7.4
      },
      "resistances": {
        "immunity": 31,
        "robustness": 15,
        "focus": 56,
        "vitality": 47,
        "poise": 7
      },
      "effects": {}
    },
    "Astrologer Robe (Altered)": {
      "id": 631100,
      "category": "body",
      "weight": 5.3,
      "absorptions": {
        "physical": 6.1,
        "strike": 5.3,
        "slash": 5.3,
        "pierce": 5.3,
        "magic": 13.3,
        "fire": 12.8,
        "lightning": 13,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 42,
        "robustness": 21,
        "focus": 75,
        "vitality": 64,
        "poise": 10
      },
      "effects": {}
    },
    "Lionel's Helm": {
      "id": 640000,
      "category": "head",
      "weight": 9.1,
      "absorptions": {
        "physical": 6.3,
        "strike": 5.9,
        "slash": 7,
        "pierce": 7.2,
        "magic": 4.8,
        "fire": 5.3,
        "lightning": 4.6,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 27,
        "robustness": 42,
        "focus": 18,
        "vitality": 22,
        "poise": 13
      },
      "effects": {}
    },
    "Lionel's Armor": {
      "id": 640100,
      "category": "body",
      "weight": 21.2,
      "absorptions": {
        "physical": 17.5,
        "strike": 16.3,
        "slash": 19.2,
        "pierce": 19.7,
        "magic": 13.5,
        "fire": 14.9,
        "lightning": 13,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 63,
        "robustness": 99,
        "focus": 42,
        "vitality": 50,
        "poise": 40
      },
      "effects": {}
    },
    "Lionel's Gauntlets": {
      "id": 640200,
      "category": "arms",
      "weight": 7.1,
      "absorptions": {
        "physical": 4.4,
        "strike": 4.1,
        "slash": 4.9,
        "pierce": 5,
        "magic": 3.3,
        "fire": 3.7,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 21,
        "robustness": 33,
        "focus": 14,
        "vitality": 17,
        "poise": 9
      },
      "effects": {}
    },
    "Lionel's Greaves": {
      "id": 640300,
      "category": "legs",
      "weight": 13.1,
      "absorptions": {
        "physical": 10.1,
        "strike": 9.4,
        "slash": 11.1,
        "pierce": 11.4,
        "magic": 7.7,
        "fire": 8.5,
        "lightning": 7.4,
        "holy": 7.7
      },
      "resistances": {
        "immunity": 39,
        "robustness": 61,
        "focus": 26,
        "vitality": 31,
        "poise": 24
      },
      "effects": {}
    },
    "Lionel's Armor (Altered)": {
      "id": 641100,
      "category": "body",
      "weight": 20.2,
      "absorptions": {
        "physical": 17.1,
        "strike": 15.9,
        "slash": 18.8,
        "pierce": 19.3,
        "magic": 13.1,
        "fire": 14.5,
        "lightning": 12.6,
        "holy": 13.1
      },
      "resistances": {
        "immunity": 57,
        "robustness": 90,
        "focus": 38,
        "vitality": 45,
        "poise": 38
      },
      "effects": {}
    },
    "Hoslow's Helm": {
      "id": 650000,
      "category": "head",
      "weight": 5.5,
      "absorptions": {
        "physical": 5.2,
        "strike": 4.4,
        "slash": 5,
        "pierce": 4.8,
        "magic": 4,
        "fire": 4.4,
        "lightning": 3.8,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 18,
        "robustness": 27,
        "focus": 11,
        "vitality": 11,
        "poise": 8
      },
      "effects": {}
    },
    "Hoslow's Armor": {
      "id": 650100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 14,
        "strike": 11.9,
        "slash": 13.5,
        "pierce": 12.4,
        "magic": 10.9,
        "fire": 11.9,
        "lightning": 10.2,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 38,
        "robustness": 60,
        "focus": 24,
        "vitality": 24,
        "poise": 22
      },
      "effects": {}
    },
    "Hoslow's Gauntlets": {
      "id": 650200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.5,
        "strike": 2.9,
        "slash": 3.3,
        "pierce": 3.1,
        "magic": 2.7,
        "fire": 2.9,
        "lightning": 2.5,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 13,
        "robustness": 20,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Hoslow's Greaves": {
      "id": 650300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 8,
        "strike": 6.8,
        "slash": 7.7,
        "pierce": 7.1,
        "magic": 6.2,
        "fire": 6.8,
        "lightning": 5.8,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 24,
        "robustness": 37,
        "focus": 15,
        "vitality": 15,
        "poise": 13
      },
      "effects": {}
    },
    "Diallos's Mask": {
      "id": 651000,
      "category": "head",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.8,
        "strike": 3.8,
        "slash": 4.6,
        "pierce": 4.4,
        "magic": 3.6,
        "fire": 3.6,
        "lightning": 2.5,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 23,
        "focus": 10,
        "vitality": 10,
        "poise": 7
      },
      "effects": {}
    },
    "Hoslow's Armor (Altered)": {
      "id": 652100,
      "category": "body",
      "weight": 10.8,
      "absorptions": {
        "physical": 13.6,
        "strike": 11.5,
        "slash": 12.5,
        "pierce": 12,
        "magic": 10.3,
        "fire": 11,
        "lightning": 8.9,
        "holy": 8.9
      },
      "resistances": {
        "immunity": 32,
        "robustness": 52,
        "focus": 21,
        "vitality": 21,
        "poise": 21
      },
      "effects": {}
    },
    "Vagabond Knight Helm": {
      "id": 660000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.6,
        "strike": 3.6,
        "slash": 4.2,
        "pierce": 4,
        "magic": 3.1,
        "fire": 3.6,
        "lightning": 2.8,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 14,
        "robustness": 23,
        "focus": 9,
        "vitality": 9,
        "poise": 7
      },
      "effects": {}
    },
    "Vagabond Knight Armor": {
      "id": 660100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.4,
        "slash": 12.4,
        "pierce": 11.9,
        "magic": 10.2,
        "fire": 10.9,
        "lightning": 8.8,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 35,
        "robustness": 57,
        "focus": 23,
        "vitality": 23,
        "poise": 22
      },
      "effects": {}
    },
    "Vagabond Knight Gauntlets": {
      "id": 660200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.8,
        "slash": 3.1,
        "pierce": 2.9,
        "magic": 2.5,
        "fire": 2.7,
        "lightning": 2.1,
        "holy": 2.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 19,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Vagabond Knight Greaves": {
      "id": 660300,
      "category": "legs",
      "weight": 5.7,
      "absorptions": {
        "physical": 7.4,
        "strike": 5.8,
        "slash": 6.8,
        "pierce": 6.5,
        "magic": 5,
        "fire": 5.8,
        "lightning": 4.5,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 20,
        "robustness": 34,
        "focus": 13,
        "vitality": 13,
        "poise": 12
      },
      "effects": {}
    },
    "Vagabond Knight Armor (Altered)": {
      "id": 661100,
      "category": "body",
      "weight": 9.6,
      "absorptions": {
        "physical": 13.2,
        "strike": 10.5,
        "slash": 12.2,
        "pierce": 11.7,
        "magic": 9.1,
        "fire": 10.5,
        "lightning": 8.3,
        "holy": 8.3
      },
      "resistances": {
        "immunity": 29,
        "robustness": 50,
        "focus": 19,
        "vitality": 19,
        "poise": 21
      },
      "effects": {}
    },
    "Blue Cloth Cowl": {
      "id": 670000,
      "category": "head",
      "weight": 2.7,
      "absorptions": {
        "physical": 2.8,
        "strike": 2.8,
        "slash": 2.3,
        "pierce": 2.3,
        "magic": 3.1,
        "fire": 3.4,
        "lightning": 3.8,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 24,
        "robustness": 15,
        "focus": 18,
        "vitality": 18,
        "poise": 4
      },
      "effects": {}
    },
    "Blue Cloth Vest": {
      "id": 670100,
      "category": "body",
      "weight": 7.7,
      "absorptions": {
        "physical": 9.5,
        "strike": 9.5,
        "slash": 8,
        "pierce": 8,
        "magic": 10.2,
        "fire": 10.9,
        "lightning": 11.9,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 50,
        "vitality": 50,
        "poise": 16
      },
      "effects": {}
    },
    "Warrior Gauntlets": {
      "id": 670200,
      "category": "arms",
      "weight": 2.6,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.3,
        "slash": 1.9,
        "pierce": 1.9,
        "magic": 2.5,
        "fire": 2.7,
        "lightning": 2.9,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 21,
        "robustness": 14,
        "focus": 17,
        "vitality": 17,
        "poise": 3
      },
      "effects": {}
    },
    "Warrior Greaves": {
      "id": 670300,
      "category": "legs",
      "weight": 4.8,
      "absorptions": {
        "physical": 5.4,
        "strike": 5.4,
        "slash": 4.5,
        "pierce": 4.5,
        "magic": 5.8,
        "fire": 6.2,
        "lightning": 6.8,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 39,
        "robustness": 26,
        "focus": 31,
        "vitality": 31,
        "poise": 10
      },
      "effects": {}
    },
    "White Mask": {
      "id": 680000,
      "category": "head",
      "weight": 3.2,
      "absorptions": {
        "physical": 2.7,
        "strike": 3,
        "slash": 3.3,
        "pierce": 2.7,
        "magic": 3.5,
        "fire": 3.7,
        "lightning": 3.9,
        "holy": 3.7
      },
      "resistances": {
        "immunity": 23,
        "robustness": 18,
        "focus": 21,
        "vitality": 22,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "conditions": {
            "0": "Trigger in Presence of Blood Loss"
          },
          "value_pvp": 1.1
        }
      }
    },
    "War Surgeon Gown": {
      "id": 680100,
      "category": "body",
      "weight": 6.9,
      "absorptions": {
        "physical": 7,
        "strike": 7.9,
        "slash": 8.7,
        "pierce": 7,
        "magic": 9.4,
        "fire": 10.1,
        "lightning": 10.8,
        "holy": 10.1
      },
      "resistances": {
        "immunity": 53,
        "robustness": 37,
        "focus": 44,
        "vitality": 48,
        "poise": 13
      },
      "effects": {}
    },
    "War Surgeon Gloves": {
      "id": 680200,
      "category": "arms",
      "weight": 2.3,
      "absorptions": {
        "physical": 1.6,
        "strike": 1.8,
        "slash": 2,
        "pierce": 1.6,
        "magic": 2.2,
        "fire": 2.4,
        "lightning": 2.6,
        "holy": 2.4
      },
      "resistances": {
        "immunity": 18,
        "robustness": 13,
        "focus": 15,
        "vitality": 17,
        "poise": 3
      },
      "effects": {}
    },
    "War Surgeon Trousers": {
      "id": 680300,
      "category": "legs",
      "weight": 4.2,
      "absorptions": {
        "physical": 3.9,
        "strike": 4.4,
        "slash": 4.9,
        "pierce": 3.9,
        "magic": 5.3,
        "fire": 5.7,
        "lightning": 6.1,
        "holy": 5.7
      },
      "resistances": {
        "immunity": 33,
        "robustness": 23,
        "focus": 28,
        "vitality": 31,
        "poise": 8
      },
      "effects": {}
    },
    "War Surgeon Gown (Altered)": {
      "id": 681100,
      "category": "body",
      "weight": 6.1,
      "absorptions": {
        "physical": 6.6,
        "strike": 7,
        "slash": 7.9,
        "pierce": 6.6,
        "magic": 8.7,
        "fire": 9.4,
        "lightning": 10.1,
        "holy": 9.4
      },
      "resistances": {
        "immunity": 45,
        "robustness": 32,
        "focus": 38,
        "vitality": 42,
        "poise": 12
      },
      "effects": {}
    },
    "Royal Remains Helm": {
      "id": 690000,
      "category": "head",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.2,
        "strike": 4,
        "slash": 4.6,
        "pierce": 4.2,
        "magic": 3.4,
        "fire": 3.6,
        "lightning": 2.8,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 15,
        "robustness": 24,
        "focus": 10,
        "vitality": 5,
        "poise": 7
      },
      "effects": {
        "0": {
          "attribute": "Health Points",
          "model": "additive",
          "type": "positive",
          "value": 2,
          "conditions": {
            "0": "HP below 18%",
            "1": "HP/FP/Stamina Recovery"
          },
          "tick_interval": 1
        }
      }
    },
    "Royal Remains Armor": {
      "id": 690100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 11.9,
        "strike": 11.4,
        "slash": 12.9,
        "pierce": 11.9,
        "magic": 9.5,
        "fire": 10.2,
        "lightning": 8,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 35,
        "robustness": 57,
        "focus": 24,
        "vitality": 11,
        "poise": 21
      },
      "effects": {
        "0": {
          "attribute": "Health Points",
          "model": "additive",
          "type": "positive",
          "value": 2,
          "conditions": {
            "0": "HP below 18%",
            "1": "HP/FP/Stamina Recovery"
          },
          "tick_interval": 1
        }
      }
    },
    "Royal Remains Gauntlets": {
      "id": 690200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 2.9,
        "strike": 2.8,
        "slash": 3.2,
        "pierce": 2.9,
        "magic": 2.3,
        "fire": 2.5,
        "lightning": 1.9,
        "holy": 2.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 19,
        "focus": 8,
        "vitality": 4,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Health Points",
          "model": "additive",
          "type": "positive",
          "value": 2,
          "conditions": {
            "0": "HP below 18%",
            "1": "HP/FP/Stamina Recovery"
          },
          "tick_interval": 1
        }
      }
    },
    "Royal Remains Greaves": {
      "id": 690300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 6.8,
        "strike": 6.5,
        "slash": 7.4,
        "pierce": 6.8,
        "magic": 5.4,
        "fire": 5.8,
        "lightning": 4.5,
        "holy": 5
      },
      "resistances": {
        "immunity": 22,
        "robustness": 35,
        "focus": 15,
        "vitality": 7,
        "poise": 12
      },
      "effects": {
        "0": {
          "attribute": "Health Points",
          "model": "additive",
          "type": "positive",
          "value": 2,
          "conditions": {
            "0": "HP below 18%",
            "1": "HP/FP/Stamina Recovery"
          },
          "tick_interval": 1
        }
      }
    },
    "Brave's Cord Circlet": {
      "id": 700000,
      "category": "head",
      "weight": 1,
      "absorptions": {
        "physical": 0.9,
        "strike": 0.9,
        "slash": 0.9,
        "pierce": 0.2,
        "magic": 4.4,
        "fire": 4,
        "lightning": 4.2,
        "holy": 4.4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 8,
        "focus": 26,
        "vitality": 26,
        "poise": 2
      },
      "effects": {}
    },
    "Brave's Battlewear": {
      "id": 700100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 5.3,
        "slash": 5.3,
        "pierce": 4.2,
        "magic": 12.8,
        "fire": 12.4,
        "lightning": 12.6,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 42,
        "robustness": 23,
        "focus": 67,
        "vitality": 67,
        "poise": 8
      },
      "effects": {}
    },
    "Brave's Bracer": {
      "id": 700200,
      "category": "arms",
      "weight": 0.8,
      "absorptions": {
        "physical": 0.6,
        "strike": 0.6,
        "slash": 0.6,
        "pierce": 0.1,
        "magic": 3.1,
        "fire": 2.8,
        "lightning": 2.9,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 6,
        "focus": 20,
        "vitality": 20,
        "poise": 1
      },
      "effects": {}
    },
    "Brave's Legwraps": {
      "id": 700300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.4,
        "slash": 3.4,
        "pierce": 3,
        "magic": 7.4,
        "fire": 7.2,
        "lightning": 7.3,
        "holy": 7.4
      },
      "resistances": {
        "immunity": 29,
        "robustness": 15,
        "focus": 47,
        "vitality": 47,
        "poise": 6
      },
      "effects": {}
    },
    "Brave's Leather Helm": {
      "id": 701000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 4.2,
        "strike": 3.4,
        "slash": 4.2,
        "pierce": 4,
        "magic": 2.8,
        "fire": 3.4,
        "lightning": 2.3,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 11,
        "robustness": 20,
        "focus": 8,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Brave's Battlewear (Altered)": {
      "id": 702000,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 4.2,
        "strike": 4.2,
        "slash": 4.2,
        "pierce": 2.7,
        "magic": 12.6,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 34,
        "robustness": 19,
        "focus": 57,
        "vitality": 57,
        "poise": 7
      },
      "effects": {}
    },
    "Beast Champion Helm": {
      "id": 720000,
      "category": "head",
      "weight": 7.5,
      "absorptions": {
        "physical": 6.3,
        "strike": 5.9,
        "slash": 6.8,
        "pierce": 6.7,
        "magic": 4.6,
        "fire": 4.9,
        "lightning": 4.6,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 24,
        "robustness": 39,
        "focus": 18,
        "vitality": 16,
        "poise": 11
      },
      "effects": {}
    },
    "Beast Champion Armor": {
      "id": 720100,
      "category": "body",
      "weight": 17.5,
      "absorptions": {
        "physical": 17.5,
        "strike": 16.3,
        "slash": 18.7,
        "pierce": 18.3,
        "magic": 13,
        "fire": 13.8,
        "lightning": 12.8,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 57,
        "robustness": 90,
        "focus": 42,
        "vitality": 38,
        "poise": 34
      },
      "effects": {}
    },
    "Beast Champion Gauntlets": {
      "id": 720200,
      "category": "arms",
      "weight": 5.8,
      "absorptions": {
        "physical": 4.4,
        "strike": 4.1,
        "slash": 4.7,
        "pierce": 4.6,
        "magic": 3.2,
        "fire": 3.4,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 19,
        "robustness": 30,
        "focus": 14,
        "vitality": 13,
        "poise": 7
      },
      "effects": {}
    },
    "Beast Champion Greaves": {
      "id": 720300,
      "category": "legs",
      "weight": 10.8,
      "absorptions": {
        "physical": 10.1,
        "strike": 9.4,
        "slash": 10.8,
        "pierce": 10.6,
        "magic": 7.4,
        "fire": 7.9,
        "lightning": 7.3,
        "holy": 7.7
      },
      "resistances": {
        "immunity": 35,
        "robustness": 56,
        "focus": 26,
        "vitality": 24,
        "poise": 20
      },
      "effects": {}
    },
    "Beast Champion Armor (Altered)": {
      "id": 721100,
      "category": "body",
      "weight": 16.4,
      "absorptions": {
        "physical": 17.2,
        "strike": 15.9,
        "slash": 18.5,
        "pierce": 18.2,
        "magic": 12.9,
        "fire": 13.7,
        "lightning": 12.7,
        "holy": 13.4
      },
      "resistances": {
        "immunity": 50,
        "robustness": 75,
        "focus": 34,
        "vitality": 32,
        "poise": 34
      },
      "effects": {}
    },
    "Champion Headband": {
      "id": 730000,
      "category": "head",
      "weight": 2.7,
      "absorptions": {
        "physical": 2.3,
        "strike": 3.1,
        "slash": 2.5,
        "pierce": 2.8,
        "magic": 2.8,
        "fire": 3.4,
        "lightning": 3.6,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 22,
        "robustness": 14,
        "focus": 18,
        "vitality": 16,
        "poise": 5
      },
      "effects": {}
    },
    "Champion Pauldron": {
      "id": 730100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 8,
        "slash": 6.7,
        "pierce": 7.1,
        "magic": 7.1,
        "fire": 8.8,
        "lightning": 9.5,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 46,
        "robustness": 28,
        "focus": 38,
        "vitality": 35,
        "poise": 10
      },
      "effects": {}
    },
    "Champion Bracers": {
      "id": 730200,
      "category": "arms",
      "weight": 2.1,
      "absorptions": {
        "physical": 1.6,
        "strike": 2.1,
        "slash": 1.7,
        "pierce": 1.9,
        "magic": 1.9,
        "fire": 2.3,
        "lightning": 2.5,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 17,
        "robustness": 11,
        "focus": 14,
        "vitality": 13,
        "poise": 3
      },
      "effects": {}
    },
    "Champion Gaiters": {
      "id": 730300,
      "category": "legs",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.8,
        "strike": 5,
        "slash": 4,
        "pierce": 4.5,
        "magic": 4.5,
        "fire": 5.4,
        "lightning": 5.8,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 31,
        "robustness": 20,
        "focus": 26,
        "vitality": 24,
        "poise": 4
      },
      "effects": {}
    },
    "Crimson Hood": {
      "id": 740000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.4,
        "strike": 1.8,
        "slash": 1.4,
        "pierce": 1.8,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.5,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 16,
        "robustness": 9,
        "focus": 27,
        "vitality": 29,
        "poise": 3
      },
      "effects": {
        "0": {
          "attribute": "Vigor",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Noble's Traveling Garb": {
      "id": 740100,
      "category": "body",
      "weight": 6.3,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.7,
        "slash": 6.1,
        "pierce": 6.7,
        "magic": 13.3,
        "fire": 13.5,
        "lightning": 13,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 46,
        "robustness": 24,
        "focus": 76,
        "vitality": 83,
        "poise": 10
      },
      "effects": {}
    },
    "Noble's Gloves": {
      "id": 740200,
      "category": "arms",
      "weight": 2.1,
      "absorptions": {
        "physical": 1.5,
        "strike": 1.6,
        "slash": 1.5,
        "pierce": 1.6,
        "magic": 3.3,
        "fire": 3.3,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 15,
        "robustness": 8,
        "focus": 25,
        "vitality": 28,
        "poise": 2
      },
      "effects": {}
    },
    "Noble's Trousers": {
      "id": 740300,
      "category": "legs",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.8,
        "slash": 3.4,
        "pierce": 3.8,
        "magic": 7.6,
        "fire": 7.7,
        "lightning": 7.4,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 29,
        "robustness": 15,
        "focus": 47,
        "vitality": 51,
        "poise": 6
      },
      "effects": {}
    },
    "Navy Hood": {
      "id": 741000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.4,
        "strike": 2.1,
        "slash": 1.8,
        "pierce": 0.9,
        "magic": 4.6,
        "fire": 4.7,
        "lightning": 4.4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 20,
        "robustness": 10,
        "focus": 29,
        "vitality": 27,
        "poise": 3
      },
      "effects": {
        "0": {
          "attribute": "Mind",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Maliketh's Helm": {
      "id": 760000,
      "category": "head",
      "weight": 5.5,
      "absorptions": {
        "physical": 4.8,
        "strike": 4.2,
        "slash": 5,
        "pierce": 4.8,
        "magic": 3.8,
        "fire": 4,
        "lightning": 3.4,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 15,
        "robustness": 24,
        "focus": 10,
        "vitality": 22,
        "poise": 8
      },
      "effects": {}
    },
    "Maliketh's Armor": {
      "id": 760100,
      "category": "body",
      "weight": 12.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.9,
        "slash": 14,
        "pierce": 13.5,
        "magic": 10.9,
        "fire": 11.4,
        "lightning": 9.5,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 35,
        "robustness": 57,
        "focus": 24,
        "vitality": 50,
        "poise": 24
      },
      "effects": {}
    },
    "Maliketh's Gauntlets": {
      "id": 760200,
      "category": "arms",
      "weight": 4.3,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.9,
        "slash": 3.5,
        "pierce": 3.3,
        "magic": 2.7,
        "fire": 2.8,
        "lightning": 2.3,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 12,
        "robustness": 19,
        "focus": 8,
        "vitality": 17,
        "poise": 5
      },
      "effects": {}
    },
    "Maliketh's Greaves": {
      "id": 760300,
      "category": "legs",
      "weight": 7.9,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.8,
        "slash": 8,
        "pierce": 7.7,
        "magic": 6.2,
        "fire": 6.5,
        "lightning": 5.4,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 22,
        "robustness": 35,
        "focus": 15,
        "vitality": 31,
        "poise": 14
      },
      "effects": {}
    },
    "Maliketh's Armor (Altered)": {
      "id": 761100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 12.9,
        "strike": 11.4,
        "slash": 13.5,
        "pierce": 12.4,
        "magic": 10.2,
        "fire": 10.9,
        "lightning": 8.8,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 29,
        "robustness": 50,
        "focus": 21,
        "vitality": 42,
        "poise": 22
      },
      "effects": {}
    },
    "Malenia's Winged Helm": {
      "id": 770000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.4,
        "slash": 4.6,
        "pierce": 4,
        "magic": 2.8,
        "fire": 3.4,
        "lightning": 2.3,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 22,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Malenia's Armor": {
      "id": 770100,
      "category": "body",
      "weight": 7.7,
      "absorptions": {
        "physical": 10.9,
        "strike": 7.1,
        "slash": 11.4,
        "pierce": 9.5,
        "magic": 6.1,
        "fire": 7.1,
        "lightning": 4.2,
        "holy": 7.1
      },
      "resistances": {
        "immunity": 38,
        "robustness": 32,
        "focus": 11,
        "vitality": 11,
        "poise": 16
      },
      "effects": {}
    },
    "Malenia's Gauntlet": {
      "id": 770200,
      "category": "arms",
      "weight": 3.1,
      "absorptions": {
        "physical": 3.1,
        "strike": 2.3,
        "slash": 3.2,
        "pierce": 2.8,
        "magic": 1.9,
        "fire": 2.3,
        "lightning": 1.6,
        "holy": 2.7
      },
      "resistances": {
        "immunity": 17,
        "robustness": 14,
        "focus": 6,
        "vitality": 6,
        "poise": 4
      },
      "effects": {}
    },
    "Malenia's Greaves": {
      "id": 770300,
      "category": "legs",
      "weight": 5.7,
      "absorptions": {
        "physical": 7.1,
        "strike": 5.4,
        "slash": 7.4,
        "pierce": 6.5,
        "magic": 4.5,
        "fire": 5.4,
        "lightning": 3.8,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 31,
        "robustness": 26,
        "focus": 11,
        "vitality": 11,
        "poise": 11
      },
      "effects": {}
    },
    "Malenia's Armor (Altered)": {
      "id": 771100,
      "category": "body",
      "weight": 6.8,
      "absorptions": {
        "physical": 10,
        "strike": 6.5,
        "slash": 10.7,
        "pierce": 8.6,
        "magic": 5.1,
        "fire": 6.5,
        "lightning": 2.5,
        "holy": 6.5
      },
      "resistances": {
        "immunity": 29,
        "robustness": 25,
        "focus": 0,
        "vitality": 0,
        "poise": 13
      },
      "effects": {}
    },
    "Veteran's Helm": {
      "id": 780000,
      "category": "head",
      "weight": 8.1,
      "absorptions": {
        "physical": 6.8,
        "strike": 6.1,
        "slash": 6.8,
        "pierce": 6.3,
        "magic": 4.8,
        "fire": 5,
        "lightning": 4.6,
        "holy": 4.7
      },
      "resistances": {
        "immunity": 27,
        "robustness": 39,
        "focus": 20,
        "vitality": 20,
        "poise": 12
      },
      "effects": {}
    },
    "Veteran's Armor": {
      "id": 780100,
      "category": "body",
      "weight": 18.9,
      "absorptions": {
        "physical": 18.7,
        "strike": 17,
        "slash": 18.7,
        "pierce": 17.5,
        "magic": 13.5,
        "fire": 14.1,
        "lightning": 12.8,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 63,
        "robustness": 90,
        "focus": 46,
        "vitality": 46,
        "poise": 38
      },
      "effects": {}
    },
    "Veteran's Gauntlets": {
      "id": 780200,
      "category": "arms",
      "weight": 6.3,
      "absorptions": {
        "physical": 4.7,
        "strike": 4.3,
        "slash": 4.7,
        "pierce": 4.4,
        "magic": 3.3,
        "fire": 3.5,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 21,
        "robustness": 30,
        "focus": 15,
        "vitality": 15,
        "poise": 8
      },
      "effects": {}
    },
    "Veteran's Greaves": {
      "id": 780300,
      "category": "legs",
      "weight": 11.7,
      "absorptions": {
        "physical": 10.8,
        "strike": 9.8,
        "slash": 10.8,
        "pierce": 10.1,
        "magic": 7.7,
        "fire": 8.1,
        "lightning": 7.3,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 39,
        "robustness": 56,
        "focus": 29,
        "vitality": 29,
        "poise": 22
      },
      "effects": {}
    },
    "Veteran's Armor (Altered)": {
      "id": 781100,
      "category": "body",
      "weight": 17.2,
      "absorptions": {
        "physical": 18.1,
        "strike": 16.8,
        "slash": 18.5,
        "pierce": 17.3,
        "magic": 13.1,
        "fire": 13.6,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 54,
        "robustness": 75,
        "focus": 38,
        "vitality": 38,
        "poise": 35
      },
      "effects": {}
    },
    "Bloodhound Knight Helm": {
      "id": 790000,
      "category": "head",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.4,
        "strike": 4,
        "slash": 5,
        "pierce": 4.8,
        "magic": 3.4,
        "fire": 3.6,
        "lightning": 2.5,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 14,
        "robustness": 22,
        "focus": 10,
        "vitality": 10,
        "poise": 6
      },
      "effects": {}
    },
    "Bloodhound Knight Armor": {
      "id": 790100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 12.4,
        "strike": 11.4,
        "slash": 14,
        "pierce": 13.5,
        "magic": 9.5,
        "fire": 10.2,
        "lightning": 7.1,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 32,
        "robustness": 50,
        "focus": 23,
        "vitality": 23,
        "poise": 19
      },
      "effects": {}
    },
    "Bloodhound Knight Gauntlets": {
      "id": 790200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.1,
        "strike": 2.8,
        "slash": 3.5,
        "pierce": 3.3,
        "magic": 2.3,
        "fire": 2.5,
        "lightning": 1.7,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 11,
        "robustness": 17,
        "focus": 8,
        "vitality": 8,
        "poise": 4
      },
      "effects": {}
    },
    "Bloodhound Knight Greaves": {
      "id": 790300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.1,
        "strike": 6.5,
        "slash": 8,
        "pierce": 7.7,
        "magic": 5.4,
        "fire": 5.8,
        "lightning": 4,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 20,
        "robustness": 31,
        "focus": 14,
        "vitality": 14,
        "poise": 11
      },
      "effects": {}
    },
    "Bloodhound Knight Armor (Altered)": {
      "id": 791100,
      "category": "body",
      "weight": 9.6,
      "absorptions": {
        "physical": 12.1,
        "strike": 11.1,
        "slash": 13.7,
        "pierce": 13.2,
        "magic": 9.2,
        "fire": 9.9,
        "lightning": 6.8,
        "holy": 9.9
      },
      "resistances": {
        "immunity": 29,
        "robustness": 45,
        "focus": 21,
        "vitality": 21,
        "poise": 19
      },
      "effects": {}
    },
    "Festive Hood": {
      "id": 800000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.4,
        "strike": 1.8,
        "slash": 2.1,
        "pierce": 1.8,
        "magic": 4.5,
        "fire": 4.2,
        "lightning": 4.4,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 18,
        "robustness": 9,
        "focus": 29,
        "vitality": 29,
        "poise": 2
      },
      "effects": {}
    },
    "Festive Garb": {
      "id": 800100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 4.2,
        "strike": 5.3,
        "slash": 6.1,
        "pierce": 5.3,
        "magic": 12.6,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 13
      },
      "resistances": {
        "immunity": 42,
        "robustness": 21,
        "focus": 67,
        "vitality": 67,
        "poise": 7
      },
      "effects": {}
    },
    "Festive Hood (Altered)": {
      "id": 801000,
      "category": "head",
      "weight": 1,
      "absorptions": {
        "physical": 0.2,
        "strike": 0.9,
        "slash": 1.4,
        "pierce": 0.9,
        "magic": 4.2,
        "fire": 3.8,
        "lightning": 4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 13,
        "robustness": 4,
        "focus": 23,
        "vitality": 23,
        "poise": 1
      },
      "effects": {}
    },
    "Festive Garb (Altered)": {
      "id": 801100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 2.7,
        "strike": 4.2,
        "slash": 5.3,
        "pierce": 4.2,
        "magic": 12.4,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 34,
        "robustness": 16,
        "focus": 57,
        "vitality": 57,
        "poise": 7
      },
      "effects": {}
    },
    "Blue Festive Hood": {
      "id": 802000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.4,
        "strike": 1.4,
        "slash": 2.1,
        "pierce": 1.8,
        "magic": 4.5,
        "fire": 4,
        "lightning": 4.5,
        "holy": 4.9
      },
      "resistances": {
        "immunity": 20,
        "robustness": 9,
        "focus": 31,
        "vitality": 27,
        "poise": 2
      },
      "effects": {}
    },
    "Blue Festive Garb": {
      "id": 802100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 4.2,
        "strike": 4.2,
        "slash": 6.1,
        "pierce": 5.3,
        "magic": 12.6,
        "fire": 11.4,
        "lightning": 12.6,
        "holy": 13.8
      },
      "resistances": {
        "immunity": 46,
        "robustness": 21,
        "focus": 71,
        "vitality": 63,
        "poise": 7
      },
      "effects": {}
    },
    "Commoner's Headband": {
      "id": 810000,
      "category": "head",
      "weight": 1.4,
      "absorptions": {
        "physical": 0.9,
        "strike": 1.8,
        "slash": 1.8,
        "pierce": 1.4,
        "magic": 4.4,
        "fire": 4,
        "lightning": 4.2,
        "holy": 4.4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 10,
        "focus": 27,
        "vitality": 29,
        "poise": 2
      },
      "effects": {}
    },
    "Commoner's Garb": {
      "id": 810100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.7,
        "slash": 6.7,
        "pierce": 6.1,
        "magic": 12.8,
        "fire": 12.4,
        "lightning": 12.6,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 42,
        "robustness": 25,
        "focus": 76,
        "vitality": 83,
        "poise": 8
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Commoner's Shoes": {
      "id": 810300,
      "category": "legs",
      "weight": 2,
      "absorptions": {
        "physical": 1.5,
        "strike": 3,
        "slash": 3,
        "pierce": 2.3,
        "magic": 7.1,
        "fire": 6.5,
        "lightning": 6.8,
        "holy": 7.1
      },
      "resistances": {
        "immunity": 22,
        "robustness": 14,
        "focus": 39,
        "vitality": 41,
        "poise": 3
      },
      "effects": {}
    },
    "Commoner's Headband (Altered)": {
      "id": 811000,
      "category": "head",
      "weight": 0.7,
      "absorptions": {
        "physical": 0.1,
        "strike": 1.1,
        "slash": 1.1,
        "pierce": 0.6,
        "magic": 3.9,
        "fire": 3.5,
        "lightning": 3.7,
        "holy": 3.9
      },
      "resistances": {
        "immunity": 12,
        "robustness": 8,
        "focus": 23,
        "vitality": 24,
        "poise": 1
      },
      "effects": {}
    },
    "Commoner's Garb (Altered)": {
      "id": 811100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 4.2,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 5.3,
        "magic": 12.6,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 34,
        "robustness": 21,
        "focus": 61,
        "vitality": 64,
        "poise": 7
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Commoner's Simple Garb": {
      "id": 812000,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.2,
        "strike": 6.7,
        "slash": 6.7,
        "pierce": 6.1,
        "magic": 13,
        "fire": 12.6,
        "lightning": 12.6,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 46,
        "robustness": 24,
        "focus": 76,
        "vitality": 83,
        "poise": 8
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Commoner's Simple Garb (Altered)": {
      "id": 812100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 3.2,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 5.3,
        "magic": 12.8,
        "fire": 12.4,
        "lightning": 12.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 38,
        "robustness": 21,
        "focus": 61,
        "vitality": 64,
        "poise": 7
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Envoy Crown": {
      "id": 820000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.1,
        "slash": 3.1,
        "pierce": 2.8,
        "magic": 5.3,
        "fire": 4.7,
        "lightning": 4.9,
        "holy": 5.5
      },
      "resistances": {
        "immunity": 27,
        "robustness": 15,
        "focus": 46,
        "vitality": 46,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.15,
          "conditions": {
            "0": "Bubble Skill Attack"
          }
        }
      }
    },
    "Twinsage Glintstone Crown": {
      "id": 830000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.1,
        "slash": 5.2,
        "pierce": 4.8,
        "magic": 4.4,
        "fire": 4.5,
        "lightning": 3.4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 16,
        "robustness": 26,
        "focus": 10,
        "vitality": 10,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 6,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Maximum Health",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.91,
          "tick_interval": 0.06
        },
        "2": {
          "attribute": "Maximum Stamina",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.91,
          "tick_interval": 0.06
        }
      }
    },
    "Raya Lucarian Robe": {
      "id": 830100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 2.7,
        "magic": 13.5,
        "fire": 12.6,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 42,
        "robustness": 18,
        "focus": 67,
        "vitality": 63,
        "poise": 7
      },
      "effects": {}
    },
    "Sorcerer Manchettes": {
      "id": 830200,
      "category": "arms",
      "weight": 1.1,
      "absorptions": {
        "physical": 1,
        "strike": 1.3,
        "slash": 1.3,
        "pierce": 0.1,
        "magic": 3.2,
        "fire": 3.1,
        "lightning": 2.9,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 13,
        "robustness": 4,
        "focus": 21,
        "vitality": 20,
        "poise": 1
      },
      "effects": {}
    },
    "Sorcerer Leggings": {
      "id": 830300,
      "category": "legs",
      "weight": 2,
      "absorptions": {
        "physical": 2.3,
        "strike": 3,
        "slash": 3,
        "pierce": 0.3,
        "magic": 7.3,
        "fire": 7.1,
        "lightning": 6.8,
        "holy": 7.2
      },
      "resistances": {
        "immunity": 24,
        "robustness": 7,
        "focus": 39,
        "vitality": 37,
        "poise": 3
      },
      "effects": {}
    },
    "Olivinus Glintstone Crown": {
      "id": 831000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.1,
        "slash": 5.2,
        "pierce": 4.8,
        "magic": 4.4,
        "fire": 4.5,
        "lightning": 3.4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 16,
        "robustness": 26,
        "focus": 10,
        "vitality": 10,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 3,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Maximum Health",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.91,
          "tick_interval": 0.06
        }
      }
    },
    "Lazuli Glintstone Crown": {
      "id": 832000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.1,
        "slash": 5.2,
        "pierce": 4.8,
        "magic": 4.4,
        "fire": 4.5,
        "lightning": 3.4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 16,
        "robustness": 26,
        "focus": 10,
        "vitality": 10,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Dexterity",
          "model": "additive",
          "type": "positive",
          "value": 3,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 3,
          "tick_interval": 0.06
        },
        "2": {
          "attribute": "Maximum Health",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.82,
          "tick_interval": 0.06
        }
      }
    },
    "Karolos Glintstone Crown": {
      "id": 833000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.1,
        "slash": 5.2,
        "pierce": 4.8,
        "magic": 4.4,
        "fire": 4.5,
        "lightning": 3.4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 16,
        "robustness": 26,
        "focus": 10,
        "vitality": 10,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 3,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Maximum Stamina",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.91,
          "tick_interval": 0.06
        }
      }
    },
    "Witch's Glintstone Crown": {
      "id": 834000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.1,
        "slash": 5.2,
        "pierce": 4.8,
        "magic": 4.4,
        "fire": 4.5,
        "lightning": 3.4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 16,
        "robustness": 26,
        "focus": 10,
        "vitality": 10,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Arcane",
          "model": "additive",
          "type": "positive",
          "value": 3,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 3,
          "tick_interval": 0.06
        },
        "2": {
          "attribute": "Maximum Stamina",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.82,
          "tick_interval": 0.06
        }
      }
    },
    "Marionette Soldier Helm": {
      "id": 840000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.1,
        "slash": 4,
        "pierce": 3.8,
        "magic": 3.1,
        "fire": 3.1,
        "lightning": 2.3,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 10,
        "robustness": 22,
        "focus": 9,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Marionette Soldier Armor": {
      "id": 840100,
      "category": "body",
      "weight": 8.8,
      "absorptions": {
        "physical": 11.9,
        "strike": 8.8,
        "slash": 13.5,
        "pierce": 8.8,
        "magic": 8.8,
        "fire": 8.8,
        "lightning": 6.7,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 24,
        "robustness": 50,
        "focus": 21,
        "vitality": 18,
        "poise": 18
      },
      "effects": {}
    },
    "Marionette Soldier Birdhelm": {
      "id": 850000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.1,
        "slash": 4,
        "pierce": 3.8,
        "magic": 3.1,
        "fire": 3.1,
        "lightning": 2.5,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 8,
        "vitality": 9,
        "poise": 6
      },
      "effects": {}
    },
    "Raging Wolf Helm": {
      "id": 860000,
      "category": "head",
      "weight": 4.4,
      "absorptions": {
        "physical": 4.7,
        "strike": 4.1,
        "slash": 4.7,
        "pierce": 4.5,
        "magic": 3.5,
        "fire": 3.9,
        "lightning": 2.4,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 14,
        "robustness": 23,
        "focus": 8,
        "vitality": 8,
        "poise": 7
      },
      "effects": {}
    },
    "Raging Wolf Armor": {
      "id": 860100,
      "category": "body",
      "weight": 10.1,
      "absorptions": {
        "physical": 13.2,
        "strike": 11.6,
        "slash": 13.2,
        "pierce": 12.6,
        "magic": 9.9,
        "fire": 11.1,
        "lightning": 6.8,
        "holy": 9.2
      },
      "resistances": {
        "immunity": 31,
        "robustness": 55,
        "focus": 17,
        "vitality": 17,
        "poise": 21
      },
      "effects": {}
    },
    "Raging Wolf Gauntlets": {
      "id": 860200,
      "category": "arms",
      "weight": 3.4,
      "absorptions": {
        "physical": 3.2,
        "strike": 2.8,
        "slash": 3.2,
        "pierce": 3.1,
        "magic": 2.4,
        "fire": 2.7,
        "lightning": 1.6,
        "holy": 2.2
      },
      "resistances": {
        "immunity": 11,
        "robustness": 19,
        "focus": 6,
        "vitality": 6,
        "poise": 4
      },
      "effects": {}
    },
    "Raging Wolf Greaves": {
      "id": 860300,
      "category": "legs",
      "weight": 6.3,
      "absorptions": {
        "physical": 7.5,
        "strike": 6.6,
        "slash": 7.5,
        "pierce": 7.2,
        "magic": 5.6,
        "fire": 6.3,
        "lightning": 3.8,
        "holy": 5.2
      },
      "resistances": {
        "immunity": 19,
        "robustness": 34,
        "focus": 11,
        "vitality": 11,
        "poise": 12
      },
      "effects": {}
    },
    "Raging Wolf Armor (Altered)": {
      "id": 861100,
      "category": "body",
      "weight": 9,
      "absorptions": {
        "physical": 12.8,
        "strike": 10.8,
        "slash": 12.8,
        "pierce": 12.3,
        "magic": 8.7,
        "fire": 10.8,
        "lightning": 6.6,
        "holy": 8.7
      },
      "resistances": {
        "immunity": 25,
        "robustness": 50,
        "focus": 10,
        "vitality": 10,
        "poise": 19
      },
      "effects": {}
    },
    "Land of Reeds Helm": {
      "id": 870000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.1,
        "strike": 3.4,
        "slash": 4.8,
        "pierce": 3.4,
        "magic": 3.6,
        "fire": 4,
        "lightning": 4.2,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 26,
        "robustness": 22,
        "focus": 0,
        "vitality": 23,
        "poise": 5
      },
      "effects": {}
    },
    "Land of Reeds Armor": {
      "id": 870100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 8.8,
        "strike": 9.5,
        "slash": 11.9,
        "pierce": 9.5,
        "magic": 10.2,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 60,
        "robustness": 50,
        "focus": 50,
        "vitality": 55,
        "poise": 16
      },
      "effects": {}
    },
    "Land of Reeds Gauntlets": {
      "id": 870200,
      "category": "arms",
      "weight": 2.8,
      "absorptions": {
        "physical": 2.1,
        "strike": 2.3,
        "slash": 2.9,
        "pierce": 2.3,
        "magic": 2.5,
        "fire": 2.8,
        "lightning": 2.9,
        "holy": 2.7
      },
      "resistances": {
        "immunity": 20,
        "robustness": 17,
        "focus": 17,
        "vitality": 18,
        "poise": 3
      },
      "effects": {}
    },
    "Land of Reeds Greaves": {
      "id": 870300,
      "category": "legs",
      "weight": 5.1,
      "absorptions": {
        "physical": 5,
        "strike": 5.4,
        "slash": 6.8,
        "pierce": 5.4,
        "magic": 5.8,
        "fire": 6.5,
        "lightning": 6.8,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 37,
        "robustness": 31,
        "focus": 31,
        "vitality": 34,
        "poise": 10
      },
      "effects": {}
    },
    "Land of Reeds Armor (Altered)": {
      "id": 871100,
      "category": "body",
      "weight": 7.8,
      "absorptions": {
        "physical": 8,
        "strike": 8.8,
        "slash": 11.4,
        "pierce": 8.8,
        "magic": 9.5,
        "fire": 10.9,
        "lightning": 11.4,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 52,
        "robustness": 42,
        "focus": 42,
        "vitality": 45,
        "poise": 15
      },
      "effects": {}
    },
    "Okina Mask": {
      "id": 872000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.6,
        "slash": 4,
        "pierce": 3.1,
        "magic": 3.8,
        "fire": 3.8,
        "lightning": 4.2,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 29,
        "robustness": 18,
        "focus": 23,
        "vitality": 22,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Dexterity",
          "model": "additive",
          "type": "positive",
          "value": 3,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Focus",
          "model": "additive",
          "type": "negative",
          "value": -50,
          "tick_interval": 0.06
        }
      }
    },
    "White Reed Armor": {
      "id": 872100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 9.5,
        "strike": 10.2,
        "slash": 11.4,
        "pierce": 8.8,
        "magic": 10.9,
        "fire": 10.9,
        "lightning": 11.9,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 67,
        "robustness": 42,
        "focus": 55,
        "vitality": 50,
        "poise": 17
      },
      "effects": {}
    },
    "White Reed Gauntlets": {
      "id": 872200,
      "category": "arms",
      "weight": 2.8,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.5,
        "slash": 2.8,
        "pierce": 2.1,
        "magic": 2.7,
        "fire": 2.7,
        "lightning": 2.9,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 22,
        "robustness": 14,
        "focus": 18,
        "vitality": 17,
        "poise": 4
      },
      "effects": {}
    },
    "White Reed Greaves": {
      "id": 872300,
      "category": "legs",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.4,
        "strike": 5.8,
        "slash": 6.5,
        "pierce": 5,
        "magic": 6.2,
        "fire": 6.2,
        "lightning": 6.8,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 41,
        "robustness": 26,
        "focus": 34,
        "vitality": 31,
        "poise": 10
      },
      "effects": {}
    },
    "Confessor Hood": {
      "id": 880000,
      "category": "head",
      "weight": 3.3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.6,
        "slash": 2.8,
        "pierce": 3.1,
        "magic": 3.8,
        "fire": 3.8,
        "lightning": 4.2,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 26,
        "robustness": 20,
        "focus": 20,
        "vitality": 22,
        "poise": 5
      },
      "effects": {}
    },
    "Confessor Armor": {
      "id": 880100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 8.8,
        "strike": 10.9,
        "slash": 8.8,
        "pierce": 9.5,
        "magic": 11.4,
        "fire": 11.4,
        "lightning": 12.4,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 63,
        "robustness": 50,
        "focus": 50,
        "vitality": 55,
        "poise": 16
      },
      "effects": {}
    },
    "Confessor Gloves": {
      "id": 880200,
      "category": "arms",
      "weight": 2.8,
      "absorptions": {
        "physical": 2.1,
        "strike": 2.7,
        "slash": 2.1,
        "pierce": 2.3,
        "magic": 2.8,
        "fire": 2.8,
        "lightning": 3.1,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 21,
        "robustness": 17,
        "focus": 17,
        "vitality": 18,
        "poise": 3
      },
      "effects": {}
    },
    "Confessor Boots": {
      "id": 880300,
      "category": "legs",
      "weight": 4.8,
      "absorptions": {
        "physical": 4.5,
        "strike": 5.8,
        "slash": 4.5,
        "pierce": 5,
        "magic": 6.2,
        "fire": 6.2,
        "lightning": 6.8,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 37,
        "robustness": 29,
        "focus": 29,
        "vitality": 31,
        "poise": 9
      },
      "effects": {}
    },
    "Confessor Hood (Altered)": {
      "id": 881000,
      "category": "head",
      "weight": 2.7,
      "absorptions": {
        "physical": 2.3,
        "strike": 3.1,
        "slash": 2.3,
        "pierce": 2.5,
        "magic": 3.4,
        "fire": 3.4,
        "lightning": 3.8,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 21,
        "robustness": 14,
        "focus": 14,
        "vitality": 16,
        "poise": 3
      },
      "effects": {}
    },
    "Confessor Armor (Altered)": {
      "id": 881100,
      "category": "body",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.6,
        "strike": 9.8,
        "slash": 7.6,
        "pierce": 8.4,
        "magic": 10.5,
        "fire": 10.5,
        "lightning": 11.5,
        "holy": 9.1
      },
      "resistances": {
        "immunity": 54,
        "robustness": 42,
        "focus": 42,
        "vitality": 45,
        "poise": 15
      },
      "effects": {}
    },
    "Prisoner Iron Mask": {
      "id": 890000,
      "category": "head",
      "weight": 8.6,
      "absorptions": {
        "physical": 6.8,
        "strike": 5.9,
        "slash": 7,
        "pierce": 6.8,
        "magic": 4.6,
        "fire": 4.9,
        "lightning": 4.5,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 29,
        "robustness": 44,
        "focus": 35,
        "vitality": 20,
        "poise": 12
      },
      "effects": {}
    },
    "Prisoner Clothing": {
      "id": 890100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 4.2,
        "strike": 5.3,
        "slash": 5.3,
        "pierce": 4.2,
        "magic": 11.9,
        "fire": 11.4,
        "lightning": 11.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 42,
        "robustness": 23,
        "focus": 63,
        "vitality": 63,
        "poise": 5
      },
      "effects": {}
    },
    "Prisoner Trousers": {
      "id": 890300,
      "category": "legs",
      "weight": 2,
      "absorptions": {
        "physical": 2.3,
        "strike": 3,
        "slash": 3,
        "pierce": 2.3,
        "magic": 6.8,
        "fire": 6.5,
        "lightning": 6.5,
        "holy": 7.2
      },
      "resistances": {
        "immunity": 26,
        "robustness": 14,
        "focus": 39,
        "vitality": 39,
        "poise": 4
      },
      "effects": {}
    },
    "Blackguard's Iron Mask": {
      "id": 891000,
      "category": "head",
      "weight": 6.2,
      "absorptions": {
        "physical": 5.8,
        "strike": 4.4,
        "slash": 6.1,
        "pierce": 5.5,
        "magic": 4.2,
        "fire": 4.4,
        "lightning": 4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 22,
        "robustness": 31,
        "focus": 12,
        "vitality": 12,
        "poise": 9
      },
      "effects": {}
    },
    "Traveling Maiden Hood": {
      "id": 900000,
      "category": "head",
      "weight": 1.6,
      "absorptions": {
        "physical": 1.4,
        "strike": 1.8,
        "slash": 1.8,
        "pierce": 0.9,
        "magic": 4.6,
        "fire": 4.5,
        "lightning": 4.6,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 18,
        "robustness": 10,
        "focus": 29,
        "vitality": 31,
        "poise": 3
      },
      "effects": {}
    },
    "Traveling Maiden Robe": {
      "id": 900100,
      "category": "body",
      "weight": 4.9,
      "absorptions": {
        "physical": 5.4,
        "strike": 6.2,
        "slash": 6.2,
        "pierce": 4.3,
        "magic": 13.4,
        "fire": 12.9,
        "lightning": 13.1,
        "holy": 13.4
      },
      "resistances": {
        "immunity": 46,
        "robustness": 24,
        "focus": 76,
        "vitality": 83,
        "poise": 10
      },
      "effects": {}
    },
    "Traveling Maiden Gloves": {
      "id": 900200,
      "category": "arms",
      "weight": 1.6,
      "absorptions": {
        "physical": 1.3,
        "strike": 1.5,
        "slash": 1.5,
        "pierce": 1,
        "magic": 3.3,
        "fire": 3.2,
        "lightning": 3.2,
        "holy": 3.3
      },
      "resistances": {
        "immunity": 15,
        "robustness": 8,
        "focus": 25,
        "vitality": 28,
        "poise": 2
      },
      "effects": {}
    },
    "Traveling Maiden Boots": {
      "id": 900300,
      "category": "legs",
      "weight": 2.9,
      "absorptions": {
        "physical": 3.1,
        "strike": 3.5,
        "slash": 3.5,
        "pierce": 2.4,
        "magic": 7.7,
        "fire": 7.4,
        "lightning": 7.5,
        "holy": 7.7
      },
      "resistances": {
        "immunity": 29,
        "robustness": 15,
        "focus": 47,
        "vitality": 51,
        "poise": 6
      },
      "effects": {}
    },
    "Traveling Maiden Robe (Altered)": {
      "id": 901100,
      "category": "body",
      "weight": 4.3,
      "absorptions": {
        "physical": 4.3,
        "strike": 5.4,
        "slash": 5.4,
        "pierce": 2.8,
        "magic": 13.1,
        "fire": 12.7,
        "lightning": 12.9,
        "holy": 13.1
      },
      "resistances": {
        "immunity": 38,
        "robustness": 21,
        "focus": 61,
        "vitality": 64,
        "poise": 8
      },
      "effects": {}
    },
    "Finger Maiden Fillet": {
      "id": 902000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 2.1,
        "strike": 1.8,
        "slash": 1.8,
        "pierce": 1.4,
        "magic": 4.8,
        "fire": 4.6,
        "lightning": 4.6,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 18,
        "robustness": 10,
        "focus": 31,
        "vitality": 31,
        "poise": 4
      },
      "effects": {}
    },
    "Finger Maiden Robe": {
      "id": 902100,
      "category": "body",
      "weight": 4.6,
      "absorptions": {
        "physical": 5.8,
        "strike": 4.7,
        "slash": 4.7,
        "pierce": 3.2,
        "magic": 13.8,
        "fire": 13.1,
        "lightning": 13.3,
        "holy": 13.8
      },
      "resistances": {
        "immunity": 38,
        "robustness": 21,
        "focus": 63,
        "vitality": 63,
        "poise": 10
      },
      "effects": {}
    },
    "Finger Maiden Shoes": {
      "id": 902300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3,
        "strike": 2.3,
        "slash": 2.3,
        "pierce": 1.5,
        "magic": 7.6,
        "fire": 7.2,
        "lightning": 7.3,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 24,
        "robustness": 13,
        "focus": 39,
        "vitality": 39,
        "poise": 4
      },
      "effects": {}
    },
    "Finger Maiden Robe (Altered)": {
      "id": 903100,
      "category": "body",
      "weight": 3.7,
      "absorptions": {
        "physical": 4.2,
        "strike": 2.7,
        "slash": 2.7,
        "pierce": 0.6,
        "magic": 13,
        "fire": 12.4,
        "lightning": 12.6,
        "holy": 13.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 16,
        "focus": 54,
        "vitality": 54,
        "poise": 8
      },
      "effects": {}
    },
    "Preceptor's Big Hat": {
      "id": 910000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 2.5,
        "strike": 2.8,
        "slash": 2.5,
        "pierce": 2.5,
        "magic": 5.5,
        "fire": 4.9,
        "lightning": 4.8,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 26,
        "robustness": 12,
        "focus": 44,
        "vitality": 42,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Maximum Stamina",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.91,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Mind",
          "model": "additive",
          "type": "positive",
          "value": 3,
          "tick_interval": 0.06
        }
      }
    },
    "Preceptor's Long Gown": {
      "id": 910100,
      "category": "body",
      "weight": 6.3,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.7,
        "slash": 6.1,
        "pierce": 6.1,
        "magic": 14.5,
        "fire": 13.3,
        "lightning": 12.8,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 50,
        "robustness": 24,
        "focus": 83,
        "vitality": 76,
        "poise": 12
      },
      "effects": {}
    },
    "Preceptor's Gloves": {
      "id": 910200,
      "category": "arms",
      "weight": 2.1,
      "absorptions": {
        "physical": 1.5,
        "strike": 1.6,
        "slash": 1.5,
        "pierce": 1.5,
        "magic": 3.6,
        "fire": 3.3,
        "lightning": 3.2,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 17,
        "robustness": 8,
        "focus": 28,
        "vitality": 25,
        "poise": 3
      },
      "effects": {}
    },
    "Preceptor's Trousers": {
      "id": 910300,
      "category": "legs",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.8,
        "slash": 3.4,
        "pierce": 3.4,
        "magic": 8.3,
        "fire": 7.6,
        "lightning": 7.3,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 31,
        "robustness": 15,
        "focus": 51,
        "vitality": 47,
        "poise": 7
      },
      "effects": {}
    },
    "Mask of Confidence": {
      "id": 911000,
      "category": "head",
      "weight": 3.3,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.5,
        "slash": 2.3,
        "pierce": 2.3,
        "magic": 5.3,
        "fire": 4.8,
        "lightning": 4.7,
        "holy": 4.7
      },
      "resistances": {
        "immunity": 24,
        "robustness": 11,
        "focus": 39,
        "vitality": 35,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Arcane",
          "model": "additive",
          "type": "positive",
          "value": 3
        }
      }
    },
    "Preceptor's Long Gown (Altered)": {
      "id": 911100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 4.2,
        "strike": 4.2,
        "slash": 2.7,
        "pierce": 4.2,
        "magic": 12.8,
        "fire": 12.4,
        "lightning": 11.9,
        "holy": 12.4
      },
      "resistances": {
        "immunity": 38,
        "robustness": 16,
        "focus": 57,
        "vitality": 57,
        "poise": 7
      },
      "effects": {}
    },
    "Grass Hair Ornament": {
      "id": 920000,
      "category": "head",
      "weight": 1.4,
      "absorptions": {
        "physical": 1.4,
        "strike": 1.4,
        "slash": 1.4,
        "pierce": 0.9,
        "magic": 4.5,
        "fire": 4.2,
        "lightning": 4.4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 16,
        "robustness": 9,
        "focus": 27,
        "vitality": 27,
        "poise": 2
      },
      "effects": {}
    },
    "Skeletal Mask": {
      "id": 930000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 2.5,
        "strike": 2.8,
        "slash": 3.1,
        "pierce": 3.1,
        "magic": 3.4,
        "fire": 3.4,
        "lightning": 3.6,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 23,
        "robustness": 14,
        "focus": 24,
        "vitality": 24,
        "poise": 4
      },
      "effects": {}
    },
    "Raptor's Black Feathers": {
      "id": 930100,
      "category": "body",
      "weight": 7.7,
      "absorptions": {
        "physical": 8,
        "strike": 8.8,
        "slash": 9.5,
        "pierce": 9.5,
        "magic": 10.2,
        "fire": 10.2,
        "lightning": 10.9,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 57,
        "robustness": 35,
        "focus": 60,
        "vitality": 60,
        "poise": 15
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "conditions": {
            "0": "Jump Attack"
          }
        }
      }
    },
    "Bandit Manchettes": {
      "id": 930200,
      "category": "arms",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.5,
        "strike": 1.6,
        "slash": 1.7,
        "pierce": 1.7,
        "magic": 1.9,
        "fire": 1.9,
        "lightning": 2.1,
        "holy": 1.7
      },
      "resistances": {
        "immunity": 15,
        "robustness": 8,
        "focus": 17,
        "vitality": 17,
        "poise": 2
      },
      "effects": {}
    },
    "Bandit Boots": {
      "id": 930300,
      "category": "legs",
      "weight": 4.4,
      "absorptions": {
        "physical": 4,
        "strike": 4.5,
        "slash": 5,
        "pierce": 5,
        "magic": 5.4,
        "fire": 5.4,
        "lightning": 5.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 34,
        "robustness": 20,
        "focus": 35,
        "vitality": 35,
        "poise": 8
      },
      "effects": {}
    },
    "Bandit Garb": {
      "id": 931100,
      "category": "body",
      "weight": 7.7,
      "absorptions": {
        "physical": 8,
        "strike": 8.8,
        "slash": 9.5,
        "pierce": 9.5,
        "magic": 10.2,
        "fire": 10.2,
        "lightning": 10.9,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 52,
        "robustness": 32,
        "focus": 54,
        "vitality": 54,
        "poise": 15
      },
      "effects": {}
    },
    "Eccentric's Hood": {
      "id": 940000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.4,
        "slash": 4.2,
        "pierce": 4.4,
        "magic": 3.4,
        "fire": 3.6,
        "lightning": 2.3,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 14,
        "robustness": 24,
        "focus": 9,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Eccentric's Armor": {
      "id": 940100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 12.9,
        "strike": 10.9,
        "slash": 12.4,
        "pierce": 12.9,
        "magic": 10.9,
        "fire": 10.9,
        "lightning": 7.1,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 35,
        "robustness": 60,
        "focus": 23,
        "vitality": 21,
        "poise": 21
      },
      "effects": {}
    },
    "Eccentric's Manchettes": {
      "id": 940200,
      "category": "arms",
      "weight": 2.9,
      "absorptions": {
        "physical": 2.9,
        "strike": 2.1,
        "slash": 2.8,
        "pierce": 2.9,
        "magic": 2.1,
        "fire": 2.3,
        "lightning": 1.5,
        "holy": 1.9
      },
      "resistances": {
        "immunity": 8,
        "robustness": 18,
        "focus": 6,
        "vitality": 4,
        "poise": 4
      },
      "effects": {}
    },
    "Eccentric's Breeches": {
      "id": 940300,
      "category": "legs",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.5,
        "strike": 4.5,
        "slash": 6.2,
        "pierce": 6.5,
        "magic": 4.5,
        "fire": 5,
        "lightning": 3,
        "holy": 4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 31,
        "focus": 7,
        "vitality": 7,
        "poise": 10
      },
      "effects": {}
    },
    "Eccentric's Hood (Altered)": {
      "id": 941000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.4,
        "slash": 4.2,
        "pierce": 4.4,
        "magic": 3.4,
        "fire": 3.6,
        "lightning": 2.3,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 21,
        "focus": 8,
        "vitality": 7,
        "poise": 6
      },
      "effects": {}
    },
    "Fingerprint Helm": {
      "id": 950000,
      "category": "head",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.8,
        "strike": 4.2,
        "slash": 4.2,
        "pierce": 4.2,
        "magic": 3.4,
        "fire": 4.5,
        "lightning": 2.3,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 14,
        "robustness": 26,
        "focus": 5,
        "vitality": 10,
        "poise": 8
      },
      "effects": {}
    },
    "Fingerprint Armor": {
      "id": 950100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.9,
        "slash": 11.9,
        "pierce": 11.9,
        "magic": 9.5,
        "fire": 12.6,
        "lightning": 6.7,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 60,
        "focus": 11,
        "vitality": 23,
        "poise": 24
      },
      "effects": {}
    },
    "Fingerprint Gauntlets": {
      "id": 950200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.9,
        "slash": 2.9,
        "pierce": 2.9,
        "magic": 2.3,
        "fire": 3.1,
        "lightning": 1.6,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 11,
        "robustness": 20,
        "focus": 4,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Fingerprint Greaves": {
      "id": 950300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.8,
        "slash": 6.8,
        "pierce": 6.8,
        "magic": 5.4,
        "fire": 7.2,
        "lightning": 3.8,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 20,
        "robustness": 37,
        "focus": 7,
        "vitality": 14,
        "poise": 14
      },
      "effects": {}
    },
    "Fingerprint Armor (Altered)": {
      "id": 951100,
      "category": "body",
      "weight": 10,
      "absorptions": {
        "physical": 13.1,
        "strike": 11.5,
        "slash": 11.5,
        "pierce": 11.5,
        "magic": 9.1,
        "fire": 12.2,
        "lightning": 6.3,
        "holy": 9.1
      },
      "resistances": {
        "immunity": 29,
        "robustness": 54,
        "focus": 10,
        "vitality": 21,
        "poise": 24
      },
      "effects": {}
    },
    "Consort's Mask": {
      "id": 960000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 2.8,
        "strike": 2.8,
        "slash": 2.5,
        "pierce": 2.5,
        "magic": 5,
        "fire": 4.8,
        "lightning": 4.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 24,
        "robustness": 14,
        "focus": 39,
        "vitality": 35,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Dexterity",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Consort's Robe": {
      "id": 960100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 4.2,
        "slash": 4.2,
        "pierce": 5.3,
        "magic": 13,
        "fire": 12.4,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 46,
        "robustness": 25,
        "focus": 67,
        "vitality": 63,
        "poise": 7
      },
      "effects": {}
    },
    "Consort's Trousers": {
      "id": 960300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3,
        "strike": 2.3,
        "slash": 2.3,
        "pierce": 3,
        "magic": 7.4,
        "fire": 7.1,
        "lightning": 7.1,
        "holy": 7.3
      },
      "resistances": {
        "immunity": 29,
        "robustness": 15,
        "focus": 41,
        "vitality": 39,
        "poise": 4
      },
      "effects": {}
    },
    "Ruler's Mask": {
      "id": 961000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 1.8,
        "strike": 2.3,
        "slash": 2.3,
        "pierce": 1.4,
        "magic": 4.6,
        "fire": 4.4,
        "lightning": 4.6,
        "holy": 4.7
      },
      "resistances": {
        "immunity": 20,
        "robustness": 10,
        "focus": 33,
        "vitality": 33,
        "poise": 3
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Ruler's Robe": {
      "id": 961100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.7,
        "slash": 6.7,
        "pierce": 4.2,
        "magic": 13,
        "fire": 12.4,
        "lightning": 12.8,
        "holy": 13.3
      },
      "resistances": {
        "immunity": 46,
        "robustness": 24,
        "focus": 76,
        "vitality": 76,
        "poise": 10
      },
      "effects": {}
    },
    "Upper-Class Robe": {
      "id": 962100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 4.2,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 2.7,
        "magic": 12.8,
        "fire": 11.9,
        "lightning": 12.6,
        "holy": 13
      },
      "resistances": {
        "immunity": 38,
        "robustness": 21,
        "focus": 61,
        "vitality": 61,
        "poise": 8
      },
      "effects": {}
    },
    "Marais Mask": {
      "id": 963000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 2.1,
        "strike": 2.3,
        "slash": 1.8,
        "pierce": 1.4,
        "magic": 4.6,
        "fire": 4.5,
        "lightning": 4.5,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 20,
        "robustness": 14,
        "focus": 35,
        "vitality": 33,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Arcane",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Marais Robe": {
      "id": 963100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.1,
        "slash": 4.2,
        "pierce": 2.7,
        "magic": 12.6,
        "fire": 12.4,
        "lightning": 12.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 42,
        "robustness": 28,
        "focus": 71,
        "vitality": 67,
        "poise": 8
      },
      "effects": {}
    },
    "Bloodsoaked Manchettes": {
      "id": 963200,
      "category": "arms",
      "weight": 1.4,
      "absorptions": {
        "physical": 1.3,
        "strike": 1.5,
        "slash": 1,
        "pierce": 0.6,
        "magic": 3.1,
        "fire": 3.1,
        "lightning": 3.1,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 14,
        "robustness": 9,
        "focus": 24,
        "vitality": 22,
        "poise": 2
      },
      "effects": {}
    },
    "Bloodsoaked Mask": {
      "id": 964000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 1.8,
        "strike": 1.8,
        "slash": 1.8,
        "pierce": 2.1,
        "magic": 4.6,
        "fire": 4.4,
        "lightning": 4.5,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 18,
        "robustness": 10,
        "focus": 30,
        "vitality": 31,
        "poise": 3
      },
      "effects": {}
    },
    "Official's Attire": {
      "id": 964100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 4.2,
        "strike": 4.2,
        "slash": 4.2,
        "pierce": 5.3,
        "magic": 12.8,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 38,
        "robustness": 22,
        "focus": 61,
        "vitality": 64,
        "poise": 8
      },
      "effects": {}
    },
    "Omen Helm": {
      "id": 970000,
      "category": "head",
      "weight": 9.9,
      "absorptions": {
        "physical": 6.7,
        "strike": 5.4,
        "slash": 6.8,
        "pierce": 6.8,
        "magic": 4.6,
        "fire": 5.2,
        "lightning": 5.3,
        "holy": 4.9
      },
      "resistances": {
        "immunity": 29,
        "robustness": 27,
        "focus": 24,
        "vitality": 33,
        "poise": 14
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.05,
          "conditions": {
            "0": "Unknown Attack"
          }
        },
        "1": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.05,
          "conditions": {
            "0": "Wraith Attack"
          }
        }
      }
    },
    "Omen Armor": {
      "id": 970100,
      "category": "body",
      "weight": 23.1,
      "absorptions": {
        "physical": 18.3,
        "strike": 15,
        "slash": 18.7,
        "pierce": 18.7,
        "magic": 13,
        "fire": 14.5,
        "lightning": 14.9,
        "holy": 13.8
      },
      "resistances": {
        "immunity": 67,
        "robustness": 63,
        "focus": 57,
        "vitality": 76,
        "poise": 43
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.05,
          "conditions": {
            "0": "Unknown Attack"
          }
        },
        "1": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.05,
          "conditions": {
            "0": "Wraith Attack"
          }
        }
      }
    },
    "Omen Gauntlets": {
      "id": 970200,
      "category": "arms",
      "weight": 7.7,
      "absorptions": {
        "physical": 4.6,
        "strike": 3.7,
        "slash": 4.7,
        "pierce": 4.7,
        "magic": 3.2,
        "fire": 3.6,
        "lightning": 3.7,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 22,
        "robustness": 21,
        "focus": 19,
        "vitality": 25,
        "poise": 9
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.05,
          "conditions": {
            "0": "Unknown Attack"
          }
        },
        "1": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.05,
          "conditions": {
            "0": "Wraith Attack"
          }
        }
      }
    },
    "Omen Greaves": {
      "id": 970300,
      "category": "legs",
      "weight": 14.3,
      "absorptions": {
        "physical": 10.6,
        "strike": 8.6,
        "slash": 10.8,
        "pierce": 10.8,
        "magic": 7.4,
        "fire": 8.3,
        "lightning": 8.5,
        "holy": 7.9
      },
      "resistances": {
        "immunity": 41,
        "robustness": 39,
        "focus": 35,
        "vitality": 47,
        "poise": 25
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.05,
          "conditions": {
            "0": "Unknown Attack"
          }
        },
        "1": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.05,
          "conditions": {
            "0": "Wraith Attack"
          }
        }
      }
    },
    "Carian Knight Helm": {
      "id": 980000,
      "category": "head",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.2,
        "strike": 3.8,
        "slash": 4.4,
        "pierce": 4.2,
        "magic": 4.4,
        "fire": 4.2,
        "lightning": 3.4,
        "holy": 4.2
      },
      "resistances": {
        "immunity": 12,
        "robustness": 20,
        "focus": 9,
        "vitality": 10,
        "poise": 6
      },
      "effects": {}
    },
    "Carian Knight Armor": {
      "id": 980100,
      "category": "body",
      "weight": 10.4,
      "absorptions": {
        "physical": 11.8,
        "strike": 10.8,
        "slash": 12.3,
        "pierce": 11.8,
        "magic": 12.3,
        "fire": 11.8,
        "lightning": 9.4,
        "holy": 11.8
      },
      "resistances": {
        "immunity": 28,
        "robustness": 46,
        "focus": 21,
        "vitality": 23,
        "poise": 19
      },
      "effects": {}
    },
    "Carian Knight Gauntlets": {
      "id": 980200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 2.9,
        "strike": 2.7,
        "slash": 3.1,
        "pierce": 2.9,
        "magic": 3.1,
        "fire": 2.9,
        "lightning": 2.3,
        "holy": 2.9
      },
      "resistances": {
        "immunity": 9,
        "robustness": 15,
        "focus": 7,
        "vitality": 8,
        "poise": 4
      },
      "effects": {}
    },
    "Carian Knight Greaves": {
      "id": 980300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 6.8,
        "strike": 6.2,
        "slash": 7.1,
        "pierce": 6.8,
        "magic": 7.1,
        "fire": 6.8,
        "lightning": 5.4,
        "holy": 6.8
      },
      "resistances": {
        "immunity": 17,
        "robustness": 29,
        "focus": 13,
        "vitality": 14,
        "poise": 11
      },
      "effects": {}
    },
    "Carian Knight Armor (Altered)": {
      "id": 981100,
      "category": "body",
      "weight": 9.7,
      "absorptions": {
        "physical": 11.7,
        "strike": 9.8,
        "slash": 12.2,
        "pierce": 11.7,
        "magic": 11.7,
        "fire": 11.7,
        "lightning": 9.1,
        "holy": 11.7
      },
      "resistances": {
        "immunity": 22,
        "robustness": 38,
        "focus": 16,
        "vitality": 19,
        "poise": 18
      },
      "effects": {}
    },
    "Hierodas Glintstone Crown": {
      "id": 990000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.3,
        "slash": 2.8,
        "pierce": 2.3,
        "magic": 4.9,
        "fire": 4.7,
        "lightning": 4.6,
        "holy": 4.9
      },
      "resistances": {
        "immunity": 20,
        "robustness": 11,
        "focus": 39,
        "vitality": 42,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Endurance",
          "model": "additive",
          "type": "positive",
          "value": 2,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 2,
          "tick_interval": 0.06
        },
        "2": {
          "attribute": "Maximum Focus",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.91,
          "tick_interval": 0.06
        }
      }
    },
    "Errant Sorcerer Robe": {
      "id": 990100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 4.2,
        "strike": 4.2,
        "slash": 6.1,
        "pierce": 4.2,
        "magic": 13,
        "fire": 12.6,
        "lightning": 12.4,
        "holy": 13
      },
      "resistances": {
        "immunity": 35,
        "robustness": 23,
        "focus": 67,
        "vitality": 71,
        "poise": 8
      },
      "effects": {}
    },
    "Errant Sorcerer Manchettes": {
      "id": 990200,
      "category": "arms",
      "weight": 1.1,
      "absorptions": {
        "physical": 0.6,
        "strike": 0.6,
        "slash": 1.3,
        "pierce": 0.6,
        "magic": 3.2,
        "fire": 3.1,
        "lightning": 2.9,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 11,
        "robustness": 7,
        "focus": 21,
        "vitality": 22,
        "poise": 1
      },
      "effects": {}
    },
    "Errant Sorcerer Boots": {
      "id": 990300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 3,
        "strike": 3,
        "slash": 3.8,
        "pierce": 3,
        "magic": 7.6,
        "fire": 7.3,
        "lightning": 7.2,
        "holy": 7.6
      },
      "resistances": {
        "immunity": 24,
        "robustness": 15,
        "focus": 47,
        "vitality": 51,
        "poise": 5
      },
      "effects": {}
    },
    "Errant Sorcerer Robe (Altered)": {
      "id": 991100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 2.7,
        "strike": 2.7,
        "slash": 5.3,
        "pierce": 2.7,
        "magic": 12.8,
        "fire": 12.4,
        "lightning": 11.9,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 31,
        "robustness": 20,
        "focus": 62,
        "vitality": 66,
        "poise": 7
      },
      "effects": {}
    },
    "Haima Glintstone Crown": {
      "id": 1000000,
      "category": "head",
      "weight": 2.7,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.5,
        "slash": 2.1,
        "pierce": 2.3,
        "magic": 4.8,
        "fire": 4.5,
        "lightning": 4.6,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 22,
        "robustness": 11,
        "focus": 33,
        "vitality": 39,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 2,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Maximum Focus",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.91,
          "tick_interval": 0.06
        },
        "2": {
          "attribute": "Strength",
          "model": "additive",
          "type": "positive",
          "value": 2,
          "tick_interval": 0.06
        }
      }
    },
    "Battlemage Robe": {
      "id": 1000100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.1,
        "slash": 4.2,
        "pierce": 5.3,
        "magic": 13,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 42,
        "robustness": 23,
        "focus": 63,
        "vitality": 71,
        "poise": 10
      },
      "effects": {}
    },
    "Battlemage Manchettes": {
      "id": 1000200,
      "category": "arms",
      "weight": 1.1,
      "absorptions": {
        "physical": 1,
        "strike": 1.3,
        "slash": 0.6,
        "pierce": 1,
        "magic": 3.2,
        "fire": 2.8,
        "lightning": 2.9,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 13,
        "robustness": 7,
        "focus": 20,
        "vitality": 22,
        "poise": 2
      },
      "effects": {}
    },
    "Battlemage Legwraps": {
      "id": 1000300,
      "category": "legs",
      "weight": 2.5,
      "absorptions": {
        "physical": 3,
        "strike": 3.4,
        "slash": 2.3,
        "pierce": 3,
        "magic": 7.4,
        "fire": 6.8,
        "lightning": 7.1,
        "holy": 7.2
      },
      "resistances": {
        "immunity": 26,
        "robustness": 14,
        "focus": 39,
        "vitality": 44,
        "poise": 6
      },
      "effects": {}
    },
    "Snow Witch Hat": {
      "id": 1010000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 1.8,
        "strike": 2.1,
        "slash": 2.1,
        "pierce": 1.4,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.6,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 16,
        "robustness": 14,
        "focus": 31,
        "vitality": 31,
        "poise": 3
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "conditions": {
            "0": "Ranni Spell"
          }
        }
      }
    },
    "Snow Witch Robe": {
      "id": 1010100,
      "category": "body",
      "weight": 5.5,
      "absorptions": {
        "physical": 5.7,
        "strike": 6.5,
        "slash": 6.5,
        "pierce": 4.6,
        "magic": 13.4,
        "fire": 13.4,
        "lightning": 13.2,
        "holy": 13.4
      },
      "resistances": {
        "immunity": 38,
        "robustness": 32,
        "focus": 71,
        "vitality": 71,
        "poise": 8
      },
      "effects": {}
    },
    "Snow Witch Skirt": {
      "id": 1010300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 3,
        "strike": 3.4,
        "slash": 3.4,
        "pierce": 2.3,
        "magic": 7.4,
        "fire": 7.4,
        "lightning": 7.3,
        "holy": 7.4
      },
      "resistances": {
        "immunity": 24,
        "robustness": 20,
        "focus": 44,
        "vitality": 44,
        "poise": 5
      },
      "effects": {}
    },
    "Snow Witch Robe (Altered)": {
      "id": 1011100,
      "category": "body",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.6,
        "strike": 5.7,
        "slash": 5.7,
        "pierce": 3.1,
        "magic": 13.2,
        "fire": 13.2,
        "lightning": 13,
        "holy": 13.2
      },
      "resistances": {
        "immunity": 32,
        "robustness": 25,
        "focus": 57,
        "vitality": 57,
        "poise": 7
      },
      "effects": {}
    },
    "Traveler's Clothes": {
      "id": 1020100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 5.3,
        "slash": 4.2,
        "pierce": 2.7,
        "magic": 13.3,
        "fire": 12.6,
        "lightning": 12.8,
        "holy": 12.4
      },
      "resistances": {
        "immunity": 35,
        "robustness": 24,
        "focus": 67,
        "vitality": 67,
        "poise": 8
      },
      "effects": {}
    },
    "Traveler's Manchettes": {
      "id": 1020200,
      "category": "arms",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.6,
        "strike": 1.5,
        "slash": 1.3,
        "pierce": 1,
        "magic": 3.3,
        "fire": 3.2,
        "lightning": 3.2,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 13,
        "robustness": 8,
        "focus": 25,
        "vitality": 25,
        "poise": 2
      },
      "effects": {}
    },
    "Traveler's Boots": {
      "id": 1020300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 3.8,
        "strike": 3.4,
        "slash": 3,
        "pierce": 2.3,
        "magic": 7.7,
        "fire": 7.3,
        "lightning": 7.4,
        "holy": 7.2
      },
      "resistances": {
        "immunity": 24,
        "robustness": 15,
        "focus": 47,
        "vitality": 47,
        "poise": 6
      },
      "effects": {}
    },
    "Juvenile Scholar Cap": {
      "id": 1030000,
      "category": "head",
      "weight": 1.4,
      "absorptions": {
        "physical": 1.4,
        "strike": 1.8,
        "slash": 1.8,
        "pierce": 1.4,
        "magic": 4.5,
        "fire": 4,
        "lightning": 4.2,
        "holy": 4.4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 10,
        "focus": 26,
        "vitality": 29,
        "poise": 2
      },
      "effects": {}
    },
    "Juvenile Scholar Robe": {
      "id": 1030100,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 5.3,
        "magic": 12.8,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 38,
        "robustness": 25,
        "focus": 63,
        "vitality": 71,
        "poise": 7
      },
      "effects": {}
    },
    "Radiant Gold Mask": {
      "id": 1040000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.1,
        "slash": 2.1,
        "pierce": 1.4,
        "magic": 4.6,
        "fire": 4.5,
        "lightning": 4.6,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 22,
        "robustness": 9,
        "focus": 33,
        "vitality": 33,
        "poise": 3
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "conditions": {
            "0": "Golden Order Spell"
          }
        }
      }
    },
    "Goldmask's Rags": {
      "id": 1040100,
      "category": "body",
      "weight": 2.4,
      "absorptions": {
        "physical": 4.2,
        "strike": 2.7,
        "slash": 2.7,
        "pierce": 0.6,
        "magic": 11.9,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 38,
        "robustness": 11,
        "focus": 60,
        "vitality": 60,
        "poise": 5
      },
      "effects": {}
    },
    "Gold Bracelets": {
      "id": 1040200,
      "category": "arms",
      "weight": 0.8,
      "absorptions": {
        "physical": 1,
        "strike": 0.6,
        "slash": 0.6,
        "pierce": 0.1,
        "magic": 2.9,
        "fire": 2.8,
        "lightning": 2.9,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 13,
        "robustness": 4,
        "focus": 20,
        "vitality": 20,
        "poise": 1
      },
      "effects": {}
    },
    "Gold Waistwrap": {
      "id": 1040300,
      "category": "legs",
      "weight": 4.4,
      "absorptions": {
        "physical": 4,
        "strike": 3.8,
        "slash": 3.8,
        "pierce": 3,
        "magic": 7.6,
        "fire": 7.4,
        "lightning": 7.6,
        "holy": 8.1
      },
      "resistances": {
        "immunity": 35,
        "robustness": 15,
        "focus": 56,
        "vitality": 56,
        "poise": 7
      },
      "effects": {}
    },
    "Fell Omen Cloak": {
      "id": 1050100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.7,
        "slash": 6.7,
        "pierce": 6.1,
        "magic": 13,
        "fire": 12.4,
        "lightning": 12.6,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 42,
        "robustness": 25,
        "focus": 71,
        "vitality": 83,
        "poise": 8
      },
      "effects": {}
    },
    "Albinauric Mask": {
      "id": 1060000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 4,
        "strike": 3.1,
        "slash": 4,
        "pierce": 3.8,
        "magic": 2.5,
        "fire": 3.1,
        "lightning": 2.1,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 12,
        "robustness": 23,
        "focus": 10,
        "vitality": 10,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Arcane",
          "model": "additive",
          "type": "positive",
          "value": 4,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Flask Health Restoration",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.9,
          "tick_interval": 0.06
        }
      }
    },
    "Dirty Chainmail": {
      "id": 1060100,
      "category": "body",
      "weight": 8.8,
      "absorptions": {
        "physical": 11.4,
        "strike": 8.8,
        "slash": 11.9,
        "pierce": 11.4,
        "magic": 8,
        "fire": 8.8,
        "lightning": 6.1,
        "holy": 8
      },
      "resistances": {
        "immunity": 25,
        "robustness": 50,
        "focus": 21,
        "vitality": 21,
        "poise": 18
      },
      "effects": {}
    },
    "Zamor Mask": {
      "id": 1070000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 4.2,
        "strike": 3.4,
        "slash": 4.4,
        "pierce": 3.8,
        "magic": 3.1,
        "fire": 3.1,
        "lightning": 2.1,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 9,
        "robustness": 27,
        "focus": 5,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Zamor Armor": {
      "id": 1070100,
      "category": "body",
      "weight": 8.8,
      "absorptions": {
        "physical": 11.9,
        "strike": 9.5,
        "slash": 12.4,
        "pierce": 10.9,
        "magic": 8.8,
        "fire": 8.8,
        "lightning": 6.1,
        "holy": 8
      },
      "resistances": {
        "immunity": 21,
        "robustness": 63,
        "focus": 11,
        "vitality": 18,
        "poise": 18
      },
      "effects": {}
    },
    "Zamor Bracelets": {
      "id": 1070200,
      "category": "arms",
      "weight": 2.8,
      "absorptions": {
        "physical": 2.8,
        "strike": 2.1,
        "slash": 2.9,
        "pierce": 2.5,
        "magic": 1.9,
        "fire": 1.9,
        "lightning": 1.3,
        "holy": 1.7
      },
      "resistances": {
        "immunity": 6,
        "robustness": 20,
        "focus": 0,
        "vitality": 4,
        "poise": 4
      },
      "effects": {}
    },
    "Zamor Legwraps": {
      "id": 1070300,
      "category": "legs",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.5,
        "strike": 5,
        "slash": 6.8,
        "pierce": 5.8,
        "magic": 4.5,
        "fire": 4.5,
        "lightning": 3,
        "holy": 4
      },
      "resistances": {
        "immunity": 11,
        "robustness": 37,
        "focus": 0,
        "vitality": 7,
        "poise": 10
      },
      "effects": {}
    },
    "Imp Head (Cat)": {
      "id": 1080000,
      "category": "head",
      "weight": 8.1,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.2,
        "slash": 5.8,
        "pierce": 6.1,
        "magic": 5,
        "fire": 5.8,
        "lightning": 4.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 35,
        "robustness": 35,
        "focus": 20,
        "vitality": 20,
        "poise": 10
      },
      "effects": {
        "0": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 2
        }
      }
    },
    "Imp Head (Fanged)": {
      "id": 1081000,
      "category": "head",
      "weight": 8.1,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.2,
        "slash": 5.8,
        "pierce": 6.1,
        "magic": 5,
        "fire": 5.8,
        "lightning": 4.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 35,
        "robustness": 35,
        "focus": 20,
        "vitality": 20,
        "poise": 10
      },
      "effects": {
        "0": {
          "attribute": "Strength",
          "model": "additive",
          "type": "positive",
          "value": 2
        }
      }
    },
    "Imp Head (Long-Tongued)": {
      "id": 1082000,
      "category": "head",
      "weight": 8.1,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.2,
        "slash": 5.8,
        "pierce": 6.1,
        "magic": 5,
        "fire": 5.8,
        "lightning": 4.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 35,
        "robustness": 35,
        "focus": 20,
        "vitality": 20,
        "poise": 10
      },
      "effects": {
        "0": {
          "attribute": "Dexterity",
          "model": "additive",
          "type": "positive",
          "value": 2
        }
      }
    },
    "Imp Head (Corpse)": {
      "id": 1083000,
      "category": "head",
      "weight": 8.1,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.2,
        "slash": 5.8,
        "pierce": 6.1,
        "magic": 5,
        "fire": 5.8,
        "lightning": 4.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 35,
        "robustness": 35,
        "focus": 20,
        "vitality": 20,
        "poise": 10
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 2
        }
      }
    },
    "Imp Head (Wolf)": {
      "id": 1084000,
      "category": "head",
      "weight": 8.1,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.2,
        "slash": 5.8,
        "pierce": 6.1,
        "magic": 5,
        "fire": 5.8,
        "lightning": 4.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 35,
        "robustness": 35,
        "focus": 20,
        "vitality": 20,
        "poise": 10
      },
      "effects": {
        "0": {
          "attribute": "Endurance",
          "model": "additive",
          "type": "positive",
          "value": 2
        }
      }
    },
    "Imp Head (Elder)": {
      "id": 1085000,
      "category": "head",
      "weight": 8.1,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.2,
        "slash": 5.8,
        "pierce": 6.1,
        "magic": 5,
        "fire": 5.8,
        "lightning": 4.8,
        "holy": 5
      },
      "resistances": {
        "immunity": 35,
        "robustness": 35,
        "focus": 20,
        "vitality": 20,
        "poise": 10
      },
      "effects": {
        "0": {
          "attribute": "Arcane",
          "model": "additive",
          "type": "positive",
          "value": 2
        }
      }
    },
    "Silver Tear Mask": {
      "id": 1090000,
      "category": "head",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.2,
        "strike": 3.6,
        "slash": 3.8,
        "pierce": 3.1,
        "magic": 5.5,
        "fire": 5.2,
        "lightning": 5,
        "holy": 5.3
      },
      "resistances": {
        "immunity": 26,
        "robustness": 20,
        "focus": 44,
        "vitality": 44,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Arcane",
          "model": "additive",
          "type": "positive",
          "value": 8,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Physical Attack Power",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.95,
          "tick_interval": 0.06
        }
      }
    },
    "Chain Coif": {
      "id": 1100000,
      "category": "head",
      "weight": 3.8,
      "absorptions": {
        "physical": 4.2,
        "strike": 3.1,
        "slash": 4.6,
        "pierce": 4.2,
        "magic": 2.5,
        "fire": 3.8,
        "lightning": 2.1,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 5,
        "vitality": 8,
        "poise": 6
      },
      "effects": {}
    },
    "Chain Armor": {
      "id": 1100100,
      "category": "body",
      "weight": 8.8,
      "absorptions": {
        "physical": 11.9,
        "strike": 8.8,
        "slash": 12.9,
        "pierce": 11.9,
        "magic": 7.1,
        "fire": 10.9,
        "lightning": 6.1,
        "holy": 8
      },
      "resistances": {
        "immunity": 25,
        "robustness": 42,
        "focus": 11,
        "vitality": 18,
        "poise": 17
      },
      "effects": {}
    },
    "Gauntlets": {
      "id": 1100200,
      "category": "arms",
      "weight": 2.9,
      "absorptions": {
        "physical": 2.9,
        "strike": 2.1,
        "slash": 3.2,
        "pierce": 2.9,
        "magic": 1.7,
        "fire": 2.7,
        "lightning": 1.5,
        "holy": 1.9
      },
      "resistances": {
        "immunity": 8,
        "robustness": 14,
        "focus": 4,
        "vitality": 6,
        "poise": 4
      },
      "effects": {}
    },
    "Chain Leggings": {
      "id": 1100300,
      "category": "legs",
      "weight": 5.5,
      "absorptions": {
        "physical": 6.8,
        "strike": 5,
        "slash": 7.4,
        "pierce": 6.8,
        "magic": 4,
        "fire": 6.2,
        "lightning": 3.4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 16,
        "robustness": 26,
        "focus": 7,
        "vitality": 11,
        "poise": 10
      },
      "effects": {}
    },
    "Greathelm": {
      "id": 1101000,
      "category": "head",
      "weight": 5.9,
      "absorptions": {
        "physical": 5.5,
        "strike": 4.2,
        "slash": 5.8,
        "pierce": 5.2,
        "magic": 4.2,
        "fire": 4.6,
        "lightning": 3.8,
        "holy": 4.2
      },
      "resistances": {
        "immunity": 16,
        "robustness": 29,
        "focus": 11,
        "vitality": 11,
        "poise": 9
      },
      "effects": {}
    },
    "Eye Surcoat": {
      "id": 1101100,
      "category": "body",
      "weight": 9.2,
      "absorptions": {
        "physical": 12.9,
        "strike": 8.8,
        "slash": 12.9,
        "pierce": 11.9,
        "magic": 8.8,
        "fire": 10.9,
        "lightning": 7.1,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 25,
        "robustness": 55,
        "focus": 21,
        "vitality": 18,
        "poise": 21
      },
      "effects": {}
    },
    "Tree Surcoat": {
      "id": 1102100,
      "category": "body",
      "weight": 9.2,
      "absorptions": {
        "physical": 12.9,
        "strike": 8.8,
        "slash": 12.9,
        "pierce": 11.9,
        "magic": 8.8,
        "fire": 10.9,
        "lightning": 7.1,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 25,
        "robustness": 55,
        "focus": 21,
        "vitality": 18,
        "poise": 21
      },
      "effects": {}
    },
    "Octopus Head": {
      "id": 1110000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.4,
        "strike": 5.4,
        "slash": 2.8,
        "pierce": 2.8,
        "magic": 4,
        "fire": 3.6,
        "lightning": 4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 31,
        "robustness": 14,
        "focus": 23,
        "vitality": 23,
        "poise": 5
      },
      "effects": {}
    },
    "Jar": {
      "id": 1120000,
      "category": "head",
      "weight": 6.8,
      "absorptions": {
        "physical": 6.8,
        "strike": 3.4,
        "slash": 7,
        "pierce": 6.8,
        "magic": 4.7,
        "fire": 4.9,
        "lightning": 4.6,
        "holy": 4.7
      },
      "resistances": {
        "immunity": 24,
        "robustness": 33,
        "focus": 16,
        "vitality": 15,
        "poise": 10
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.15,
          "conditions": {
            "0": "Pot Item Attack"
          }
        }
      }
    },
    "Mushroom Head": {
      "id": 1130000,
      "category": "head",
      "weight": 2.2,
      "absorptions": {
        "physical": 2.1,
        "strike": 2.5,
        "slash": 0.9,
        "pierce": 1.8,
        "magic": 4.7,
        "fire": 1.8,
        "lightning": 4.6,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 44,
        "robustness": 10,
        "focus": 39,
        "vitality": 33,
        "poise": 2
      },
      "effects": {}
    },
    "Mushroom Body": {
      "id": 1130100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 7.1,
        "slash": 2.7,
        "pierce": 5.3,
        "magic": 13.3,
        "fire": 5.3,
        "lightning": 12.8,
        "holy": 13
      },
      "resistances": {
        "immunity": 102,
        "robustness": 24,
        "focus": 90,
        "vitality": 76,
        "poise": 5
      },
      "effects": {}
    },
    "Mushroom Arms": {
      "id": 1130200,
      "category": "arms",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.5,
        "strike": 1.7,
        "slash": 0.6,
        "pierce": 1.3,
        "magic": 3.3,
        "fire": 1.3,
        "lightning": 3.2,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 34,
        "robustness": 8,
        "focus": 30,
        "vitality": 25,
        "poise": 1
      },
      "effects": {}
    },
    "Mushroom Legs": {
      "id": 1130300,
      "category": "legs",
      "weight": 3.1,
      "absorptions": {
        "physical": 3.4,
        "strike": 4,
        "slash": 1.5,
        "pierce": 3,
        "magic": 7.6,
        "fire": 3,
        "lightning": 7.3,
        "holy": 7.4
      },
      "resistances": {
        "immunity": 63,
        "robustness": 15,
        "focus": 56,
        "vitality": 47,
        "poise": 3
      },
      "effects": {}
    },
    "Nox Mirrorhelm": {
      "id": 1300000,
      "category": "head",
      "weight": 7.5,
      "absorptions": {
        "physical": 4,
        "strike": 3.4,
        "slash": 5.5,
        "pierce": 5,
        "magic": 6.7,
        "fire": 5.3,
        "lightning": 4.2,
        "holy": 5.3
      },
      "resistances": {
        "immunity": 29,
        "robustness": 33,
        "focus": 26,
        "vitality": 42,
        "poise": 6
      },
      "effects": {}
    },
    "Iji's Mirrorhelm": {
      "id": 1301000,
      "category": "head",
      "weight": 7.5,
      "absorptions": {
        "physical": 3.8,
        "strike": 3.8,
        "slash": 5.2,
        "pierce": 5.2,
        "magic": 6.2,
        "fire": 4.6,
        "lightning": 4.8,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 22,
        "robustness": 42,
        "focus": 26,
        "vitality": 39,
        "poise": 7
      },
      "effects": {}
    },
    "Black Hood": {
      "id": 1400000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.1,
        "slash": 3.1,
        "pierce": 3.1,
        "magic": 3.1,
        "fire": 3.4,
        "lightning": 3.6,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 33,
        "robustness": 16,
        "focus": 16,
        "vitality": 18,
        "poise": 4
      },
      "effects": {}
    },
    "Leather Armor": {
      "id": 1400100,
      "category": "body",
      "weight": 7.1,
      "absorptions": {
        "physical": 8,
        "strike": 9.5,
        "slash": 8,
        "pierce": 8.8,
        "magic": 9.5,
        "fire": 9.5,
        "lightning": 10.2,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 60,
        "robustness": 35,
        "focus": 42,
        "vitality": 50,
        "poise": 12
      },
      "effects": {}
    },
    "Leather Gloves": {
      "id": 1400200,
      "category": "arms",
      "weight": 2.4,
      "absorptions": {
        "physical": 1.9,
        "strike": 2.3,
        "slash": 1.9,
        "pierce": 2.1,
        "magic": 2.3,
        "fire": 2.3,
        "lightning": 2.5,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 20,
        "robustness": 12,
        "focus": 14,
        "vitality": 17,
        "poise": 3
      },
      "effects": {}
    },
    "Leather Boots": {
      "id": 1400300,
      "category": "legs",
      "weight": 4.4,
      "absorptions": {
        "physical": 4.5,
        "strike": 5.4,
        "slash": 4.5,
        "pierce": 5,
        "magic": 5.4,
        "fire": 5.4,
        "lightning": 5.8,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 37,
        "robustness": 22,
        "focus": 26,
        "vitality": 31,
        "poise": 7
      },
      "effects": {}
    },
    "Bandit Mask": {
      "id": 1401000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.1,
        "slash": 3.1,
        "pierce": 3.1,
        "magic": 3.1,
        "fire": 3.4,
        "lightning": 3.6,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 30,
        "robustness": 14,
        "focus": 14,
        "vitality": 16,
        "poise": 4
      },
      "effects": {}
    },
    "Knight Helm": {
      "id": 1500000,
      "category": "head",
      "weight": 4.6,
      "absorptions": {
        "physical": 4.4,
        "strike": 4.2,
        "slash": 4.8,
        "pierce": 4.8,
        "magic": 3.8,
        "fire": 3.8,
        "lightning": 3.4,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 22,
        "focus": 8,
        "vitality": 8,
        "poise": 8
      },
      "effects": {}
    },
    "Knight Armor": {
      "id": 1500100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 12.4,
        "strike": 11.9,
        "slash": 13.5,
        "pierce": 13.5,
        "magic": 10.9,
        "fire": 10.9,
        "lightning": 9.5,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 28,
        "robustness": 50,
        "focus": 18,
        "vitality": 18,
        "poise": 24
      },
      "effects": {}
    },
    "Knight Gauntlets": {
      "id": 1500200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.1,
        "strike": 2.9,
        "slash": 3.3,
        "pierce": 3.3,
        "magic": 2.7,
        "fire": 2.7,
        "lightning": 2.3,
        "holy": 2.1
      },
      "resistances": {
        "immunity": 9,
        "robustness": 17,
        "focus": 6,
        "vitality": 6,
        "poise": 5
      },
      "effects": {}
    },
    "Knight Greaves": {
      "id": 1500300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.1,
        "strike": 6.8,
        "slash": 7.7,
        "pierce": 7.7,
        "magic": 6.2,
        "fire": 6.2,
        "lightning": 5.4,
        "holy": 5
      },
      "resistances": {
        "immunity": 17,
        "robustness": 31,
        "focus": 11,
        "vitality": 11,
        "poise": 14
      },
      "effects": {}
    },
    "Greathood": {
      "id": 1600000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 3.8,
        "strike": 3.6,
        "slash": 3.8,
        "pierce": 3.6,
        "magic": 5.5,
        "fire": 5,
        "lightning": 5.5,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 33,
        "robustness": 20,
        "focus": 47,
        "vitality": 47,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 2
        },
        "1": {
          "attribute": "Intelligence",
          "model": "additive",
          "type": "positive",
          "value": 2
        },
        "2": {
          "attribute": "Maximum Health",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.91
        }
      }
    },
    "Godrick Soldier Helm": {
      "id": 1700000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.6,
        "slash": 4.4,
        "pierce": 4.2,
        "magic": 3.1,
        "fire": 3.6,
        "lightning": 2.5,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 22,
        "focus": 9,
        "vitality": 9,
        "poise": 7
      },
      "effects": {}
    },
    "Tree-and-Beast Surcoat": {
      "id": 1700100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 12.9,
        "strike": 11.4,
        "slash": 12.9,
        "pierce": 12.4,
        "magic": 10.2,
        "fire": 10.9,
        "lightning": 8,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 55,
        "focus": 23,
        "vitality": 23,
        "poise": 22
      },
      "effects": {}
    },
    "Godrick Soldier Gauntlets": {
      "id": 1700200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.2,
        "strike": 2.8,
        "slash": 3.2,
        "pierce": 3.1,
        "magic": 2.5,
        "fire": 2.7,
        "lightning": 1.9,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Godrick Soldier Greaves": {
      "id": 1700300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.4,
        "strike": 6.5,
        "slash": 7.4,
        "pierce": 7.1,
        "magic": 5.8,
        "fire": 6.2,
        "lightning": 4.5,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 20,
        "robustness": 34,
        "focus": 14,
        "vitality": 14,
        "poise": 13
      },
      "effects": {}
    },
    "Raya Lucarian Helm": {
      "id": 1710000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.4,
        "slash": 4.6,
        "pierce": 4.4,
        "magic": 3.4,
        "fire": 3.6,
        "lightning": 2.3,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 12,
        "robustness": 22,
        "focus": 9,
        "vitality": 9,
        "poise": 7
      },
      "effects": {}
    },
    "Cuckoo Surcoat": {
      "id": 1710100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 12.9,
        "strike": 10.9,
        "slash": 13.5,
        "pierce": 12.9,
        "magic": 11.9,
        "fire": 10.9,
        "lightning": 7.1,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 28,
        "robustness": 55,
        "focus": 23,
        "vitality": 23,
        "poise": 22
      },
      "effects": {}
    },
    "Raya Lucarian Gauntlets": {
      "id": 1710200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.2,
        "strike": 2.7,
        "slash": 3.3,
        "pierce": 3.2,
        "magic": 2.7,
        "fire": 2.7,
        "lightning": 1.7,
        "holy": 2.1
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Raya Lucarian Greaves": {
      "id": 1710300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.4,
        "strike": 6.2,
        "slash": 7.7,
        "pierce": 7.4,
        "magic": 6.2,
        "fire": 6.2,
        "lightning": 4,
        "holy": 5
      },
      "resistances": {
        "immunity": 20,
        "robustness": 34,
        "focus": 14,
        "vitality": 14,
        "poise": 13
      },
      "effects": {}
    },
    "Leyndell Soldier Helm": {
      "id": 1720000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.8,
        "slash": 4.2,
        "pierce": 4.4,
        "magic": 2.8,
        "fire": 3.4,
        "lightning": 2.8,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 22,
        "focus": 9,
        "vitality": 9,
        "poise": 7
      },
      "effects": {}
    },
    "Erdtree Surcoat": {
      "id": 1720100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 12.9,
        "strike": 11.9,
        "slash": 12.4,
        "pierce": 12.9,
        "magic": 9.5,
        "fire": 10.2,
        "lightning": 8.8,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 55,
        "focus": 23,
        "vitality": 23,
        "poise": 22
      },
      "effects": {}
    },
    "Leyndell Soldier Gauntlets": {
      "id": 1720200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.2,
        "strike": 2.9,
        "slash": 3.1,
        "pierce": 3.2,
        "magic": 2.3,
        "fire": 2.5,
        "lightning": 2.1,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Leyndell Soldier Greaves": {
      "id": 1720300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.4,
        "strike": 6.8,
        "slash": 7.1,
        "pierce": 7.4,
        "magic": 5.4,
        "fire": 5.8,
        "lightning": 5,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 20,
        "robustness": 34,
        "focus": 14,
        "vitality": 14,
        "poise": 13
      },
      "effects": {}
    },
    "Radahn Soldier Helm": {
      "id": 1730000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.6,
        "strike": 3.4,
        "slash": 4.2,
        "pierce": 4,
        "magic": 3.1,
        "fire": 3.8,
        "lightning": 2.5,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 12,
        "robustness": 20,
        "focus": 9,
        "vitality": 10,
        "poise": 7
      },
      "effects": {}
    },
    "Redmane Surcoat": {
      "id": 1730100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 13.5,
        "strike": 10.9,
        "slash": 12.4,
        "pierce": 11.9,
        "magic": 10.2,
        "fire": 11.4,
        "lightning": 8,
        "holy": 9.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 50,
        "focus": 23,
        "vitality": 24,
        "poise": 22
      },
      "effects": {}
    },
    "Radahn Soldier Gauntlets": {
      "id": 1730200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.7,
        "slash": 3.1,
        "pierce": 2.9,
        "magic": 2.5,
        "fire": 2.8,
        "lightning": 1.9,
        "holy": 2.3
      },
      "resistances": {
        "immunity": 11,
        "robustness": 17,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Radahn Soldier Greaves": {
      "id": 1730300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.2,
        "slash": 7.1,
        "pierce": 6.8,
        "magic": 5.8,
        "fire": 6.5,
        "lightning": 4.5,
        "holy": 5.4
      },
      "resistances": {
        "immunity": 20,
        "robustness": 31,
        "focus": 14,
        "vitality": 15,
        "poise": 13
      },
      "effects": {}
    },
    "Mausoleum Surcoat": {
      "id": 1740100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 12.9,
        "strike": 10.9,
        "slash": 13.5,
        "pierce": 12.4,
        "magic": 10.2,
        "fire": 10.2,
        "lightning": 8.8,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 32,
        "robustness": 50,
        "focus": 23,
        "vitality": 21,
        "poise": 24
      },
      "effects": {}
    },
    "Mausoleum Gauntlets": {
      "id": 1740200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.2,
        "strike": 2.7,
        "slash": 3.3,
        "pierce": 3.1,
        "magic": 2.5,
        "fire": 2.5,
        "lightning": 2.1,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 11,
        "robustness": 17,
        "focus": 8,
        "vitality": 7,
        "poise": 5
      },
      "effects": {}
    },
    "Mausoleum Greaves": {
      "id": 1740300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.4,
        "strike": 6.2,
        "slash": 7.7,
        "pierce": 7.1,
        "magic": 5.8,
        "fire": 5.8,
        "lightning": 5,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 20,
        "robustness": 31,
        "focus": 14,
        "vitality": 13,
        "poise": 14
      },
      "effects": {}
    },
    "Haligtree Helm": {
      "id": 1750000,
      "category": "head",
      "weight": 4,
      "absorptions": {
        "physical": 4.4,
        "strike": 3.8,
        "slash": 4.2,
        "pierce": 4.4,
        "magic": 2.8,
        "fire": 3.4,
        "lightning": 2.5,
        "holy": 3.4
      },
      "resistances": {
        "immunity": 12,
        "robustness": 22,
        "focus": 9,
        "vitality": 10,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Haligtree Crest Surcoat": {
      "id": 1750100,
      "category": "body",
      "weight": 10.6,
      "absorptions": {
        "physical": 12.9,
        "strike": 11.9,
        "slash": 12.4,
        "pierce": 12.9,
        "magic": 9.5,
        "fire": 10.2,
        "lightning": 8,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 32,
        "robustness": 55,
        "focus": 23,
        "vitality": 24,
        "poise": 21
      },
      "effects": {}
    },
    "Haligtree Gauntlets": {
      "id": 1750200,
      "category": "arms",
      "weight": 3.5,
      "absorptions": {
        "physical": 3.2,
        "strike": 2.9,
        "slash": 3.1,
        "pierce": 3.2,
        "magic": 2.3,
        "fire": 2.5,
        "lightning": 1.9,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 11,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 4
      },
      "effects": {}
    },
    "Haligtree Greaves": {
      "id": 1750300,
      "category": "legs",
      "weight": 6.6,
      "absorptions": {
        "physical": 7.4,
        "strike": 6.8,
        "slash": 7.1,
        "pierce": 7.4,
        "magic": 5.4,
        "fire": 5.8,
        "lightning": 4.5,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 20,
        "robustness": 34,
        "focus": 14,
        "vitality": 15,
        "poise": 12
      },
      "effects": {}
    },
    "Gelmir Knight Helm": {
      "id": 1760000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.8,
        "strike": 4,
        "slash": 5,
        "pierce": 4.8,
        "magic": 3.8,
        "fire": 4.4,
        "lightning": 3.6,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 15,
        "robustness": 23,
        "focus": 10,
        "vitality": 10,
        "poise": 8
      },
      "effects": {}
    },
    "Gelmir Knight Armor": {
      "id": 1760100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.4,
        "slash": 14,
        "pierce": 13.5,
        "magic": 10.9,
        "fire": 12.4,
        "lightning": 10.2,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 35,
        "robustness": 55,
        "focus": 24,
        "vitality": 23,
        "poise": 24
      },
      "effects": {}
    },
    "Gelmir Knight Gauntlets": {
      "id": 1760200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.8,
        "slash": 3.5,
        "pierce": 3.3,
        "magic": 2.7,
        "fire": 3.1,
        "lightning": 2.5,
        "holy": 2.7
      },
      "resistances": {
        "immunity": 12,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Gelmir Knight Greaves": {
      "id": 1760300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.5,
        "slash": 8,
        "pierce": 7.7,
        "magic": 6.2,
        "fire": 7.1,
        "lightning": 5.8,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 22,
        "robustness": 34,
        "focus": 15,
        "vitality": 14,
        "poise": 14
      },
      "effects": {}
    },
    "Gelmir Knight Armor (Altered)": {
      "id": 1761100,
      "category": "body",
      "weight": 10.8,
      "absorptions": {
        "physical": 13.1,
        "strike": 11,
        "slash": 13.6,
        "pierce": 13.1,
        "magic": 10.5,
        "fire": 12,
        "lightning": 9.8,
        "holy": 10.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 50,
        "focus": 21,
        "vitality": 21,
        "poise": 24
      },
      "effects": {}
    },
    "Godrick Knight Helm": {
      "id": 1770000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.8,
        "strike": 4.2,
        "slash": 5,
        "pierce": 4.6,
        "magic": 3.8,
        "fire": 4.2,
        "lightning": 3.4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 15,
        "robustness": 24,
        "focus": 10,
        "vitality": 10,
        "poise": 8
      },
      "effects": {}
    },
    "Godrick Knight Armor": {
      "id": 1770100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.9,
        "slash": 14,
        "pierce": 12.9,
        "magic": 10.9,
        "fire": 11.9,
        "lightning": 9.5,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 35,
        "robustness": 57,
        "focus": 24,
        "vitality": 24,
        "poise": 24
      },
      "effects": {}
    },
    "Godrick Knight Gauntlets": {
      "id": 1770200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.9,
        "slash": 3.5,
        "pierce": 3.2,
        "magic": 2.7,
        "fire": 2.9,
        "lightning": 2.3,
        "holy": 2.7
      },
      "resistances": {
        "immunity": 12,
        "robustness": 19,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Godrick Knight Greaves": {
      "id": 1770300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.8,
        "slash": 8,
        "pierce": 7.4,
        "magic": 6.2,
        "fire": 6.8,
        "lightning": 5.4,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 22,
        "robustness": 35,
        "focus": 15,
        "vitality": 15,
        "poise": 14
      },
      "effects": {}
    },
    "Godrick Knight Armor (Altered)": {
      "id": 1771100,
      "category": "body",
      "weight": 10.8,
      "absorptions": {
        "physical": 13.1,
        "strike": 11.5,
        "slash": 13.6,
        "pierce": 12.5,
        "magic": 10.5,
        "fire": 11.5,
        "lightning": 9.1,
        "holy": 10.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 52,
        "focus": 21,
        "vitality": 21,
        "poise": 24
      },
      "effects": {}
    },
    "Cuckoo Knight Helm": {
      "id": 1780000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.8,
        "strike": 4,
        "slash": 5.2,
        "pierce": 4.8,
        "magic": 4.4,
        "fire": 4.2,
        "lightning": 3.1,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 14,
        "robustness": 24,
        "focus": 10,
        "vitality": 10,
        "poise": 8
      },
      "effects": {}
    },
    "Cuckoo Knight Armor": {
      "id": 1780100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.4,
        "slash": 14.6,
        "pierce": 13.5,
        "magic": 12.4,
        "fire": 11.9,
        "lightning": 8.8,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 32,
        "robustness": 57,
        "focus": 24,
        "vitality": 24,
        "poise": 24
      },
      "effects": {}
    },
    "Cuckoo Knight Gauntlets": {
      "id": 1780200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.8,
        "slash": 3.6,
        "pierce": 3.3,
        "magic": 3.1,
        "fire": 2.9,
        "lightning": 2.1,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 11,
        "robustness": 19,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Cuckoo Knight Greaves": {
      "id": 1780300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.5,
        "slash": 8.4,
        "pierce": 7.7,
        "magic": 7.1,
        "fire": 6.8,
        "lightning": 5,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 20,
        "robustness": 35,
        "focus": 15,
        "vitality": 15,
        "poise": 14
      },
      "effects": {}
    },
    "Cuckoo Knight Armor (Altered)": {
      "id": 1781100,
      "category": "body",
      "weight": 10.8,
      "absorptions": {
        "physical": 13.1,
        "strike": 11,
        "slash": 14.2,
        "pierce": 13.1,
        "magic": 12,
        "fire": 11.5,
        "lightning": 8.4,
        "holy": 9.8
      },
      "resistances": {
        "immunity": 29,
        "robustness": 52,
        "focus": 21,
        "vitality": 21,
        "poise": 24
      },
      "effects": {}
    },
    "Leyndell Knight Helm": {
      "id": 1790000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.8,
        "strike": 4.4,
        "slash": 4.8,
        "pierce": 4.8,
        "magic": 3.6,
        "fire": 4,
        "lightning": 3.6,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 15,
        "robustness": 24,
        "focus": 10,
        "vitality": 10,
        "poise": 8
      },
      "effects": {}
    },
    "Leyndell Knight Armor": {
      "id": 1790100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 12.4,
        "slash": 13.5,
        "pierce": 13.5,
        "magic": 10.2,
        "fire": 11.4,
        "lightning": 11.4,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 35,
        "robustness": 55,
        "focus": 24,
        "vitality": 24,
        "poise": 24
      },
      "effects": {}
    },
    "Leyndell Knight Gauntlets": {
      "id": 1790200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.3,
        "strike": 3.1,
        "slash": 3.3,
        "pierce": 3.3,
        "magic": 2.5,
        "fire": 2.8,
        "lightning": 2.5,
        "holy": 2.7
      },
      "resistances": {
        "immunity": 12,
        "robustness": 19,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Leyndell Knight Greaves": {
      "id": 1790300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 7.1,
        "slash": 7.7,
        "pierce": 7.7,
        "magic": 5.8,
        "fire": 6.5,
        "lightning": 5.8,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 22,
        "robustness": 35,
        "focus": 15,
        "vitality": 15,
        "poise": 14
      },
      "effects": {}
    },
    "Leyndell Knight Armor (Altered)": {
      "id": 1791100,
      "category": "body",
      "weight": 10.8,
      "absorptions": {
        "physical": 13.1,
        "strike": 12,
        "slash": 13.1,
        "pierce": 13.1,
        "magic": 9.8,
        "fire": 11,
        "lightning": 11,
        "holy": 9.8
      },
      "resistances": {
        "immunity": 32,
        "robustness": 50,
        "focus": 21,
        "vitality": 21,
        "poise": 24
      },
      "effects": {}
    },
    "Redmane Knight Helm": {
      "id": 1800000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 5,
        "strike": 4,
        "slash": 4.8,
        "pierce": 4.4,
        "magic": 3.8,
        "fire": 4.4,
        "lightning": 3.4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 15,
        "robustness": 23,
        "focus": 10,
        "vitality": 11,
        "poise": 8
      },
      "effects": {}
    },
    "Redmane Knight Armor": {
      "id": 1800100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.4,
        "slash": 13.5,
        "pierce": 12.4,
        "magic": 10.9,
        "fire": 12.8,
        "lightning": 9.5,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 35,
        "robustness": 55,
        "focus": 24,
        "vitality": 25,
        "poise": 24
      },
      "effects": {}
    },
    "Redmane Knight Gauntlets": {
      "id": 1800200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.5,
        "strike": 2.8,
        "slash": 3.3,
        "pierce": 3.1,
        "magic": 2.7,
        "fire": 3.1,
        "lightning": 2.3,
        "holy": 2.7
      },
      "resistances": {
        "immunity": 12,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Redmane Knight Greaves": {
      "id": 1800300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.5,
        "slash": 7.7,
        "pierce": 7.1,
        "magic": 6.2,
        "fire": 7.3,
        "lightning": 5.4,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 22,
        "robustness": 34,
        "focus": 15,
        "vitality": 15,
        "poise": 14
      },
      "effects": {}
    },
    "Redmane Knight Armor (Altered)": {
      "id": 1801100,
      "category": "body",
      "weight": 10.8,
      "absorptions": {
        "physical": 13.1,
        "strike": 11,
        "slash": 13.1,
        "pierce": 12,
        "magic": 10.5,
        "fire": 12.4,
        "lightning": 9.1,
        "holy": 10.5
      },
      "resistances": {
        "immunity": 32,
        "robustness": 50,
        "focus": 21,
        "vitality": 22,
        "poise": 24
      },
      "effects": {}
    },
    "Mausoleum Knight Armor": {
      "id": 1810100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 11.4,
        "slash": 14.6,
        "pierce": 12.9,
        "magic": 10.9,
        "fire": 11.4,
        "lightning": 10.2,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 35,
        "robustness": 55,
        "focus": 24,
        "vitality": 23,
        "poise": 25
      },
      "effects": {}
    },
    "Mausoleum Knight Gauntlets": {
      "id": 1810200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.3,
        "strike": 2.8,
        "slash": 3.6,
        "pierce": 3.2,
        "magic": 2.7,
        "fire": 2.8,
        "lightning": 2.5,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 12,
        "robustness": 18,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Mausoleum Knight Greaves": {
      "id": 1810300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 6.5,
        "slash": 8.4,
        "pierce": 7.4,
        "magic": 6.2,
        "fire": 6.5,
        "lightning": 5.8,
        "holy": 6.5
      },
      "resistances": {
        "immunity": 22,
        "robustness": 34,
        "focus": 15,
        "vitality": 14,
        "poise": 15
      },
      "effects": {}
    },
    "Mausoleum Knight Armor (Altered)": {
      "id": 1811100,
      "category": "body",
      "weight": 10.8,
      "absorptions": {
        "physical": 13.1,
        "strike": 11,
        "slash": 14.2,
        "pierce": 12.5,
        "magic": 10.5,
        "fire": 11,
        "lightning": 9.8,
        "holy": 11
      },
      "resistances": {
        "immunity": 32,
        "robustness": 50,
        "focus": 21,
        "vitality": 21,
        "poise": 25
      },
      "effects": {}
    },
    "Haligtree Knight Helm": {
      "id": 1820000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 4.8,
        "strike": 4.4,
        "slash": 4.8,
        "pierce": 4.8,
        "magic": 3.6,
        "fire": 4,
        "lightning": 3.4,
        "holy": 4
      },
      "resistances": {
        "immunity": 15,
        "robustness": 24,
        "focus": 10,
        "vitality": 11,
        "poise": 7
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 2
        }
      }
    },
    "Haligtree Knight Armor": {
      "id": 1820100,
      "category": "body",
      "weight": 11.8,
      "absorptions": {
        "physical": 13.5,
        "strike": 12.4,
        "slash": 13.5,
        "pierce": 13.5,
        "magic": 10.2,
        "fire": 11.4,
        "lightning": 9.5,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 35,
        "robustness": 57,
        "focus": 24,
        "vitality": 25,
        "poise": 22
      },
      "effects": {}
    },
    "Haligtree Knight Gauntlets": {
      "id": 1820200,
      "category": "arms",
      "weight": 3.9,
      "absorptions": {
        "physical": 3.3,
        "strike": 3.1,
        "slash": 3.3,
        "pierce": 3.3,
        "magic": 2.5,
        "fire": 2.8,
        "lightning": 2.3,
        "holy": 2.8
      },
      "resistances": {
        "immunity": 12,
        "robustness": 19,
        "focus": 8,
        "vitality": 8,
        "poise": 5
      },
      "effects": {}
    },
    "Haligtree Knight Greaves": {
      "id": 1820300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.7,
        "strike": 7.1,
        "slash": 7.7,
        "pierce": 7.7,
        "magic": 5.8,
        "fire": 6.5,
        "lightning": 5.4,
        "holy": 6.5
      },
      "resistances": {
        "immunity": 22,
        "robustness": 35,
        "focus": 15,
        "vitality": 15,
        "poise": 13
      },
      "effects": {}
    },
    "Haligtree Knight Armor (Altered)": {
      "id": 1821100,
      "category": "body",
      "weight": 10.8,
      "absorptions": {
        "physical": 13.1,
        "strike": 12,
        "slash": 13.1,
        "pierce": 13.1,
        "magic": 9.8,
        "fire": 11,
        "lightning": 9.1,
        "holy": 11
      },
      "resistances": {
        "immunity": 32,
        "robustness": 52,
        "focus": 21,
        "vitality": 22,
        "poise": 22
      },
      "effects": {}
    },
    "Foot Soldier Cap": {
      "id": 1830000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.6,
        "slash": 3.4,
        "pierce": 3.4,
        "magic": 3.8,
        "fire": 4,
        "lightning": 4.2,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 27,
        "robustness": 18,
        "focus": 23,
        "vitality": 23,
        "poise": 6
      },
      "effects": {}
    },
    "Chain-Draped Tabard": {
      "id": 1830100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 9.5,
        "strike": 10.2,
        "slash": 9.5,
        "pierce": 9.5,
        "magic": 10.9,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 55,
        "vitality": 55,
        "poise": 17
      },
      "effects": {}
    },
    "Foot Soldier Gauntlets": {
      "id": 1830200,
      "category": "arms",
      "weight": 2.6,
      "absorptions": {
        "physical": 2.1,
        "strike": 2.3,
        "slash": 2.1,
        "pierce": 2.1,
        "magic": 2.5,
        "fire": 2.7,
        "lightning": 2.8,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 20,
        "robustness": 13,
        "focus": 17,
        "vitality": 17,
        "poise": 3
      },
      "effects": {}
    },
    "Foot Soldier Greaves": {
      "id": 1830300,
      "category": "legs",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.4,
        "strike": 5.8,
        "slash": 5.4,
        "pierce": 5.4,
        "magic": 6.2,
        "fire": 6.5,
        "lightning": 6.8,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 39,
        "robustness": 26,
        "focus": 34,
        "vitality": 34,
        "poise": 10
      },
      "effects": {}
    },
    "Foot Soldier Helmet": {
      "id": 1840000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.4,
        "slash": 3.6,
        "pierce": 3.6,
        "magic": 4,
        "fire": 4,
        "lightning": 4,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 27,
        "robustness": 18,
        "focus": 23,
        "vitality": 23,
        "poise": 6
      },
      "effects": {}
    },
    "Foot Soldier Tabard": {
      "id": 1840100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 9.5,
        "strike": 9.5,
        "slash": 10.2,
        "pierce": 10.2,
        "magic": 11.4,
        "fire": 11.4,
        "lightning": 11.4,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 55,
        "vitality": 55,
        "poise": 17
      },
      "effects": {}
    },
    "Gilded Foot Soldier Cap": {
      "id": 1850000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.8,
        "slash": 3.1,
        "pierce": 3.6,
        "magic": 3.6,
        "fire": 3.8,
        "lightning": 4.4,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 27,
        "robustness": 18,
        "focus": 23,
        "vitality": 23,
        "poise": 6
      },
      "effects": {}
    },
    "Leather-Draped Tabard": {
      "id": 1850100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 9.5,
        "strike": 10.9,
        "slash": 8.8,
        "pierce": 10.2,
        "magic": 10.2,
        "fire": 10.9,
        "lightning": 12.4,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 55,
        "vitality": 55,
        "poise": 17
      },
      "effects": {}
    },
    "Foot Soldier Helm": {
      "id": 1860000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.6,
        "strike": 3.4,
        "slash": 3.1,
        "pierce": 3.1,
        "magic": 3.8,
        "fire": 4.2,
        "lightning": 4.2,
        "holy": 3.8
      },
      "resistances": {
        "immunity": 27,
        "robustness": 18,
        "focus": 23,
        "vitality": 23,
        "poise": 6
      },
      "effects": {}
    },
    "Scarlet Tabard": {
      "id": 1860100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 10.2,
        "strike": 9.5,
        "slash": 8.8,
        "pierce": 8.8,
        "magic": 10.9,
        "fire": 11.9,
        "lightning": 11.9,
        "holy": 10.9
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 55,
        "vitality": 55,
        "poise": 17
      },
      "effects": {}
    },
    "Bloodsoaked Tabard": {
      "id": 1870100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 9.5,
        "strike": 9.5,
        "slash": 10.2,
        "pierce": 9.5,
        "magic": 10.9,
        "fire": 10.9,
        "lightning": 12.4,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 63,
        "robustness": 38,
        "focus": 55,
        "vitality": 50,
        "poise": 18
      },
      "effects": {}
    },
    "Sacred Crown Helm": {
      "id": 1880000,
      "category": "head",
      "weight": 3.6,
      "absorptions": {
        "physical": 3.4,
        "strike": 3.8,
        "slash": 3.1,
        "pierce": 3.6,
        "magic": 3.6,
        "fire": 3.8,
        "lightning": 4.2,
        "holy": 4
      },
      "resistances": {
        "immunity": 27,
        "robustness": 18,
        "focus": 23,
        "vitality": 24,
        "poise": 5
      },
      "effects": {
        "0": {
          "attribute": "Faith",
          "model": "additive",
          "type": "positive",
          "value": 1
        }
      }
    },
    "Ivory-Draped Tabard": {
      "id": 1880100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 9.5,
        "strike": 10.9,
        "slash": 8.8,
        "pierce": 10.2,
        "magic": 10.2,
        "fire": 10.9,
        "lightning": 11.9,
        "holy": 11.4
      },
      "resistances": {
        "immunity": 63,
        "robustness": 42,
        "focus": 55,
        "vitality": 57,
        "poise": 16
      },
      "effects": {}
    },
    "Omensmirk Mask": {
      "id": 1890000,
      "category": "head",
      "weight": 3,
      "absorptions": {
        "physical": 3.1,
        "strike": 2.8,
        "slash": 2.5,
        "pierce": 2.5,
        "magic": 3.1,
        "fire": 3.4,
        "lightning": 4,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 29,
        "robustness": 12,
        "focus": 20,
        "vitality": 20,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Strength",
          "model": "additive",
          "type": "positive",
          "value": 2
        }
      }
    },
    "Omenkiller Robe": {
      "id": 1890100,
      "category": "body",
      "weight": 7.1,
      "absorptions": {
        "physical": 8.8,
        "strike": 8,
        "slash": 7.1,
        "pierce": 7.1,
        "magic": 8.8,
        "fire": 9.5,
        "lightning": 11.4,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 67,
        "robustness": 28,
        "focus": 46,
        "vitality": 46,
        "poise": 16
      },
      "effects": {}
    },
    "Omenkiller Long Gloves": {
      "id": 1890200,
      "category": "arms",
      "weight": 2.4,
      "absorptions": {
        "physical": 2.1,
        "strike": 1.9,
        "slash": 1.7,
        "pierce": 1.7,
        "magic": 2.1,
        "fire": 2.3,
        "lightning": 2.8,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 22,
        "robustness": 9,
        "focus": 15,
        "vitality": 15,
        "poise": 3
      },
      "effects": {}
    },
    "Omenkiller Boots": {
      "id": 1890300,
      "category": "legs",
      "weight": 4.4,
      "absorptions": {
        "physical": 5,
        "strike": 4.5,
        "slash": 4,
        "pierce": 4,
        "magic": 5,
        "fire": 5.4,
        "lightning": 6.5,
        "holy": 5.8
      },
      "resistances": {
        "immunity": 41,
        "robustness": 17,
        "focus": 29,
        "vitality": 29,
        "poise": 9
      },
      "effects": {}
    },
    "Ash-of-War Scarab": {
      "id": 1900000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 3.8,
        "strike": 4,
        "slash": 3.8,
        "pierce": 3.8,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.6,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 42,
        "robustness": 22,
        "focus": 27,
        "vitality": 26,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Absorption",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.9,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Skill Focus Consumption",
          "model": "multiplicative",
          "type": "positive",
          "value": 0.85,
          "tick_interval": 0.06
        }
      }
    },
    "Incantation Scarab": {
      "id": 1901000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 3.8,
        "strike": 4,
        "slash": 3.8,
        "pierce": 3.8,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.6,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 42,
        "robustness": 22,
        "focus": 27,
        "vitality": 26,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Absorption",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.9,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Incantation Focus Consumption",
          "model": "multiplicative",
          "type": "positive",
          "value": 0.85,
          "tick_interval": 0.06
        }
      }
    },
    "Glintstone Scarab": {
      "id": 1902000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 3.8,
        "strike": 4,
        "slash": 3.8,
        "pierce": 3.8,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.6,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 42,
        "robustness": 22,
        "focus": 27,
        "vitality": 26,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Absorption",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.9,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Sorcery Focus Consumption",
          "model": "multiplicative",
          "type": "positive",
          "value": 0.85,
          "tick_interval": 0.06
        }
      }
    },
    "Crimson Tear Scarab": {
      "id": 1910000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 3.8,
        "strike": 4,
        "slash": 3.8,
        "pierce": 3.8,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.6,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 42,
        "robustness": 22,
        "focus": 27,
        "vitality": 26,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Absorption",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.9,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Flask Health Restoration",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "tick_interval": 0.06
        }
      }
    },
    "Cerulean Tear Scarab": {
      "id": 1920000,
      "category": "head",
      "weight": 5.1,
      "absorptions": {
        "physical": 3.8,
        "strike": 4,
        "slash": 3.8,
        "pierce": 3.8,
        "magic": 4.6,
        "fire": 4.6,
        "lightning": 4.6,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 42,
        "robustness": 22,
        "focus": 27,
        "vitality": 26,
        "poise": 6
      },
      "effects": {
        "0": {
          "attribute": "Absorption",
          "model": "multiplicative",
          "type": "negative",
          "value": 0.9,
          "tick_interval": 0.06
        },
        "1": {
          "attribute": "Flask Focus Restoration",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "tick_interval": 0.06
        }
      }
    },
    "Deathbed Dress": {
      "id": 1930100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 0.6,
        "strike": 2.7,
        "slash": 0.6,
        "pierce": 0.6,
        "magic": 11.9,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 12.4
      },
      "resistances": {
        "immunity": 38,
        "robustness": 11,
        "focus": 63,
        "vitality": 107,
        "poise": 5
      },
      "effects": {}
    },
    "Deathbed Smalls": {
      "id": 1930300,
      "category": "legs",
      "weight": 2,
      "absorptions": {
        "physical": 1.5,
        "strike": 2.3,
        "slash": 1.5,
        "pierce": 1.5,
        "magic": 6.8,
        "fire": 6.5,
        "lightning": 6.8,
        "holy": 7.2
      },
      "resistances": {
        "immunity": 24,
        "robustness": 7,
        "focus": 39,
        "vitality": 66,
        "poise": 3
      },
      "effects": {}
    },
    "Fia's Hood": {
      "id": 1940000,
      "category": "head",
      "weight": 1.7,
      "absorptions": {
        "physical": 1.4,
        "strike": 1.8,
        "slash": 1.4,
        "pierce": 1.4,
        "magic": 4.4,
        "fire": 4.2,
        "lightning": 4.4,
        "holy": 4.6
      },
      "resistances": {
        "immunity": 18,
        "robustness": 8,
        "focus": 29,
        "vitality": 45,
        "poise": 2
      },
      "effects": {}
    },
    "Fia's Robe": {
      "id": 1940100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 5.3,
        "strike": 6.1,
        "slash": 5.3,
        "pierce": 5.3,
        "magic": 12.6,
        "fire": 12.4,
        "lightning": 12.6,
        "holy": 13
      },
      "resistances": {
        "immunity": 46,
        "robustness": 21,
        "focus": 76,
        "vitality": 108,
        "poise": 8
      },
      "effects": {}
    },
    "Fia's Robe (Altered)": {
      "id": 1941100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 2.7,
        "strike": 4.2,
        "slash": 2.7,
        "pierce": 2.7,
        "magic": 11.9,
        "fire": 11.4,
        "lightning": 11.9,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 34,
        "robustness": 10,
        "focus": 57,
        "vitality": 93,
        "poise": 5
      },
      "effects": {}
    },
    "Millicent's Robe": {
      "id": 1950100,
      "category": "body",
      "weight": 3.2,
      "absorptions": {
        "physical": 4.2,
        "strike": 4.2,
        "slash": 4.2,
        "pierce": 2.7,
        "magic": 12.6,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.6
      },
      "resistances": {
        "immunity": 38,
        "robustness": 21,
        "focus": 63,
        "vitality": 63,
        "poise": 7
      },
      "effects": {}
    },
    "Millicent's Gloves": {
      "id": 1950200,
      "category": "arms",
      "weight": 1.1,
      "absorptions": {
        "physical": 1,
        "strike": 1,
        "slash": 1,
        "pierce": 0.6,
        "magic": 3.1,
        "fire": 2.9,
        "lightning": 3.1,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 13,
        "robustness": 7,
        "focus": 21,
        "vitality": 21,
        "poise": 1
      },
      "effects": {}
    },
    "Millicent's Boots": {
      "id": 1950300,
      "category": "legs",
      "weight": 2,
      "absorptions": {
        "physical": 2.3,
        "strike": 2.3,
        "slash": 2.3,
        "pierce": 1.5,
        "magic": 7.2,
        "fire": 6.8,
        "lightning": 7.1,
        "holy": 7.2
      },
      "resistances": {
        "immunity": 24,
        "robustness": 13,
        "focus": 39,
        "vitality": 39,
        "poise": 4
      },
      "effects": {}
    },
    "Millicent's Tunic": {
      "id": 1970100,
      "category": "body",
      "weight": 8.3,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 5.3,
        "magic": 13,
        "fire": 12.6,
        "lightning": 12.8,
        "holy": 13
      },
      "resistances": {
        "immunity": 46,
        "robustness": 24,
        "focus": 76,
        "vitality": 76,
        "poise": 10
      },
      "effects": {}
    },
    "Golden Prosthetic": {
      "id": 1970200,
      "category": "arms",
      "weight": 2.8,
      "absorptions": {
        "physical": 1.5,
        "strike": 1.5,
        "slash": 1.5,
        "pierce": 1.3,
        "magic": 3.2,
        "fire": 3.1,
        "lightning": 3.2,
        "holy": 3.2
      },
      "resistances": {
        "immunity": 15,
        "robustness": 8,
        "focus": 25,
        "vitality": 25,
        "poise": 2
      },
      "effects": {}
    },
    "Highwayman Hood": {
      "id": 1980000,
      "category": "head",
      "weight": 3.3,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.6,
        "slash": 2.8,
        "pierce": 3.1,
        "magic": 3.8,
        "fire": 3.8,
        "lightning": 4,
        "holy": 3.6
      },
      "resistances": {
        "immunity": 24,
        "robustness": 15,
        "focus": 22,
        "vitality": 22,
        "poise": 4
      },
      "effects": {}
    },
    "Highwayman Cloth Armor": {
      "id": 1980100,
      "category": "body",
      "weight": 7.7,
      "absorptions": {
        "physical": 8,
        "strike": 10.2,
        "slash": 8,
        "pierce": 8.8,
        "magic": 10.9,
        "fire": 10.9,
        "lightning": 11.4,
        "holy": 10.2
      },
      "resistances": {
        "immunity": 57,
        "robustness": 35,
        "focus": 50,
        "vitality": 50,
        "poise": 16
      },
      "effects": {}
    },
    "Highwayman Gauntlets": {
      "id": 1980200,
      "category": "arms",
      "weight": 2.6,
      "absorptions": {
        "physical": 1.9,
        "strike": 2.5,
        "slash": 1.9,
        "pierce": 2.1,
        "magic": 2.7,
        "fire": 2.7,
        "lightning": 2.8,
        "holy": 2.5
      },
      "resistances": {
        "immunity": 19,
        "robustness": 12,
        "focus": 17,
        "vitality": 17,
        "poise": 3
      },
      "effects": {}
    },
    "High Page Hood": {
      "id": 1990000,
      "category": "head",
      "weight": 1.4,
      "absorptions": {
        "physical": 0.9,
        "strike": 1.8,
        "slash": 0.9,
        "pierce": 0.9,
        "magic": 4.6,
        "fire": 4.2,
        "lightning": 4.4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 15,
        "robustness": 8,
        "focus": 27,
        "vitality": 27,
        "poise": 2
      },
      "effects": {}
    },
    "High Page Clothes": {
      "id": 1990100,
      "category": "body",
      "weight": 5.3,
      "absorptions": {
        "physical": 5.5,
        "strike": 6.9,
        "slash": 5.5,
        "pierce": 5.5,
        "magic": 13.5,
        "fire": 12.8,
        "lightning": 13,
        "holy": 13.2
      },
      "resistances": {
        "immunity": 42,
        "robustness": 23,
        "focus": 76,
        "vitality": 76,
        "poise": 10
      },
      "effects": {}
    },
    "High Page Clothes (Altered)": {
      "id": 1991100,
      "category": "body",
      "weight": 4.3,
      "absorptions": {
        "physical": 4.4,
        "strike": 6.3,
        "slash": 4.4,
        "pierce": 4.4,
        "magic": 13.2,
        "fire": 12.6,
        "lightning": 12.8,
        "holy": 13
      },
      "resistances": {
        "immunity": 34,
        "robustness": 19,
        "focus": 61,
        "vitality": 61,
        "poise": 8
      },
      "effects": {}
    },
    "Rotten Duelist Helm": {
      "id": 2000000,
      "category": "head",
      "weight": 6.4,
      "absorptions": {
        "physical": 5.5,
        "strike": 4.6,
        "slash": 5.8,
        "pierce": 5.5,
        "magic": 4.5,
        "fire": 4.6,
        "lightning": 4.4,
        "holy": 4.5
      },
      "resistances": {
        "immunity": 31,
        "robustness": 31,
        "focus": 14,
        "vitality": 14,
        "poise": 9
      },
      "effects": {}
    },
    "Rotten Gravekeeper Cloak": {
      "id": 2000100,
      "category": "body",
      "weight": 6.3,
      "absorptions": {
        "physical": 6.7,
        "strike": 6.7,
        "slash": 6.7,
        "pierce": 6.7,
        "magic": 8.8,
        "fire": 8.8,
        "lightning": 10.9,
        "holy": 8.8
      },
      "resistances": {
        "immunity": 76,
        "robustness": 32,
        "focus": 42,
        "vitality": 42,
        "poise": 12
      },
      "effects": {}
    },
    "Rotten Duelist Greaves": {
      "id": 2000300,
      "category": "legs",
      "weight": 7.3,
      "absorptions": {
        "physical": 7.4,
        "strike": 6.2,
        "slash": 7.7,
        "pierce": 7.1,
        "magic": 6.2,
        "fire": 6.5,
        "lightning": 5.8,
        "holy": 6.2
      },
      "resistances": {
        "immunity": 35,
        "robustness": 35,
        "focus": 15,
        "vitality": 15,
        "poise": 13
      },
      "effects": {}
    },
    "Rotten Gravekeeper Cloak (Altered)": {
      "id": 2001100,
      "category": "body",
      "weight": 5.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 6.1,
        "slash": 6.1,
        "pierce": 6.1,
        "magic": 8,
        "fire": 8,
        "lightning": 10.2,
        "holy": 8
      },
      "resistances": {
        "immunity": 64,
        "robustness": 25,
        "focus": 34,
        "vitality": 34,
        "poise": 8
      },
      "effects": {}
    },
    "Mushroom Crown": {
      "id": 2010000,
      "category": "head",
      "weight": 9.1,
      "absorptions": {
        "physical": 5.8,
        "strike": 5.9,
        "slash": 6.8,
        "pierce": 7,
        "magic": 4.8,
        "fire": 3.1,
        "lightning": 4.6,
        "holy": 4.8
      },
      "resistances": {
        "immunity": 46,
        "robustness": 45,
        "focus": 18,
        "vitality": 22,
        "poise": 10
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "conditions": {
            "0": "Trigger in Presence of Rot"
          },
          "value_pvp": 1.1
        }
      }
    },
    "Black Dumpling": {
      "id": 2020000,
      "category": "head",
      "weight": 2.7,
      "absorptions": {
        "physical": 2.8,
        "strike": 3.1,
        "slash": 2.8,
        "pierce": 2.8,
        "magic": 3.1,
        "fire": 3.4,
        "lightning": 3.6,
        "holy": 3.1
      },
      "resistances": {
        "immunity": 24,
        "robustness": 15,
        "focus": 0,
        "vitality": 20,
        "poise": 4
      },
      "effects": {
        "0": {
          "attribute": "Attack Power",
          "model": "multiplicative",
          "type": "positive",
          "value": 1.1,
          "conditions": {
            "0": "Madness"
          },
          "value_pvp": 1.1
        }
      }
    },
    "Lazuli Robe": {
      "id": 2030000,
      "category": "body",
      "weight": 4.1,
      "absorptions": {
        "physical": 6.1,
        "strike": 5.3,
        "slash": 4.2,
        "pierce": 2.7,
        "magic": 13.8,
        "fire": 11.9,
        "lightning": 12.4,
        "holy": 12.8
      },
      "resistances": {
        "immunity": 42,
        "robustness": 21,
        "focus": 67,
        "vitality": 67,
        "poise": 8
      },
      "effects": {}
    }
  };

export type accType = {
    head: string[],
    chest: string[],
    legs: string[],
    hands: string[],
}

export const ArmorOptions: accType = Object.entries(ArmorData).reduce((acc: accType, [key, value]) => {
    if (value.category === "head") {
        acc.head.push(key);
    } else if (value.category === "body") {
        acc.chest.push(key);
    } else if (value.category === "legs") {
        acc.legs.push(key);
    } else if (value.category === "arms") {
        acc.hands.push(key);
    }
    return acc;
}, { head: [], chest: [], legs: [], hands: [] });