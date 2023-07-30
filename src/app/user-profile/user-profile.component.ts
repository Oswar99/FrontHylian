import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor (private router: Router){}
  
  irAEditarUsuario(){
    this.router.navigate(['/user-profile-edit']);
  }

  verUsuario(){
    this.router.navigate(['/registered-users']);
  }
  
}