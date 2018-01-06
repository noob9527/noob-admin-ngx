import { getUrl } from '../../../na-utils/na-utils';
import { TEST_ROLE } from '../../../../core/initializer/acl.initializer';
import { Gender, Permission, UserResponse } from '../../../../core/user/user.domain';
import { BaseMockService } from '../base-mock.service';

export class CurrentUserMock extends BaseMockService {

  register() {
    const roleAdmin = {
      name: 'admin',
      permissions: [] as Permission[],
    };
    const roleTest = {
      name: 'test',
      permissions: [] as Permission[],
    };
    roleTest.permissions = TEST_ROLE.map(e => ({ name: e }));

    const fakeUser: UserResponse = {
      id: 0,
      gender: Gender.MALE,
      age: 18,
      account: 'admin',
      avatar: 'https://api.adorable.io/avatars/100/noob9527.png',
      roles: [
        roleAdmin,
        roleTest,
      ],
    };
    this.Mock.mock(getUrl('users/me'), 'get', fakeUser);
  }
}
