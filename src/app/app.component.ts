import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(private titleService: Title) {
    let { appName } = environment;
    if (!appName) appName = 'noob admin';
    this.setTitle(appName.toUpperCase());
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

