import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  
  
}
