import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-swap-confirm',
    templateUrl: './swap-confirm.component.html',
    styleUrls: ['./swap-confirm.component.scss']
})
export class SwapConfirmComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public dlgData: any, private dialogRef: MatDialogRef<SwapConfirmComponent>) { }

    ngOnInit(): void {
    }

    yes() {
        this.dialogRef.close(true);
    }

}
