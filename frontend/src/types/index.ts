import { ArmamentStateType, ArmorStateType, GeneralStateType, StatsStateType, TalismanStateType } from "src/features/charplanner/charplannerSlice";

/* apiSlice related types */

export type CustomFormError = {
    data: {
        message: string,
        context: {
            label: string,
        },
    },
    status: number
};

export type CustomError = {
    data: {
        message: string,
        action?: string,
    },
    status: number
};

export const apiSliceTagOptions = ["User", "Build", "Comments", "Likes"] as const;
export type apiSliceTagType = typeof apiSliceTagOptions[number];


/* buildsApiSlice related types */

export const OrderOptions = ["asc", "desc"] as const;
export type OrderType = typeof OrderOptions[number];

export type BuildType<BuildId extends string = string> = {
    _id: BuildId
    id: BuildId
    authorId: string
    author: string
    title: string
    level: number
    stars: number
    general: GeneralStateType
    stats: StatsStateType
    armament: ArmamentStateType
    talisman: TalismanStateType
    armor: ArmorStateType
    createdAt: string
    updatedAt: string
}

export type GetBuildsQueryParamsType = {
    limit: number,
    skip: number,
    field: string,
    order: OrderType,
    title?: string,
    author?: string,
    minLevel: string,
    maxLevel?: string | null,
    minStars: string,
    maxStars?: string | null,
}

export type GetBuildsResponseType = {
    builds: BuildType[],
    totalBuilds: number,
};


/* usersApiSlice related types */

export type UserType = {
    _id: string
    id: string
    username: string
    createdAt: string
    avatarUrl: string
    totalComments: number
    totalStarsGiven: number
};

export type GetBuildsOfUserResponseType = {
    builds: BuildType[],
    totalBuilds: number,
    totalStars: number,
}


/* commentsApiSlice related types */

const NumericOperationOption = ["increment", "decrement"];
export type NumericOperationType = typeof NumericOperationOption[number];

export const TargetTypeOptions = ["Build", "User"] as const
export type TargetTypeType = typeof TargetTypeOptions[number];

export const sortOptions = ["new", "old"] as const;
export type SortCommentsType = typeof sortOptions[number];

const likeTypeOptions = ["like", "dislike"] as const;
export type LikeTypeType = typeof likeTypeOptions[number];

export type CommentType<CommentId extends string = string, ReplyId extends string = string> = {
    id: CommentId,
    authorId: string,
    username: string,
    avatarUrl: string,
    parentId: string | null,
    targetId: string,
    targetType: TargetTypeType,
    content: string,
    totalReplies: number,
    likes: number,
    dislikes: number,
    createdAt: string,
    updatedAt: string,
    repliesIds?: ReplyId[],
    repliesEntities?: Record<ReplyId, CommentType<ReplyId>>,
    lastReplyFetchedTimestamp?: string,
    hasMoreReplies?: boolean,
    hasLiked?: boolean,
    hasDisliked?: boolean,
}

export type GetCommentsResponseType<CommentId extends string> = {
    ids: CommentId[],
    entities: Record<CommentId, CommentType<CommentId>>,
    totalComments: number,
};

export type GetCommentsQueryParamsType = {
    targetId: string,
    targetType: TargetTypeType,
    parentId: string,
    lastFetchedTimestamp: string,
    sort?: SortCommentsType,
    limit?: number,
}

export type AddLikeDislikeMutationParamsType = {
    commentId: string,
    type: LikeTypeType,
    hasLiked?: boolean,
    hasDisliked?: boolean,
} & GetCommentsQueryParamsType

export type RemoveLikeDislikeMutationParamsType = {
    commentId: string,
    type: LikeTypeType,
} & GetCommentsQueryParamsType

export type CreateCommentMutationParamsType = {
    authorId: string,
    username: string,
    avatarUrl: string,
    content: string,
} & GetCommentsQueryParamsType

export type UpdateCommentMutationParamsType = {
    commentId: string,
    content: string,
} & GetCommentsQueryParamsType

