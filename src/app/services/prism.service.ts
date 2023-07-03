import { Injectable } from '@angular/core';

import * as Prism from 'prismjs';

@Injectable({
  providedIn: 'root',
})
export class PrismService {
  constructor() {}
  
  highlightAll() {
    Prism.highlightAll();
  }

  convertHtmlIntoString(text: string) {
    return text
      .replace(new RegExp('&', 'g'), '&amp;')
      .replace(new RegExp('<', 'g'), '&lt;');
  }
}
