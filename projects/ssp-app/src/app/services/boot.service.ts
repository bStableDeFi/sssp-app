import {
    ApplicationRef,
    Injectable
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { BigNumber } from 'bignumber.js';
import { interval, Observable, Subject } from 'rxjs';
import { Contract } from 'web3-eth-contract';
import { environment } from '../../environments/environment';
import { ChooseWalletDlgComponent } from '../choose-wallet-dlg/choose-wallet-dlg.component';
import { IntallWalletDlgComponent } from '../intall-wallet-dlg/intall-wallet-dlg.component';
import { Balance } from '../model/balance';
import { PoolInfo } from '../model/pool-info';
import { UnsupportedNetworkComponent } from '../unsupported-network/unsupported-network.component';
import { SwapConfirmComponent } from '../swap-confirm/swap-confirm.component';
import { AddlpConfirmComponent } from '../addlp-confirm/addlp-confirm.component';
import { RedeemConfirmComponent } from '../redeem-confirm/redeem-confirm.component';

const Web3_1_3 = require('web3_1_3');
const Web3_1_2 = require('web3_1_2');
@Injectable({
    providedIn: 'root'
})
export class BootService {

    walletReady: Subject<any> = new Subject();

    poolId = environment.poolId;
    coins = environment.coins;
    liquiditySymbol = environment.liquiditySymbol;
    web3: any;
    binanceWeb3: any;
    metamaskWeb3: any;
    wcWeb3: any;
    accounts: string[] = new Array();
    // bianceChain: any;

    // isConnected: boolean = false;

    balance: Balance = new Balance(this.coins.length);


    poolInfo: PoolInfo = new PoolInfo(this.coins.length);

    // daiContract: Contract;
    // busdContract: Contract;
    // usdtContract: Contract;
    poolContract: Contract;

    contracts: Array<Contract> = new Array();
    // contractsAddress: Array<string> = new Array();
    chainConfig: any;
    unSupportedNetworkSubject: Subject<any> = new Subject();
    chainId: string;
    wcProvider: WalletConnectProvider;

    constructor(private dialog: MatDialog, private applicationRef: ApplicationRef) {

        this.balance.coinsBalance = new Array();
        this.poolInfo.coinsBalance = new Array();
        this.coins.forEach(e => {
            this.balance.coinsBalance.push(new BigNumber(0));
            this.poolInfo.coinsBalance.push(new BigNumber(0));
        });

        interval(1000 * 60).subscribe(num => { // 轮训刷新数据
            if (this.web3 && this.accounts && this.chainConfig && this.chainConfig.enabled) {
                this.loadData().then();
            }
        });
        if (this.isMetaMaskInstalled()) {
            // @ts-ignore
            this.metamaskWeb3 = new Web3_1_3(window.ethereum);
        }
        if (this.isBinanceInstalled()) {
            // @ts-ignore
            this.binanceWeb3 = new Web3_1_3(window.BinanceChain);
        }
    }
    isMetaMaskInstalled() {
        //@ts-ignore
        return window.ethereum && window.ethereum.isMetaMask;
    }
    isBinanceInstalled() {
        // @ts-ignore
        return window.BinanceChain;
    }

    chooseWallet() {
        this.dialog.open(ChooseWalletDlgComponent, { width: '30em' });
    }

    private initContracts() {
        this.chainConfig.contracts.coins.forEach((e) => {
            this.contracts.push(new this.web3.eth.Contract(environment.coinABI, e.address));
        });
        // @ts-ignore
        this.poolContract = new this.web3.eth.Contract(environment.poolABI, this.chainConfig.contracts.Pool.address);

    }

    private async init() {
        if (this.web3) {
            if (this.web3.currentProvider) {
                // Subscribe to accounts change
                let accountsChanged = new Observable((observer) => {
                    this.web3.currentProvider.on("accountsChanged", async (accounts: string[]) => {
                        observer.next(accounts);
                    });
                });
                accountsChanged.subscribe(async (accounts: string[]) => {
                    console.log('accounts: ' + accounts);
                    if (accounts.length > 0) {
                        this.accounts = accounts;
                        await this.loadData();
                    } else {
                        this.accounts = accounts;
                        this.balance.clear();
                    }
                    this.applicationRef.tick();
                });

                let chainChanged = new Observable((observer) => {
                    this.web3.currentProvider.on("chainChanged", async (chainId: string) => {
                        observer.next(chainId);
                    });
                });
                chainChanged.subscribe(async (chainId: string) => {
                    console.log('chainId: ' + chainId);
                    chainId = String(chainId);
                    if (chainId.indexOf('0x') === 0) {
                        chainId = this.web3.utils.hexToNumber(chainId);
                    } else {
                        chainId = await this.web3.eth.getChainId();
                    }
                    let networkInfo = await this.getNetworkInfo(chainId);
                    if (networkInfo.isSupported) {
                        this.chainConfig = environment.chains[chainId];
                        this.chainId = chainId;
                        this.initContracts();
                        await this.loadData();
                    } else {
                        if (!this.web3.currentProvider.isMetaMask) {
                            this.dialog.open(UnsupportedNetworkComponent, { data: { chainId: chainId }, height: '20em', width: '30em' });
                            this.balance.clear();
                            this.poolInfo.clear();
                            // this.accounts = [];
                        }
                    }
                    this.applicationRef.tick();
                });

                // Subscribe to session connection
                let connected = new Observable((observer) => {
                    this.web3.currentProvider.on("connect", () => {
                        observer.next();
                    });
                });
                connected.subscribe(() => {
                    console.log("connect!");
                    if (!this.wcWeb3 && this.wcProvider) { // 监听wc的链接状态，连上以后才能初始化
                        //@ts-ignore
                        this.wcWeb3 = new Web3_1_2(this.wcProvider);
                        this.web3 = this.wcWeb3;
                        this.init();
                    }
                    this.applicationRef.tick();
                });

                // Subscribe to session disconnection
                let disconnected = new Observable((observer) => {
                    this.web3.currentProvider.on("disconnect", (code: number, reason: string) => {
                        observer.next({ code: code, reason: reason });
                    });
                });
                disconnected.subscribe((res: any) => {
                    console.log('disconnect!');
                    console.log(res);
                    window.location.reload();
                });

            }

            let networkInfo = await this.getNetworkInfo();
            if (networkInfo.isSupported) {
                this.chainConfig = networkInfo.config;
                this.chainId = networkInfo.chainId;
                this.accounts = await this.web3.eth.getAccounts();
                this.walletReady.next();
                this.initContracts();
                await this.loadData();
            } else {
                this.dialog.open(UnsupportedNetworkComponent, { data: { chainId: networkInfo.chainId }, height: '20em', width: '30em' });
                return;
            }
        }
    }

    async getNetworkInfo(_chainId?: string) {
        if (this.web3) {
            let chainId;
            if (!_chainId) {
                if (this.web3.currentProvider && this.web3.currentProvider.chainId && String(this.web3.currentProvider.chainId).indexOf('0x') === 0) {
                    chainId = this.web3.utils.hexToNumber(this.web3.currentProvider.chainId);
                } else if (this.web3.currentProvider && String(this.web3.currentProvider.chainId).indexOf('0x') !== 0) {
                    chainId = await this.web3.eth.getChainId();
                }
            } else {
                chainId = _chainId;
            }
            let chainConfig = environment.chains[chainId];
            if (!chainConfig || !chainConfig.enabled) {
                return { isSupported: false, chainId: chainId, config: chainConfig };
            } else {
                return { isSupported: true, chainId: chainId, config: chainConfig };
            }
        } else {
            throw "There is no web3 object yet."
        }
    }
    /**
     * connect to wallet connect
     */
    public async connectWC() {
        this.wcProvider = new WalletConnectProvider({
            // infuraId: "a1b8fe06fc1349b1b812bdb7b8f79465",
            rpc: {
                // @ts-ignore
                56: environment.chains[56].rpc,
                // @ts-ignore
                97: environment.chains[97].rpc,
            },
        });
        // Subscribe to session connection
        this.wcProvider.on("connect", async () => {
            console.log("WalletConnect connect");
        });
        // Subscribe to session disconnection
        this.wcProvider.on("disconnect", (code: number, reason: string) => {
            console.log(code, reason);
        });
        //  Enable session (triggers QR Code modal)
        this.wcProvider.enable().then(res => {
            if (this.wcProvider.connected && this.wcWeb3) {
                this.web3 = this.wcWeb3;
                this.init();
            } else if (this.wcProvider.connected && !this.wcWeb3) {
                // @ts-ignore
                this.wcWeb3 = new Web3_1_2(this.wcProvider);
                this.web3 = this.wcWeb3;
                this.init();
            }
        }).catch(e => {
            // @ts-ignore
            // this.wcWeb3 = new Web3_1_2(this.wcProvider);
            // this.web3 = this.wcWeb3;
            console.log(e);
        });

    }

    public async connentMetaMask() {
        if (this.isMetaMaskInstalled()) {
            //@ts-ignore
            await window.ethereum.enable();
            // @ts-ignore
            this.metamaskWeb3 = new Web3_1_3(window.ethereum);
            this.web3 = this.metamaskWeb3;
            this.init();
        }
    }

    public async connectBinance() {
        if (this.isBinanceInstalled()) {
            // @ts-ignore
            await window.BinanceChain.enable();
            // @ts-ignore
            this.binanceWeb3 = new Web3_1_3(window.BinanceChain);
            this.web3 = this.binanceWeb3;
            this.init();
        }
    }

    public async connectWallet() {
        if (!this.isMetaMaskInstalled() && !this.isBinanceInstalled()) {
            this.dialog.open(IntallWalletDlgComponent, { width: '30em' });
            return;
        } else {
            this.chooseWallet();
        }
    }

    public async loadData() {
        if (this.web3) {
            this.chainConfig.contracts.coins.forEach(async (e, index) => {
                let balanceStr = await this.contracts[index].methods.balanceOf(this.accounts[0]).call({ from: this.accounts[0] });
                let decimals = await this.contracts[index].methods.decimals().call({ from: this.accounts[0] });
                this.balance.coinsBalance[index] = new BigNumber(balanceStr).div(new BigNumber(10).exponentiatedBy(decimals));
                let pBalanceStr = await this.contracts[index].methods.balanceOf(this.chainConfig.contracts.Pool.address).call({ from: this.accounts[0] });
                this.poolInfo.coinsBalance[index] = new BigNumber(pBalanceStr).div(new BigNumber(10).exponentiatedBy(decimals));
            });
            let lpBalanceStr = await this.poolContract.methods.balanceOf(this.accounts[0]).call({ from: this.accounts[0] });
            let lpDecimals = await this.poolContract.methods.decimals().call({ from: this.accounts[0] });
            this.balance.lp = new BigNumber(lpBalanceStr).div(new BigNumber(10).exponentiatedBy(lpDecimals));

            let totalSupplyStr = await this.poolContract.methods.totalSupply().call({ from: this.accounts[0] });
            this.poolInfo.totalSupply = new BigNumber(totalSupplyStr).div(new BigNumber(10).exponentiatedBy(lpDecimals));
            this.poolInfo.fee = new BigNumber(totalSupplyStr).div(new BigNumber(10).exponentiatedBy(lpDecimals));
        }
    }

    private async getTXData(data) {
        let gas = await this.web3.eth.estimateGas(data);
        data.gas = gas;
        return data;
    }

    public async addLiquidity(amts: string[]): Promise<any> {
        let dialogRef = this.dialog.open(AddlpConfirmComponent);
        return dialogRef.afterClosed().toPromise().then(async res => {
            if (res === true) {
                amts.forEach((e, i, arr) => {
                    arr[i] = this.web3.utils.toWei(String(e), 'ether');
                });
                if (this.poolContract) {
                    let data = this.poolContract.methods.add_liquidity(amts, 0).encodeABI();
                    let txdata = { from: this.accounts[0], to: this.chainConfig.contracts.Pool.address, data: data };
                    try {
                        // txdata = await this.getTXData(txdata);
                        return await this.web3.eth.sendTransaction(txdata);
                    } catch (e) {
                        console.log(e);
                        return e;
                    }
                }
            }
        });

    }

    public async approve(i: number, amt: string): Promise<any> {
        if (this.poolContract) {
            amt = this.web3.utils.toWei(String(amt), 'ether');
            let data = this.contracts[i].methods.approve(this.chainConfig.contracts.Pool.address, amt).encodeABI();
            try {
                return await this.web3.eth.sendTransaction({ from: this.accounts[0], to: this.chainConfig.contracts.coins[i].address, data: data });
            } catch (e) {
                console.log(e);
            }
        }
    }

    private async _exchange(i: number, j: number, amt: string, minAmt: string): Promise<any> {
        amt = this.web3.utils.toWei(String(amt), 'ether');
        minAmt = this.web3.utils.toWei(String(minAmt), 'ether');
        let data = this.poolContract.methods.exchange(i, j, amt, minAmt).encodeABI();
        let txdata = { from: this.accounts[0], to: this.chainConfig.contracts.Pool.address, value: 0, data: data };
        try {
            // txdata = await this.getTXData(txdata);
            return await this.web3.eth.sendTransaction(txdata);
        } catch (e) {
            console.log(e);
        }
    }
    public async exchange(i: number, j: number, amt: string, minAmt: string): Promise<any> {
        if (this.poolContract) {
            let slippage = new BigNumber(minAmt).div(new BigNumber(amt)).minus(1).multipliedBy(100);
            if (slippage.comparedTo(0) < 0) {
                let dialogRef = this.dialog.open(SwapConfirmComponent, { data: { slippage: slippage.toFixed(4, BigNumber.ROUND_UP) }, height: '20em', width: '30em' });
                return dialogRef.afterClosed().toPromise().then(async res => {
                    if (res === true) {
                        return this._exchange(i, j, amt, minAmt);
                    }
                });
            } else {
                return this._exchange(i, j, amt, minAmt);
            }
        }
    }

    public async getExchangeOutAmt(i: number, j: number, amt: string) {
        if (this.poolContract && !new BigNumber(amt).isNaN()) {
            amt = this.web3.utils.toWei(String(amt), 'ether');
            let decimals = await this.contracts[j].methods.decimals().call({ from: this.accounts[0] });
            return this.poolContract.methods.get_dy(i, j, amt).call().then((res) => {
                return new BigNumber(res).div(new BigNumber(10).exponentiatedBy(decimals));
            });
        } else {
            return new Promise((resolve, reject) => {
                resolve(new BigNumber(0));
            });
        }
    }

    public async redeemImBalance(amts: string[]): Promise<any> {
        let maxLp = new BigNumber(0);
        amts.forEach((e, i, arr) => {
            arr[i] = this.web3.utils.toWei(String(e), 'ether');
            maxLp = maxLp.plus(e);
        });
        maxLp = this.web3.utils.toWei(maxLp.toFixed(9, BigNumber.ROUND_UP), 'ether');
        if (this.poolContract) {
            let data = this.poolContract.methods.remove_liquidity_imbalance(amts, maxLp).encodeABI();
            let txdata = { from: this.accounts[0], to: this.chainConfig.contracts.Pool.address, data: data };
            try {
                // txdata = await this.getTXData(txdata);
                return await this.web3.eth.sendTransaction(txdata);
            } catch (e) {
                console.log(e);
            }
        }
    }

    public async redeemToAll(lps: string, minAmts: Array<string>): Promise<any> {
        let lp = new BigNumber(lps);
        let amt = new BigNumber(0);
        minAmts.forEach(e => {
            amt = amt.plus(e);
        });
        let slippage = amt.div(lp).minus(1).multipliedBy(100);
        if (slippage.comparedTo(0) < 0) {
            let dialogRef = this.dialog.open(RedeemConfirmComponent, { data: { slippage: slippage.toFixed(4, BigNumber.ROUND_UP) }, height: '20em', width: '30em' });
            return dialogRef.afterClosed().toPromise().then(res => {
                if (res === true) {
                    return this._redeemToAll(lps, minAmts);
                }
            });
        } else {
            return this._redeemToAll(lps, minAmts);
        }
    }
    private async _redeemToAll(lps: string, minAmts: Array<string>): Promise<any> {
        if (this.poolContract) {
            lps = this.web3.utils.toWei(String(lps), 'ether');
            let amts = new Array();
            minAmts.forEach(e => {
                // amts.push(this.web3.utils.toWei(String(e), 'ether'));
                amts.push('0');
            });
            let data = this.poolContract.methods.remove_liquidity(lps, amts).encodeABI();
            let txdata = { from: this.accounts[0], to: this.chainConfig.contracts.Pool.address, data: data };
            try {
                // txdata = await this.getTXData(txdata);
                return await this.web3.eth.sendTransaction(txdata);
            } catch (e) {
                console.log(e);
            }
        }
    }

    public async redeemToOneCoin(lps: string, coinIndex: string, minAmt: string): Promise<any> {
        let lp = new BigNumber(lps);
        let amt = new BigNumber(minAmt);
        let slippage = amt.div(lp).minus(1).multipliedBy(100);
        if (slippage.comparedTo(0) < 0) {
            let dialogRef = this.dialog.open(RedeemConfirmComponent, { data: { slippage: slippage.toFixed(4, BigNumber.ROUND_UP) }, height: '20em', width: '30em' });
            return dialogRef.afterClosed().toPromise().then(res => {
                if (res === true) {
                    return this._redeemToOneCoin(lps, coinIndex, minAmt);
                }
            });
        } else {
            return this._redeemToOneCoin(lps, coinIndex, minAmt);
        }
    }

    private async _redeemToOneCoin(lps: string, coinIndex: string, minAmt: string): Promise<any> {
        if (this.poolContract) {
            lps = this.web3.utils.toWei(String(lps), 'ether');
            minAmt = this.web3.utils.toWei(String(minAmt), 'ether');
            let data = this.poolContract.methods.remove_liquidity_one_coin(lps, coinIndex, minAmt).encodeABI();
            let txdata = { from: this.accounts[0], to: this.chainConfig.contracts.Pool.address, data: data };
            try {
                // txdata = await this.getTXData(txdata);
                return await this.web3.eth.sendTransaction(txdata);
            } catch (e) {
                console.log(e);
            }
        }
    }

    public async calcWithdrawOneCoin(lps: string, coinIndex: string): Promise<any> {
        if (this.poolContract) {
            lps = this.web3.utils.toWei(String(lps), 'ether');
            let data = await this.poolContract.methods.calc_withdraw_one_coin(lps, coinIndex).call({ from: this.accounts[0] });
            return data;
            // try {
            //     return await this.web3.eth.call({ from: this.accounts[0], to: this.chainConfig.contracts.Pool.address, gas: 6721975, data: data });
            // } catch (e) {
            //     console.log(e);
            // }
        }
    }

    public async allowance(i): Promise<BigNumber> {
        if (this.chainConfig && this.contracts && this.contracts.length > 0 && this.accounts && this.accounts.length > 0) {
            let decimals = await this.contracts[i].methods.decimals().call({ from: this.accounts[0] });
            return this.contracts[i].methods.allowance(this.accounts[0], this.chainConfig.contracts.Pool.address).call().then((res) => {
                return new BigNumber(res).div(new BigNumber(10).exponentiatedBy(decimals));
            });
        } else {
            return new Promise((resolve, reject) => {
                resolve(new BigNumber(0));
            });
        }

    }
}
