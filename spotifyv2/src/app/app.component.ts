import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from './components/home/home.service';
import { UtilitiesService } from './components/shared/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   isHome = false;
   isSearch = false;
   isNoNavBar = false;

   loading: boolean;
   error: boolean;
   mensajeError: string;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private utilities: UtilitiesService
    ) {
      this.loading = true;
      this.error = false;
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.activarNavMenu(event.url);
    }
  });

  // this.homeService.handleError.subscribe(
  //   ( response: any ) => {
  //     if ( response.error ) {
  //       this.mensajeError = response.message.message ? response.message.message : response.message;
  //       this.error = true;
  //       this.loading = false;
  //     } else {
  //       this.error = false;
  //       this.loading = false;
  //     }
  //   }
  // );

  this.homeService.loading.subscribe(
    isLoading => {
      this.loading = isLoading;
    });
}

activarNavMenu( path: string ) {

  this.restablecerOptions();
  if ( path.includes('home') ) {
    this.utilities.setLastRout('/home');
    this.isHome = true;
  } else if ( path.includes('search') ) {
    this.utilities.setLastRout('/search');
    this.isSearch = true;
  } else {
    this.isNoNavBar = true;
  }
}

restablecerOptions() {
  this.isHome = false;
  this.isSearch = false;
  this.isNoNavBar = false;
}
}
