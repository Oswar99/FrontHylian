import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent {
  constructor (private router: Router){}
  
  cancelar(){
    this.router.navigate(['/user-profile']);
  }

  modalAbierta: boolean = false;

  abrirModal() {
    this.modalAbierta = true;
  }

  cerrarModal() {
    this.modalAbierta = false;
  }

}
