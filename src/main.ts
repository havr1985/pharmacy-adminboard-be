import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Tournament Tracker Swagger')
    .setDescription('Tournament Tracker API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
    }),
  );

  app.enableCors({
    origin: [
      configService.get<string>('CORS_ORIGIN'),
      configService.get<string>('CORS_ORIGIN_LOCALHOST'),
    ],
    methods: 'GET, HEAD, POST, PUT, PATCH, DELETE, PATCH, OPTIONS',
    credentials: true,
  });

  const port = configService.get<number>('APP_PORT');
  await app.listen(port, () => console.log(`Server running on port ${port}`));
}
bootstrap();
