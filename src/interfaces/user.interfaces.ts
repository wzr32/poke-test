interface IUser {
  id: number;
  email: string;
}

export interface IAuthUserToken {
  token: string;
  user: IUser;
}
