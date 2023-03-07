import { Mapper } from 'core/cross-cutting/models/mapper';
import { UserBackendEntity } from './user-backend.entity';
import { UserModel } from 'core/user/domain/models/user.model';

export class UserBackendImplementationRepositoryMapper extends Mapper<
  UserBackendEntity,
  UserModel
> {
  mapFrom(param: UserBackendEntity): UserModel {
    return {
      id: param.id,
      name: param.username,
      fullName: param.fullName,
      email: param.email,
      createdAt: param.createdAt,
    };
  }

  mapTo(param: UserModel): UserBackendEntity {
    return {
      id: param.id,
      username: param.name,
      fullName: param.fullName,
      email: param.email,
      createdAt: param.createdAt,
    };
  }
}
