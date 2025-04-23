import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
    imgSrcInput = input<string>('');
    titleInput = input<string>('');
    descriptionInput = input<string>('');
    urlInput = input<string>('');
    technologiesInput = input<string[]>([]);
}
