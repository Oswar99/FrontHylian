import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { IProjectData, IUser } from 'src/helpers/types';
import { followUser, getUserById, unfollowUser } from 'src/services/api.service';

@Component({
  selector: 'user-view',
  templateUrl: './user-view.html',
  styleUrls: []
})
export class UserViewComponent implements OnInit {
    user: IUser|undefined;
    followed: boolean = false;
    id: string = "";

    projects: IProjectData[] = [];

    constructor(private router: Router, private ra:ActivatedRoute){};

    loadUserData(){
        this.user = undefined;
        this.id = this.ra.snapshot.params['id'];
        getUserById(this.id).then(v=>{
            if(v.data.successed){
                this.user = {
                    ...v.data.user,
                    lastSession: moment(v.data.user.lastSession).format('LLL'),
                    joinTime: moment(v.data.user.joinTime).format('LLL')
                };
                this.followed = v.data.followed;
                this.projects = v.data.projects;
            }else{
                this.router.navigate(['user-profile'])
            }
        });
    };

    ngOnInit(): void {
        this.loadUserData();
    };

    btnFollow(){
        followUser({id: this.id}).then(v=>{
            if(v.data.successed){
                this.loadUserData();
            };
        });
    };

    btnUnfollow(){
        unfollowUser({id: this.id}).then(v=>{
            if(v.data.successed){
                this.loadUserData();
            };
        });
    };

    folderClick(id: string){
        localStorage.setItem("location", id);
    };
};
