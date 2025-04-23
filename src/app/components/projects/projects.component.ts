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
  imgSrc: string = '/img/test.jpg';
  title: string = 'Random Project';
  description: string = 'Random project description';
  url: string = 'something.com';
  technologies: string[] = ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 
    'HTML', 'CSS', 'Python', 'Flask', 'Django', 'Input'];
}
