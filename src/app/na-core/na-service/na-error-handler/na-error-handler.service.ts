import { NaError } from './na-error-handler.domain';
import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

import { isProd } from '../../na-utils';
import { LOGGER, Logger } from '../na-logger.provider';

@Injectable()
export class NaErrorHandlerService {

  constructor(
    @Inject(LOGGER) private logger: Logger,
    private msg: NzMessageService
  ) { }

  handle(error: HttpErrorResponse) {
    const naError = this.errorAdapter(error);
    if (naError != null) {
      this.msg.create('error', naError.message, {
        nzDuration: 3 * 1000
      });
      this.logger.error(`errorDetail: ${naError.detail}`);
    }
  }

  private errorAdapter(error: HttpErrorResponse): NaError {
    if (error.error instanceof Error) {
      return error.error;
    }

    let message = this.errorExtractor(error.error, 'message');
    if (!message && !isProd()) message = error.message;
    if (!message) return null;
    const detail = this.errorExtractor(error.error, 'detail');
    return { message, detail };
  }

  private errorExtractor(err: any, key: string): string {
    if (!err) return null;
    const res = err[key]
      || err[`error-${key}`];
    if (!res) return null;
    return res;
  }
}
