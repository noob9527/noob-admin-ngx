import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NaAuthenticationService } from './na-authentication.service';
import { NaUserService } from '../na-user/na-user.service';

@Injectable()
export class NaAuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private naUserService: NaUserService,
    private authenticationService: NaAuthenticationService,
  ) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const result = this.authenticationService.isAuthenticated
      .flatMap(res => {
        if (!res) {
          this.router.navigate(['/login']);
          return Observable.of(res);
        }
        return this.naUserService.currentUser
          .filter(e => !!e)
          .map(e => !!e);
      });
    return result;
  }
}
