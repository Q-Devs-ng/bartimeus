import { AppEnvironment } from '@src/internals/env';
import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, validateSync } from 'class-validator';

export class EnvironmentVariables {
  @IsNotEmpty()
  @IsEnum(() => AppEnvironment)
  NODE_ENV: AppEnvironment;

  @IsNotEmpty()
  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  SERVICE_NAME: string;

  @IsNotEmpty()
  SERVICE_SECRET: string;

  @IsNotEmpty()
  REDIS_URL: string;

  @IsNotEmpty()
  MONGODB_URL: string;

  @IsNotEmpty()
  JWT_SECRET: string;

  @IsNotEmpty()
  SESSION_TTL = 30000;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
