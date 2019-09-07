import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-cancion-detalles',
  templateUrl: './modal-cancion-detalles.component.html',
  styleUrls: ['./modal-cancion-detalles.component.css']
})
export class ModalCancionDetalles  {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
