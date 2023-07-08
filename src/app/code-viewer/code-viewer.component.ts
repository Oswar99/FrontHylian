import { Component, ViewChild, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { PrismEditorComponent } from '../prism-editor/prism-editor.component';
import CoderContent from 'src/helpers/coder.helper';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent{
  @ViewChild(PrismEditorComponent) child: any;
  @Input() ngStyle: any;

  html: SafeHtml;
  
  constructor(private sanitizer:DomSanitizer){
    this.html = this.sanitizer.bypassSecurityTrustHtml('');
  }
  
  coder: CoderContent = new CoderContent(this.sanitizer);

  onHtmlChange(newCode: string, type: 1|2|3) {
    if(type === 1){
      this.coder.setBody(newCode);
    }else if(type === 2){
      this.coder.setStyle(newCode);
    }else if(type === 3){
      this.coder.setScript(newCode);
    };
    this.html = this.coder.getContent();
  };

}

