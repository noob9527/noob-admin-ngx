import { LoggerModule } from './logger/logger.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BaseUrlInterceptor } from './base-url.interceptor';

/**
 * 该模块存放单例，共享的，与应用松耦合的工具
 */
@NgModule({
  imports: [
    LoggerModule,
  ],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    }
  ],
})
export class CoreUtilsModule { }
