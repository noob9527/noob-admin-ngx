import { Component, ContentChild, ElementRef, Inject, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

const CLS = 'na-footer-toolbar';

@Component({
  selector: 'na-footer-toolbar',
  template: `
    <div class="left">
      <ng-container *ngIf="extra" [ngTemplateOutlet]="extra"></ng-container>
    </div>
    <div class="right">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./na-footer-toolbar.component.less'],
})
export class NaFooterToolbarComponent implements OnInit, OnDestroy {
  @ContentChild('extra') extra: TemplateRef<any>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: any
  ) {
  }

  ngOnInit() {
    (this.el.nativeElement as HTMLElement).classList.add(CLS);
    this.renderer.addClass(this.el.nativeElement, CLS);
    this.doc.querySelector('body').classList.add(`has-${CLS}`);
  }

  ngOnDestroy() {
    this.doc.querySelector('body').classList.remove(`has-${CLS}`);
  }
}
