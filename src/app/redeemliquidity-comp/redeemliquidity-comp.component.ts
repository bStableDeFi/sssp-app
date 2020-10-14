import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

    daiAmt: number;

    busdAmt: number;

    usdtAmt: number;

    redeemPrecent: number;

    redeemToAllDisabled: boolean = true;

    daiInputDisabled: boolean = false;
    busdInputDisabled: boolean = false;
    usdtInputDisabled: boolean = false;

    redeemToIndex: string = '4';

    status: ActionStatus = ActionStatus.None;

    @Output() loading: EventEmitter<any> = new EventEmitter();
    @Output() loaded: EventEmitter<any> = new EventEmitter();

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }

    redeemCoin() {
        if (this.redeemPrecent && this.redeemPrecent !== 0) { // 输入要赎回流动性的数量（百分比）
            let lps = this.boot.balance.lp.multipliedBy(this.redeemPrecent).dividedBy(100).toFixed(18, BigNumber.ROUND_DOWN);
            if (Number(this.redeemToIndex) >= 0 && Number(this.redeemToIndex) <= 2) { // 赎回成一种币
                this.status = ActionStatus.Transfering;
                this.loading.emit();
                this.boot.redeemToOneCoin(lps, this.redeemToIndex, '0').then(res => {
                    this.status = ActionStatus.TrasactionEnd;
                    this.boot.loadData();
                    this.loaded.emit();
                });
            } else { // 赎回成3种币
                this.status = ActionStatus.Transfering;
                this.loading.emit();
                this.boot.redeemToAll(lps, ['0', '0', '0']).then(res => {
                    this.status = ActionStatus.TrasactionEnd;
                    this.boot.loadData();
                    this.loaded.emit();
                });
            }
        } else {
            if (this.daiAmt || this.busdAmt || this.usdtAmt) { // 根据输入的币的数量赎回
                this.status = ActionStatus.Transfering;
                this.loading.emit();
                this.boot.redeemImBalance(String(this.daiAmt ? this.daiAmt : 0), String(this.busdAmt ? this.daiAmt : 0), String(this.usdtAmt ? this.daiAmt : 0)).then(r => {
                    this.status = ActionStatus.TrasactionEnd;
                    this.boot.loadData();
                    this.loaded.emit();
                });
            }
        }
    }

    redeemPrecentChange(val) {
        if (val && (val < 0 || val > 100)) {
            this.redeemPrecent = 0;
        } else {
            this.redeemPrecent = val;
        }
        if (this.redeemPrecent && this.redeemPrecent !== 0) {
            this.redeemToAllDisabled = false;
            this.daiInputDisabled = true;
            this.busdInputDisabled = true;
            this.usdtInputDisabled = true;
            let lps = this.boot.balance.lp.multipliedBy(this.redeemPrecent).dividedBy(100);
            let daiAmt = this.boot.poolInfo.dai.multipliedBy(lps).div(this.boot.poolInfo.totalSupply);
            this.daiAmt = Number(daiAmt.toFixed(9, BigNumber.ROUND_DOWN));
            let busdAmt = this.boot.poolInfo.busd.multipliedBy(lps).div(this.boot.poolInfo.totalSupply);
            this.busdAmt = Number(busdAmt.toFixed(9, BigNumber.ROUND_DOWN));
            let usdtAmt = this.boot.poolInfo.usdt.multipliedBy(lps).div(this.boot.poolInfo.totalSupply);
            this.usdtAmt = Number(usdtAmt.toFixed(9, BigNumber.ROUND_DOWN));
            this.redeemToIndex = '-1';
        } else {
            this.redeemToAllDisabled = true;
            this.daiInputDisabled = false;
            this.busdInputDisabled = false;
            this.usdtInputDisabled = false;
        }
    }

    async redeemToIndexChange(val) {
        this.redeemToIndex = val;
        let lps = this.boot.balance.lp.multipliedBy(this.redeemPrecent).dividedBy(100).toFixed(18, BigNumber.ROUND_DOWN);
        let res = await this.boot.calcWithdrawOneCoin(lps, this.redeemToIndex);
        if (this.redeemToIndex === '0') {
            this.daiAmt = Number(new BigNumber(res).dividedBy(new BigNumber(10).exponentiatedBy(18)).toFixed(9));
            this.busdAmt = null;
            this.usdtAmt = null;
        } else if (this.redeemToIndex === '1') {
            this.daiAmt = null;
            this.busdAmt = Number(new BigNumber(res).dividedBy(new BigNumber(10).exponentiatedBy(18)).toFixed(9));
            this.usdtAmt = null;
        } else if (this.redeemToIndex === '2') {
            this.daiAmt = null;
            this.busdAmt = null;
            this.usdtAmt = Number(new BigNumber(res).dividedBy(new BigNumber(10).exponentiatedBy(18)).toFixed(9));
        }
    }

    reset() {
        this.redeemPrecentChange(this.redeemPrecent);
        this.redeemToIndex = '-1';
    }

}
