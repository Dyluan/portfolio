import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

@Component({
  selector: 'app-about',
  imports: [
    TranslateModule,
    Nl2brPipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
}
