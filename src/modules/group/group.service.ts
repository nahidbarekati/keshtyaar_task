import { Injectable } from '@nestjs/common';
import { GroupRepository } from './repository/group.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
  ) {}

  async getAllGroup() {
    return true;
  }

  async create(group) {
    const userInfo = await this.groupRepository.createGroup(group);
    return userInfo;
  }
}
