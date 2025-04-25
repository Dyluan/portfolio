import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

// declare const AOS: any; // Declare AOS to avoid TypeScript errors

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  ngOnInit(): void {
      AOS.init({
        startEvent: 'DOMContentLoaded',
        offset: 0,
        duration: 2000,
        easing: 'ease-out-back',
        once: false,
        mirror: true,
      });
  }
  ngAfterViewInit(): void {
      setTimeout(() => {
        AOS.refresh();
      }, 1000);
  }
}