export type DeleteCommentMutationParamsType = {
    commentId: string,
    authorId: string,
} & GetCommentsQueryParamsType


/* Popup slice related types */

export const iconMapKeys = ["edit", "delete"] as const;
export type IconMapKeyType = typeof iconMapKeys[number];

const PopupStateTypes = ["NONE", "COMMENT_OPTIONLIST", "COMMENT_DELETE"] as const;
type PopupStateTypeTypes = typeof PopupStateTypes[number];

export type PositionType = {
    left?: number,
    top?: number,
    right?: number,
    bottom?: number,
}

export type CommentOptionlistPropsType = {
    commentId: string,
    authorId: string,
    targetType: TargetTypeType,
    targetId: string,
    parentId: string,
    options: {
        text?: string,
        icon?: IconMapKeyType,
    }[],
}

export type CommentDeletePropsType = {
    commentId: string,
    authorId: string,
    targetType: TargetTypeType,
    targetId: string,
    parentId: string,
}

type PopupPropsType = {
    NONE: {},
    COMMENT_OPTIONLIST: CommentOptionlistPropsType,
    COMMENT_DELETE: CommentDeletePropsType,
};

export type PopupStateType = {
    refId: string | null,
    isOpen: boolean,
    type: PopupStateTypeTypes,
    position: PositionType,
    props: PopupPropsType[PopupStateTypeTypes],
};


/* Toast related types */

const toastTypesArray = ["success", "error"] as const;
export type ToastTypeType = typeof toastTypesArray[number];


/* usersAsAdminApiSlice related types */

export type UserAsAdminType = {
    _id: string
    id: string
    username: string
    email: string
    validated: boolean
    active: boolean
    roles: string[]
    createdAt: string
    updatedAt: string
};




/* data related types */

