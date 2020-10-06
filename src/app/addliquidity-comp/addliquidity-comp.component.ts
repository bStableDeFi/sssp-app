import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BootService } from '../services/boot.service';

export enum ActionStatus {
    None, Approving, Approved, TransationSending, TransactionEnd, daiApproving, busdApproving, usdtApproving
}

@Component({
    selector: 'app-addliquidity-comp',
    templateUrl: './addliquidity-comp.component.html',
    styleUrls: ['./addliquidity-comp.component.scss']
})
export class AddliquidityCompComponent implements OnInit {

    daiAmt: number;

    busdAmt: number;

    usdtAmt: number;

    daiApproved: boolean = false;

    busdApproved: boolean = false;

    usdtApproved: boolean = false;

    status: ActionStatus = ActionStatus.None;

    @Output() loading: EventEmitter<any> = new EventEmitter();
    @Output() loaded: EventEmitter<any> = new EventEmitter();

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }

    approve() {
        if (this.daiAmt || this.busdAmt || this.usdtAmt) {
            this.status = ActionStatus.Approving;
            let pArr = new Array();
            if (this.daiAmt) {
                pArr.push(this.boot.approve(0, String(this.daiAmt ? this.daiAmt : 0)));
            }
            if (this.busdAmt) {
                pArr.push(this.boot.approve(1, String(this.busdAmt ? this.busdAmt : 0)));
            }
            if (this.daiAmt) {
                pArr.push(this.boot.approve(2, String(this.usdtAmt ? this.usdtAmt : 0)));
            }
            Promise.all(pArr).then(rArr => {
                this.status = ActionStatus.Approved;
            });
        }
    }

    approveDai() {
        if (this.daiAmt) {
            this.status = ActionStatus.Approving;
            this.loading.emit();
            this.boot.approve(0, String(this.daiAmt ? this.daiAmt : 0)).then(r => {
                this.daiApproved = true;
                this.status = ActionStatus.Approved;
                this.loaded.emit();
            });
        }
    }

    approveBusd() {
        if (this.busdAmt) {
            this.status = ActionStatus.Approving;
            this.loading.emit();
            this.boot.approve(1, String(this.busdAmt ? this.busdAmt : 0)).then(r => {
                this.busdApproved = true;
                this.status = ActionStatus.Approved;
                this.loaded.emit();
            });
        }
    }

    approveUsdt() {
        if (this.usdtAmt) {
            this.status = ActionStatus.Approving;
            this.loading.emit();
            this.boot.approve(2, String(this.usdtAmt ? this.usdtAmt : 0)).then(r => {
                this.usdtApproved = true;
                this.status = ActionStatus.Approved;
                this.loaded.emit();
            });
        }
    }

    addLiquidity() {
        if (this.daiAmt || this.busdAmt || this.usdtAmt) {
            this.status = ActionStatus.TransationSending;
            this.loading.emit();
            this.boot.addLiquidity(String(this.daiAmt ? this.daiAmt : 0), String(this.busdAmt ? this.busdAmt : 0), String(this.usdtAmt ? this.usdtAmt : 0)).then(r => {
                this.status = ActionStatus.TransactionEnd;
                this.boot.loadData();
                this.loaded.emit();
            });
        }
    }

}
