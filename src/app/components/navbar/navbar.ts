import { Component, Input } from '@angular/core';

@Component({
    selector: 'hylia-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['../styles.components.scss']
})

export class LateralBarComponent{
    @Input() title: string = "";
}