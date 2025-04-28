import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [
    TranslateModule,
    Nl2brPipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  
  currentPage: 'main' | 'about' = 'main';

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.currentPage = this.router.url === '/about' ? 'about' : 'main';
  }
}
