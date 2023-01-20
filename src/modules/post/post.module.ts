import { Module } from '@nestjs/common';
import { PostEntity } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './repository/post.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService, PostRepository],
  controllers: [PostController],
})
export class PostModule {}
