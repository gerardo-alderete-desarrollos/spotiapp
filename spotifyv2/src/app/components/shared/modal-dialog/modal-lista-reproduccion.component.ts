import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-lista-reproduccion',
  templateUrl: './modal-lista-reproduccion.component.html',
  styleUrls: ['./modal-lista-reproduccion.component.css']
})
export class ModalListaReproduccionComponent implements OnInit {

  constructor(
  @Inject(MAT_DIALOG_DATA) public data
  ) { 
    console.log({data});
  }

  ngOnInit() {
  }

}
