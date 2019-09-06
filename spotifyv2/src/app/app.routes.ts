import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/shared/artista/artista.component';

export const ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule'
    },
    {
        path: 'artista/:id', component: ArtistaComponent
    },
    { path: 'search', component: SearchComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
