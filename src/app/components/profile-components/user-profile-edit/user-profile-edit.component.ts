import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/types';
import UseChange from 'src/helpers/useChange.helper';
import { updateUser, verifyUser } from 'src/services/api.service';

@Component({
  selector: 'profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  @Input() user?: IUser;
  @Output() btnCancel: EventEmitter<void> = new EventEmitter<void>;

  loading: boolean = false;

  private states = {
    name:"",
    lastname:"",
    pass:"",
    img:""
  }

  ch: UseChange = new UseChange(this.states);

  constructor (private router: Router){}
  ngOnInit(): void {
    this.ch.updateValues({
      ...this.states,
      name: this.user?.name,
      lastname: this.user?.lastname,
      img: this.user?.img
    })
  }

  fnCancel(){
    this.btnCancel.emit();
  };

  setImg(img:string){
    this.ch.updateValues({
      ...this.ch.getValues(),
      img: img
    });
  };
  
  fnSave(){
    this.loading = true;
    updateUser(this.ch.getValues()).then(async v=>{
      if(v.data.successed){
        const user: string = localStorage.getItem("tk")!;
        await verifyUser(user).then(v=>{
            if(!v.data.status){
                this.router.navigate(['/']);
            }else{
                localStorage.setItem("user", JSON.stringify(v.data.user))
                const utemp:IUser = v.data.user;
                this.user = {
                    ...utemp,
                    img: utemp.img? utemp.img: "https://bootdey.com/img/Content/avatar/avatar7.png"
                };
                alert("se actualizo");
                window.location.reload();
            };
        });
      };
      this.loading = false;
    })
  }

}
