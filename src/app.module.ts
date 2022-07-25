import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from './config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
