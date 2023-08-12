import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'project-visualizer',
    templateUrl: './project-visualizer.html',
    styleUrls: []
})

export class ProjectVisualizer implements OnInit {
    loading: boolean = true;
    id: string = "";
    title: string = "";

    constructor(private router:Router, private ra:ActivatedRoute){

    };

    ngOnInit(): void {
        this.id = this.ra.snapshot.params['id'];
        this.loading = false;
    }

    loadProject(title:string){
        this.title = title;
    }

    deSelect(){
        const path = localStorage.getItem('path');
        if(path){
            localStorage.removeItem("path");
            this.router.navigate([path]);
        }else{
            this.router.navigate(['projects']);
        };
    };
};