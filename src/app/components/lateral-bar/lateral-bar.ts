import { Component } from '@angular/core';

@Component({
    selector: 'lateral-bar',
    templateUrl: './lateral-bar.html',
    styleUrls: ['../styles.components.scss']
})

export class LateralBarComponent{
    project: boolean = true;

    onChangeView(name:string){
        if(name === "projects"){
            this.project = !this.project;
        }
    };


}