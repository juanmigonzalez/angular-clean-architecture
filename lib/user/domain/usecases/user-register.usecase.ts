import { Observable } from 'rxjs';
import { UseCase } from 'src/app/shared/models/use-case';
import { UserModel } from '../models/user.model';
import {
  RegisterParams,
  UserRepository,
} from '../repositories/user.repository';

export class UserRegisterUseCase implements UseCase<RegisterParams, UserModel> {
  constructor(private userRepository: UserRepository) {}

  execute(params: RegisterParams): Observable<UserModel> {
    return this.userRepository.register(params);
  }
}
