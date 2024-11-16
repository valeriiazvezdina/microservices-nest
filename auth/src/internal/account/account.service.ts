import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  GetUsersByFiltersParam,
  GetUsersResponse,
  VerificationParams,
} from './account.types';

@Injectable()
export class InternalAccountService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async verification(params: VerificationParams): Promise<boolean> {
    const url = `${this.config.get('ACCOUNT_URL')}/v1/user/verification`;
    const res = await this.httpService.axiosRef.get(url, { params });

    return res.data;
  }

  async getUsersByFilter(
    params: GetUsersByFiltersParam,
  ): Promise<GetUsersResponse> {
    const url = `${this.config.get('ACCOUNT_URL')}/v1/user/`;
    const res = await this.httpService.axiosRef.get(url, { params });

    return res.data;
  }
}
