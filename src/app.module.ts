import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import database from './config/database.config';
import app from './config/app.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from './modules/group/group.module';
import { GroupService } from './modules/group/group.service';
import { GroupController } from './modules/group/group.controller';
@Module({
  imports: 
  [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app, database],
    }),
    UserModule,
    GroupModule,

  ],
  controllers: [AppController, GroupController],
  providers: [AppService, GroupService],
})
export class AppModule {}
