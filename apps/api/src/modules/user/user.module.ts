import { Module } from '@nestjs/common';
import { UserService } from './application/user.service.js';
import { UserController } from './user.controller.js';
import { UserPersistenceModule } from './infra/user-persistence.module.js';

@Module({
  providers: [
    UserService,
  ],
  imports: [
    UserPersistenceModule,
  ],
  exports: [UserService],
  controllers: [UserController]
})
export class UsersModule {}