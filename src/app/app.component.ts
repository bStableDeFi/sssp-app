import { Component } from '@angular/core';
import { BootService } from './services/boot.service';
import { LanguageService } from './services/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'sssp-app';

    curTab = 0;

    loading: boolean = false;


    constructor(public boot: BootService, public lang: LanguageService) {
    }

    public connectWallet() {
        this.loading = true;
        this.boot.connectWallet().then(() => this.loading = false);
    }

    changeTab(tab) {
        this.curTab = tab;
    }

    changeLang(lang: string) {
        this.lang.changeLanguage(lang);
    }


    onLoading() {
        this.loading = true;
    }

    onLoaded() {
        this.loading = false;
    }

}
