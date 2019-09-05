import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Importar rutas
import { ROUTES } from './app.routes';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './components/shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

 
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    PipesModule,
    SharedModule,
    RouterModule.forRoot( ROUTES, { useHash: false}),
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use IntersectionObserver
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
