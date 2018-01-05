import {
  NaInformation,
  NaMessage,
  NaNotice,
  NaNoticeType,
  NaNotification,
  NaTodo,
} from '../../na-core/na-widget/na-notice-center/na-notice-center.domain';
import * as moment from 'moment';

export abstract class Notice implements NaNotice {
  id: string;
  title: string;
  noticeType: 'NOTIFICATION' | 'MESSAGE' | 'TODO';

  static createInstance(meta: any) {
    switch (meta.noticeType) {
      case 'NOTIFICATION':
        return new Notification(meta);
      case 'MESSAGE':
        return new Message(meta);
      case 'TODO':
        return new Todo(meta);
    }
    throw Error('unrecognized notice type');
  }

  constructor(meta: any) {
    Object.assign(this, meta);
  }

  get naId() {
    return this.id;
  }
  get naTitle() {
    return this.title;
  }
  get naNoticeType(): NaNoticeType {
    let noticeType: NaNoticeType;
    switch (this.noticeType) {
      case 'NOTIFICATION':
        noticeType = NaNoticeType.Notification;
        break;
      case 'MESSAGE':
        noticeType = NaNoticeType.Message;
        break;
      case 'TODO':
        noticeType = NaNoticeType.Todo;
        break;
      default:
        throw Error('unrecognized notice type');
    }
    return noticeType;
  }
}

abstract class Information extends Notice implements NaInformation {
  isReaded?: boolean;
  datetime: string | number;
  get naIsReaded() {
    return !!this.isReaded;
  }
  get naDateTime() {
    return moment(this.datetime).fromNow();
  }
  set naIsReaded(value: boolean) {
    this.isReaded = value;
  }
}

export class Notification extends Information implements NaNotification {
  avatar: string;
  isReaded?: boolean;
  get naAvatar() {
    return this.avatar;
  }
  get naNoticeType() {
    return NaNoticeType.Notification;
  }
}


export class Message extends Information implements NaMessage {
  avatar: string;
  datetime: string | number;
  description: string;
  get naAvatar() {
    return this.avatar;
  }
  get naDescription() {
    return this.description;
  }
  get naNoticeType() {
    return NaNoticeType.Message;
  }
}

export class Todo extends Notice implements NaTodo {
  description: string;
  extra: string;
  get naExtra() {
    return this.extra;
  }
  get naDescription() {
    return this.description;
  }
  get naNoticeType() {
    return NaNoticeType.Todo;
  }
}
