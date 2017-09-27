import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styles: [
    `
    :host ::ng-deep .ant-card-body{
      height: 400px;
      overflow: auto;
    }
    `
  ],
})
export class BasicTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
