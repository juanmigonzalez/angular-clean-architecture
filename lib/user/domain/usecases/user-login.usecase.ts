import { UseCase } from 'lib/cross-cutting/models/use-case';
import { UserModel } from '../models/user.model';
import { LoginParams, UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';

export class UserLoginUseCase implements UseCase<LoginParams, UserModel> {
  constructor(private userRepository: UserRepository) {}

  execute(params: LoginParams): Observable<UserModel> {
    return this.userRepository.login(params);
  }
}
