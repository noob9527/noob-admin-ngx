import { NgModule } from '@angular/core';

import { FakeBackendModule } from './fakeBackend/fakeBackend.module';

@NgModule({
  imports: [
    FakeBackendModule,
  ],
  declarations: []
})
export class DevelopmentModule { }
