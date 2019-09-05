import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { TopArtistsComponent } from './top-artists/top-artists.component';


export const HOME_ROUTES: Routes = [

    { path: '', component: TopArtistsComponent  },
    { path: 'top', component: TopArtistsComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
];


