import { BigNumber } from 'bignumber.js'
export class Balance {
    dai: BigNumber = new BigNumber(0);
    busd: BigNumber = new BigNumber(0);
    usdt: BigNumber = new BigNumber(0);
    lp: BigNumber = new BigNumber(0);

    clear() {
        this.dai = new BigNumber(0);
        this.busd = new BigNumber(0);
        this.usdt = new BigNumber(0);
        this.lp = new BigNumber(0);
    }
}