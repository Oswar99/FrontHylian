import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { PrismEditorComponent } from '../prism-editor/prism-editor.component';
import CoderContent from 'src/helpers/coder.helper';
import { IProjectData } from 'src/helpers/types';
import { ProjectsController } from 'src/helpers/controller.helper';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent{
  @ViewChild(PrismEditorComponent) child: any;
  @Input() ngStyle: any;
  @Input() enablesave: boolean = true;

  @Input() pc: ProjectsController|undefined;
  @Output() fnCancel: EventEmitter<void> = new EventEmitter<void>;

  html: SafeHtml;

  htmltext: string = "";
  csstext: string = "";
  jstext: string = "";

  modaltitle: string = "";
  selectedmodal: 1|2|3|undefined;
  
  constructor(private sanitizer:DomSanitizer){
    this.html = this.sanitizer.bypassSecurityTrustHtml('');
  }
  
  coder: CoderContent = new CoderContent(this.sanitizer);


  onSelectModal(type: 1|2|3, title:string){
    this.selectedmodal = type;
    this.modaltitle = 'Editor ' + title;
  }

  onHtmlChange(newCode: string, type: 1|2|3) {
    if(type === 1){
      this.coder.setBody(newCode);
      this.htmltext = newCode;
    }else if(type === 2){
      this.coder.setStyle(newCode);
      this.csstext = newCode;
    }else if(type === 3){
      this.coder.setScript(newCode);
      this.jstext = newCode;
    };

    this.html = this.coder.getContent();
  };

  modalAbierta: boolean = false;

  abrirModal() {
    this.modalAbierta = true;
  }

  cerrarModal() {
    this.modalAbierta = false;
  }

  fnSave(){
    const data: IProjectData = {
      type:"Publico",
      status:1,
      html:this.htmltext,
      css:this.csstext,
      js: this.jstext
    }

    if(this.pc){
      this.pc.addProject(data);
    };

    this.fnCancel.emit();
  };
  
}
