import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from '../entities/group-entity';

@Injectable()
export class GroupRepository extends Repository<GroupEntity> {
  private readonly logger = new Logger(GroupRepository.name);

  @InjectRepository(GroupEntity)
  private groupRepository: typeof GroupEntity;

  public async findAll(): Promise<GroupEntity[]> {
    return await this.find({});
  }

  public async findById(userId: any): Promise<GroupEntity> {
    return await this.findOne(userId);
  }

  public async createGroup(group): Promise<void> {
    const group_name = group.group_name;
    const user_id = group.id

    const groupSave = await this.groupRepository.save({
      group_name,
      user_id
    });

  }
}
