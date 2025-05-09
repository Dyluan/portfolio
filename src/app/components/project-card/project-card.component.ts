import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
    imgSrcInput = input<string>('');
    titleInput = input<string>('');
    descriptionInput = input<string>('');
    urlInput = input<string>('');
    technologiesInput = input<string[]>([]);
    isLive = input<boolean>(false);
}
