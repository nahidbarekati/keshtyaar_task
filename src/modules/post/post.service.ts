import { Injectable } from '@nestjs/common';
import { PostRepository } from './repository/post.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
  ) {}

  async create(post) {
    const postInfo = await this.postRepository.createPost(post);
    return postInfo;
  }
}
