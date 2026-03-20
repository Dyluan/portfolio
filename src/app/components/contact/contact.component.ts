import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    TranslateModule,
    Nl2brPipe
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  currentPage: 'main' | 'contact' = 'main';
  mainClassName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.currentPage = this.router.url === '/contact' ? 'contact' : 'main';
    if (this.router.url === '/contact') {
      this.currentPage = 'contact';
      this.mainClassName = 'notMain';
    } else {
      this.currentPage = 'main';
      this.mainClassName = 'main';
    }
  }
}
