import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-main-projects',
  imports: [
    ProjectCardComponent,
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
      title: 'GitHub Stats Viewer',
      description: "Cool web interface to visualize someone's Github activity. Made using Github API",
      url: 'https://github.com/Dyluan/GitView',
      technologies: ['Node.js', 'Express', 'Angular', 'TypeScript', 'HTML', 'CSS'],
      isLive: false,
    }
  ];

  smallProjects = [
    {
      title: 'Ant vs Bees',
      description: 'GUI game made with Python, one of my first project',
      url: 'https://github.com/Dyluan/AntsVsBees',
      technologies: ['Python'],
      isLive: false
    },
    {
      title: '512',
      description: 'Adaptation of the famous 2048 mobile game. Made in React.',
      url: 'https://github.com/Dyluan/512-React',
      technologies: ['React', 'HTML', 'CSS'],
      isLive: false
    },
    {
      title: 'Todo list',
      description: 'Simple todo list, with a back-end for persistent data. First app made with .NET',
      url: 'https://github.com/Dyluan/Todo-list/tree/main',
      technologies: ['React', 'HTML', 'CSS', 'ASP.NET Core'],
      isLive: false
    },
    {
      title: 'Santé Globale',
      description: "Doctor's office webpage that I made for a client in Bruxelles",
      url: 'https://github.com/Dyluan/Sant-Globale',
      technologies: ['Angular', 'HTML', 'CSS'],
      isLive: false
    }
  ]
}
