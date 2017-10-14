import { AuthenticationService } from '../../na-core/na-service/authentication/authentication.service';
import { NaUserService } from '../../na-core/na-service/na-user/na-user.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
import { User, UserMeta } from './user.domain';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  currentUser = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    private authenticateionService: AuthenticationService,
    private naUserService: NaUserService,
  ) {
    this.authenticateionService.isAuthenticated.subscribe(res => {
      const userStr = localStorage.getItem('currentUser');
      if (userStr) {
        const userMeta: UserMeta = JSON.parse(userStr);
        this.onUpdateSuccess(new User(userMeta));
      } else {
        this.retrieve();
      }
    });
  }

  retrieve() {
    return this.http.get<UserMeta>('/users')
      .subscribe(res => {
        this.onUpdateSuccess(new User(res));
      });
  }

  private onUpdateSuccess(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.naUserService.setCurrentUser(user);
    this.currentUser.next(user);
  }

}
