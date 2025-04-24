import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from '../../components/home/home.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-main-page',
  imports: [
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
