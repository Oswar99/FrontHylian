import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { PrismEditorComponent } from '../prism-editor/prism-editor.component';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements AfterViewChecked{
  @ViewChild(PrismEditorComponent) child:any;
  html: string = '';
  css: string = '';
  js: string = '';
  
  onHtmlChange(newCode: string) {
    this.html = newCode;
  }
  onCssChange(newCode: string) {
    this.css = newCode;
  }
  onJsChange(newCode: string) {
    this.js = newCode;
  }

  ngAfterViewChecked() {

  }
}

