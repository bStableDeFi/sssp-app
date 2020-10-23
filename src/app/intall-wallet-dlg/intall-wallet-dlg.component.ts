import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BootService } from '../services/boot.service';

@Component({
    selector: 'app-intall-wallet-dlg',
    templateUrl: './intall-wallet-dlg.component.html',
    styleUrls: ['./intall-wallet-dlg.component.scss']
})
export class IntallWalletDlgComponent implements OnInit {

    constructor(public boot: BootService, public dialogRef: MatDialogRef<IntallWalletDlgComponent>) { }

    ngOnInit(): void {
    }
    connectWC() {
        this.dialogRef.close();
        this.boot.connectWC();
    }
}
