import { NaErrorHandlerModule } from './na-error-handler/na-error-handler.module';
import { NaBaseUrlInterceptorProvider } from './na-base-url.interceptor';
import { NgModule } from '@angular/core';
import { NaAclModule } from './na-acl/na-acl.module';
import { NaAuthenticationModule } from './na-authentication/na-authentication.module';
import { NaLoggerProvider } from './na-logger.provider';
import { NaStorageProvider } from './na-storage.provider';
import { NaStoreService } from './na-store.service';
import { NaUserModule } from './na-user/na-user.module';
import { NaScriptLoaderModule } from './na-script-loader/na-script-loader.module';

@NgModule({
  imports: [
    NaAuthenticationModule,
    NaUserModule,
    NaAclModule,
    NaErrorHandlerModule,
    NaScriptLoaderModule,
  ],
  declarations: [],
  providers: [
    NaStoreService,
    NaStorageProvider,
    NaLoggerProvider,
    NaBaseUrlInterceptorProvider,
  ],
})
export class NaServiceModule {
}
