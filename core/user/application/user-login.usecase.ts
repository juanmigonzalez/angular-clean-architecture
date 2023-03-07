import { UseCase } from 'core/cross-cutting/models/use-case';
import { UserModel } from 'core/user/domain/models/user.model';
import { Observable } from 'rxjs';
import {
  LoginParams,
  UserMeRepository,
} from '../domain/repositories/user-me.repository';

export class UserLoginUseCase implements UseCase<LoginParams, UserModel> {
  constructor(private userRepository: UserMeRepository) {}

  execute(params: LoginParams): Observable<UserModel> {
    return this.userRepository.login(params);
  }
}
