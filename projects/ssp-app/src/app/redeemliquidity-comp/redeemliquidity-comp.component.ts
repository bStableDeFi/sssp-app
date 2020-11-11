import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import BigNumber from 'bignumber.js';
import { BootService } from '../services/boot.service';

export enum ActionStatus {
    None, Transfering, TrasactionEnd
}

@Component({
    selector: 'app-redeemliquidity-comp',
    templateUrl: './redeemliquidity-comp.component.html',
    styleUrls: ['./redeemliquidity-comp.component.scss']
})
export class RedeemliquidityCompComponent implements OnInit {

    amts: Array<number>;

    redeemPrecent: number = 0;

    redeemToIndex: string = '4';

    status: ActionStatus = ActionStatus.None;

    @Output() loading: EventEmitter<any> = new EventEmitter();
    @Output() loaded: EventEmitter<any> = new EventEmitter();

    slideToggleColor: ThemePalette = "accent";

    @ViewChild('redeemToThree')
    redeemToThree: MatSlideToggle;

    constructor(public boot: BootService) {
        this.amts = new Array();
        this.boot.coins.forEach((e, i, arr) => {
            this.amts.push(0);
        })
    }

    ngOnInit(): void {
    }

    async redeemCoin() {
        await this.boot.loadData();
        if (this.redeemPrecent && this.redeemPrecent !== 0) { // 输入要赎回流动性的数量（百分比）
            let lps = this.boot.balance.lp.multipliedBy(this.redeemPrecent).dividedBy(100).toFixed(18, BigNumber.ROUND_UP);
            if (Number(this.redeemToIndex) >= 0 && Number(this.redeemToIndex) <= 2) { // 赎回成一种币
                this.status = ActionStatus.Transfering;
                this.loading.emit();
                this.boot.redeemToOneCoin(lps, this.redeemToIndex, this.amts[this.redeemToIndex]).then(res => {
                    this.status = ActionStatus.TrasactionEnd;
                    this.boot.loadData();
                    this.loaded.emit();
                });
            } else { // 赎回成3种币
                this.status = ActionStatus.Transfering;
                this.loading.emit();
                let amts: Array<string> = new Array();
                this.amts.forEach(e => {
                    amts.push(String(e));
                });
                this.boot.redeemToAll(lps, amts).then(res => {
                    this.status = ActionStatus.TrasactionEnd;
                    this.boot.loadData();
                    this.loaded.emit();
                });
            }
        } else {
            // 根据输入的币的数量赎回
            this.status = ActionStatus.Transfering;
            this.loading.emit();
            let amtsStr = new Array();
            this.amts.forEach((e, i, arr) => {
                amtsStr.push(String(e));
            })
            this.boot.redeemImBalance(amtsStr).then(r => {
                this.status = ActionStatus.TrasactionEnd;
                this.boot.loadData();
                this.loaded.emit();
            });
        }
    }

    redeemPrecentChange(val) {
        if (!this.redeemPrecent || this.redeemPrecent === 0) {
            this.redeemToThree.checked = true;
        }
        this.redeemPrecent = val;
        if (this.redeemPrecent && this.redeemPrecent !== 0) {
            if (this.redeemToThree.checked) {
                let lps = this.boot.balance.lp.multipliedBy(this.redeemPrecent).dividedBy(100);
                this.amts.forEach((e, i, arr) => {
                    let amt = this.boot.poolInfo.coinsRealBalance[i].multipliedBy(lps).div(this.boot.poolInfo.totalSupply);
                    arr[i] = Number(amt.toFixed(9, BigNumber.ROUND_DOWN))
                });
            } else {
                this.redeemToIndexChange(this.redeemToIndex).then();
            }
        }
    }

    async redeemToIndexChange(val) {
        this.redeemToThree.checked = false;
        this.redeemToIndex = val;
        let lps = this.boot.balance.lp.multipliedBy(this.redeemPrecent).dividedBy(100).toFixed(18, BigNumber.ROUND_DOWN);
        let res = await this.boot.calcWithdrawOneCoin(lps, this.redeemToIndex);
        this.amts.forEach((e, i, arr) => {
            if (Number(this.redeemToIndex) === i) {
                arr[i] = Number(new BigNumber(res).dividedBy(new BigNumber(10).exponentiatedBy(18)).toFixed(9));
            } else {
                arr[i] = null;
            }
        });
    }

    reset(val) {
        if (val.checked) {
            this.redeemPrecentChange(this.redeemPrecent);
            this.redeemToIndex = '-1';
        }
    }

}
