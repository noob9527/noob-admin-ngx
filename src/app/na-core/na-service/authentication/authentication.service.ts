import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export interface Credential {
  username: string;
  passowrd: string;
}

@Injectable()
export class AuthenticationService {

  private token: string;

  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) this.authenticateSuccess(token);
  }

  login(credential: Credential): Observable<boolean> {
    return this.http.post('/authenticate', credential)
      .do((res: { token: string }) => void this.authenticateSuccess(res.token))
      .map(_ => true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
  }

  private authenticateSuccess(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token);
    this.isAuthenticated.next(true);
  }
}
