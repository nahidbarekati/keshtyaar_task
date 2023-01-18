import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import database from './config/database.config';
import app from './config/app.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: 
  [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app, database],
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
