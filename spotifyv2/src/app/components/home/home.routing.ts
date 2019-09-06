import { Routes } from '@angular/router';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { ListaReproduccionComponent } from './lista-reproduccion/lista-reproduccion.component';
import { AlbumsComponent } from './lista-albums/albums.component';
import { ArtistComponent } from './lista-artistas/artist.component';



export const HOME_ROUTES: Routes = [
    { path: '', component: TopArtistsComponent  },
    { path: 'top', component: TopArtistsComponent },
    { path: 'lista-reproduccion', component: ListaReproduccionComponent },
    { path: 'lista-albums', component: AlbumsComponent },
    { path: 'lista-artistas', component: ArtistComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
];


 