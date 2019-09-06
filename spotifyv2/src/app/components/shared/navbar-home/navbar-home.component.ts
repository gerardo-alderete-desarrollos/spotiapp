import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '../utilities.service';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { ModalControllerService } from '../modal-controller.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  public formGroup: FormGroup;

  limits  = [
    {value: 5},
    {value: 10},
    {value: 15},
    {value: 20},
    {value: 25},
    {value: 30},
    {value: 35},
    {value: 40},
    {value: 45},
    {value: 50},
  ];
  constructor( fb: FormBuilder,
    private utilities: UtilitiesService,
    private router: Router,
    private modalController: ModalControllerService
    ) {
      this.formGroup = fb.group({
        'limits' : [10, Validators.required ]}
        );
    }

  ngOnInit() {
  }

  seleccionado( limit ) {
    console.log(limit.value);
    this.utilities.sendLimits(limit.value);
  }

  listaReproduccion() {
    console.log('listaReproduccion');
    this.isLoging(1);

  }
  listaAlbums() {
    console.log('listaAlbums');
    this.isLoging(2);

  }
  listaArtistas() {
    console.log('listaArtistas')  ;
    this.isLoging(3);
  }
  isLoging( reditectTo: number ) {
    if ( this.utilities.getToken() && this.utilities.getToken() !== '' ) {
      // Aqui ira el servico para agregar a lista de reproduccion
      console.log('si hay token');
      // return true;
      switch (reditectTo) {
        case 1:
        console.log('redirectTo:'  + reditectTo);
              this.router.navigateByUrl('/home/lista-reproduccion');

          break;
        case 2:
        console.log('redirectTo:'  + reditectTo);
              this.router.navigateByUrl('/home/lista-albums');

          break;
        case 3:
        console.log('redirectTo:'  + reditectTo);
              this.router.navigateByUrl('/home/lista-artistas');
          break;
        default:
          break;
      }
    } else {
      // this.bottomSheet.open(ModalBottomComponent);
      this.modalController.openModalBottom(ModalBottomComponent);
      console.log('no hay token');
    }


  }

}
