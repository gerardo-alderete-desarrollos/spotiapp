import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { UtilitiesService } from '../utilities.service';
import { HomeService } from '../../home/home.service';
import { ModalControllerService } from '../modal-controller.service';
import { SnackBarErrorComponent } from '../snack-bar-error/snack-bar-error.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  defaultImage = '../../assets/img/loader.gif';

  @Input() items: any[] = [];
  constructor(private router: Router,
    private modalController: ModalControllerService,
    private utilities: UtilitiesService) { }

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

  agregarListaReporduccion(item) {
    if ( this.utilities.getToken() && this.utilities.getToken() !== '' ) {
      // Aqui ira el servico para agregar a lista de reproduccion
      console.log('si hay token');
    } else {
      // this.homeService.auth('ge_call@hotmail.com', 'Callofduty92');
      this.modalController.openModalBottom(ModalBottomComponent);
      console.log('no hay token');


    }

  }
  abrirDetalles(item) {
    this.modalController.openModalDialog(ModalDialogComponent, item);
    this.modalController.openSnackBar(SnackBarErrorComponent, 'Mensaje');
  }

}
