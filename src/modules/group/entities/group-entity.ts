import { UserEntity } from 'src/modules/user/entities/user-entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity('Groups')
export class GroupEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  user_id: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;

}