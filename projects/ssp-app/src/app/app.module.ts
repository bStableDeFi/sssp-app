import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoolInfoComponent } from './pool-info/pool-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntallWalletDlgComponent } from './intall-wallet-dlg/intall-wallet-dlg.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SwapCompComponent } from './swap-comp/swap-comp.component';
import { AddliquidityCompComponent } from './addliquidity-comp/addliquidity-comp.component';
import { RedeemliquidityCompComponent } from './redeemliquidity-comp/redeemliquidity-comp.component';
import { UnsupportedNetworkComponent } from './unsupported-network/unsupported-network.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ChooseWalletDlgComponent } from './choose-wallet-dlg/choose-wallet-dlg.component';
import { AppLibModule } from 'app-lib';

@NgModule({
    declarations: [
        AppComponent,
        PoolInfoComponent,
        IntallWalletDlgComponent,
        SwapCompComponent,
        AddliquidityCompComponent,
        RedeemliquidityCompComponent,
        UnsupportedNetworkComponent,
        ChooseWalletDlgComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatSlideToggleModule,
        FormsModule,
        AppLibModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }