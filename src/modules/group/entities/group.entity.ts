import { PostEntity } from 'src/modules/post/entities/post.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('Groups')
export class GroupEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column({ nullable: true })
  user_id: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;

  @OneToMany(() => PostEntity, (post) => post.group)
  posts?: PostEntity[];
}
