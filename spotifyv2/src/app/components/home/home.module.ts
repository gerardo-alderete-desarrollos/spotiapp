import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { HOME_ROUTES } from './home.routing';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { ListaReproduccionComponent } from './lista-reproduccion/lista-reproduccion.component';
import { AlbumsComponent } from './lista-albums/albums.component';
import { ArtistComponent } from './lista-artistas/artist.component';




@NgModule({
    declarations: [
        HomeComponent,
        TopArtistsComponent,
        ListaReproduccionComponent,
        AlbumsComponent,
        ArtistComponent,
    ],
    imports: [
        RouterModule.forChild(HOME_ROUTES),
        CommonModule,
        MaterialModule,
        PipesModule,
        SharedModule
    ],
    exports: [
        RouterModule,
        HomeComponent,
         HomeComponent,
        TopArtistsComponent,
        ListaReproduccionComponent,
        AlbumsComponent,
        ArtistComponent,
    ]
})
export class HomeModule { }
