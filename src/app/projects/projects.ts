import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectData } from 'src/helpers/types';
import { getProjectsByUser } from 'src/services/api.service';

@Component({
    selector: 'project',
    templateUrl: './projects.html',
    styleUrls: []
})

export class ProjectsComponent {
    projects: IProjectData[] = []
    newp: boolean = false;
    btnnew: string = 'Nuevo Proyecto';
    title: string = 'Mis Proyectos';
    loading: boolean = true;

    loadProjects(){
        getProjectsByUser("").then(v=>{
            if(v.data.successed){
                this.projects = v.data.projects;
            }
            this.loading = false;
        });
    };

    constructor(private router:Router){
        this.loadProjects();
        localStorage.removeItem("path");
    }

    changeView() {
        if(!this.newp){
            this.btnnew = 'Volver';
            this.title = 'Nuevo Proyecto'
        }else{
            this.btnnew = 'Nuevo Proyecto';
            this.title = 'Mis Proyectos';
            this.loadProjects();
        }
        this.newp = !this.newp;
    }

    loadProject(title:string){
        this.title = title;
    }

    selectProject(id:string){
        this.router.navigate([`projects/${id}`])
    }


}