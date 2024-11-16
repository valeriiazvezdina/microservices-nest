import { ApiProperty } from '@nestjs/swagger';

export class JwtDto {
  @ApiProperty({
    description: 'access JWT',
    type: String,
    required: true,
  })
  access: string;

  @ApiProperty({
    description: 'refresh JWT',
    type: String,
    required: true,
  })
  refresh: string;
}

export class RefreshJwtDto {
  @ApiProperty({
    description: 'refresh JWT',
    type: String,
    required: true,
  })
  readonly refresh: string;
}
