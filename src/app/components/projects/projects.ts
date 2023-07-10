import { Component } from '@angular/core';

@Component({
    selector: 'project',
    templateUrl: './projects.html',
    styleUrls: ['../styles.components.scss']
})

export class ProjectsComponent{
    newp: boolean = false
    btnnew: string ='Nuevo Proyecto'
    changeView(name:string){
        if(name === "new"){
            this.btnnew = !this.newp? 'Volver': 'Nuevo Proyecto';
            this.newp = !this.newp;
        }
    }
}