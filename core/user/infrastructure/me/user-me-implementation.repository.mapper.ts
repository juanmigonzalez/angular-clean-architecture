import { Mapper } from 'core/cross-cutting/models/mapper';
import { UserModel } from 'core/user/domain/models/user.model';
import { UserMeEntity } from './user-me.entity';

export class UserMeImplementationRepositoryMapper extends Mapper<
  UserMeEntity,
  UserModel
> {
  mapFrom(param: UserMeEntity): UserModel {
    return {
      id: param.id,
      name: param.username,
      fullName: param.fullName,
      email: param.email,
      createdAt: param.createdAt,
    };
  }

  mapTo(param: UserModel): UserMeEntity {
    return {
      id: param.id,
      username: param.name,
      fullName: param.fullName,
      email: param.email,
      createdAt: param.createdAt,
    };
  }
}
