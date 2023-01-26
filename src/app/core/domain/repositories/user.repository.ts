import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = {
  email: string;
  password: string;
};

export type GetUserParams = {
  userId: string;
  accessToken: string;
};

export abstract class UserRepository {
  abstract login(params: LoginParams): Observable<UserModel>;
  abstract register(params: RegisterParams): Observable<UserModel>;
  abstract getUser(params: GetUserParams): Observable<UserModel>;
}
