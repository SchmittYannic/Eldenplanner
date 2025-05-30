import mongoose from "mongoose";

const buildSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            required: true,
        },
        stars: {
            type: Number,
            default: 0,
            validate: {
                validator: function (value) {
                    return value >= 0;
                },
                message: "stars cannot be negative"
            }
        },
        general: {
            charactername: {
                type: String,
                required: true,
            },
            startingclass: {
                type: String,
                required: true,
            },
            greatrune: {
                type: String,
                default: "",
            },
            greatruneactive: {
                type: Boolean,
                required: true,
            },
        },
        stats: {
            vigor: {
                type: Number,
                required: true,
            },
            mind: {
                type: Number,
                required: true,
            },
            endurance: {
                type: Number,
                required: true,
            },
            strength: {
                type: Number,
                required: true,
            },
            dexterity: {
                type: Number,
                required: true,
            },
            intelligence: {
                type: Number,
                required: true,
            },
            faith: {
                type: Number,
                required: true,
            },
            arcane: {
                type: Number,
                required: true,
            },
        },
        armament: {
            lefthand1: {
                weapon: {
                    type: String,
                    default: "",
                },
                aow: {
                    type: String,
                    default: "",
                },
                upgrade: {
                    type: String,
                    default: "",
                },
                affinity: {
                    type: String,
                    default: "",
                }
            },
            lefthand2: {
                weapon: {
                    type: String,
                    default: "",
                },
                aow: {
                    type: String,
                    default: "",
                },
                upgrade: {
                    type: String,
                    default: "",
                },
                affinity: {
                    type: String,
                    default: "",
                }
            },
            lefthand3: {
                weapon: {
                    type: String,
                    default: "",
                },
                aow: {
                    type: String,
                    default: "",
                },
                upgrade: {
                    type: String,
                    default: "",
                },
                affinity: {
                    type: String,
                    default: "",
                }
            },
            righthand1: {
                weapon: {
                    type: String,
                    default: "",
                },
                aow: {
                    type: String,
                    default: "",
                },
                upgrade: {
                    type: String,
                    default: "",
                },
                affinity: {
                    type: String,
                    default: "",
                }
            },
            righthand2: {
                weapon: {
                    type: String,
                    default: "",
                },
                aow: {
                    type: String,
                    default: "",
                },
                upgrade: {
                    type: String,
                    default: "",
                },
                affinity: {
                    type: String,
                    default: "",
                }
            },
            righthand3: {
                weapon: {
                    type: String,
                    default: "",
                },
                aow: {
                    type: String,
                    default: "",
                },
                upgrade: {
                    type: String,
                    default: "",
                },
                affinity: {
                    type: String,
                    default: "",
                }
            },
            twohand: {
                type: Boolean,
                required: true,
            },
        },
        talisman: {
            talisman1: {
                type: String,
                default: "",
            },
            talisman2: {
                type: String,
                default: "",
            },
            talisman3: {
                type: String,
                default: "",
            },
            talisman4: {
                type: String,
                default: "",
            },
        },
        armor: {
            head: {
                type: String,
                default: "",
            },
            chest: {
                type: String,
                default: "",
            },
            hands: {
                type: String,
                default: "",
            },
            legs: {
                type: String,
                default: "",
            },
        },
        modifiedByUserAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true
    }
);

buildSchema.pre("save", function (next) {
    // If the document is new (i.e. being created), set modifiedByUserAt to createdAt
    if (this.isNew) {
        this.modifiedByUserAt = this.createdAt;
    }
    next();
});

buildSchema.index({ userId: 1 });

export default mongoose.model("Build", buildSchema);