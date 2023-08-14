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
  edit: boolean = false;

  constructor (private router: Router){
    const utemp: IUser = JSON.parse(localStorage.getItem("user")!);
    this.user = {...utemp, img: utemp.img? utemp.img: "https://bootdey.com/img/Content/avatar/avatar7.png"};
    localStorage.setItem('path',"user-profile")
  }
  
  irAEditarUsuario(){
    this.edit = true;
  }

  fnCancelEdit(){
    this.edit = false;
  }

  btnUserClick(id:string){
    this.router.navigate([`/users/${id}`]);
  }
  
}
