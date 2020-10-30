import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { BootService } from '../services/boot.service';

export enum ActionStatus {
    None, Approving, Approved, Exchaging, Exchanged
}

@Component({
    selector: 'app-swap-comp',
    templateUrl: './swap-comp.component.html',
    styleUrls: ['./swap-comp.component.scss']
})
export class SwapCompComponent implements OnInit {
    left: string = '0';

    right: string = '1';

    balance: BigNumber;

    amt: string;

    minAmt: string;

    approved: boolean = false;

    status: ActionStatus = ActionStatus.None;

    @Output() loading: EventEmitter<any> = new EventEmitter();
    @Output() loaded: EventEmitter<any> = new EventEmitter();

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }
    chooseLeft(val) {
        this.left = val;
        if (this.left === this.right) {
            if (this.right !== '2') {
                this.right = String(Number(this.right) + 1);
            } else {
                this.right = '0';
            }
        }
        console.log('left ' + this.left);
    }
    chooseRight(val) {
        this.right = val;
        if (this.left === this.right) {
            if (this.left !== '2') {
                this.left = String(Number(this.right) + 1);
            } else {
                this.left = '0';
            }
        }
        console.log('right ' + this.right);
    }

    maxAmt() {
        this.amt = this.boot.balance.coinsBalance[this.left].toFixed(9);
    }

    approve() {
        if (this.amt) {
            this.status = ActionStatus.Approving;
            this.loading.emit();
            this.boot.approve(Number(this.left), this.amt).then(() => {
                this.approved = true;
                this.status = ActionStatus.Approved;
                this.loaded.emit();
            });
        }
    }

    exchange() {
        if (this.amt) {
            this.status = ActionStatus.Exchaging;
            this.loading.emit();
            this.boot.exchange(Number(this.left), Number(this.right), this.amt, this.minAmt ? this.minAmt : '0').then(res => {
                this.status = ActionStatus.Exchanged;
                this.approved = false;
                console.log(res);
                this.boot.loadData();
                this.loaded.emit();
            });
        }
    }

    // leftClick(i) {
    //     this.left = i;
    // }

    // rightClick(i) {
    //     this.right = i;
    // }

    connectWallet() {
        this.loading.emit();
        this.boot.connectWallet().then(() => this.loaded.emit());
    }
}
