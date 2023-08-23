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
    pass:"",
    type:"GRATUITO"
  };

  selected: string = "GRATUITO";

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

  types: string[] = ["GRATUITO", "ESTANDAR", "PROFESIONAL"];

  setSelected(type: 0|1|2){
    this.selected = this.types[type];
    this.ch.handleChange({target:{
      name:"type",
      value:this.types[type]
    }})
  };

  getIsSelected(type: 0|1|2){
    return this.selected === this.types[type];
  };

  getStyle(type: 0|1|2){
    const s = "border-style: solid; border-color: white;"
    if(this.getIsSelected(type)){
      return s;
    }else{
      return "";
    }
  }
  
}