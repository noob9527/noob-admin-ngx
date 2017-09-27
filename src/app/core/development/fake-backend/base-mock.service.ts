import { LoggerService } from '../../core-utils/logger/logger.service';
import { Inject, Injectable } from '@angular/core';
import { MockService } from './mock.provider';

@Injectable()
export abstract class BaseMockService {
  constructor(
    @Inject(MockService) protected Mock: any,
    protected logger: LoggerService,
  ) {
  }

  register() {
    this.logger.debug(`${this.constructor.name} register`);
  }
}
