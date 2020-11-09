import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-addlp-confirm',
    templateUrl: './addlp-confirm.component.html',
    styleUrls: ['./addlp-confirm.component.scss']
})
export class AddlpConfirmComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<AddlpConfirmComponent>) { }

    ngOnInit(): void {
    }
    yes() {
        this.dialogRef.close(true);
    }

}
