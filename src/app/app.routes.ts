import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home-page/home.component';
import { ContactComponent } from '../components/contact-page/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'kontakt', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
