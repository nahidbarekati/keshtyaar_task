import { NestFactory, NestApplication } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import swaggerInit from './swagger';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);
  app.use(helmet());

  // -- Cors setup
  app.enableCors();

  // Swagger
  await swaggerInit(app);

  // -- Start listening
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
