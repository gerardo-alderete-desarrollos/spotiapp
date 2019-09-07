import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { MaterialModule } from '../../material/material.module';
import { PipesModule } from '../../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { ModalBottomComponent } from './modal-bottom/modal-bottom.component';
import { SnackBarErrorComponent } from './snack-bar-error/snack-bar-error.component';
import { SnackBarSuccesComponent } from './snack-bar-succes/snack-bar-succes.component';
import { ModalCancionDetalles } from './modal-dialog/modal-cancion-detalles.component';
import { ModalListaReproduccionComponent } from './modal-dialog/modal-lista-reproduccion.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NavbarComponent,
    TarjetasComponent,
    NavbarHomeComponent,
    ModalBottomComponent,
    ModalCancionDetalles,
    SnackBarErrorComponent,
    SnackBarSuccesComponent,
    ModalListaReproduccionComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    PipesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use IntersectionObserver
    }),
  ],
  exports: [
    LoadingComponent,
    NavbarComponent,
    TarjetasComponent,
    NavbarHomeComponent,
    ModalBottomComponent,
    SnackBarErrorComponent,
    SnackBarSuccesComponent,
    ModalCancionDetalles,
    ModalListaReproduccionComponent,
  ],
  entryComponents: [
    ModalBottomComponent,
    SnackBarErrorComponent,
    SnackBarSuccesComponent,
    ModalCancionDetalles,
    ModalListaReproduccionComponent
  ]
})
export class SharedModule { }
