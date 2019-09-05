import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private homeService: HomeService) {
    this.loading = true;
    this.error = false;
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
    this.getData();



   }

  ngOnInit() {

  }

  async getData() {

    await this.homeService.getToken();
    const responseNewReleases: any = await this.homeService.getNewReleases();

    if ( responseNewReleases ) {
      this.nuevasCanciones = responseNewReleases;
      this.loading = false;
    }
  }

}
