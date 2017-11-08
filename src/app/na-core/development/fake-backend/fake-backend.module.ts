import { NoticeMock } from './mocks/notice.mock';
import { LoggerService } from '../../na-utils/logger/logger.service';
import { NgModule } from '@angular/core';
import Mock from 'mockjs';

import { environment } from '../../../../environments/environment';
import { MockService } from './mock.provider';
import { AuthenticationMock } from './mocks/authentication.mock';
import { CurrentUserMock } from './mocks/current-user.mock';

/**
 * useValue won't work with AOT compilation.
 * I don't know why.
 */
export function mockServiceFactory() {
  return Mock;
}

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    {
      provide: MockService,
      useFactory: mockServiceFactory,
    },
    AuthenticationMock,
    CurrentUserMock,
    NoticeMock,
  ],
})
export class FakeBackendModule {
  constructor(
    logger: LoggerService,
    authenticationMock: AuthenticationMock,
    currentUserMock: CurrentUserMock,
    noticeMock: NoticeMock,
  ) {
    if (!environment.mockBackend) return;

    logger.info('app run with fake backend');
    // 模拟请求延时
    Mock.setup({
      timeout: '500-1000',
    });

    [
      authenticationMock,
      currentUserMock,
      noticeMock,
    ].forEach(mock => {
      logger.debug(`${mock.constructor.name} register`);
      mock.register();
    });
  }
}
