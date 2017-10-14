import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acl',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AclComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
