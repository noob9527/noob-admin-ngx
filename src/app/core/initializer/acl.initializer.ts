import { APP_INITIALIZER, Provider } from '@angular/core';
import { NaAclService } from '../../na-core/na-service/na-acl/na-acl.service';

export const TEST_ROLE: string[] = [
  'foo',
  'bar',
  'baz',
  'qux',
];

export const PERMISSONS: string[] = [
  ...TEST_ROLE,
];

/**
 * angular compiler的bug, 这里必须导出函数
 * Error: Error encountered resolving symbol values statically.
 * Reference to a non-exported function
 */
export function permissonInitializer(naAclService: NaAclService) {
  return () => naAclService.initPermission(PERMISSONS);
}

export const aclInitializer: Provider = {
  provide: APP_INITIALIZER,
  useFactory: permissonInitializer,
  multi: true,
  deps: [NaAclService]
};
