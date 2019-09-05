import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-modal-bottom',
  templateUrl: './modal-bottom.component.html',
  styleUrls: ['./modal-bottom.component.css']
})
export class ModalBottomComponent  {

  constructor(private bottomSheetRef: MatBottomSheetRef<any>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
