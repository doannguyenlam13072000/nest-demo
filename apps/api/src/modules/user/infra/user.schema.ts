import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserSchema>;

@Schema({
    collection: 'users',
    timestamps: true,
})
export class UserSchema {
    @Prop({
        type: String,
        required: true,
    })
    name: string;

    @Prop({
        type: String,
        required: true,
        unique: true,
        index: true,
    })
    email: string;

    createdAt: Date;
    updatedAt: Date;
}

export const UserSchemaFactory = SchemaFactory.createForClass(UserSchema);