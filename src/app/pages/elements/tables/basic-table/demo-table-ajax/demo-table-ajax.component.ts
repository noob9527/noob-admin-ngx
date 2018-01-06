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
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  dataSet: any[] = [];
  loading = true;
  sortValue: any = null;
  filterGender = [
    { name: 'male', value: false },
    { name: 'female', value: false }
  ];

  sort(value: any) {
    this.sortValue = value;
    this.fetchData();
  }

  reset() {
    this.filterGender.forEach(item => {
      item.value = false;
    });
    this.fetchData();
  }

  constructor(private randomUserService: RandomUserService) {
  }

  fetchData(pageIndex: number = 1) {
    this.pageIndex = pageIndex;
    this.loading = true;
    const selectedGender = this.filterGender.filter(item => item.value).map(item => item.name);
    this.randomUserService.getUsers(this.pageIndex, this.pageSize, 'name', this.sortValue, selectedGender).subscribe((data: any) => {
      this.loading = false;
      this.total = 200;
      this.dataSet = data.results;
    });
  }

  ngOnInit() {
    this.fetchData();
  }
}
