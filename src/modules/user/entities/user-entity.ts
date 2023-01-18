import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


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

}