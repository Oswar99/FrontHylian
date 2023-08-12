import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/types';
import UseChange from 'src/helpers/useChange.helper';
import { Register } from 'src/services/api.service';
@Component({
    selector: 'signup',
    templateUrl: './signup.html',
    styleUrls:['../login/login.component.scss']
})

export class SignupComponent {
  state: IUser = {
    name:"",
    lastname:"",
    email:"",
    nickname:"",
    pass:""
  }
  ch:UseChange = new UseChange(this.state);
  constructor (private router: Router){
  }

  registerUser(){
    Register(this.ch.getValues()).then(v=>{
      if(v.data.successed){
        alert("Su cuenta ha sido creada con exito, por favor inicie sesion!")
        this.router.navigate(['/login']);
      };
    })
  }
  
  irALanding(){
    this.router.navigate(['']);
  }
  
}