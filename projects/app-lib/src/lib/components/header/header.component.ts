import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { BigNumber } from 'bignumber.js';

@Component({
    selector: 'lib-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input('needWallet')
    needWallet: boolean = false;
    loading: boolean = false;
    @Input('network')
    network: string;
    @Input('account')
    account: string;
    @Input('vpDiff')
    vpDiff: BigNumber;

    @Output('chooseWallet')
    chooseWallet: EventEmitter<any> = new EventEmitter();

    @Output('connectWallet')
    connectWallet: EventEmitter<any> = new EventEmitter();

    constructor(public lang: LanguageService) { }

    ngOnInit(): void {
    }
    public onConnectWallet() {
        this.loading = true;
        this.connectWallet.emit();
    }
    public onChooseWallet() {
        this.chooseWallet.emit();
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

    showVpWarning() {
        return this.vpDiff && this.vpDiff.comparedTo(0.6) >= 0;
    }
}
