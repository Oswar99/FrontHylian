import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/types';
import UseChange from 'src/helpers/useChange.helper';

@Component({
  selector: 'profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent {
  @Input() user?: IUser;
  @Output() btnCancel: EventEmitter<void> = new EventEmitter<void>;

  private states = {
    name:"",
    lastname:"",
    email:"",
    nickname:"",
    pass:""
  }

  ch: UseChange = new UseChange(this.states);

  constructor (private router: Router){}
  
  fnCancel(){
    this.btnCancel.emit();
  };
  
  fnSave(){

  }

}
