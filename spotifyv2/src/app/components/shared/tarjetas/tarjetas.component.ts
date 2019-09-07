import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { UtilitiesService } from '../utilities.service';
import { HomeService } from '../../home/home.service';
import { ModalControllerService } from '../modal-controller.service';
import { SnackBarErrorComponent } from '../snack-bar-error/snack-bar-error.component';
import { ModalCancionDetalles } from '../modal-dialog/modal-cancion-detalles.component';
import { ModalListaReproduccionComponent } from '../modal-dialog/modal-lista-reproduccion.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  defaultImage = '../../assets/img/loader.gif';
  listaReproduccion;

  @Input() items: any[] = [];
  constructor(private router: Router,
    private modalController: ModalControllerService,
    private utilities: UtilitiesService,
    private homeService: HomeService) { }

  ngOnInit() {
  }

  verArtista(item: any) {

    let artistaId;

    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista', artistaId]);

  } 

  async agregarListaReporduccion(item) {
    if ( this.utilities.getToken() && this.utilities.getToken() !== '' ) {
      this.listaReproduccion = await this.homeService.getListarReproduccion();
      // console.log('lisaReproduccion', this.listaReproduccion);
      this.modalController.openModalDialog(ModalListaReproduccionComponent, this.listaReproduccion);
    } else {
      this.modalController.openModalBottom(ModalBottomComponent);
      console.log('no hay token');


    }

  }
  abrirDetalles(item) {
    this.modalController.openModalDialog(ModalCancionDetalles, item);
  }

}
