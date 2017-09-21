import { MenuItemMeta } from '../core/naCoreWidget/naSidebar/MenuItem.domain';

const menuItems: MenuItemMeta[] = [
  {
    path: 'dashboard',
    title: 'dashboard',
    icon: 'anticon anticon-laptop',
    order: 0,
  },
  {
    path: 'about',
    title: 'about',
    icon: '',
    order: 0,
  },
  {
    url: 'https://www.google.com',
    title: 'static url',
    icon: '',
    order: 200,
  },
  {
    path: 'level',
    title: 'nested menu',
    order: 100,
    children: [
      {
        path: 'level1',
        title: 'level1',
        order: 0,
      },
      {
        path: 'level2',
        title: 'level2',
        order: 1,
        children: [
          {
            path: 'level2to1',
            title: 'level2.1',
          },
          {
            path: 'level2to2',
            title: 'level2.2',
          },
        ],
      },
    ],
  },
];

export default menuItems;
