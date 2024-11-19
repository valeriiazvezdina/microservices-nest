import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InternalAccountService } from './account.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [InternalAccountService],
  exports: [InternalAccountService],
})
export class InternalAccountModule {}
