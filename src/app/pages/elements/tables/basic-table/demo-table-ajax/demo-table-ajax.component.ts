import { RandomUserService } from './random-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-table-ajax',
  templateUrl: './demo-table-ajax.component.html',
  providers: [
    RandomUserService,
  ],
})
export class DemoTableAjaxComponent implements OnInit {
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet: any[] = [];
  _loading = true;
  _sortValue: any = null;
  _filterGender = [
    { name: 'male', value: false },
    { name: 'female', value: false }
  ];

  sort(value: any) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }

  constructor(private _randomUser: RandomUserService) {
  }

  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender).subscribe((data: any) => {
      this._loading = false;
      this._total = 200;
      this._dataSet = data.results;
    });
  }

  ngOnInit() {
    this.refreshData();
  }
}
