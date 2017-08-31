import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    AuthenticationService,
    AuthGuard,
  ],
})
export class AuthenticationModule { }
