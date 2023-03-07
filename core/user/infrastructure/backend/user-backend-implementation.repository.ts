import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserModel } from 'core/user/domain/models/user.model';
import {
  GetUserParams,
  UserBackendRepository,
} from 'core/user/domain/repositories/user-backend.repository';
import { UserBackendEntity } from './user-backend.entity';
import { UserBackendImplementationRepositoryMapper } from './user-backend-implementation.repository.mapper';

@Injectable({
  providedIn: 'root',
})
export class UserBackendImplementationRepository extends UserBackendRepository {
  userMapper = new UserBackendImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getUser(params: GetUserParams): Observable<UserModel> {
    return this.http
      .get<UserBackendEntity>('', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
}
