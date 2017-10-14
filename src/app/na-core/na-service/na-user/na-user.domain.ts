import { BehaviorSubject } from 'rxjs/Rx';

export interface NaUser {
  naAccount: string;
  naAvatar: string;
  naPermissions: string[];
  naIsRoot: boolean;
}
