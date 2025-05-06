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
    imgSrc: '/img/angularTodo.PNG',
    title: 'Todo List',
    description: 'A simple todo list made with Angular',
    url: 'https://github.com/Dyluan/Todo-Angular',
    technologies: ['Angular', 'HTML', 'CSS', 'TypeScript'],
  };
  project2 = {
    imgSrc: '/img/portfolio.PNG',
    title: 'My Portfolio website',
    description: "You're looking at it right now!",
    url: 'https://github.com/Dyluan/portfolio',
    technologies: ['Angular', 'HTML', 'CSS', 'TypeScript'],
    };
  project3 = {
    imgSrc: '/img/test.jpg',
    title: 'Random Project',
    description: 'Random project description',
    url: 'something.com',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 
      'HTML', 'CSS', 'Python', 'Flask', 'Django', 'Input'],
  };
}
