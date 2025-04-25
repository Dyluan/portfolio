import { Component, AfterViewInit } from '@angular/core';
import TypeIt from 'typeit';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
      new TypeIt('#animated-text', {
        speed: 100,
        loop: true,
        breakLines: false,
      })
      .type('front-end developer')
      .pause(1500)
      .delete(20)
      .type('full-stack developer')
      .pause(1500)
      .delete(20)
      .type('creative developer')
      .pause(1500)
      .delete(20)
      .go();
  }
}
