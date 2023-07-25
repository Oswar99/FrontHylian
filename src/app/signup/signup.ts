import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'signup',
    templateUrl: './signup.html',
    styleUrls:['../login/login.component.scss']
})

export class SignupComponent {
    constructor (private router: Router){}
  
    irALanding(){
      this.router.navigate(['']);
    }
}