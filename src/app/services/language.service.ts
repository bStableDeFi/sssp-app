import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    curLanguage = 'en';

    constructor(private translate: TranslateService,) {
        // 添加语言支持
        translate.addLangs(['zh', 'en', 'ja']);
        // 设置默认语言，一般在无法匹配的时候使用
        translate.setDefaultLang('en');
        if (!localStorage.getItem('lang')) {
            // 获取当前浏览器环境的语言比如en、 zh
            const broswerLang = this.translate.getBrowserLang();
            if (broswerLang.indexOf('en') === 0) {
                this.curLanguage = 'en';
            } else if (broswerLang.indexOf('zh') === 0) {
                this.curLanguage = 'zh';
            }
            this.translate.use(this.curLanguage);
            localStorage.setItem("lang", this.curLanguage);
        } else {
            if (localStorage.getItem('lang').indexOf('zh') === 0) {
                this.curLanguage = 'zh';
            } else if (localStorage.getItem('lang').indexOf('en') === 0) {
                this.curLanguage = 'en';
            }
            this.translate.use(this.curLanguage);
        }
    }

    changeLanguage(language) {
        this.translate.use(language);
        this.curLanguage = language;
        localStorage.setItem('lang', language);
    }

    /**
     * 根据当前语言翻译
     * @param key
     * @param param
     */
    public trans(key, param): Promise<any> {
        return this.translate.get(key, param).toPromise();
    }
}
