import { Mapper } from 'lib/cross-cutting/models/mapper';
import { UserEntity } from './user.entity';
import { UserModel } from 'lib/user/domain/models/user.model';

export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserModel
> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.id,
      name: param.username,
      fullName: param.fullName,
      email: param.email,
      createdAt: param.createdAt,
    };
  }

  mapTo(param: UserModel): UserEntity {
    return {
      id: param.id,
      username: param.name,
      fullName: param.fullName,
      email: param.email,
      createdAt: param.createdAt,
    };
  }
}
