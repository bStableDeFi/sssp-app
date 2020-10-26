import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-unsupported-network',
    templateUrl: './unsupported-network.component.html',
    styleUrls: ['./unsupported-network.component.scss']
})
export class UnsupportedNetworkComponent implements OnInit {

    chainId: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.chainId = data.chainId;
    }

    ngOnInit(): void {
    }

}
