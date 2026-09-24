import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserSchema>;

@Schema({
    collection: 'users',
    timestamps: true,
})
export class UserSchema {
    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: true,
        unique: true,
        index: true,
    })
    email: string;
}

export const UserSchemaFactory =
    SchemaFactory.createForClass(UserSchema);