import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { routesV1 } from 'src/config/routes.config';
import { UserService } from './user.service';
import { UserDto } from './user_dto';

@ApiTags(routesV1.api_user.swagger_tag)
@Controller(routesV1.public_version)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'user api response' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: UserDto,
  })
  @Post(routesV1.api_user.root)
  ceateUser(@Body() body: UserDto) {
    const result = this.userService.create(body);
    return result;
  }

  @ApiOperation({ summary: '' })
  @Get(routesV1.api_user.root)
  findAllWithOutGroup() {
    const result = this.userService.findAllWithOutGroup();
    return result;
  }

  @ApiOperation({ summary: '' })
  @Get(routesV1.api_user.list)
  getAllUser() {
    const result = this.userService.getAlluser();
    return result;
  }
}
