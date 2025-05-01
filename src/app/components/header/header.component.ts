import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isDropDownOpen = false;

  constructor(private languageService: LanguageService) {}

  switchLang(lang: string) {
    this.languageService.setLanguage(lang);
    this.isDropDownOpen = false; // Close the dropdown after selecting a language
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }
  getCurrentLang() {
    return this.languageService.getCurrentLanguage();
  }

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const dropdown = document.querySelector('.languageSelector');
        if (!dropdown?.contains(event.target as Node)) {
            this.isDropDownOpen = false;
        }
    }
}
