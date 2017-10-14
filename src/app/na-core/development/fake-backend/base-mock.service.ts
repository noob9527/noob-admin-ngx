import { LoggerService } from '../../na-utils/logger/logger.service';
import { Inject, Injectable } from '@angular/core';
import { MockService } from './mock.provider';

@Injectable()
export abstract class BaseMockService {

  abstract register(): void;

  constructor(
    @Inject(MockService) protected Mock: any,
    protected logger: LoggerService,
  ) {
  }

}
