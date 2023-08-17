import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/types';
import { getFollowedUsers } from 'src/services/api.service';

@Component({
    selector: 'followed-users',
    templateUrl: './followed.html',
    styleUrls: []
})

export class FollowedUsersComponent implements OnInit {
    loading: boolean = true;
    users: IUser[] = [];

    @Output() fnOnClick: EventEmitter<string> = new EventEmitter<string>;

    constructor(private router:Router){
    };

    btnClick(id:string){
        this.fnOnClick.emit(id);
    };

    ngOnInit(): void {
        this.users = [];
        getFollowedUsers().then(v=>{
            if(v.data.successed){
                const followed:any[] = v.data.list;
                followed.map((l)=>{
                    if(l.users[0]){
                        this.users.push(l.users[0]);
                    };
                });
            }else{
                this.users = [];
            };
        });
    };

}