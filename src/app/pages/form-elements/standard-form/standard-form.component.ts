import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
})
export class StandardFormComponent {

  selectValue: { value: string, label: string };

  options = [
    { value: 'jack', label: 'Jack', disabled: false },
    { value: 'lucy', label: 'Lucy', disabled: false },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];

  cityValue: any[] = null;
  cities = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
        isLeaf: true
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
        isLeaf: true
      }],
    }],
  }];

  marks = {
    0: 'A',
    25: 'B',
    50: 'C',
    75: 'D',
    100: 'E'
  };

  rate = 3;

  hotTags = ['Movie', 'Books', 'Music', 'Sports'];

  selectedTags: string[] = [];

  constructor() {
    this.selectValue = this.options[0];
  }

  changeCity(value: any) {
    console.log(value);
  }


  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    console.log('You are interested in: ', this.selectedTags);
  }
}
