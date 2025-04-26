import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

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

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.isDropDownOpen = false; // Close the dropdown after selecting a language
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }
  getCurrentLang() {
    return this.translate.currentLang || 'en';
  }

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const dropdown = document.querySelector('.languageSelector');
        if (!dropdown?.contains(event.target as Node)) {
            this.isDropDownOpen = false;
        }
    }
}
