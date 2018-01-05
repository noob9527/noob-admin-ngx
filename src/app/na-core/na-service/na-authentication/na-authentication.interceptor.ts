import { NA_CONFIG, NaConfig } from '../../na-config';
import { NaStoreService } from '../na-store.service';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NaAuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private naStoreService: NaStoreService,
    @Inject(NA_CONFIG) private naConfig: NaConfig,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.naStoreService.getToken();
    if (!token) return next.handle(req);
    req = req.clone({
      headers: req.headers.set(this.naConfig.authorizationHeader, token)
    });
    return next.handle(req);
  }
}

export const NaAuthenticationInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: NaAuthenticationInterceptor,
  multi: true,
};
