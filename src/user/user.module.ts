import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { UserEntity } from './entities/user-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, UserEntity]),

  ],
  providers: [UserService, UserRepository],
  controllers: [UserController]
})
export class UserModule {}
