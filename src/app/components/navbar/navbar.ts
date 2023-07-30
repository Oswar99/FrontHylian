import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'hylia-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['../styles.components.scss']
})

export class LateralBarComponent{
    @Input() title: string = "";
    
    constructor (private router: Router){}

    irAPerfil(){
        this.router.navigate(['/user-profile']);
    }

    irAAreaTrabajo(){
        this.router.navigate(['/projects']);
    }

}