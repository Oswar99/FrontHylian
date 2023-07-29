import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (private router: Router){}
  
  irAProyectos(){
    this.router.navigate(['/proyectos']);
  }

  irALanding(){
    this.router.navigate(['']);
  }

}
