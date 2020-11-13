import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-approve-dlg',
    templateUrl: './approve-dlg.component.html',
    styleUrls: ['./approve-dlg.component.scss']
})
export class ApproveDlgComponent implements OnInit {

    amt: string;

    infinite: boolean = false;

    symbol:string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ApproveDlgComponent>) {
        this.amt = data.amt;
        this.symbol=data.symbol;
    }

    ngOnInit(): void {
    }

    infiniteChange(val) {
        this.infinite = val.checked;
    }

    continu() {
        this.dialogRef.close({ continu: true, infinite: this.infinite, amt: this.amt });
    }
}
