import { ServicesModule } from './services/services.module';
import { NoticeModule } from './notice/notice.module';
import { NgModule } from '@angular/core';

import { NaCoreModule } from '../na-core/na-core.module';
import { aclInitializer } from './initializer/acl.initializer';
import { UserModule } from './user/user.module';
import { ResourcesModule } from "./resource/resources.module";

@NgModule({
  imports: [
    NaCoreModule,
    UserModule,
    NoticeModule,
    ServicesModule,
    ResourcesModule,
  ],
  declarations: [],
  providers: [
    aclInitializer,
  ],
})
export class CoreModule { }
