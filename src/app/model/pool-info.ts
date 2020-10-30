import BigNumber from "bignumber.js";

export class PoolInfo {
    coinsBalance: BigNumber[];
    fee: BigNumber = new BigNumber(0);
    adminFee: BigNumber = new BigNumber(0);
    virtualPrice: BigNumber = new BigNumber(0);
    totalSupply: BigNumber = new BigNumber(0);

    constructor(coinsLength: number) {
        this.coinsBalance = new Array(coinsLength);
        this.coinsBalance.forEach(e => {
            e = new BigNumber(0);
        });
    }

    clear() {
        this.coinsBalance.forEach(e => {
            e = new BigNumber(0);
        });
        this.fee = new BigNumber(0);
        this.adminFee = new BigNumber(0);
        this.virtualPrice = new BigNumber(0);
        this.totalSupply = new BigNumber(0);
    }

}