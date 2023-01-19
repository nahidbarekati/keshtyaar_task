import { Module } from '@nestjs/common';
import { GroupEntity } from './entities/group-entity';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { GroupRepository } from './repository/group.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([GroupRepository, GroupEntity]),
    
      ],
      providers: [GroupService, GroupRepository],
      controllers: [GroupController]
})
export class GroupModule {}
