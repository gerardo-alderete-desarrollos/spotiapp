import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { UtilitiesService } from '../utilities.service';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  defaultImage = '../../assets/img/loader.gif';

  @Input() items: any[] = [];
  constructor(private router: Router,
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
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

  agregarListaReporduccion(item) {
    if ( this.utilities.getToken() && this.utilities.getToken() !== '' ) {
      // Aqui ira el servico para agregar a lista de reproduccion
      console.log('si hay token');
    } else {
      // this.homeService.auth('ge_call@hotmail.com', 'Callofduty92');
      this.bottomSheet.open(ModalBottomComponent);
      console.log('no hay token');


    }

  }
  abrirDetalles(item) {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '250px',
      data:  item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log({result});
    });
  }

}
