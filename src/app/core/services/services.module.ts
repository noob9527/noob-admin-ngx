import { NgModule } from '@angular/core';
import { ModalService } from './modal.service';
import { MessageService } from './message.service';

@NgModule({
  imports: [],
  providers: [
    ModalService,
    MessageService,
  ],
})
export class ServicesModule {
}
