import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-bar-succes',
  templateUrl: './snack-bar-succes.component.html',
  styleUrls: ['./snack-bar-succes.component.css']
})
export class SnackBarSuccesComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data
  ) { }

  ngOnInit() {
  }

}
