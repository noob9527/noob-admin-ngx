import { TEST_ROLE } from '../../../../core/initializer/acl.initializer';
import { Permission, UserMeta } from '../../../../core/user/user.domain';
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

    const fakeUser: UserMeta = {
      account: 'admin',
      avatar: 'https://api.adorable.io/avatars/100/noob9527.png',
      roles: [
        roleAdmin,
        roleTest,
      ],
    };
    this.Mock.mock('/api/v1/users', 'get', fakeUser);
  }
}
