import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export default class GetUsersFilterDto {
  @ApiProperty({
    description: '',
    type: [String],
    required: false,
    example: ['518f7913-36b8-4c0a-c0f1-c742e251acdf'],
  })
  @IsOptional()
  @IsString({ each: true, message: 'Fields in "clientIds" must be strings' })
  readonly userIds?: string[];

  @ApiProperty({
    description: '',
    type: [String],
    required: false,
    example: ['79001110102', '79001110103'],
  })
  @IsOptional()
  @IsString({ each: true, message: 'Fields in "userIds" must be strings' })
  readonly phones?: string[];

  @ApiProperty({
    description: '',
    type: Number,
    required: false,
    example: 20,
  })
  @IsOptional()
  @IsNumber()
  readonly take?: number;

  @ApiProperty({
    description: '',
    type: Number,
    required: false,
    example: 20,
  })
  @IsOptional()
  @IsNumber()
  readonly skip?: number;
}
