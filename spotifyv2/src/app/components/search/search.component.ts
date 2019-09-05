import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;

  constructor(private homeService: HomeService) {
    this.homeService.getToken();
    homeService.sendIsLoading( false );
   }

  ngOnInit() {
  }

  async buscar(termino) {

    const responseArtista: any = await this.homeService.getArtistas( termino );
    if ( responseArtista ) {
      this.artistas = responseArtista;
      this.homeService.sendIsLoading(false);

    }
  }
}
