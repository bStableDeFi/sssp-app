import { NgModule } from '@angular/core';
import { AppLibComponent } from './app-lib.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
    declarations: [AppLibComponent, HeaderComponent, FooterComponent],
    imports: [
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        HttpClientModule,
        MatProgressBarModule,
    ],
    exports: [
        AppLibComponent,
        HeaderComponent,
        FooterComponent,
        CommonModule,
        TranslateModule,
        HttpClientModule,
    ]
})
export class AppLibModule { }
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}