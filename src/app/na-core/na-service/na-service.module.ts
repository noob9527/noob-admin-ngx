import { NaBaseUrlInterceptorProvider } from './na-base-url.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NaAclModule } from './na-acl/na-acl.module';
import { NaAuthenticationModule } from './na-authentication/na-authentication.module';
import { NaConfigProvider } from './na-config.provider';
import { NaLoggerProvider } from './na-logger.provider';
import { NaStorageProvider } from './na-storage.provider';
import { NaStoreService } from './na-store.service';
import { NaUserModule } from './na-user/na-user.module';

@NgModule({
  imports: [
    NaAuthenticationModule,
    NaUserModule,
    NaAclModule,
  ],
  declarations: [],
  providers: [
    NaStoreService,
    NaStorageProvider,
    NaConfigProvider,
    NaLoggerProvider,
    NaBaseUrlInterceptorProvider,
  ],
})
export class NaServiceModule { }
