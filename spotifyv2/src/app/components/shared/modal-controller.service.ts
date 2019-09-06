import { Injectable } from '@angular/core';
import { MatBottomSheet, MatDialog, MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ModalControllerService {

  constructor(private bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
    ) { }

  openModalBottom( Component ) { 
    this.bottomSheet.open( Component );
  }
  openModalDialog( Component, item ) {
    const dialogRef = this.dialog.open( Component, {
      width: '250px',
      data:  item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log({result});
    });
  }
  openSnackBar( Component, message ) {
    console.log({message});
    this.snackBar.openFromComponent(Component, {
      duration: 5 * 1000,
      data: message,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
  closeSnackBar() {
    this.snackBar.dismiss();
  }
}
