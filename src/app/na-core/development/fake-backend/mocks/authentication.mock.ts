import { getUrl } from '../../../na-utils';
import { BaseMockService } from '../base-mock.service';

export class AuthenticationMock extends BaseMockService {

  register(): void {
    this.Mock.mock(getUrl('authenticate'), 'post', {
      token: 'fake token',
    });
  }
}
