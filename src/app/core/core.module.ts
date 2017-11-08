import { NoticeModule } from './notice/notice.module';
import { NgModule } from '@angular/core';

import { NaCoreModule } from '../na-core/na-core.module';
import { aclInitializer } from './initializer/acl.initializer';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    NaCoreModule,
    UserModule,
    NoticeModule,
  ],
  declarations: [],
  providers: [
    aclInitializer,
  ],
})
export class CoreModule { }
