export enum NaNoticeType {
  Notification = 'NOTIFICATION',
  Message = 'MESSAGE',
  Todo = 'TODO'
}

export type NaTodoStatus = 'todo' | 'urgent' | 'doing' | 'processing';

/**
 * general notice
 */
export interface NaNotice {
  readonly naId: string;
  readonly naTitle: string;
  readonly naNoticeType: NaNoticeType;

  readonly naAvatar?: string;
  readonly naDateTime?: string | number;
   naDescription?: string;
   naExtra?: string;

  [index: string]: any;
}
/**
 * readable information
 */
export interface NaInformation extends NaNotice {
  naIsReaded: boolean;
}
export interface NaNotification extends NaInformation {
  readonly naAvatar: string;
  readonly naDateTime: string | number;
}
export interface NaMessage extends NaInformation {
  readonly naAvatar: string;
  readonly naDateTime: string | number;
  readonly naDescription: string;
}
export interface NaTodo extends NaNotice {
  readonly naExtra?: string;
  readonly naDescription: string;
}

