import { Component } from '@angular/core';
import { Router } from '@angular/router';
import UseChange from 'src/helpers/useChange.helper';
import { login } from 'src/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor (private router: Router){}
  useChange: UseChange = new UseChange({
    email: "",
    pass: ""
  })
  
  irAProyectos(){
    login(this.useChange.getValues()).then(v=>{
      if(v.data.token){
        alert("Inicio de sesion exitoso.")
        localStorage.setItem("tk", v.data.token);
        localStorage.setItem("user", JSON.stringify(v.data.user));
        this.router.navigate(['/projects']);
      }else{
        alert("Credenciales no validas!")
      }
    })
  }
  
  irALanding(){
    this.router.navigate(['']);
  }
  
}

export interface LoginProps{
  email: string,
  pass: string
}