import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectData } from 'src/helpers/types';
import { getProjectsByUser } from 'src/services/api.service';

@Component({
    selector: 'my-projects',
    templateUrl: './myprojects.html',
    styleUrls: []
})

export class MyProjectsComponent {
    projects: IProjectData[] = []
    loading: boolean = true;

    loadProjects(){
        getProjectsByUser().then(v=>{
            if(v.data.successed){
                this.projects = v.data.projects;
            }
            this.loading = false;
        });
    };

    constructor(private router:Router){
        this.loadProjects();
    }

    selectProject(id:string){
        this.router.navigate([`projects/${id}`])
    }

}