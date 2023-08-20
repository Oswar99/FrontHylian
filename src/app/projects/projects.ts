import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectData } from 'src/helpers/types';
import { getProjectsByFather, getProjectsByUser, newProject, updateProjectById } from 'src/services/api.service';

@Component({
    selector: 'project',
    templateUrl: './projects.html',
    styleUrls: []
})

export class ProjectsComponent implements OnInit {
    projects: IProjectData[] = []
    newp: boolean = false;
    btnnew: string = 'Nuevo Proyecto';
    title: string = 'Mis Proyectos';
    loading: boolean = true;

    father: string = "root";
    fdata: IProjectData | undefined;
    shareds: IProjectData[] = [];

    loadProjects() {
        this.loading = true;
        getProjectsByFather(this.father).then(v => {
            if (v.data.successed) {
                this.projects = v.data.projects;
                this.fdata = v.data.father;
                this.shareds = v.data.shareds

                if(!v.data.father && this.father !== "root"){
                    this.father = "root";
                    localStorage.setItem("location", "root");
                    this.loadProjects()
                }
            }
            this.loading = false;
        });
    };

    constructor(private router: Router) {
    };
    
    ngOnInit(): void {
        const lc = localStorage.getItem("location");
        this.father = lc ? lc : "root"
        this.loadProjects();
        localStorage.removeItem("path");
    }

    changeView() {
        if (!this.newp) {
            this.btnnew = 'Volver';
            this.title = 'Nuevo Proyecto'
        } else {
            this.btnnew = 'Nuevo Proyecto';
            this.title = 'Mis Proyectos';
            this.loadProjects();
        }
        this.newp = !this.newp;
    }

    loadProject(title: string) {
        this.title = title;
    }

    selectProject(p: IProjectData) {
        if (!p.carpet) {
            this.router.navigate([`projects/${p._id}`])
        } else {
            this.father = p._id!
            localStorage.setItem("location", p._id!)
            this.loadProjects();
        }
    };

    btnBack() {
        this.father = this.fdata? this.fdata.father!: "root";
        localStorage.setItem("location", this.fdata? this.fdata.father!: "root");
        this.loadProjects();
    }

    fnNewCarpet(data: {
        title: string,
        public: boolean
    }) {
        const nc: IProjectData = {
            title: data.title,
            public: data.public,
            carpet: true,
            father: this.father
        }

        newProject(nc).then(v => {
            if (v.data.successed) {
                this.loadProjects();
            };
        });
    };

    
  fnUpdateFolder(data: {
    title: string,
    public: boolean
  }){
    const updateProjectData: IProjectData = {
      title: data.title? data.title: this.fdata!.title,
      public: data.public,
    };

    updateProjectById(this.father, updateProjectData).then(v=>{
      if(v.data.successed){
        this.loadProjects();
      }else{
        alert("Ha ocurrido un error")
      }
    })
  };

}