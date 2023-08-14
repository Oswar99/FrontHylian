import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/types';
import { findUSer } from 'src/services/api.service';

@Component({
    selector: 'suggested-users',
    templateUrl: './suggested.html',
    styleUrls: []
})

export class SuggestedUsersComponent {
    loading: boolean = true;
    users: IUser[] = [];
    search: string = "";
    @Input() title: string = "Busca un Usuario";
    @Input() pid: string = "";
    @Input() fnClick: (id:string, pid:string)=>void = ()=>{};

    constructor(private router:Router){
    }


    findUser(event?:any|undefined){
        if(event.target.value){
            this.search = event.target.value;
        };
        if(this.search){
            findUSer(this.search).then(v=>{
                if(v.data.successed){
                    this.users = v.data.users;
                };
            });
        }else{
            this.users = [];
        };
    };

}