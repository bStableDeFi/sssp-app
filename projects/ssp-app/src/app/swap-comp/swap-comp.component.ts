import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { BootService } from '../services/boot.service';

export enum ApproveStatus {
    None, Approved, NoApproved
}

export enum LoadStatus {
    None, Loading, Loaded
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

    approveStatus: ApproveStatus = ApproveStatus.None;

    loadStatus: LoadStatus = LoadStatus.None;

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
        this.boot.getExchangeOutAmt(Number(this.left), Number(this.right), this.amt).then(res => {
            this.minAmt = res.toFixed(9, BigNumber.ROUND_UP);
        });
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
        this.boot.getExchangeOutAmt(Number(this.left), Number(this.right), this.amt).then(res => {
            this.minAmt = res.toFixed(9, BigNumber.ROUND_UP);
        });
    }

    maxAmt() {
        this.amt = this.boot.balance.coinsBalance[this.left].toFixed(9);
        this.updateApproveStatus();
    }

    approve() {
        if (this.amt) {
            this.loadStatus = LoadStatus.Loading;
            this.loading.emit();
            this.boot.approve(Number(this.left), this.amt).then(() => {
                this.loaded.emit();
                this.updateApproveStatus();
                this.loadStatus = LoadStatus.Loaded;
            });
        }
    }

    exchange() {
        if (this.amt) {
            this.loading.emit();
            this.loadStatus = LoadStatus.Loading;
            this.boot.exchange(Number(this.left), Number(this.right), this.amt, this.minAmt ? this.minAmt : '0').then(res => {
                console.log(res);
                this.boot.loadData();
                this.loaded.emit();
                this.loadStatus = LoadStatus.Loaded;
                this.updateApproveStatus();
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

    amtChanged(val) {
        this.amt = val;
        if (!new BigNumber(this.left).isNaN() && !new BigNumber(this.right).isNaN() && !new BigNumber(this.amt).isNaN()) {
            this.boot.getExchangeOutAmt(Number(this.left), Number(this.right), this.amt).then(res => {
                this.minAmt = res.toFixed(9, BigNumber.ROUND_DOWN);
            });
        }
        this.updateApproveStatus();
    }

    updateApproveStatus() {
        if (!new BigNumber(this.left).isNaN() && !new BigNumber(this.amt).isNaN() && this.boot.accounts && this.boot.accounts.length > 0) {
            this.boot.allowance(this.left).then(amt => {
                if (amt.comparedTo(new BigNumber(this.amt)) >= 0) {
                    this.approveStatus = ApproveStatus.Approved;
                } else {
                    this.approveStatus = ApproveStatus.NoApproved;
                }
            });
        }
    }

    isApproveEnabled() {
        if (this.amt && Number(this.amt) > 0 && this.approveStatus === ApproveStatus.NoApproved && this.loadStatus !== LoadStatus.Loading) {
            return true;
        } else {
            false;
        }
    }

    isExchangeEnabled() {
        if (this.amt && Number(this.amt) > 0 && this.loadStatus !== LoadStatus.Loading && this.approveStatus === ApproveStatus.Approved) {
            return true;
        } else {
            return false;
        }
    }
}
