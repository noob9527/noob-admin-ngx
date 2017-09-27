import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

import icons from './icons';

@Component({
  selector: 'app-icon',
  template: `
  <div *ngFor="let group of data">
    <h4 class="border-bottom-1">{{group.title}}</h4>
    <div class="icons" nz-row [nzGutter]="16">
        <div class="item" nz-col [nzXs]="8" [nzMd]="4"
            *ngFor="let item of group.list" (click)="copy(group, item)">
            <em class="{{group.prefix}}{{item.k}}"></em> {{item.k}}
            <em *ngIf="item.a" class="text-grey">(alias)</em>
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  data = icons;

  constructor(
    private msg: NzMessageService,
    @Inject(DOCUMENT) private dom: Document,
    private _el: ElementRef
  ) { }

  copy(group: any, item: any) {
    let copyTextArea = null as HTMLTextAreaElement;
    try {
      copyTextArea = this.dom.createElement('textarea');
      copyTextArea.style.height = '0px';
      copyTextArea.style.opacity = '0';
      copyTextArea.style.width = '0px';
      this.dom.body.appendChild(copyTextArea);
      copyTextArea.value = group.tpl.replace(`{0}`, item.k);
      copyTextArea.select();
      this.dom.execCommand('copy');
      this.msg.success(`Copied Success!`);
    } finally {
      if (copyTextArea && copyTextArea.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  }
}
