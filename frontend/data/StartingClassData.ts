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

export default StartingClassData