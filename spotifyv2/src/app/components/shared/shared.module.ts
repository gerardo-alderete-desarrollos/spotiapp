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
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { SnackBarErrorComponent } from './snack-bar-error/snack-bar-error.component';
import { SnackBarSuccesComponent } from './snack-bar-succes/snack-bar-succes.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NavbarComponent,
    TarjetasComponent,
    NavbarHomeComponent,
    ModalBottomComponent,
    ModalDialogComponent,
    SnackBarErrorComponent,
    SnackBarSuccesComponent,
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
    ModalDialogComponent,
    SnackBarErrorComponent,
    SnackBarSuccesComponent,
  ],
  entryComponents: [
    ModalBottomComponent,
    ModalDialogComponent,
    SnackBarErrorComponent,
    SnackBarSuccesComponent
  ]
})
export class SharedModule { }
