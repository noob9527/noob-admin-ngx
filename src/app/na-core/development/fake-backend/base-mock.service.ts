import { Logger } from '../../na-service/injection-tokens';
import { Inject, Injectable } from '@angular/core';
import { MockService } from './mock.provider';

@Injectable()
export abstract class BaseMockService {

  abstract register(): void;

  constructor(
    @Inject(MockService) protected Mock: any,
    @Inject(Logger) protected logger: Logger,
  ) {
  }

}
