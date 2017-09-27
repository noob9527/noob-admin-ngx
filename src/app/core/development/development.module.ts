import { NgModule } from '@angular/core';

import { FakeBackendModule } from './fake-backend/fake-backend.module';

@NgModule({
  imports: [
    FakeBackendModule,
  ],
  declarations: []
})
export class DevelopmentModule { }
