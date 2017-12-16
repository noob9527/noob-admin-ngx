import { NaUser } from '../../na-core/na-service/na-user/na-user.domain';

export interface UserResponse {
  account: string;
  avatar?: string;
  roles: Role[];
}

export class User implements NaUser {
  account: string;
  avatar?: string;
  roles: Role[];
  isRoot: boolean;
  [index: string]: any;

  constructor(meta: UserResponse) {
    Object.assign(this, meta);
  }

  get naAccount(): string {
    return this.account;
  }

  get naAvatar(): string {
    return this.avatar;
  }

  get naPermissions(): string[] {
    return this.roles
      .map(e => e.permissions)
      .reduce((acc, curr) => acc.concat(curr), [])
      .map(e => e.name);
  }

  get naIsRoot() {
    return this.isRoot;
  }

  set naIsRoot(value) {
    this.isRoot = value;
  }

}

export interface Permission {
  name: string;
  displayName?: string;
}

export interface Role {
  name: string;
  displayName?: string;
  permissions: Permission[];
}

