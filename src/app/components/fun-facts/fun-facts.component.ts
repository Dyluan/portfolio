import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-fun-facts',
  imports: [
    TranslateModule,
  ],
  templateUrl: './fun-facts.component.html',
  styleUrl: './fun-facts.component.css'
})
export class FunFactsComponent {
  facts: string[] = [];

  constructor(private translate: TranslateService) {
    this.translate.get('FUN_FACTS.FACTS').subscribe((facts: string[]) => {
      this.facts = facts;
    });

    this.translate.onLangChange.subscribe(() => {
      this.translate.get('FUN_FACTS.FACTS').subscribe((facts: string[]) => {
        this.facts = facts;
      });
    });
  }

}
