import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
    USER_REPOSITORY,
} from '../domain/user.repo.js';

import { UserRepo } from './user.repo.js';
import {
    UserSchema,
    UserSchemaFactory,
} from './user.schema.js';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: UserSchema.name,
                schema: UserSchemaFactory,
            },
        ]),
    ],
    providers: [
        UserRepo,
        {
            provide: USER_REPOSITORY,
            useExisting: UserRepo,
        },
    ],
    exports: [
        USER_REPOSITORY,
    ],
})
export class UserPersistenceModule { }