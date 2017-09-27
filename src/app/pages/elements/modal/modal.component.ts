import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

  constructor(
    private modal: NzModalService,
    private msg: NzMessageService,
  ) { }

  ngOnInit() {
  }

  basicModel(contentTpl: any) {
    this.modal.open({
      title: 'Basic Modal',
      content: contentTpl
    });
  }

  confirmModel(contentTpl: any) {
    this.modal.open({
      title: 'Confirm Modal',
      content: contentTpl,
      okText: 'OK',
      cancelText: 'Return',
      onOk: () => {
        this.msg.success('Click OK!')
      },
      onCancel: () => {
        this.msg.error('Click Return!')
      }
    });
  }

  showModel(type: 'info' | 'success' | 'error' | 'warning') {
    (this.modal[type])({
      title: `This is a ${type} message`,
      content: `some messages...some messages...`
    });
  }
}
