import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intall-wallet-dlg',
    templateUrl: './intall-wallet-dlg.component.html',
    styleUrls: ['./intall-wallet-dlg.component.scss']
})
export class IntallWalletDlgComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    goToBsc() {
        window.open("https://www.binance.org/en/smartChain", "_blank");
    }
}
