import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { IsString } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class UserDto {
  /*
  @ApiProperty({
    description: 'User id',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  userId: string;
  
  @ApiProperty({
    description: 'User  email',
    required: true,
    type: String,
  })
  email: string;
  */

  @ApiProperty({
    description: 'User login',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  login: string;

  @ApiProperty({
    description: 'User phone',
    required: true,
    type: String,
  })
  phone: string;

  @ApiProperty({
    description: 'User first name',
    required: true,
    type: String,
  })
  firstName: string;

  @ApiProperty({
    description: 'User last name',
    required: true,
    type: String,
  })
  lastName: string;

  /*
  @ApiProperty({
    description: 'User middle name',
    required: false,
    type: String,
  })
  middleName: string;
  */

  constructor(entity: Partial<UserEntity>) {
    return plainToInstance(UserDto, entity);
  }
}
