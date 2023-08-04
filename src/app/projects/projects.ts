import { Component } from '@angular/core';
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

    constructor(){
        getProjectsByUser().then(v=>{
            if(v.data.successed){
                this.projects = v.data.projects
            }
        })
    }

    changeView() {
        this.btnnew = !this.newp ? 'Volver' : 'Nuevo Proyecto';
        this.title = this.newp ? 'Mis Proyectos' : 'Nuevo Proyecto'
        this.newp = !this.newp;
        //this.projects = this.pc.getProjects();
    }
}