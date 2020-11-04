import { Component, ViewChild } from '@angular/core';
import { BootService } from './services/boot.service';
import { HeaderComponent, LanguageService } from 'app-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'sssp-app';

    curTab = 0;

    @ViewChild('header')
    header: HeaderComponent;

    constructor(public boot: BootService, public lang: LanguageService) {
    }



    changeTab(tab) {
        this.curTab = tab;
    }

    




}
