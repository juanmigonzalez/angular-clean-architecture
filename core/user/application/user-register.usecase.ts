import { UseCase } from 'core/cross-cutting/models/use-case';
import { UserModel } from 'core/user/domain/models/user.model';
import { Observable } from 'rxjs';
import {
  RegisterParams,
  UserMeRepository,
} from '../domain/repositories/user-me.repository';

export class UserRegisterUseCase implements UseCase<RegisterParams, UserModel> {
  constructor(private userRepository: UserMeRepository) {}

  execute(params: RegisterParams): Observable<UserModel> {
    return this.userRepository.register(params);
  }
}
