import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
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

    amts: Array<number>;
    daiApproved: boolean = false;

    busdApproved: boolean = false;

    usdtApproved: boolean = false;

    status: ActionStatus = ActionStatus.None;

    @Output() loading: EventEmitter<any> = new EventEmitter();
    @Output() loaded: EventEmitter<any> = new EventEmitter();

    constructor(public boot: BootService) {
        this.amts = new Array<number>(boot.coins.length);
        this.amts.forEach(e => {
            e = 0;
        });
    }

    ngOnInit(): void {
    }

    // approve() {
    //     this.status = ActionStatus.Approving;
    //     let pArr = new Array();
    //     this.amts.forEach(e => {
    //         if (e) {
    //             pArr.push(this.boot.approve(0, String(e ? e : 0)));
    //         }
    //     });
    //     Promise.all(pArr).then(rArr => {
    //         this.status = ActionStatus.Approved;
    //     });
    // }

    approve(i: number) {
        this.status = ActionStatus.Approving;
        this.loading.emit();
        this.boot.approve(i, String(this.amts[i] ? this.amts[i] : 0)).then(r => {
            this.daiApproved = true;
            this.status = ActionStatus.Approved;
            this.loaded.emit();
        });
    }

    addLiquidity() {
        this.status = ActionStatus.TransationSending;
        this.loading.emit();
        let amtsStr = new Array<string>();
        this.amts.forEach(e => {
            amtsStr.push(String(e));
        });
        this.boot.addLiquidity(amtsStr).then(r => {
            this.status = ActionStatus.TransactionEnd;
            this.boot.loadData();
            this.loaded.emit();
        });
    }

}
