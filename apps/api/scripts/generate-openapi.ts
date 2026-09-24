import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { stringify } from 'yaml';

import { AppModule } from '../src/app.module.js';

async function generateOpenApi() {
    
    const app = await NestFactory.create(AppModule, {
        logger: false
    });

    const config = new DocumentBuilder()
        .setTitle('Nest Demo API')
        .setDescription('Nest Demo REST API')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    const outputPath = resolve(
        process.cwd(),
        'packages/restapi/openapi.yaml',
    );

    await mkdir(dirname(outputPath), {
        recursive: true,
    });

    await writeFile(
        outputPath,
        stringify(document),
        'utf8',
    );

    await app.close();

    console.log(`OpenAPI generated: ${outputPath}`);
}

generateOpenApi().then(() => {
    console.log('Generate successfully!');
    process.exit(0)
    
}).catch((error) => {    
    console.error(error);
    process.exit(1);
});