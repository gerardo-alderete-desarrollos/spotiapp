import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  tracks: any = {};

  loading: boolean;
  error: boolean;
  mensajeError: string;
  defaultImage = '../../assets/img/loader.gif';

  constructor(private activatedRoute: ActivatedRoute,
    private homeService: HomeService) {

    this.loading = true;
    this.getToken();
    this.activatedRoute.params.subscribe(
      paramas => {
        console.log(paramas);
        this.getArtista(paramas.id);
        this.getTopTracks(paramas.id);
      }
    );

    this.homeService.handleError.subscribe(
      ( response: any ) => {
        console.log('response', response);
        if ( response.error ) {
          this.mensajeError = response.message.message ? response.message.message : response.message;
          this.error = true;
          this.loading = false;
        }
      }
    );
   }

  ngOnInit() {
  }
  async getArtista( id: string ) {
    const responseArtista = await this.homeService.getArtista(id);

    if ( responseArtista ) {
      this.artista = responseArtista;
      this.loading = false;
    }
  }

  async getTopTracks(id: string) {
    const responseTracks = await this.homeService.getTopTracks(id)

    if ( responseTracks ) {
      this.tracks = responseTracks;
    }
  }
  async getToken() {
    await this.homeService.getToken();
  }

}
