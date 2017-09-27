import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-na-content-top',
  template: `
  <ng-container>
    <app-na-breadcrumb></app-na-breadcrumb>
  </ng-container>
  `,
  styles: [`
    :host{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 64px;
      margin: 0 24px -24px 24px;
    }
  `],
})
export class NaContentTopComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
