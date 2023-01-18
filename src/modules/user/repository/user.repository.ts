import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user-entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  private readonly logger = new Logger(UserRepository.name);

  @InjectRepository(UserEntity)
  private userRepository: typeof UserEntity;

  public async findAll(): Promise<UserEntity[]> {
    return await this.find({});
  }

  public async findById(userId: any): Promise<UserEntity> {
    return await this.findOne(userId);
  }

  public async createUser(user): Promise<void> {
    const name = user.name;
    const email = user.email;
    const phone = user.phone;
    const userSave = await this.userRepository.save({
      name,
      email,
      phone,
    });

  }
}
