import { Component } from '@angular/core';
import { TagCloudComponent } from '../tag-cloud/tag-cloud.component';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  imports: [
    TagCloudComponent,
    SkillCardComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  languages = {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript']
  }
  databases = {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite']
  }
  tools = {
    title: 'Tools',
    skills: ['Git', 'VSCode', 'Postman', 'Figma', 'Google']
  }
  other = {
    title: 'Other',
    skills: ['HTML', 'CSS', 'SCSS', 'scripting', 'REST']
  }
  frameworks = {
    title: 'Frameworks',
    skills: ['React', 'Angular', 'Django']
  }
}
