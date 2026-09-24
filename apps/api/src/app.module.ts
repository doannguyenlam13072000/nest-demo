import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration.js';
import { HealthModule } from './modules/health/health.module.js';
import { UsersModule } from './modules/user/user.module.js';
import { RedisModule } from '@/infrastructure/redis/redis.module.js';
import { MongoDbModule } from '@/infrastructure/mongodb/mongodb.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration]
    }),

    HealthModule,
    UsersModule,
    MongoDbModule,
    RedisModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
