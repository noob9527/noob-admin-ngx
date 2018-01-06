import { getUrl } from '../na-utils/na-utils';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';

@Injectable()
export class NaBaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: getUrl(req.url)
    });
    return next.handle(req);
  }
}

export const NaBaseUrlInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: NaBaseUrlInterceptor,
  multi: true,
};
