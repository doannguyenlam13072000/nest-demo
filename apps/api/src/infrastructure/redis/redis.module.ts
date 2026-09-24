import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';

export const REDIS = Symbol('REDIS');

@Global()
@Module({
    providers: [
        {
            provide: REDIS,
            inject: [ConfigService],

            useFactory: (config: ConfigService) => {
                const url = config.getOrThrow<string>('app.redis.url');

                return new Redis(url);
            },
        },
    ],

    exports: [REDIS],
})
export class RedisModule { }