import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/types';
import UseChange from 'src/helpers/useChange.helper';
import { Register } from 'src/services/api.service';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
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

  //Validar coincidencia
  passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl) => {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }
  
    if (passwordControl.value === confirmPasswordControl.value) {
      confirmPasswordControl.setErrors(null);
    } else {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    }
  
    return null;
  };

  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  
  formularioRegistro = new FormGroup({
    nombres: new FormControl('', 
      [
        Validators.required
      ]
    ),
    apellidos: new FormControl('', 
      [
        Validators.required
      ]
    ),
    email: new FormControl('',
      [
        Validators.required, 
        Validators.pattern(this.emailPattern)
      ]
    ),
    nickname: new FormControl('',
      [
        Validators.required,
      ]
    ),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ),
    confirmPassword: new FormControl('',
      [
        Validators.required
      ]
    )
  }, { validators: this.passwordMatchValidator });
  

  get nombres(){
    return this.formularioRegistro.get('nombres');
  };
  get apellidos(){
    return this.formularioRegistro.get('apellidos');
  };
  get email(){
    return this.formularioRegistro.get('email');
  };
  get nickname(){
    return this.formularioRegistro.get('nickname');
  };
  get password(){
    return this.formularioRegistro.get('password');
  };
  get confirmPassword(){
    return this.formularioRegistro.get('confirmPassword');
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