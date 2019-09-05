import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
     MatCheckboxModule,
     MatCardModule,
     MatIconModule,
     MatSelectModule,
     MatMenuModule
    ],
  exports: [
    MatButtonModule,
     MatCheckboxModule,
     MatCardModule,
     MatIconModule,
     MatSelectModule,
     MatMenuModule
    ],
})
export class MaterialModule { }
