import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entities/post.entity';
import { GroupService } from 'src/modules/group/group.service';

@Injectable()
export class PostRepository extends Repository<PostEntity> {
  private readonly logger = new Logger(PostRepository.name);

  @InjectRepository(PostEntity)
  private postRepository: typeof PostEntity;

  public async findAll(): Promise<PostEntity[]> {
    return await this.find({});
  }

  public async findById(userId: any): Promise<PostEntity> {
    return await this.findOne(userId);
  }

  public async createPost(post): Promise<void> {
    const title = post.title;
    const desc = post.desc;
    const group_id = post.group_id

    const postSave = await this.postRepository.save(post);

    

  }

  public async updatePost(post: any) {
    let update = await this.postRepository.query(`
    UPDATE "Posts"
    SET 
      "user_id" = "Groups"."user_id"
      FROM "Groups"
        
      WHERE
        "Posts"."group_id" = "Groups"."id"
    `)
  }
}
