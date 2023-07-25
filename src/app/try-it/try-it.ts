import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'try-it',
    templateUrl: './try-it.html',
    styleUrls:['./try-it.scss']
})

export class TryItComponent {
    enablesave: boolean = false;  
    constructor (private router: Router){}
  
    irALanding(){
      this.router.navigate(['']);
    }
}