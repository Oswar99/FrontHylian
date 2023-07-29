import { Component } from '@angular/core';

@Component({
    selector: 'project',
    templateUrl: './projects.html',
    styleUrls: []
})

export class ProjectsComponent {
    newp: boolean = false;
    btnnew: string = 'Nuevo Proyecto';
    title: string = 'Mis Proyectos'

    changeView() {
        this.btnnew = !this.newp ? 'Volver' : 'Nuevo Proyecto';
        this.title = this.newp ? 'Mis Proyectos' : 'Nuevo Proyecto'
        this.newp = !this.newp;
    }
}