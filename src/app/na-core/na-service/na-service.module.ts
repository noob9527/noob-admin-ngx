import { BaseUrlInterceptor } from './base-url.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Logger, StorageService } from './injection-tokens';
import { NaAclModule } from './na-acl/na-acl.module';
import { NaUserModule } from './na-user/na-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    AuthenticationModule,
    NaUserModule,
    NaAclModule,
  ],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: StorageService,
      useValue: localStorage,
    },
    {
      provide: Logger,
      useValue: console,
    },
  ],
})
export class NaServiceModule { }
