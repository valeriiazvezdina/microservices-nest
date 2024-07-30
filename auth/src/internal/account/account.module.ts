import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { InternalAccountService } from './account.service';

@Module({
  imports: [HttpModule],
  providers: [InternalAccountService],
  exports: [InternalAccountService],
})
export class InternalAccountModule {}
