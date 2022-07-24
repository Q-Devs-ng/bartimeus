import { AppEnvironment } from '@src/internals/env';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class Env {
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
