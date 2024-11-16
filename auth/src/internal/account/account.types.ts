import { Account } from './account.interfaces';

export type VerificationParams = {
  login: string;
  password: string;
};

export type GetUsersByFiltersParam = {
  userIds?: string[];
  phones?: string[];
  login?: string;
};

export type GetUsersResponse = {
  items: Account[];
  total: number;
};
