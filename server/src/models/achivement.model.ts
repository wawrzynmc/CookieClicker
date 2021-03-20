import mongoose, { Schema } from 'mongoose';

// * -- INTERFACES
// ---- user attributes (required to create a user)
interface AchivementAttrs {
    title: string;
    description: string;
    points: number;
    level: number;
}

// ---- user properties (User Document - properties of a single entity)
interface AchivementDoc extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    points: number;
    level: number;
}

// ---- user model properties and methods (represents entire collection of data)
interface AchivementModel extends mongoose.Model<AchivementDoc> {
    build(attrs: AchivementAttrs): AchivementDoc;
}

// * -- SCHEMA
const achivementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        points: {
            type: Number,
            min: 0,
        },
        level: {
            type: Number,
            min: 0,
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
            versionKey: false, // remove __v from reply
        },
    }
);

achivementSchema.statics.build = (attrs: AchivementAttrs) => {
    return new Achivement(attrs);
};

const Achivement = mongoose.model<AchivementDoc, AchivementModel>('Achivement', achivementSchema);

export { Achivement };
