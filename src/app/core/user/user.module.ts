import { NaCoreModule } from '../../na-core/na-core.module';
import { CurrentUserService } from './current-user.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    CurrentUserService,
  ]
})
export class UserModule { }
