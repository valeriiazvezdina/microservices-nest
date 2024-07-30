import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: 'Login',
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'Must be not empty' })
  @IsString({ message: 'Must be a string' })
  readonly login: string;

  @ApiProperty({
    description: 'Password',
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'Must be not empty' })
  @IsString({ message: 'Must be a string' })
  readonly password: string;
}
