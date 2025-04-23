import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  titleInput = input<string>('');
  skillsInput = input<string[]>([]);
}
