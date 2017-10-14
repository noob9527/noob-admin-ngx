import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

export interface Credential {
  username: string;
  passowrd: string;
}

@Injectable()
export class AuthenticationService {

  token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  login(credential: Credential): Observable<boolean> {
    interface Result { token: string; }
    return this.http.post<Result>('/authenticate', credential)
      .map(res => {
        this.token = res.token;
        localStorage.setItem('token', this.token);
        return true;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogin(): boolean {
    return !!this.token;
  }

}
