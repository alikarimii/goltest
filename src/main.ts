import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectMongoose } from './model/mongo-connector';

async function bootstrap() {
  connectMongoose.connection();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
