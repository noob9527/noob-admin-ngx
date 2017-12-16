import { getUrl } from '../na-utils';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: getUrl(req.url)
    });
    return next.handle(req);
  }
}
