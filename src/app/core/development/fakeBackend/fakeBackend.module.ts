import { AuthenticationMock } from './mocks/authentication.mock';
import { MockService } from './mock.provider';
import { LoggerService } from '../../coreUtils/logger/logger.service';
import { environment } from '../../../../environments/environment';
import { Inject, NgModule } from '@angular/core';
import Mock from 'mockjs';


@NgModule({
  imports: [],
  declarations: [],
  providers: [
    {
      provide: MockService,
      useValue: Mock,
    },
    AuthenticationMock,
  ],
})
export class FakeBackendModule {
  constructor(
    logger: LoggerService,
    authenticationMock: AuthenticationMock,
  ) {
    if (!environment.mockBackend) return;
    logger.info('app run with mock backend');
    authenticationMock.register();
  }
}