import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IProjectData } from 'src/helpers/types';
import { getProjectsByFather } from 'src/services/api.service';

@Component({
    selector: 'folder-view',
    templateUrl: './folder-view.html',
    styleUrls: []
})

export class FolderView implements OnInit{
    @Input() folder: IProjectData|undefined;
    
    loading: boolean = true;
    projects: IProjectData[] = [];

    father: string = "";
    fdata: IProjectData | undefined;

    ngOnInit(): void {
        this.father = this.folder!._id!
        this.fdata = this.folder!;
        this.loadProjects();
    }

    loadProjects() {
        getProjectsByFather(this.folder!._id).then(v => {
            if (v.data.successed) {
                this.projects = v.data.projects;
                this.fdata = v.data.father;
            }
            this.loading = false;
        });
    };
};