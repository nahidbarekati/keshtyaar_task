import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength, IsNumber } from 'class-validator';

export class PostDto {
  @ApiProperty({
    example: 'programer',
    description: 'title of a post',
  })
  @MaxLength(255)
  @MinLength(2)
  @IsString()
  title: string;

  @ApiProperty({
    example: 'programer',
    description: 'desc of a post',
  })
  @MaxLength(255)
  @MinLength(2)
  @IsString()
  desc: string;

  @ApiProperty({
    example: 1,
    description: 'id group_id',
  })
  @IsNumber()
  group_id: number;

  // @ApiProperty({
  //   example: 1,
  //   description: 'id user_id',
  // })
  // @IsNumber()
  // user_id: number;
}
