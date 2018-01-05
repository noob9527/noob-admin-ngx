import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

import { LOGGER, Logger } from '../na-logger.provider';
import { NA_CONFIG, NaConfig } from '../../na-config';

@Injectable()
export class NaErrorHandlerService {

  constructor(
    @Inject(LOGGER) private logger: Logger,
    @Inject(NA_CONFIG) private naConfig: NaConfig,
    private msg: NzMessageService
  ) {
  }

  handle(error: HttpErrorResponse) {
    const naError = this.naConfig.httpErrorAdapter(error);
    if (!naError) return;
    this.msg.create('error', naError.message, {
      nzDuration: 3 * 1000
    });
    if (naError.detail) {
      this.logger.error(`errorDetail: ${naError.detail}`);
    }
  }

}
