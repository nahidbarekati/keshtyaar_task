import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './address.dto';
import {
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {

  @ApiProperty({
    required: true,
    example: 'John',
    description: 'First name of a user',
  })
  @MaxLength(255)
  @MinLength(2)
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    example: 'email@gmail.com',
    description: 'email of user',
  })
  @MaxLength(255)
  @MinLength(2)
  @IsString()
  email: string;

  @ApiProperty({
    required: true,
    example: '03693658754',
    description: 'mobile of user',
  })
  @MaxLength(255)
  @MinLength(2)
  @IsString()
  phone: string;


}
