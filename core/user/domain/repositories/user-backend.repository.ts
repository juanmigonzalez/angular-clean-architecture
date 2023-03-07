import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export type GetUserParams = {
  userId: string;
  accessToken: string;
};

export abstract class UserBackendRepository {
  abstract getUser(params: GetUserParams): Observable<UserModel>;
}
