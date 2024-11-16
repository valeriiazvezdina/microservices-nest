import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: 'login',
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'must be filled' })
  @IsString({ message: 'must be a string' })
  readonly login: string;

  @ApiProperty({
    description: 'password',
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'must be filled' })
  @IsString({ message: 'must be a string' })
  readonly password: string;
}
