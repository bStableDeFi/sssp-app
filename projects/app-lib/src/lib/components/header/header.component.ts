import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'lib-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input('bootSvr')
    boot: any;

    @Input('needWallet')
    needWallet: boolean = false;
    loading: boolean = false;

    constructor(public lang: LanguageService) { }

    ngOnInit(): void {
    }
    public connectWallet() {
        this.loading = true;
        this.boot.connectWallet().then(() => this.loading = false);
    }
    onLoading() {
        this.loading = true;
    }

    onLoaded() {
        this.loading = false;
    }
    changeLang(lang: string) {
        this.lang.changeLanguage(lang);
    }
}
