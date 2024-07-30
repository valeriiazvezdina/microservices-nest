import { IsEnum, IsString } from 'class-validator';
import { Environment } from './types/configurations.enums';

export class ApplicationConfig {
  @IsEnum(Environment, { always: true })
  NODE_ENV: Environment;

  @IsString({ always: true })
  SERVICE_NAME: Environment;

  @IsString({ always: true })
  HTTP_HOST: Environment;

  @IsString({ always: true })
  HTTP_PORT: Environment;

  @IsString({ always: true })
  HTTP_PREFIX: Environment;

  @IsString({ always: true })
  HTTP_VERSION: Environment;
}
