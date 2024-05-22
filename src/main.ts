import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const config = new DocumentBuilder()
    .setTitle('nestjs swagger bug resport service')
    .setDescription('This is description')
    .setVersion('1.0')
    .build();
  // app is the instance of NestFactory.create()
  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./demo.swagger.json', JSON.stringify(document));
}
bootstrap();
