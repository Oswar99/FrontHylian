import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: './simple-modal.html',
    styleUrls: ['../styles.components.scss']
})

export class SimpleModal{
    @Input() placeholder: string = "";
    @Input() title: string = "";
    @Input() btnLaunch:string = ""
    
    @Output() onsave = new EventEmitter<{
        title: string,
        public: boolean
    }>();

    text: string = "";
    public: boolean = false;

    fnChangeState(state: boolean){
        this.public = state
    };

    fnTextChange(event:any){
        this.text = event.target.value;
    };

    fnOnSaveClick(){
        this.onsave.emit({
            title: this.text,
            public: this.public
        });
    };
}