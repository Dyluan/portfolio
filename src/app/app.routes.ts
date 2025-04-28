import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'home',
    //     component: MainPageComponent
    // },
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    }
];
