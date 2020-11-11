import { Component, ViewChild } from '@angular/core';
import { BootService } from './services/boot.service';
import { HeaderComponent, LanguageService } from 'app-lib';
import { MatDialog } from '@angular/material/dialog';
import { ChooseWalletDlgComponent } from './choose-wallet-dlg/choose-wallet-dlg.component';
import { IntallWalletDlgComponent } from './intall-wallet-dlg/intall-wallet-dlg.component';

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

    constructor(public boot: BootService, public lang: LanguageService, private dialog: MatDialog) {
        if (this.boot.isMetaMaskInstalled() || this.boot.isBinanceInstalled()) {
            this.chooseWallet();
        }
    }



    changeTab(tab) {
        this.curTab = tab;
    }

    chooseWallet() {
        this.dialog.open(ChooseWalletDlgComponent, { width: '30em' });
    }

    public async connectWallet() {
        if (!this.boot.isMetaMaskInstalled() && !this.boot.isBinanceInstalled()) {
            this.dialog.open(IntallWalletDlgComponent, { width: '30em' });
            return;
        } else {
            this.chooseWallet();
        }
    }

    public getVpDiff() {
        let r = this.boot.poolInfo.virtualPrice.minus(1).multipliedBy(100).abs();
        if (r.comparedTo(100) === 0) {
            return null;
        } else {
            return r;
        }
    }



}
