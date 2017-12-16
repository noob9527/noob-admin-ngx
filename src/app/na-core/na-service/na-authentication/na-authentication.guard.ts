import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NaAuthenticationService } from './na-authentication.service';

@Injectable()
export class NaAuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: NaAuthenticationService,
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const result = this.authenticationService.isAuthenticated
      .do(res => {
        if (!res) this.router.navigate(['/login']);
      });
    return result;
  }
}
