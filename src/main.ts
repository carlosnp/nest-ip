import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** Servicio de configuracion */
  const configService = app.get(ConfigService);
  /** Configuracion del puerto */
  const port = configService.get<number>('EXP_BACKEND_PORT') || 3000;
  /** Prefijo global de la aplicacion */
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(3000);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}
bootstrap();
