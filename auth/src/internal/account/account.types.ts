export type VerificationParams = {
  login: string;
  password: string;
};

export type GetUsersByFiltersParams = {
  userIds?: string[];
  phones?: string[];
  logins?: string[];
};

export type GetUsersResponse = {
  item: Account[];
  total: number;
};

export interface Account {
  userId: string;
  phone: string;
  login: string;
  firstName: string;
  lastName: string;
  password: string;
}
