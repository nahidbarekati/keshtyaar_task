import { PostService } from './post.service';
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { routesV1 } from 'src/config/routes.config';
import { PostDto } from './post_dto';

@ApiTags(routesV1.api_post.swagger_tag)
@Controller(routesV1.public_version)
export class PostController {
    constructor(private readonly postService: PostService) {}

    @ApiOperation({ summary: 'user api response' })
    @ApiResponse({
    status: HttpStatus.CREATED,
    type: 'jhhk',
    })
    @Post(routesV1.api_post.root)
    ceatePost(@Body() body: PostDto) {
        const result = this.postService.create(body);
        return result;
    }

}
