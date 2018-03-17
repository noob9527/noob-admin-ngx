import { NzMessageService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { NzMessageDataOptions } from 'ng-zorro-antd/src/message/nz-message.definitions';

@Injectable()
export class MessageService extends NzMessageService {
  defaultOption = {
    nzDuration: 3 * 1000,
  };

  resolveHint(content?: string, options: NzMessageDataOptions = this.defaultOption) {
    super.success(content || '操作成功', options);
  }

  rejectHint(content?: string, options: NzMessageDataOptions = this.defaultOption) {
    super.error(content || '操作失败', options);
  }
}
