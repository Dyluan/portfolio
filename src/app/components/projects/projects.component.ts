import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [
  ProjectCardComponent,
  TranslateModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  project1 = {
    imgSrc: '/img/board_screenshot.png',
    title: 'PROJECTS.TODO.TITLE',
    description: 'PROJECTS.TODO.DESCRIPTION',
    url: 'https://github.com/Dyluan/Tasks-management-App',
    technologies: ['React', 'HTML', 'CSS', 'Express', 'PostgreSQL', 'OAUTH', 'JWT'],
  };
  project2 = {
    imgSrc: '/img/portfolio.PNG',
    title: 'PROJECTS.PORTFOLIO.TITLE',
    description: "PROJECTS.PORTFOLIO.DESCRIPTION",
    url: 'https://github.com/Dyluan/portfolio',
    technologies: ['Angular', 'HTML', 'CSS', 'TypeScript'],
    isLive: true,
    };
  project3 = {
    imgSrc: '/img/immo.PNG',
    title: 'PROJECTS.IMMO.TITLE',
    description: 'PROJECTS.IMMO.DESCRIPTION',
    url: 'https://github.com/Dyluan/logeFinder',
    technologies: ['Node.js', 'Angular', 'TypeScript', 
      'HTML', 'CSS', 'Python', 'PostgreSQL', 'Docker'],
  };
}
