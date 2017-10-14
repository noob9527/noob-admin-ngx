import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const result = this.authenticationService.isAuthenticated
      .do(res => {
        if (!res) this.router.navigate(['/login']);
      });
    return result;
  }
}
