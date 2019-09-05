import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from './components/home/home.service';

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
    private router: Router
    ) {
      this.loading = true;
      this.error = false;
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.activarNavMenu(event.url);
        console.log(event.url);
    }
  });

  this.homeService.handleError.subscribe(
    ( response: any ) => {
      console.log({response})
      if ( response.error ) {
        this.mensajeError = response.message.message ? response.message.message : response.message;
        this.error = true;
      } else {
        this.error = false;
        this.loading = false;
      }
    }
  );

  this.homeService.loading.subscribe(
    isLoading => {
      console.log({isLoading});
      this.loading = isLoading;
    });
}

activarNavMenu( path: string ) {

  this.restablecerOptions();
  if ( path.includes('home') ) {
    this.isHome = true;
  } else if ( path.includes('search') ) {
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
