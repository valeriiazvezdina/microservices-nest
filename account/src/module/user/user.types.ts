export type SearchUserParams = {
  userIds?: string[];
  phones?: string[];
  take?: number;
  skip?: number;
};

export type CheckExistUserParams = {
  phone: string;
  login: string;
};
