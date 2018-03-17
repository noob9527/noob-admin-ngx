import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ConfigInterface } from 'ng-zorro-antd/src/modal/nz-modal.service';

@Injectable()
export class ModalService extends NzModalService {

  deleteConfirm(props?: ConfigInterface) {
    const opts: ConfigInterface = {
      title: '确定吗？',
      content: '请确认删除操作！',
      ...props
    };
    return new Promise(resolve => {
      this.confirm({ ...opts, ...{ onOk: resolve } });
    });
  }

  saveConfirm(props?: ConfigInterface) {
    const opts: ConfigInterface = {
      title: '确定吗？',
      content: '请确认保存操作！',
      ...props
    };
    return new Promise(resolve => {
      this.confirm({ ...opts, ...{ onOk: resolve } });
    });
  }

  cancelConfirm(props?: ConfigInterface) {
    const opts: ConfigInterface = {
      title: '确定吗？',
      content: '未保存的修改将丢失',
      ...props
    };
    return new Promise(resolve => {
      this.confirm({ ...opts, ...{ onOk: resolve } });
    });
  }
}
