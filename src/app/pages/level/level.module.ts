import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level2to1Component } from './level2/level2to1/level2to1.component';
import { Level2to2Component } from './level2/level2to2/level2to2.component';

const routes: Routes = [
  { path: '', redirectTo: 'level1' },
  {
    path: 'level1',
    component: Level1Component,
    data: {
      breadcrumb: { label: 'asdf' },
    },
  },
  {
    path: 'level2',
    component: Level2Component,
    data: {
      breadcrumb: 'Level2',
    },
    children: [
      {
        path: 'level2to1',
        component: Level2to1Component,
        data: {
          breadcrumb: 'Level2to1',
        },
      },
      {
        path: 'level2to2',
        component: Level2to2Component,
        data: {
          breadcrumb: 'Level2to2',
        },
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    Level1Component,
    Level2Component,
    Level2to1Component,
    Level2to2Component,
  ]
})
export class LevelModule {
}
