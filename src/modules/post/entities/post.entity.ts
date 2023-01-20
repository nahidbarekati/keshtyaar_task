import { GroupEntity } from 'src/modules/group/entities/group.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity('Posts')
export class PostEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column({nullable: true})
  group_id: number;

  // @Column({nullable: true}) 
  // @Column()
  // user_id: number;

  @ManyToOne(() => GroupEntity)
  @JoinColumn({ name: 'group_id', referencedColumnName: 'id' })
  group?: GroupEntity;

  // @ManyToOne(() => UserEntity)
  // @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  // user?: GroupEntity;

}