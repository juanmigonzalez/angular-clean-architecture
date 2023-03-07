import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserModel } from 'core/user/domain/models/user.model';
import { UserMeImplementationRepositoryMapper } from './user-me-implementation.repository.mapper';
import {
  LoginParams,
  RegisterParams,
  UserMeRepository,
} from 'core/user/domain/repositories/user-me.repository';
import { UserMeEntity } from './user-me.entity';

@Injectable({
  providedIn: 'root',
})
export class UserMeImplementationRepository extends UserMeRepository {
  userMapper = new UserMeImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  login(params: LoginParams): Observable<UserModel> {
    return this.http
      .post<UserMeEntity>('', { params })
      .pipe(map(this.userMapper.mapFrom));
  }

  register(params: RegisterParams): Observable<UserModel> {
    return this.http
      .post<UserMeEntity>('', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
}
