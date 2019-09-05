import { NgModule } from '@angular/core';
import { DomseguroPipe } from './domseguro.pipe';
import { NoimagePipe } from './noimage.pipe';
import { NotnullPipe } from './notnull.pipe';

@NgModule({
  declarations: [
     DomseguroPipe,
     NoimagePipe,
     NotnullPipe
  ],
  imports: [
  ],
  exports: [
     DomseguroPipe,
     NoimagePipe,
     NotnullPipe
  ]
})
export class PipesModule { }
