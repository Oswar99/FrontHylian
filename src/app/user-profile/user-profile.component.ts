import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user:IUser;

  constructor (private router: Router){
    const utemp: IUser = JSON.parse(localStorage.getItem("user")!);
    this.user = {...utemp, img: utemp.img? utemp.img: "https://bootdey.com/img/Content/avatar/avatar7.png"};
    localStorage.setItem('path',"user-profile")
  }
  
  irAEditarUsuario(){
    this.router.navigate(['/user-profile-edit']);
  }

  verUsuario(){
    this.router.navigate(['/registered-users']);
  }
  
}
