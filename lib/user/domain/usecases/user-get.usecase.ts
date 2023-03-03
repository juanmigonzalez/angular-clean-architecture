import { Observable } from 'rxjs';
import { UseCase } from '../../../cross-cutting/models/use-case';
import { UserModel } from '../models/user.model';
import { GetUserParams, UserRepository } from '../repositories/user.repository';

export class UserGetUseCase implements UseCase<GetUserParams, UserModel> {
  constructor(private userRepository: UserRepository) {}

  execute(params: GetUserParams): Observable<UserModel> {
    return this.userRepository.getUser(params);
  }
}
