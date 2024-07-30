import { ApiProperty } from '@nestjs/swagger';

export class JwtDto {
  @ApiProperty({
    description: 'JWT access',
    type: String,
    required: true,
  })
  access: string;

  @ApiProperty({
    description: 'JWT refresh',
    type: String,
    required: true,
  })
  refresh: string;
}

export class RefreshJwtDto {
  @ApiProperty({
    description: 'JWT refresh',
    type: String,
    required: true,
  })
  readonly refresh: string;
}
