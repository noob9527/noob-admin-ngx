import { MenuItemMeta } from '../na-core/na-widget/na-sidebar/menu-item.model';

const menuItems: MenuItemMeta[] = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    icon: 'anticon anticon-home',
    order: 0,
  },
  {
    path: 'elements',
    title: 'Elements',
    icon: 'anticon anticon-rocket',
    order: 100,
    children: [
      {
        path: 'button',
        title: 'Button',
        order: 0,
      },
      {
        path: 'icon',
        title: 'Icon',
        order: 100,
      },
      {
        path: 'modal',
        title: 'Modal',
        order: 200,
      },
      {
        path: 'notification',
        title: 'Notification',
        order: 300,
      },
      {
        path: 'form',
        title: 'Forms',
        order: 400,
      },
      {
        path: 'tables',
        title: 'Tables',
        order: 500,
      },
      {
        path: 'charts',
        title: 'Charts',
        order: 600,
        children: [
          {
            path: 'chartjs',
            title: 'Chartjs',
            order: 0,
          },
        ],
      },
    ],
  },
  {
    path: 'demo',
    title: 'Demo',
    icon: 'anticon anticon-laptop',
    order: 200,
    children: [
      {
        path: 'upload',
        title: 'Upload',
        order: 0,
      },
      {
        path: 'cropper',
        title: 'Cropper',
        order: 100,
      },
    ]
  },
  {
    path: 'acl',
    title: 'Acl',
    icon: 'fa fa-lock',
    order: 500,
    children: [
      {
        path: 'manager',
        title: 'Manager',
        order: 0,
      },
      {
        path: 'foo',
        title: 'Foo',
        order: 100,
        data: {
          permissions: {
            only: 'foo',
          },
        },
      },
      {
        path: 'bar',
        title: 'Bar',
        order: 200,
        data: {
          permissions: {
            only: 'bar',
          },
        },
      },
      {
        path: 'baz',
        title: 'Baz',
        order: 300,
        data: {
          permissions: {
            only: 'baz',
          },
        },
      },
      {
        path: 'qux',
        title: 'Qux',
        order: 400,
        data: {
          permissions: {
            only: 'qux',
          },
        },
      },
    ],
  },
  {
    url: 'https://github.com/noob9527/noob-admin-ngx',
    title: 'Static Url',
    icon: 'anticon anticon-github',
    order: 20000,
  },
  {
    path: 'level',
    title: 'Nested Menu',
    icon: 'anticon anticon-ellipsis',
    order: 10000,
    children: [
      {
        path: 'level1',
        title: 'Level1',
        order: 0,
      },
      {
        path: 'level2',
        title: 'Level2',
        order: 1,
        children: [
          {
            path: 'level2to1',
            title: 'Level2.1',
          },
          {
            path: 'level2to2',
            title: 'Level2.2',
          },
        ],
      },
    ],
  },
];

export default menuItems;
