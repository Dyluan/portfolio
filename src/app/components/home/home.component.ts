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
    this.languageSubscription = this.translate.onLangChange.subscribe(() => {
      if (this.typeItInstance) {
        this.typeItInstance.destroy();
        setTimeout(() => {
          this.initTypeIt();
          console.log('constructor called');
        }, 1000)
      }
    })
  }

  ngAfterViewInit(): void {
    //added a timeout to ensure the DOM is ready before initializing TypeIt
    // This is a workaround, ideally you should ensure the DOM is ready before this point
    setTimeout(() => {
      this.initTypeIt();
      console.log('afterviewinit called');
    }, 1000);
      
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
      breakLines: false,
      startDelete: true,
      waitUntilVisible: true,
      nextStringDelay: 1000,

    })
    .empty()
    .type(titles[0])
    .pause(1500)
    .delete()
    .type(titles[1])
    .pause(1500)
    .delete()
    .type(titles[2])
    .pause(1500)
    .delete()
    .go();
  }

}
