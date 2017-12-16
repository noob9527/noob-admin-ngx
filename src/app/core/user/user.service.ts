import { StorageService } from '../../na-core/na-service/injection-tokens';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { AuthenticationService } from '../../na-core/na-service/authentication/authentication.service';
import { NaUserService } from '../../na-core/na-service/na-user/na-user.service';
import { User, UserResponse } from './user.domain';

@Injectable()
export class UserService {

  currentUser = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    @Inject(StorageService) private storage: Storage,
    private authenticateionService: AuthenticationService,
    private naUserService: NaUserService,
  ) {
    this.authenticateionService.isAuthenticated.subscribe(res => {
      const userStr = storage.getItem('currentUser');
      if (userStr) {
        const userMeta: UserResponse = JSON.parse(userStr);
        this.onUpdateSuccess(new User(userMeta));
      } else {
        this.retrieve();
      }
    });
  }

  retrieve() {
    return this.http.get<UserResponse>('/user', {
      params: {
        current: 'true',
      },
    }).subscribe(res => {
      this.onUpdateSuccess(new User(res));
    });
  }

  private onUpdateSuccess(user: User) {
    this.storage.setItem('currentUser', JSON.stringify(user));
    this.naUserService.setCurrentUser(user);
    this.currentUser.next(user);
  }

}
