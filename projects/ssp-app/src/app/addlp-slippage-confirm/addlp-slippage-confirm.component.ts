import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addlp-slippage-confirm',
  templateUrl: './addlp-slippage-confirm.component.html',
  styleUrls: ['./addlp-slippage-confirm.component.scss']
})
export class AddlpSlippageConfirmComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public dlgData: any, private dialogRef: MatDialogRef<AddlpSlippageConfirmComponent>) { }

    ngOnInit(): void {
    }

    yes() {
        this.dialogRef.close(true);
    }

}
