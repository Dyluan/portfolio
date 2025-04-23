import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [
  ProjectCardComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  project1 = {
    imgSrc: '/img/test.jpg',
    title: 'Random Project',
    description: 'Random project description',
    url: 'something.com',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 
      'HTML', 'CSS', 'Python', 'Flask', 'Django', 'Input'],
  };
  project2 = {
    imgSrc: '/img/test.jpg',
    title: 'Random Project',
    description: 'Random project description',
    url: 'something.com',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 
      'HTML', 'CSS', 'Python', 'Flask', 'Django', 'Input'],
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
