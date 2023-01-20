import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  private readonly logger = new Logger(UserRepository.name);

  @InjectRepository(UserEntity)
  private userRepository: typeof UserEntity;

  public async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find({
      relations: ['groups', 'groups.posts'],
    });
  }

  public async findAllWithOutGroup(): Promise<UserEntity[]> {
    return await this.userRepository.find({
      relations: ['posts'],
    });
  }

  public async createUser(user): Promise<void> {
    const userSave = await this.userRepository.save(user);
    return userSave;
  }
}
