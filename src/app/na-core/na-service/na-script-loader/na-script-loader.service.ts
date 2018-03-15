import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class NaScriptLoader {
  promises = {} as { [index: string]: Promise<void> };

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  loadScript(url: string) {
    if (this.promises[url]) return this.promises[url];
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    this.promises[url] = new Promise<void>(((resolve, reject) => {
      script.onload = () => resolve();
      script.onerror = (err: Event) => reject(err);
    }));
    this.document.body.appendChild(script);
    return this.promises[url];
  }
}
