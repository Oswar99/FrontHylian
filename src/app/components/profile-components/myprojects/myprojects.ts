import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectData } from 'src/helpers/types';
import { getProjectsByUser } from 'src/services/api.service';

@Component({
    selector: 'my-projects',
    templateUrl: './myprojects.html',
    styleUrls: []
})

export class MyProjectsComponent implements OnInit {
    @Input() title: string = "Mis proyectos";
    @Input() project_type: string = "";

    projects: IProjectData[] = []
    loading: boolean = true;

    loadProjects(){
        getProjectsByUser(this.project_type).then(v=>{
            if(v.data.successed){
                this.projects = v.data.projects;
            }
            this.loading = false;
        });
    };

    constructor(private router:Router){}
    
    ngOnInit(): void {
        this.loadProjects();
    }

    selectProject(id:string){
        this.router.navigate([`projects/${id}`])
    }

    folderClick(id: string){
        localStorage.setItem("location", id);
    }

}