import { UserModel } from 'core/user/domain/models/user.model';
import {
  GetUserParams,
  UserBackendRepository,
} from 'core/user/domain/repositories/user-backend.repository';
import { UseCase } from '../../cross-cutting/models/use-case';
import { Observable } from 'rxjs';

export class UserGetUseCase implements UseCase<GetUserParams, UserModel> {
  constructor(private userRepository: UserBackendRepository) {}

  execute(params: GetUserParams): Observable<UserModel> {
    return this.userRepository.getUser(params);
  }
}
