import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
     MatCheckboxModule,
     MatCardModule,
     MatIconModule,
     MatSelectModule
    ],
  exports: [
    MatButtonModule,
     MatCheckboxModule,
     MatCardModule,
     MatIconModule,
     MatSelectModule
    ],
})
export class MaterialModule { }
