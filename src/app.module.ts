import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { validate } from './shared/utils/validations/env.validation';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => config],
      validate,
    }),
    DatabaseModule,
    UsersModule,
  ],
})
export class AppModule {}
