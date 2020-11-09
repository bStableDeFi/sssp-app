import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-redeem-confirm',
    templateUrl: './redeem-confirm.component.html',
    styleUrls: ['./redeem-confirm.component.scss']
})
export class RedeemConfirmComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public dlgData: any, private dialogRef: MatDialogRef<RedeemConfirmComponent>) { }

    ngOnInit(): void {

    }

    yes() {
        this.dialogRef.close(true);
    }

}
