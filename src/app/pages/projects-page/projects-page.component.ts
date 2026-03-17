import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MainProjectsComponent } from '../../components/main-projects/main-projects.component';

@Component({
  selector: 'app-projects-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    MainProjectsComponent,
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {

}
