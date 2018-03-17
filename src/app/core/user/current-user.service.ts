import { STORAGE } from '../../na-core/na-service/na-storage.provider';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { NaAuthenticationService } from '../../na-core/na-service/na-authentication/na-authentication.service';
import { NaUserService } from '../../na-core/na-service/na-user/na-user.service';
import { User, UserResponse } from './user.domain';

const USER_KEY = 'currentUser';

@Injectable()
export class CurrentUserService {

  currentUser = new BehaviorSubject<Maybe<User>>(null);

  constructor(
    private http: HttpClient,
    @Inject(STORAGE) private storage: Storage,
    private authenticationService: NaAuthenticationService,
    private naUserService: NaUserService,
  ) {
    this.authenticationService.isAuthenticated
      .subscribe(res => {
        if (res) {
          const userStr = storage.getItem(USER_KEY);
          if (userStr) {
            const userMeta: UserResponse = JSON.parse(userStr);
            this.onUpdateSuccess(new User(userMeta));
          } else {
            this.retrieve();
          }
        } else {
          this.storage.removeItem(USER_KEY);
        }
      });
  }

  retrieve() {
    return this.http.get<UserResponse>('/users/me')
      .subscribe(res => {
        this.onUpdateSuccess(new User(res));
      });
  }

  private onUpdateSuccess(user: User) {
    this.storage.setItem(USER_KEY, JSON.stringify(user));
    this.naUserService.setCurrentUser(user);
    this.currentUser.next(user);
  }

}
