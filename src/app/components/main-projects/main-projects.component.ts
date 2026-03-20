import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-projects',
  imports: [
    ProjectCardComponent,
    TranslateModule
  ],
  templateUrl: './main-projects.component.html',
  styleUrl: './main-projects.component.css'
})
export class MainProjectsComponent {

  mainProjects = [
    {
      imgSrc: '/img/board_screenshot.png',
      title: 'PROJECTS.TODO.TITLE',
      description: 'PROJECTS.TODO.DESCRIPTION',
      url: 'https://github.com/Dyluan/Tasks-management-App',
      technologies: ['React', 'HTML', 'CSS', 'Express', 'PostgreSQL', 'OAUTH', 'JWT'],
      isLive: false,
    },
    {
      imgSrc: '/img/portfolio.PNG',
      title: 'PROJECTS.PORTFOLIO.TITLE',
      description: "PROJECTS.PORTFOLIO.DESCRIPTION",
      url: 'https://github.com/Dyluan/portfolio',
      technologies: ['Angular', 'HTML', 'CSS', 'TypeScript'],
      isLive: true,
    },
    {
      imgSrc: '/img/immo.PNG',
      title: 'PROJECTS.IMMO.TITLE',
      description: 'PROJECTS.IMMO.DESCRIPTION',
      url: 'https://github.com/Dyluan/logeFinder',
      technologies: ['Node.js', 'Angular', 'TypeScript',
        'HTML', 'CSS', 'Python', 'PostgreSQL', 'Docker'],
      isLive: false,
    },
    {
      imgSrc: '/img/githubviewer.png',
      title: 'PROJECTS.GITHUB.TITLE',
      description: 'PROJECTS.GITHUB.DESCRIPTION',
      url: 'https://github.com/Dyluan/GitView',
      technologies: ['Node.js', 'Express', 'Angular', 'TypeScript', 'HTML', 'CSS'],
      isLive: false,
    }
  ];

  smallProjects = [
    {
      title: 'PROJECTS.ANTS.TITLE',
      description: 'PROJECTS.ANTS.DESCRIPTION',
      url: 'https://github.com/Dyluan/AntsVsBees',
      technologies: ['Python'],
      isLive: false
    },
    {
      title: 'PROJECTS.512.TITLE',
      description: 'PROJECTS.512.DESCRIPTION',
      url: 'https://github.com/Dyluan/512-React',
      technologies: ['React', 'HTML', 'CSS'],
      isLive: false
    },
    {
      title: 'PROJECTS.SMALLTODO.TITLE',
      description: 'PROJECTS.SMALLTODO.DESCRIPTION',
      url: 'https://github.com/Dyluan/Todo-list/tree/main',
      technologies: ['React', 'HTML', 'CSS', 'ASP.NET Core'],
      isLive: false
    },
    {
      title: 'PROJECTS.DOCTOR.TITLE',
      description: 'PROJECTS.DOCTOR.DESCRIPTION',
      url: 'https://github.com/Dyluan/Sant-Globale',
      technologies: ['Angular', 'HTML', 'CSS'],
      isLive: false
    }
  ]
}
