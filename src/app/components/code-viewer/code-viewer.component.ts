import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { PrismEditorComponent } from '../prism-editor/prism-editor.component';
import CoderContent from 'src/helpers/coder.helper';
import { IProjectData } from 'src/helpers/types';
import { getProjectById, newProject, updateProjectById } from 'src/services/api.service';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements OnInit{
  @ViewChild(PrismEditorComponent) child: any;
  @Input() ngStyle: any;
  @Input() enablesave: boolean = true;
  @Input() project_id: string = "";

  @Output() fnCancel: EventEmitter<void> = new EventEmitter<void>;
  @Output() loadProject: EventEmitter<string> = new EventEmitter<string>;

  html: SafeHtml;
  share: boolean = false;

  htmltext: string = "";
  csstext: string = "";
  jstext: string = "";

  modaltitle: string = "";
  selectedmodal: 1|2|3|undefined;

  project_loaded?: IProjectData;
  
  constructor(private sanitizer:DomSanitizer){
    this.html = this.sanitizer.bypassSecurityTrustHtml('');
  };

  ngOnInit(): void {
    if(this.project_id !== ""){
      this.share = true;
      getProjectById(this.project_id).then(v=>{
        if(v.data.successed){
          const ptest: IProjectData = v.data.project
          this.onHtmlChange(ptest.html!, 1)
          this.onHtmlChange(ptest.css!, 2)
          this.onHtmlChange(ptest.js!, 3)
          
          this.loadProject.emit(ptest.title);
          this.project_loaded = ptest;
        };
      })
    }
  };
  
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

  fnSave(data: {
    title: string,
    public: boolean
  }){
    const newProjectData: IProjectData = {
      title: data.title,
      public: data.public,
      html:this.htmltext,
      css:this.csstext,
      js: this.jstext
    }

    newProject(newProjectData).then(v=>{
      if(v.data.successed){
        this.fnCancel.emit();
      }else{
        alert("Ha ocurrido un error")
      }
    })

  };

  fnUpdate(data: {
    title: string,
    public: boolean
  }){
    const updateProjectData: IProjectData = {
      title: data.title? data.title: this.project_loaded!.title,
      public: data.public,
      html:this.htmltext,
      css:this.csstext,
      js: this.jstext
    };

    updateProjectById(this.project_id, updateProjectData).then(v=>{
      if(v.data.successed){
        this.fnCancel.emit();
      }else{
        alert("Ha ocurrido un error")
      }
    })
  }
  
}

