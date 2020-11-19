import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-wallet-exception-dlg',
    templateUrl: './wallet-exception-dlg.component.html',
    styleUrls: ['./wallet-exception-dlg.component.scss']
})
export class WalletExceptionDlgComponent implements OnInit {

    content: string;

    constructor(@Inject(MAT_DIALOG_DATA) public dlgData: any, private dialogRef: MatDialogRef<WalletExceptionDlgComponent>) {
        this.content = dlgData.content;
    }

    ngOnInit(): void {
    }

}
