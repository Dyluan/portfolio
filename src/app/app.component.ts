import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare const AOS: any; // Declare AOS to avoid TypeScript errors

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
        once: false,
      });
  }
  ngAfterViewInit(): void {
      AOS.refresh();
  }
}
