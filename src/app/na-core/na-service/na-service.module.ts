import { AuthenticationModule } from './authentication/authentication.module';
import { NgModule } from '@angular/core';

/**
 * 该模块存放单例，共享的，与业务逻辑相关的组件
 */
@NgModule({
  imports: [
    AuthenticationModule,
  ],
  declarations: []
})
export class NaServiceModule { }
