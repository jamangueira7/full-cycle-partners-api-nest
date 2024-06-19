import { NestFactory } from '@nestjs/core';
import { Partner1Module } from './partner1.module';

async function bootstrap() {
  const app = await NestFactory.create(Partner1Module);
  console.log('PARTNER 1 CONNECTED!')
  await app.listen(3000);
}
bootstrap();
