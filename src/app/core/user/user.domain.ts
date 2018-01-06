import { NaUser } from '../../na-core/na-service/na-user/na-user.domain';

export enum Gender {
  MALE = 'MALE', FEMALE = 'FEMALE'
}

export interface UserResponse {
  id: number;
  gender: Gender;
  age: number;
  account: string;
  avatar?: string;
  roles: Role[];
}

export class User implements NaUser, UserResponse {
  id: number;
  gender: Gender;
  age: number;
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

  get naAvatar(): string | undefined {
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

