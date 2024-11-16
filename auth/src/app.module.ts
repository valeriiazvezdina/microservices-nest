import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [AuthModule],
})
export class AppModule {}
