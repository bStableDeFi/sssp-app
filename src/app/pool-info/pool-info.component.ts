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
        let result = new BigNumber(0);
        this.boot.poolInfo.coinsBalance.forEach(e => {
            result = result.plus(e);
        })
        return result;
    }

    percent(i) {
        if (this.getTotal().comparedTo(0) === 0) {
            return new BigNumber(0);
        } else {
            return this.boot.poolInfo.coinsBalance[i].div(this.getTotal()).multipliedBy(100);
        }
    }

    getCoinsStr() {
        let s = '';
        this.boot.coins.forEach((e, i) => {
            if (s !== '') {
                s = s + '+' + e.symbol;
            } else {
                s = e.symbol;
            }
        });
        return s;
    }
}
