import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-card',
  imports: [
    TranslateModule,
  ],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  titleInput = input<string>('');
  skillsInput = input<string[]>([]);
}
