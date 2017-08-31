import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <nz-layout>
      <nz-sider>
        <nav>
          <ul>
            <li><a [routerLink]="['/login']">login</a></li>
            <li><a [routerLink]="['/dashboard']">dashboard</a></li>
            <li><a [routerLink]="['/about']">about</a></li>
          </ul>
        </nav>
      </nz-sider>
      <nz-layout>
        <nz-header></nz-header>
        <nz-content>
          <div class="main">
            <div>content top</div>
          </div>
          <router-outlet></router-outlet>
        </nz-content>
        <nz-footer>Noob-Admin ©2017</nz-footer>
      </nz-layout>
    </nz-layout>
    `
})
export class PagesComponent { }
