import { NgModule } from '@angular/core';

import { NaErrorHandlerInterceptorProvider } from './na-error-handler.interceptor';
import { NaErrorHandlerService } from './na-error-handler.service';

@NgModule({
  imports: [],
  providers: [
    NaErrorHandlerService,
    NaErrorHandlerInterceptorProvider,
  ]
})
export class NaErrorHandlerModule { }
