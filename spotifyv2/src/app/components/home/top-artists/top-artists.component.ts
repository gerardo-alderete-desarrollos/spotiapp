import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { UtilitiesService } from '../../shared/utilities.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css']
})
export class TopArtistsComponent implements OnInit {
  show = false;
  nuevasCanciones: any[] = [];


  constructor(private homeService: HomeService,
    private utilities: UtilitiesService) {


    this.getData();
    this.utilities.limit.subscribe(
      response => {
        this.show = response.show;
        console.log({response});
        this.nuevasCanciones = [];
        this.getData(response.limit);
      });
   }

  ngOnInit() {

  }

  async getData( limit?: number  ) {

    await this.homeService.getToken();
    const responseNewReleases: any = await this.homeService.getNewReleases(limit);

    if ( responseNewReleases ) {
      this.show = true;
      this.nuevasCanciones = responseNewReleases;
    }
  }
}
