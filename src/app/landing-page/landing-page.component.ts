import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor (private router: Router){}
  
  irALogin(){
    this.router.navigate(['/login']);
  }

  irAProyectos(){
    this.router.navigate(['/proyectos']);
  }

  irATryIt() {
    this.router.navigate(['/try-it']);
  }
  
}
