import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  disabled = false;
  loading = false;
  size = 'default';

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleLoading() {
    this.loading = !this.loading;
  }

  constructor() { }

  ngOnInit() {
  }

}
