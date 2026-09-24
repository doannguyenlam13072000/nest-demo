import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    port: parseInt(process.env.PORT ?? '3000', 10),
    environment: process.env.NODE_ENV ?? 'development',

    mongodb: {
        uri: process.env.MONGODB_URI,
    },

    redis: {
        url: process.env.REDIS_URL,
    },
}));