import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { BootService } from '../services/boot.service';

@Component({
    selector: 'app-pool-info',
    templateUrl: './pool-info.component.html',
    styleUrls: ['./pool-info.component.scss']
})
export class PoolInfoComponent implements OnInit {

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }
    getTotal() {
        return this.boot.poolInfo.dai.plus(this.boot.poolInfo.busd).plus(this.boot.poolInfo.usdt);
    }

    daiPercent() {
        if (this.getTotal().comparedTo(0) === 0) {
            return new BigNumber(0);
        } else {
            return this.boot.poolInfo.dai.div(this.getTotal()).multipliedBy(100);
        }
    }
    busdPercent() {
        if (this.getTotal().comparedTo(0) === 0) {
            return new BigNumber(0);
        } else {
            return this.boot.poolInfo.busd.div(this.getTotal()).multipliedBy(100);
        }
    }
    usdtPercent() {
        if (this.getTotal().comparedTo(0) === 0) {
            return new BigNumber(0);
        } else {
            return this.boot.poolInfo.usdt.div(this.getTotal()).multipliedBy(100);
        }
    }
}
