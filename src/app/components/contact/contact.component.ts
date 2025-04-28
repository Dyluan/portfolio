import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

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

}
