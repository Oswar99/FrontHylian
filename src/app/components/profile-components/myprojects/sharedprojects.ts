import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getShareByUser } from 'src/services/api.service';

@Component({
    selector: 'shared-projects',
    templateUrl: './sharedprojects.html',
    styleUrls: []
})

export class SharedProjects implements OnInit {
    @Input() title: string = "Proyectos compartidos";

    projects: any[] = []
    loading: boolean = true;

    loadProjects(){
        getShareByUser().then(v=>{
            if(v.data.successed){
                this.projects = v.data.list;
            };
            this.loading = false;
        });
    };

    constructor(private router:Router){}
    
    ngOnInit(): void {
        this.loadProjects();
    }

    selectProject(id:string){
        this.router.navigate([`projects/${id}`])
    };

    folderClick(id: string){
        localStorage.setItem("location", id);
    }

}