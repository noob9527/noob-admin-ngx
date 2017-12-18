import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NaErrorHandlerService } from './na-error-handler.service';

@Injectable()
export class NaErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private naErrorHandlerService: NaErrorHandlerService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .catch((err: HttpErrorResponse) => {
        this.naErrorHandlerService.handle(err);
        return Observable.throw(err);
      });
  }
}

export const NaErrorHandlerInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: NaErrorHandlerInterceptor,
  multi: true,
};
