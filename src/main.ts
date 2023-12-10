import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS_OPTIONS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  // Set logger middleware
  app.use(morgan('short'));
  app.setGlobalPrefix('api');
  app.enableCors(CORS_OPTIONS);
  await app.listen(configService.get('PORT'));

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
