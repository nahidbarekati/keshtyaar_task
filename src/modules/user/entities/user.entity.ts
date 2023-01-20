import { GroupEntity } from 'src/modules/group/entities/group.entity';
import { PostEntity } from 'src/modules/post/entities/post.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity('Users')
export class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;


  @OneToMany(() => GroupEntity, (group) => group.user)
  groups?: GroupEntity[]; 

  // @OneToMany(() => PostEntity, (post) => post.user)
  // posts?: PostEntity[];



}