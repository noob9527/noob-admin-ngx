import { NaAuthenticationInterceptor, NaAuthenticationInterceptorProvider } from './na-authentication.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NaAuthenticationService } from './na-authentication.service';
import { NaAuthenticationGuard } from './na-authentication.guard';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    NaAuthenticationService,
    NaAuthenticationGuard,
    NaAuthenticationInterceptorProvider,
  ],
})
export class NaAuthenticationModule { }
