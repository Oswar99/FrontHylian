import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { verifyUser } from 'src/services/api.service';

@Component({
    selector: 'hylia-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['../styles.components.scss']
})

export class LateralBarComponent implements OnInit{
    @Input() title: string = "";

    ngOnInit(): void {
        const user: string = localStorage.getItem("tk")!;
        verifyUser(user).then(v=>{
            if(!v.data.status){
                this.router.navigate(['/']);
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