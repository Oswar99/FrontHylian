import { Component } from '@angular/core';
import { ProjectsController } from 'src/helpers/controller.helper';
import { IProjectData } from 'src/helpers/types';

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

    pc: ProjectsController = new ProjectsController();

    changeView() {
        this.btnnew = !this.newp ? 'Volver' : 'Nuevo Proyecto';
        this.title = this.newp ? 'Mis Proyectos' : 'Nuevo Proyecto'
        this.newp = !this.newp;
        this.projects = this.pc.getProjects();
    }
}