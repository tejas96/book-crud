import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allow all HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Allow headers
    credentials: true, // Allow cookies and authentication headers
  });
  await app.listen(3001);
}
bootstrap();
