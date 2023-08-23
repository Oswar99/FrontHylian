import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { PrismEditorComponent } from '../prism-editor/prism-editor.component';
import CoderContent from 'src/helpers/setup.helper';
import { IProjectData, IUser } from 'src/helpers/types';
import { deleteProject, deleteShare, getProjectById, getShares, newProject, shareWithUser, updateProjectById } from 'src/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements OnInit {
  @ViewChild(PrismEditorComponent) child: any;
  @Input() ngStyle: any;
  @Input() enablesave: boolean = true;
  @Input() project_id: string = "";

  @Output() fnCancel: EventEmitter<void> = new EventEmitter<void>;
  @Output() loadProject: EventEmitter<{ title: string, carpet: boolean }> = new EventEmitter<{ title: string, carpet: boolean }>;

  html: SafeHtml;
  share: boolean = false;
  loading: boolean = true;

  carpet: boolean = false;

  htmltext: string = "";
  csstext: string = "";
  jstext: string = "";

  editable: boolean = true;

  modaltitle: string = "";
  selectedmodal: 1 | 2 | 3 | undefined;

  project_loaded?: IProjectData;

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.html = this.sanitizer.bypassSecurityTrustHtml('');
  };

  ngOnInit(): void {
    if (this.project_id !== "") {
      this.share = true;
      getProjectById(this.project_id).then(v => {
        if (v.data.successed) {
          const ptest: IProjectData = v.data.project
          this.carpet = ptest.carpet!
          this.onHtmlChange(ptest.html!, 1)
          this.onHtmlChange(ptest.css!, 2)
          this.onHtmlChange(ptest.js!, 3)

          this.loadProject.emit({ title: ptest.title!, carpet: ptest.carpet! });
          this.project_loaded = ptest;
          this.loading = false;

          this.editable = v.data.editable
        } else {
          this.router.navigate(['projects'])
        };
      })
    }
  };

  coder: CoderContent = new CoderContent(this.sanitizer);


  onSelectModal(type: 1 | 2 | 3, title: string) {
    this.selectedmodal = type;
    this.modaltitle = 'Editor ' + title;
  }

  onHtmlChange(newCode: string, type: 1 | 2 | 3) {
    if (type === 1) {
      this.coder.setBody(newCode);
      this.htmltext = newCode;
    } else if (type === 2) {
      this.coder.setStyle(newCode);
      this.csstext = newCode;
    } else if (type === 3) {
      this.coder.setScript(newCode);
      this.jstext = newCode;
    };

    this.html = this.coder.getContent();
  };


  fnSave(data: {
    title: string,
    public: boolean
  }) {
    const lc = localStorage.getItem("location");
    const newProjectData: IProjectData = {
      title: data.title,
      public: data.public,
      html: this.htmltext,
      css: this.csstext,
      js: this.jstext,
      father: lc ? lc : "root"
    }

    newProject(newProjectData).then(v => {
      if (v.data.successed) {
        this.fnCancel.emit();
      } else {
        alert(v.data.message? v.data.message:"Ha ocurrido un error")
      }
    })

  };

  fnUpdate(data: {
    title: string,
    public: boolean
  }) {
    const updateProjectData: IProjectData = {
      title: data.title ? data.title : this.project_loaded!.title,
      public: data.public,
      html: this.htmltext,
      css: this.csstext,
      js: this.jstext
    };

    updateProjectById(this.project_id, updateProjectData).then(v => {
      if (v.data.successed) {
        this.fnCancel.emit();
      } else {
        alert("Ha ocurrido un error")
      }
    })
  };

  getPId() {
    return this.project_id;
  };

  downloadFile(type: number) {
    var blob: Blob;
    var title: string;
    
    if(type === 0){
      blob = new Blob([this.coder.getHtml(this.project_loaded?.title!)], { type: "text/html" });
      title = this.project_loaded?.title + ".html"
    }else if(type === 1){
      blob = new Blob([this.htmltext], { type: "text/html" });
      title = this.project_loaded?.title + ".html"
    }else if(type === 2){
      blob = new Blob([this.csstext], { type: "text/css" });
      title = this.project_loaded?.title + ".css"
    }else{
      blob = new Blob([this.jstext], { type: "text/javascript" });
      title = this.project_loaded?.title + ".js"
    }
    const url = URL.createObjectURL(blob);
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = url;
    enlaceDescarga.download = title;
    enlaceDescarga.textContent = "Descargar HTML";
    enlaceDescarga.click();
    URL.revokeObjectURL(url);
  }

  fnDelete() {
    deleteProject(this.project_id).then(v => {
      if (v.data.successed) {
        this.fnCancel.emit();
      } else {
        alert(v.data.message);
      };
    })
  }


}

