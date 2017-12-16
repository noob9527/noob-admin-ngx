import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { NaStoreService } from '../na-store.service';
import { NaCredentials } from './na-authentication.domain';

@Injectable()
export class NaAuthenticationService {

  private token: string;

  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private naStoreService: NaStoreService,
  ) {
    const token = this.naStoreService.getToken();
    if (token) this.authenticateSuccess(token);
  }

  login(credentials: NaCredentials): Observable<boolean> {
    return this.http.post('/authenticate', credentials)
      .do((res: { token: string }) => void this.authenticateSuccess(res.token))
      .map(_ => true);
  }

  logout() {
    this.naStoreService.removeToken();
    this.isAuthenticated.next(false);
  }

  private authenticateSuccess(token: string) {
    this.token = token;
    this.naStoreService.setToken(token);
    this.isAuthenticated.next(true);
  }
}
