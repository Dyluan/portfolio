import { Component, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burger-menu',
  imports: [
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})
export class BurgerMenuComponent {
  menuStateChange = output<boolean>();
  isDropDownOpen = false;

  constructor(private languageService: LanguageService) {}

  getCurrentLang() {
    return this.languageService.getCurrentLanguage();
  }
  switchLang(lang: string): void {
    this.languageService.setLanguage(lang);
    this.isDropDownOpen = false;
  }
  toggleDropDown(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  closeMenu() {
    this.menuStateChange.emit(false);
  }
}
