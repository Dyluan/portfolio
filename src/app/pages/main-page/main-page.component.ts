import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from '../../components/home/home.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-main-page',
  imports: [
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
