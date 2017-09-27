import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  canActivate() {
    if (!this.authenticationService.isLogin()) {
      this.router.navigate(['/login']);
    }
    return this.authenticationService.isLogin();
  }
}
