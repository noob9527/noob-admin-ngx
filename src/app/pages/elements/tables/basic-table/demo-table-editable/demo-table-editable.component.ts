import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-table-editable',
  templateUrl: './demo-table-editable.component.html',
})
export class DemoTableEditableComponent implements OnInit {
  editRow: any = null;
  tempEditObject: { [index: string]: any } = {};
  data = [
    {
      key: 0,
      name: 'Edward King 0',
      age: 32,
      address: 'London, Park Lane no. 0',
    }
  ];

  edit(data: any) {
    this.tempEditObject[data.key] = { ...data };
    this.editRow = data.key;
  }

  save(data: any) {
    Object.assign(data, this.tempEditObject[data.key]);
    this.editRow = null;
  }

  cancel(data: any) {
    this.tempEditObject[data.key] = {};
    this.editRow = null;
  }
  constructor() { }

  ngOnInit() {
    this.data.forEach(item => {
      this.tempEditObject[item.key] = {};
    });
  }

}
