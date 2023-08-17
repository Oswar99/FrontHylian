import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() fnOnClick: EventEmitter<string> = new EventEmitter<string>;

    constructor(private router:Router){
    }

    btnClick(id:string){
        this.fnOnClick.emit(id);
    }

    fnSearch(){
        findUSer(this.search).then(v=>{
            if(v.data.successed){
                this.users = v.data.users;
            };
        });
    }

    findUser(event:any){
        this.search = event.target.value;
        if(this.search.length === 0){
            this.users = [];
        }else if((this.search.length % 3) === 0){
            this.fnSearch();
        }
    };

}