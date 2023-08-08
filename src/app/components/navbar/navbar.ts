import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/types';
import { verifyUser } from 'src/services/api.service';

@Component({
    selector: 'hylia-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['../styles.components.scss']
})

export class LateralBarComponent implements OnInit{
    @Input() title: string = "";
    user:IUser|undefined;

    ngOnInit(): void {
        const user: string = localStorage.getItem("tk")!;
        verifyUser(user).then(v=>{
            if(!v.data.status){
                this.router.navigate(['/']);
            }else{
                localStorage.setItem("user", JSON.stringify(v.data.user))
                const utemp:IUser = v.data.user;
                this.user = {
                    ...utemp,
                    img: utemp.img? utemp.img: "https://bootdey.com/img/Content/avatar/avatar7.png"
                };
            };
        });
    };
    
    constructor (private router: Router){}

    irAPerfil(){
        this.router.navigate(['/user-profile']);
    }

    irAAreaTrabajo(){
        this.router.navigate(['/projects']);
    }

}