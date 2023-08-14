import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'followed-users',
    templateUrl: './followed.html',
    styleUrls: []
})

export class FollowedUsersComponent {
    loading: boolean = true;

    constructor(private router:Router){
    }


}