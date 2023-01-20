import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import app from './config/app.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from './modules/group/group.module';
import { PostModule } from './modules/post/post.module';
@Module({
  imports: 
  [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app],
    }),
    UserModule,
    GroupModule,
    PostModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
