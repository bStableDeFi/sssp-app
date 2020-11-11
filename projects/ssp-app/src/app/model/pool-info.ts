import BigNumber from "bignumber.js";

export class PoolInfo {
    coinsBalance: BigNumber[];
    fee: BigNumber = new BigNumber(0);
    adminFee: BigNumber = new BigNumber(0);
    virtualPrice: BigNumber = new BigNumber(0);
    totalSupply: BigNumber = new BigNumber(0);
    coinsRealBalance: BigNumber[];
    coinsAdminFee: BigNumber[];

    constructor(coinsLength: number) {
        this.coinsBalance = new Array(coinsLength);
        this.coinsAdminFee = new Array(coinsLength);
        this.coinsRealBalance = new Array(coinsLength);
        for (let i = 0; i < coinsLength; i++) {
            this.coinsBalance[i] = new BigNumber(0);
            this.coinsRealBalance[i] = new BigNumber(0);
            this.coinsAdminFee[i] = new BigNumber(0);
        }
    }

    clear() {
        this.coinsBalance.forEach(e => {
            e = new BigNumber(0);
        });
        this.coinsAdminFee.forEach(e => {
            e = new BigNumber(0);
        });
        this.coinsRealBalance.forEach(e => {
            e = new BigNumber(0);
        });
        this.fee = new BigNumber(0);
        this.adminFee = new BigNumber(0);
        this.virtualPrice = new BigNumber(0);
        this.totalSupply = new BigNumber(0);
    }

}