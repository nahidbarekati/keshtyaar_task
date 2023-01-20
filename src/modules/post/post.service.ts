import { Injectable } from '@nestjs/common';
import { PostRepository } from './repository/post.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostRepository)
        private postRepository: PostRepository,
      ) {}

      async getAllPost() {
        return true
      };
    

    async create(post) {
        const userInfo = await this.postRepository.createPost(
            post,
          );
        return userInfo
    }

}
