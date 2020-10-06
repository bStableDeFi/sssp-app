import BigNumber from "bignumber.js";

export class PoolInfo {
    dai: BigNumber = new BigNumber(0);
    busd: BigNumber = new BigNumber(0);
    usdt: BigNumber = new BigNumber(0);
    fee: BigNumber = new BigNumber(0);
    adminFee: BigNumber = new BigNumber(0);
    virtualPrice: BigNumber = new BigNumber(0);
    totalSupply: BigNumber = new BigNumber(0);

    clear() {
        this.dai = new BigNumber(0);
        this.busd = new BigNumber(0);
        this.fee = new BigNumber(0);
        this.adminFee = new BigNumber(0);
        this.virtualPrice = new BigNumber(0);
        this.totalSupply = new BigNumber(0);
    }

}