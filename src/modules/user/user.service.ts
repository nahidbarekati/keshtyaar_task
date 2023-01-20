import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getAlluser() {
    const userInfo = await this.userRepository.findAll();
    return userInfo;
  }

  async findAllWithOutGroup() {
    const userInfo = await this.userRepository.findAllWithOutGroup();
    return userInfo;
  }

  async create(user) {
    const userInfo = await this.userRepository.createUser(user);
    return userInfo;
  }
}
