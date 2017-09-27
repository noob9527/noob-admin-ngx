import { MenuItemMeta } from '../core/na-core-widget/na-sidebar/menu-item.model';

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
    ],
  },
  {
    path: 'form',
    title: 'Forms',
    icon: 'anticon anticon-edit',
    order: 200,
    children: [
      {
        path: 'standard',
        title: 'Standard Form',
        order: 0,
      },
    ],
  },
  {
    path: 'tables',
    title: 'Tables',
    icon: 'fa fa-table',
    // icon: 'anticon anticon-database',
    order: 300,
    children: [
      {
        path: 'basic',
        title: 'Basic Table',
        order: 0,
      },
    ],
  },
  {
    path: 'charts',
    title: 'Charts',
    icon: 'anticon anticon-area-chart',
    order: 400,
    children: [
      {
        path: 'chartjs',
        title: 'Chartjs',
        order: 0,
      },
    ],
  },
  {
    url: 'https://github.com/noob9527/noob-admin-ngx',
    title: 'Static url',
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
