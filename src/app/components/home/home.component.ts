import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import TypeIt from 'typeit';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy{
  
  private typeItInstance: any;
  private languageSubscription: Subscription;

  constructor(private translate: TranslateService) {
    //s'abonner aux changements de langue
    this.languageSubscription = this.translate.onLangChange.subscribe(() => {
      if (this.typeItInstance) {
        this.typeItInstance.destroy();
        setTimeout(() => {
          this.initTypeIt();
        }, 100)
      }
    })
  }

  ngAfterViewInit(): void {
      this.initTypeIt();
  }
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.typeItInstance) {
      this.typeItInstance.destroy();
    }
  }

  private initTypeIt(): void {
    const titles = [
      this.translate.instant('HOME.ROLES.FRONTEND'),
      this.translate.instant('HOME.ROLES.FULLSTACK'),
      this.translate.instant('HOME.ROLES.CREATIVE')
    ];

    this.typeItInstance = new TypeIt('#animated-text', {
      speed: 100,
      loop: true,
      breakLines: true,
      startDelete: true,
      waitUntilVisible: true,
      nextStringDelay: 1000,
    })
    .type(titles[0])
    .pause(1500)
    .delete(titles[0].length)
    .type(titles[1])
    .pause(1500)
    .delete(titles[1].length)
    .type(titles[2])
    .pause(1500)
    .delete(titles[2].length)
    .go();
  }

}
