import { ApiProperty } from '@nestjs/swagger';

import {
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsNumber
} from 'class-validator';

export class GroupDto {

  @ApiProperty({
    example: 'programer',
    description: 'group_name of a group',
  })
  @MaxLength(255)
  @MinLength(2)
  @IsString()
  group_name: string;

  @ApiProperty({
    example: 1,
    description: 'id user_id',
  })

  @IsNumber()
  user_id: number;


}
