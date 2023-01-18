import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from 'src/data';
import { UserRepository } from './repository/user.repository';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
      ) {}

      async getAlluser() {
        return users
      };
    
      async getUsers() {
       let getuser = await users.map((user) => {
            let info = {
                users : {
                    name: user.name,
                    id: user.id,
                    email: user.email,
                    phone: user.phone,
                    Posts: user.Groups.map((group) => {
                        const newGroup = {
                            ...group.Posts,
                            user_id: group.user_id
                        };
                        return newGroup
                    }),
                }       
                    
            }
            return info
        })

      return getuser
        
        
    }

    async create(user) {
        const userInfo = await this.userRepository.createUser(
            user,
          );
        return userInfo
    }

    
    

}
