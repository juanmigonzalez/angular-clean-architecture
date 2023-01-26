import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserModel } from 'src/app/core/domain/models/user.model';
import {
  GetUserParams,
  LoginParams,
  RegisterParams,
  UserRepository,
} from 'src/app/core/domain/repositories/user.repository';
import { UserEntity } from './user.entity';
import { UserImplementationRepositoryMapper } from './user-implementation.repository.mapper';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  login(params: LoginParams): Observable<UserModel> {
    return this.http
      .post<UserEntity>('', { params })
      .pipe(map(this.userMapper.mapFrom));
  }

  register(params: RegisterParams): Observable<UserModel> {
    return this.http
      .post<UserEntity>('', { params })
      .pipe(map(this.userMapper.mapFrom));
  }

  getUser(params: GetUserParams): Observable<UserModel> {
    return this.http
      .post<UserEntity>('', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
}
