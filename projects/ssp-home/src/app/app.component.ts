import { Component } from '@angular/core';
import { LanguageService } from 'app-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'home';
    constructor(public lang: LanguageService) {

    }
}
