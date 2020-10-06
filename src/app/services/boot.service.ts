import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval } from 'rxjs';
import Web3 from 'web3';
import { WalletBase } from 'web3-core';
import { IntallWalletDlgComponent } from '../intall-wallet-dlg/intall-wallet-dlg.component';
import { Balance } from '../model/balance';
import { PoolInfo } from '../model/pool-info';
import { Contract } from 'web3-eth-contract';
import { environment } from 'src/environments/environment';
import { BigNumber } from 'bignumber.js';
import { UnsupportedNetworkComponent } from '../unsupported-network/unsupported-network.component';
@Injectable({
    providedIn: 'root'
})
export class BootService {

    web3: Web3;
    wallet: WalletBase;
    accounts: string[] = new Array();
    // bianceChain: any;

    // isConnected: boolean = false;

    balance: Balance = new Balance();


    poolInfo: PoolInfo = new PoolInfo();

    daiContract: Contract;
    busdContract: Contract;
    usdtContract: Contract;
    poolContract: Contract;

    contracts: Array<Contract> = new Array();
    contractsAddress: Array<string> = new Array();
    chainConfig: any;
    chainId: number;


    constructor(private dialog: MatDialog) {
        let acc = 0;

        let intervalSubject = interval(200).subscribe(
            async num => {
                acc += num;
                // @ts-ignore 
                if (acc >= 3 && !window.BinanceChain) { // 3秒提示安装币安钱包
                    this.dialog.open(IntallWalletDlgComponent, { height: '15em', width: '40em' });
                    intervalSubject.unsubscribe();
                }
            }
        );
        interval(1000 * 60).subscribe(num => { // 轮训刷新数据
            if (this.web3 && this.accounts) {
                this.loadData();
            }
        });
    }

    private initContracts() {
        // @ts-ignore
        this.daiContract = new this.web3.eth.Contract(environment.coinABI, this.chainConfig.contracts.DAI.address);
        // @ts-ignore
        this.busdContract = new this.web3.eth.Contract(environment.coinABI, this.chainConfig.contracts.BUSD.address);
        // @ts-ignore
        this.usdtContract = new this.web3.eth.Contract(environment.coinABI, this.chainConfig.contracts.USDT.address);
        this.contracts.push(this.daiContract);
        this.contracts.push(this.busdContract);
        this.contracts.push(this.usdtContract);
        this.contractsAddress.push(this.chainConfig.contracts.DAI.address);
        this.contractsAddress.push(this.chainConfig.contracts.BUSD.address);
        this.contractsAddress.push(this.chainConfig.contracts.USDT.address);
        // @ts-ignore
        this.poolContract = new this.web3.eth.Contract(environment.poolABI, this.chainConfig.contracts.SSSPool.address);

    }

    public async connectWallet() {
        // @ts-ignore
        if (!this.web3 && window.BinanceChain) {
            // @ts-ignore
            // this.bianceChain = window.BinanceChain;
            // await this.bianceChain.isConnected();
            // @ts-ignore
            this.web3 = new Web3(window.BinanceChain);
            let chainId = await this.web3.eth.getChainId();
            this.chainConfig = environment.chains[chainId];
            this.chainId = chainId;
            if (!this.chainConfig || !this.chainConfig.enabled) {
                this.dialog.open(UnsupportedNetworkComponent, { height: '15em', width: '40em' });
                return;
            }
            let intervalCheckNetwork = interval(1000).subscribe(async num => {
                if (this.web3 && this.chainId) {
                    let chainId = await this.web3.eth.getChainId();
                    if (this.chainId != chainId) {
                        if (!environment.chains[chainId]) {
                            this.dialog.open(UnsupportedNetworkComponent, { height: '15em', width: '40em' });
                            this.accounts.splice(0, this.accounts.length);
                            this.balance.clear();
                            this.poolInfo.clear();
                            this.web3 = null;
                        } else if (!environment.chains[chainId].enabled) {
                            this.dialog.open(UnsupportedNetworkComponent, { height: '15em', width: '40em' });
                            this.chainConfig = environment.chains[chainId];
                            this.accounts.splice(0, this.accounts.length);
                            this.balance.clear();
                            this.poolInfo.clear();
                            this.web3 = null;
                        } else {
                            this.chainConfig = environment.chains[chainId];
                            this.initContracts();
                        }
                        this.chainId = chainId;
                    }
                }
            });
            // @ts-ignore
            // window.BinanceChain.on('chainChanged', (_chainId) => {
            //     this.chainConfig = environment.chains[_chainId];
            //     if (!this.chainConfig || !this.chainConfig.enabled) {
            //         this.dialog.open(UnsupportedNetworkComponent, { height: '15em', width: '40em' });
            //         return;
            //     }
            // });
            // @ts-ignore
            // window.BinanceChain.on('accountsChanged', (_chainId) => {
            //     this.chainConfig = environment.chains[_chainId];
            //     if (!this.chainConfig || !this.chainConfig.enabled) {
            //         this.dialog.open(UnsupportedNetworkComponent, { height: '15em', width: '40em' });
            //         return;
            //     }
            // });
            this.initContracts();
        }
        if (this.web3) {
            if (this.chainConfig && this.chainConfig.enabled) {
                this.web3.eth.getAccounts().then(accounts => {
                    this.accounts = accounts;
                    this.loadData();
                });
            } else {
                this.dialog.open(UnsupportedNetworkComponent, { height: '15em', width: '40em' });
                this.web3 = null;
            }
        } 
    }