type AttackElementCorrectParamDataType = {
    "isStrengthCorrect_byPhysics": boolean, // used
    "isDexterityCorrect_byPhysics": boolean, // used
    "isMagicCorrect_byPhysics": boolean, // used
    "isFaithCorrect_byPhysics": boolean, // used
    "isLuckCorrect_byPhysics": boolean, // used
    "isStrengthCorrect_byMagic": boolean, // used
    "isDexterityCorrect_byMagic": boolean, // used
    "isMagicCorrect_byMagic": boolean, // used
    "isFaithCorrect_byMagic": boolean, // used
    "isLuckCorrect_byMagic": boolean, // used
    "isStrengthCorrect_byFire": boolean, // used
    "isDexterityCorrect_byFire": boolean, // used
    "isMagicCorrect_byFire": boolean, // used
    "isFaithCorrect_byFire": boolean, // used
    "isLuckCorrect_byFire": boolean, // used
    "isStrengthCorrect_byThunder": boolean, // used
    "isDexterityCorrect_byThunder": boolean, // used
    "isMagicCorrect_byThunder": boolean, // used
    "isFaithCorrect_byThunder": boolean, // used
    "isLuckCorrect_byThunder": boolean, // used
    "isStrengthCorrect_byDark": boolean, // used
    "isDexterityCorrect_byDark": boolean, // used
    "isMagicCorrect_byDark": boolean, // used
    "isFaithCorrect_byDark": boolean, // used
    "isLuckCorrect_byDark": boolean, // used
    //"pad1": number,
    //"overwriteStrengthCorrectRate_byPhysics": number,
    //"overwriteDexterityCorrectRate_byPhysics": number,
    //"overwriteMagicCorrectRate_byPhysics": number,
    //"overwriteFaithCorrectRate_byPhysics": number,
    //"overwriteLuckCorrectRate_byPhysics": number,
    //"overwriteStrengthCorrectRate_byMagic": number,
    //"overwriteDexterityCorrectRate_byMagic": number,
    //"overwriteMagicCorrectRate_byMagic": number,
    //"overwriteFaithCorrectRate_byMagic": number,
    //"overwriteLuckCorrectRate_byMagic": number,
    //"overwriteStrengthCorrectRate_byFire": number,
    //"overwriteDexterityCorrectRate_byFire": number,
    //"overwriteMagicCorrectRate_byFire": number,
    //"overwriteFaithCorrectRate_byFire": number,
    //"overwriteLuckCorrectRate_byFire": number,
    //"overwriteStrengthCorrectRate_byThunder": number,
    //"overwriteDexterityCorrectRate_byThunder": number,
    //"overwriteMagicCorrectRate_byThunder": number,
    //"overwriteFaithCorrectRate_byThunder": number,
    //"overwriteLuckCorrectRate_byThunder": number,
    //"overwriteStrengthCorrectRate_byDark": number,
    //"overwriteDexterityCorrectRate_byDark": number,
    //"overwriteMagicCorrectRate_byDark": number,
    //"overwriteFaithCorrectRate_byDark": number,
    //"overwriteLuckCorrectRate_byDark": number,
    //"InfluenceStrengthCorrectRate_byPhysics": number,
    //"InfluenceDexterityCorrectRate_byPhysics": number,
    //"InfluenceMagicCorrectRate_byPhysics": number,
    //"InfluenceFaithCorrectRate_byPhysics": number,
    //"InfluenceLuckCorrectRate_byPhysics": number,
    //"InfluenceStrengthCorrectRate_byMagic": number,
    //"InfluenceDexterityCorrectRate_byMagic": number,
    //"InfluenceMagicCorrectRate_byMagic": number,
    //"InfluenceFaithCorrectRate_byMagic": number,
    //"InfluenceLuckCorrectRate_byMagic": number,
    //"InfluenceStrengthCorrectRate_byFire": number,
    //"InfluenceDexterityCorrectRate_byFire": number,
    //"InfluenceMagicCorrectRate_byFire": number,
    //"InfluenceFaithCorrectRate_byFire": number,
    //"InfluenceLuckCorrectRate_byFire": number,
    //"InfluenceStrengthCorrectRate_byThunder": number,
    //"InfluenceDexterityCorrectRate_byThunder": number,
    //"InfluenceMagicCorrectRate_byThunder": number,
    //"InfluenceFaithCorrectRate_byThunder": number,
    //"InfluenceLuckCorrectRate_byThunder": number,
    //"InfluenceStrengthCorrectRate_byDark": number,
    //"InfluenceDexterityCorrectRate_byDark": number,
    //"InfluenceMagicCorrectRate_byDark": number,
    //"InfluenceFaithCorrectRate_byDark": number,
    //"InfluenceLuckCorrectRate_byDark": number,
    //"pad2": number
}

export type AttackElementCorrectParamType = {
    [key: string]: AttackElementCorrectParamDataType
}

type CalcCorrectGraphEzDataType = {
    [key: string]: number
}

export type CalcCorrectGraphEzType = {
    [key: string]: CalcCorrectGraphEzDataType
}

export type CompatibleAowDataType = {
    [key: string]: string[]
}

type ConsumableDataEntryType = {
    "AtkID": number,
    "attackBasePhysics": number,
    "attackBaseMagic": number,
    "attackBaseFire": number,
    "attackBaseThunder": number,
    "attackBaseDark": number
}

export type ConsumableDataType = {
    [key: string]: ConsumableDataEntryType
}

