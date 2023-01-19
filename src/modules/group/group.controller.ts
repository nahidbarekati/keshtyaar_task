import { GroupService } from './group.service';
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { routesV1 } from 'src/config/routes.config';
import { GroupDto } from './group_dto';

@ApiTags(routesV1.api_group.swagger_tag)
@Controller(routesV1.public_version)
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @ApiOperation({ summary: 'user api response' })
    @ApiResponse({
    status: HttpStatus.CREATED,
    type: 'jhhk',
    })
    @Post(routesV1.api_group.root)
    ceateUser(@Body() body: GroupDto) {
        const result = this.groupService.create(body);
        return result;
    }

}