    public async loadData() {
        if (this.web3) {
            let daiBalanceStr = await this.daiContract.methods.balanceOf(this.accounts[0]).call({ from: this.accounts[0] });
            let daiDecimals = await this.daiContract.methods.decimals().call({ from: this.accounts[0] });

            let busdBalanceStr = await this.busdContract.methods.balanceOf(this.accounts[0]).call({ from: this.accounts[0] });
            let busdDecimals = await this.busdContract.methods.decimals().call({ from: this.accounts[0] });

            let usdtBalanceStr = await this.usdtContract.methods.balanceOf(this.accounts[0]).call({ from: this.accounts[0] });
            let usdtDecimals = await this.usdtContract.methods.decimals().call({ from: this.accounts[0] });

            let lpBalanceStr = await this.poolContract.methods.balanceOf(this.accounts[0]).call({ from: this.accounts[0] });
            let lpDecimals = await this.poolContract.methods.decimals().call({ from: this.accounts[0] });

            this.balance.dai = new BigNumber(daiBalanceStr).div(new BigNumber(10).exponentiatedBy(daiDecimals));
            this.balance.busd = new BigNumber(busdBalanceStr).div(new BigNumber(10).exponentiatedBy(busdDecimals));
            this.balance.usdt = new BigNumber(usdtBalanceStr).div(new BigNumber(10).exponentiatedBy(usdtDecimals));
            this.balance.lp = new BigNumber(lpBalanceStr).div(new BigNumber(10).exponentiatedBy(lpDecimals));

            let pDaiBalanceStr = await this.daiContract.methods.balanceOf(this.chainConfig.contracts.SSSPool.address).call({ from: this.accounts[0] });
            let pBusdBalanceStr = await this.busdContract.methods.balanceOf(this.chainConfig.contracts.SSSPool.address).call({ from: this.accounts[0] });
            let pUsdtBalanceStr = await this.usdtContract.methods.balanceOf(this.chainConfig.contracts.SSSPool.address).call({ from: this.accounts[0] });

            this.poolInfo.dai = new BigNumber(pDaiBalanceStr).div(new BigNumber(10).exponentiatedBy(daiDecimals));
            this.poolInfo.busd = new BigNumber(pBusdBalanceStr).div(new BigNumber(10).exponentiatedBy(busdDecimals));
            this.poolInfo.usdt = new BigNumber(pUsdtBalanceStr).div(new BigNumber(10).exponentiatedBy(usdtDecimals));

            let totalSupplyStr = await this.poolContract.methods.totalSupply().call({ from: this.accounts[0] });
            this.poolInfo.totalSupply = new BigNumber(totalSupplyStr).div(new BigNumber(10).exponentiatedBy(lpDecimals));
            this.poolInfo.fee = new BigNumber(totalSupplyStr).div(new BigNumber(10).exponentiatedBy(lpDecimals));
        }
    }

    public async addLiquidity(daiAmt: string, busdAmt: string, usdtAmt: string): Promise<any> {
        if (this.poolContract && this.daiContract && this.busdContract && this.usdtContract) {
            daiAmt = this.web3.utils.toWei(String(daiAmt), 'ether');
            busdAmt = this.web3.utils.toWei(String(busdAmt), 'ether');
            usdtAmt = this.web3.utils.toWei(String(usdtAmt), 'ether');
            let data = this.poolContract.methods.add_liquidity([daiAmt, busdAmt, usdtAmt], 0).encodeABI();
            try {
                return await this.web3.eth.sendTransaction({ from: this.accounts[0], to: this.chainConfig.contracts.SSSPool.address, gas: 6721975, data: data });
            } catch (e) {
                console.log(e);
            }
        }
    }

    public async approve(i: number, amt: string): Promise<any> {
        if (this.poolContract && this.daiContract && this.busdContract && this.usdtContract) {
            amt = this.web3.utils.toWei(String(amt), 'ether');
            let data = this.contracts[i].methods.approve(this.chainConfig.contracts.SSSPool.address, amt).encodeABI();
            try {
                return await this.web3.eth.sendTransaction({ from: this.accounts[0], to: this.contractsAddress[i], data: data });
            } catch (e) {
                console.log(e);
            }
        }
    }

    public async exchange(i: number, j: number, amt: string, minAmt: string): Promise<any> {
        if (this.poolContract && this.daiContract && this.busdContract && this.usdtContract) {
            amt = this.web3.utils.toWei(String(amt), 'ether');
            minAmt = this.web3.utils.toWei(String(minAmt), 'ether');
            let data = this.poolContract.methods.exchange(i, j, amt, minAmt).encodeABI();
            try {
                return await this.web3.eth.sendTransaction({ from: this.accounts[0], to: this.chainConfig.contracts.SSSPool.address, value: 0, gas: 6721975, data: data });
            } catch (e) {
                console.log(e);
            }
        }
    }

    public async redeemImBalance(daiAmt: string, busdAmt: string, usdtAmt: string): Promise<any> {
        if (this.poolContract && this.daiContract && this.busdContract && this.usdtContract) {
            daiAmt = this.web3.utils.toWei(String(daiAmt), 'ether');
            busdAmt = this.web3.utils.toWei(String(busdAmt), 'ether');
            usdtAmt = this.web3.utils.toWei(String(usdtAmt), 'ether');
            let lp = await this.poolContract.methods.balanceOf(this.accounts[0]).call();
            let data = this.poolContract.methods.remove_liquidity_imbalance([daiAmt, busdAmt, usdtAmt], lp.toString()).encodeABI();
            try {
                return await this.web3.eth.sendTransaction({ from: this.accounts[0], to: this.chainConfig.contracts.SSSPool.address, gas: 6721975, data: data });
            } catch (e) {
                console.log(e);
            }
        }
    }


}