export type ItemEffectDataType = {
    "Import Effects": string, // used
    "conditionHp": number, // used
    "conditionHpRate": number, // used
    "addLifeForceStatus": number, // used
    "addWillpowerStatus": number, // used
    "addEndureStatus": number, // used
    "addStrengthStatus": number, // used
    "addDexterityStatus": number, // used
    "addMagicStatus": number, // used
    "addFaithStatus": number, // used
    "addLuckStatus": number, // used
    "maxHpRate": number, // used
    "maxMpRate": number, // used
    "maxStaminaRate": number, // used
    "equipWeightChangeRate": number, // used
    "neutralDamageCutRate": number, // used
    "blowDamageCutRate": number, // used
    "slashDamageCutRate": number, // used
    "thrustDamageCutRate": number, // used
    "magicDamageCutRate": number, // used
    "fireDamageCutRate": number, // used
    "thunderDamageCutRate": number, // used
    "darkDamageCutRate": number, // used
    //"defEnemyDmgCorrectRate_Physics": number,
    //"defEnemyDmgCorrectRate_Magic": number,
    //"defEnemyDmgCorrectRate_Fire": number,
    //"defEnemyDmgCorrectRate_Thunder": number,
    //"defEnemyDmgCorrectRate_Dark": number,
    //"defPlayerDmgCorrectRate_Physics": number,
    //"defPlayerDmgCorrectRate_Magic": number,
    //"defPlayerDmgCorrectRate_Fire": number,
    //"defPlayerDmgCorrectRate_Thunder": number,
    //"defPlayerDmgCorrectRate_Dark": number,
    "changePoisonResistPoint": number, // used
    //"changeDiseaseResistPoint": number,
    "changeBloodResistPoint": number, // used
    //"changeFreezeResistPoint": number,
    "changeSleepResistPoint": number, // used
    //"changeMadnessResistPoint": number,
    "changeCurseResistPoint": number, // used
    //"physicsAttackPowerRate": number,
    //"magicAttackPowerRate": number,
    //"fireAttackPowerRate": number,
    //"thunderAttackPowerRate": number,
    //"darkAttackPowerRate": number,
    "itemDropRate": number // used
}

export type EffectDataType = {
    [key: string]: ItemEffectDataType
}

export type EquipParamProtectorDataType = {
    //"Name": string,
    //"sortId": number,
    "resistSleep": number, // used
    //"resistMadness": number,
    "toughnessCorrectRate": number, // used
    "weight": number, // used
    //"residentSpEffectId": number,
    //"residentSpEffectId2": number,
    //"residentSpEffectId3": number,
    "resistPoison": number, // used
    //"resistDisease": number,
    "resistBlood": number, // used
    "resistCurse": number, // used
    //"protectorCategory": number,
    "neutralDamageCutRate": number, // used
    "slashDamageCutRate": number, // used
    "blowDamageCutRate": number, // used
    "thrustDamageCutRate": number, // used
    "magicDamageCutRate": number, // used
    "fireDamageCutRate": number, // used
    "thunderDamageCutRate": number, // used
    "darkDamageCutRate": number, // used
    //"resistFreeze": number
}

export type EquipParamProtectorType = {
    [key: string]: EquipParamProtectorDataType
}

type EquipParamWeaponDataType = {
    //"sortId": number,
    "weight": number, // used
    "correctStrength": number, // used
    "correctAgility": number, // used
    "correctMagic": number, // used
    "correctFaith": number, // used
    //"physGuardCutRate": number,
    //"magGuardCutRate": number,
    //"fireGuardCutRate": number,
    //"thunGuardCutRate": number,
    "spEffectBehaviorId0": number, // used
    "spEffectBehaviorId1": number, // used
    //"spEffectBehaviorId2": number,
    //"residentSpEffectId": number,
    //"residentSpEffectId1": number,
    //"residentSpEffectId2": number,
    //"originEquipWep": number,
    //"originEquipWep1": number,
    //"originEquipWep11": number,
    //"weakA_DamageRate": number,
    //"weakB_DamageRate": number,
    //"weakC_DamageRate": number,
    //"weakD_DamageRate": number,
    //"saWeaponDamage": number,
    "attackBasePhysics": number, // used
    "attackBaseMagic": number, // used
    "attackBaseFire": number, // used
    "attackBaseThunder": number, // used
    //"attackBaseStamina": number,
    //"staminaGuardDef": number,
    "reinforceTypeId": number, // used
    //"throwAtkRate": number,
    "correctType_Physics": number, // used
    "properStrength": number, // used
    "properAgility": number, // used
    "properMagic": number, // used
    "properFaith": number, // used
    //"guardCutCancelRate": number,
    //"poisonGuardResist": number,
    //"diseaseGuardResist": number,
    //"bloodGuardResist": number,
    //"curseGuardResist": number,
    //"atkAttribute": number,
    "enableMagic": boolean, // used
    "enableMiracle": boolean, // used
    //"isEnhance": boolean,
    //"disableGemAttr": boolean,
    //"isDualBlade": boolean,
    "correctType_Magic": number, // used
    "correctType_Fire": number, // used
    "correctType_Thunder": number, // used
    //"darkGuardCutRate": number,
    "attackBaseDark": number, // used
    "correctType_Dark": number, // used
    "correctType_Poison": number, // used
    //"atkAttribute2": number,
    //"sleepGuardResist": number,
    //"madnessGuardResist": number,
    "correctType_Blood": number, // used
    "properLuck": number, // used
    //"freezeGuardResist": number,
    //"swordArtsParamId": number,
    "correctLuck": number, // used
    //"staminaConsumptionRate": number,
    "attackElementCorrectId": number, // used
    "correctType_Sleep": number, // used
    "correctType_Madness": number, // used
    //"gemMountType": number
}

