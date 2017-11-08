import { BaseMockService } from '../base-mock.service';

const fakeData = [{
  id: 1,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
  title: '你收到了 14 份新周报',
  datetime: '2017-08-09',
  noticeType: 'NOTIFICATION',
}, {
  id: 2,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
  title: '你推荐的 曲妮妮 已通过第三轮面试',
  datetime: '2017-08-08',
  noticeType: 'NOTIFICATION',
}, {
  id: 3,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
  title: '这种模板可以区分多种通知类型',
  datetime: '2017-08-07',
  isReaded: true,
  noticeType: 'NOTIFICATION',
}, {
  id: 4,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
  title: '左侧图标用于区分不同的类型',
  datetime: '2017-08-07',
  noticeType: 'NOTIFICATION',
}, {
  id: 5,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
  title: '内容不要超过两行字，超出时自动截断',
  datetime: '2017-08-07',
  noticeType: 'NOTIFICATION',
}, {
  id: 6,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '曲丽丽 评论了你',
  description: '描述信息描述信息描述信息',
  datetime: '2017-08-07',
  noticeType: 'MESSAGE',
}, {
  id: 7,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '朱偏右 回复了你',
  description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
  datetime: '2017-08-07',
  noticeType: 'MESSAGE',
}, {
  id: 8,
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
  datetime: '2017-08-07',
  noticeType: 'MESSAGE',
}, {
  id: 9,
  title: '任务名称',
  description: '任务需要在 2017-01-12 20:00 前启动',
  extra: '未开始',
  status: 'todo',
  noticeType: 'TODO',
}, {
  id: 10,
  title: '第三方紧急代码变更',
  description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  extra: '马上到期',
  status: 'urgent',
  noticeType: 'TODO',
}, {
  id: 11,
  title: '信息安全考试',
  description: '指派竹尔于 2017-01-09 前完成更新并发布',
  extra: '已耗时 8 天',
  status: 'doing',
  noticeType: 'TODO',
}, {
  id: 12,
  title: 'ABCD 版本发布',
  description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  extra: '进行中',
  status: 'processing',
  noticeType: 'TODO',
}];

export class NoticeMock extends BaseMockService {
  register() {
    this.Mock.mock('/api/v1/notices', 'get', fakeData);
    this.Mock.mock('/api/v1/noticesCount', 'get', { count: fakeData.length });
  }
}
