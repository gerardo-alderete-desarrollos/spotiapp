import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { ModalBottomComponent } from '../modal-bottom/modal-bottom.component';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

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
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  verArtista(item: any) {

    let artistaId;

    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaId]);

  }

  agregarListaReporduccion(item) {
    console.log('listaReproduccion');
    console.log({item});
    this.bottomSheet.open(ModalBottomComponent);

  }
  abrirDetalles(item) {
    console.log('Abrir detalles');
    console.log({item});

    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '250px',
      data: {name: 'nombre', animal: item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log({result});
    });
  }

}
