import { Component } from '@angular/core';
import { TagCloudComponent } from '../tag-cloud/tag-cloud.component';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [
    TagCloudComponent,
    SkillCardComponent,
    TranslateModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  languages = {
    title: 'SKILLS.LANGUAGES',
    skills: ['Python', 'JavaScript', 'TypeScript']
  }
  databases = {
    title: 'SKILLS.DATABASES',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite']
  }
  tools = {
    title: 'SKILLS.TOOLS',
    skills: ['Git', 'VSCode', 'Postman', 'Figma', 'Google']
  }
  other = {
    title: 'SKILLS.OTHER',
    skills: ['HTML', 'CSS', 'SCSS', 'scripting', 'REST']
  }
  frameworks = {
    title: 'SKILLS.FRAMEWORKS',
    skills: ['React', 'Angular', 'Django']
  }
  backend = {
    title: 'SKILLS.BACKEND',
    skills: ['Node.js', 'Express.js',]
  }
}
