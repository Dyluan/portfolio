import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly LANG_KEY = 'selectedLanguage';

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage(): void {
    const savedLang = localStorage.getItem(this.LANG_KEY) || 'en';
    this.translate.use(savedLang);
  }

  setLanguage(lang: string): void {
    localStorage.setItem(this.LANG_KEY, lang);
    this.translate.use(lang);
  }

  getCurrentLanguage(): string {
    return localStorage.getItem(this.LANG_KEY) || 'en';
  }
}
