import { LOGGER, Logger } from '../../na-service/na-logger.provider';
import { Inject, Injectable } from '@angular/core';
import { MockService } from './mock.provider';

@Injectable()
export abstract class BaseMockService {

  abstract register(): void;

  constructor(
    @Inject(MockService) protected Mock: any,
    @Inject(LOGGER) protected logger: Logger,
  ) {
  }

}
