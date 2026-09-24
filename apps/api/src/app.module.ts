import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration.js';
import { HealthModule } from './modules/health/health.module.js';
import { UsersModule } from './modules/user/user.module.js';
import { RedisModule } from '@/infrastructure/redis/redis.module.js';
import { MongoDbModule } from '@/infrastructure/mongodb/mongodb.module.js';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(__dirname, '../.env'),
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
