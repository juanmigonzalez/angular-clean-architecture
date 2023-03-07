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

export abstract class UserMeRepository {
  abstract login(params: LoginParams): Observable<UserModel>;
  abstract register(params: RegisterParams): Observable<UserModel>;
}
