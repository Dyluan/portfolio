import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FunFactsComponent } from '../../components/fun-facts/fun-facts.component';

@Component({
  selector: 'app-about-page',
  imports: [
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    FunFactsComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