export type EquipParamWeaponType = {
    [key: string]: EquipParamWeaponDataType
}

type ReinforceParamWeaponDataType = {
    "physicsAtkRate": number, // used
    "magicAtkRate": number, // used
    "fireAtkRate": number, // used
    "thunderAtkRate": number, // used
    //"staminaAtkRate": number,
    //"saWeaponAtkRate": number,
    //"saDurabilityRate": number,
    "correctStrengthRate": number, // used
    "correctAgilityRate": number, // used
    "correctMagicRate": number, // used
    "correctFaithRate": number, // used
    //"physicsGuardCutRate": number,
    //"magicGuardCutRate": number,
    //"fireGuardCutRate": number,
    //"thunderGuardCutRate": number,
    //"poisonGuardResistRate": number,
    //"diseaseGuardResistRate": number,
    //"bloodGuardResistRate": number,
    //"curseGuardResistRate": number,
    //"staminaGuardDefRate": number,
    "spEffectId1": number, // used
    "spEffectId2": number, // used
    //"spEffectId3": number,
    "darkAtkRate": number, // used
    //"darkGuardCutRate": number,
    "correctLuckRate": number, // used
    //"freezeGuardDefRate": number,
    //"sleepGuardDefRate": number,
    //"madnessGuardDefRate": number,
    //"baseAtkRate": number
}

export type ReinforceParamWeaponType = {
    [key: string]: ReinforceParamWeaponDataType
}

type StatusEffectDataEntryType = {
    //"statusType": string,
    "poizonAttackPower": number, // used
    "diseaseAttackPower": number, // used
    "bloodAttackPower": number, // used
    "freezeAttackPower": number, // used
    "sleepAttackPower": number, // used
    "madnessAttackPower": number, // used
    "curseAttackPower": number, // used
    //"effectEndurance": number,
    //"changeHpRate": number,
    //"changeHpPoint": number,
    //"changeMpRate": number,
    //"changeMpPoint": number,
    //"neutralDamageCutRate": number
}

export type StatusEffectDataType = {
    [key: string]: StatusEffectDataEntryType
}

type WeaponsDataEntryType = {
    "Weapon Class": string,  // used
    "ID": number,  // used
    "isInfuse": boolean,  // used
    "isReinforce": boolean,  // used
    "isUnique": boolean, // used
    "bothHandsAtkBonus": boolean, // used
    "throwable": boolean, // used
    // "waAttackElementCorrectId": string,
    "specialStatusSpEffectId": number | string,  // used
    // "castingBonusType": string,
    // "castingBonusRate": number | string,
    // "defaultPhysType": string
    "Default Ash of War": string
}

export type WeaponsDataType = {
    [key: string]: WeaponsDataEntryType
}