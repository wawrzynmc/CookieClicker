import mongoose, { Schema } from 'mongoose';
import { Password } from '../utils/password';

// * -- INTERFACES
// ---- user attributes (required to create a user)
interface UserAttrs {
    email: string;
    password: string;
}

// ---- user properties (User Document - properties of a single entity)
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    role: UserRoles;
    achivements: mongoose.Types.ObjectId[];
}

// ---- user model properties and methods (represents entire collection of data)
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

// -- user roles
export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user',
}

// * -- SCHEMA
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: UserRoles.USER,
            enum: Object.values(UserRoles),
        },
        achivements: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Achivement',
            },
        ],
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.password;
            },
            versionKey: false, // remove __v from reply
        },
    }
);

userSchema.pre('save', async function (done) {
    // -- run this only when password was modified during save
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
