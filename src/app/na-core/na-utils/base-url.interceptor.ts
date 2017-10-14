import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!/^https?/.test(req.url)) {
      req = req.clone({
        url: environment.baseUrl + req.url,
      });
    }
    return next.handle(req);
  }
}
