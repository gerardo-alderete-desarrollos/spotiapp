import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .fixed-menu {
        position: fixed!important;
        z-index: 2 !important;
        top: 0px;
      }
      .user-config {
        position: absolute !important;
        right: 33px !important;
      }
      .nav-user {
        left: -69px !important;
      }
      .user-options {
        padding: 0 !important;
        margin: 0 !important;
        top: 73px;
      }
      .user-options a {
        padding: 0px 10px 0px 25px;
      }
    `
  ]
})
export class NavbarComponent implements OnInit {
  isLogin = false;
  constructor(
    public utilitiesService: UtilitiesService
  ) {
    this.isLogin = this.utilitiesService.getCurrentUser() === '' && this.utilitiesService.getToken() === '' ? false : true;
    console.log('isLogin start', this.isLogin);
    this.utilitiesService.isLogin.subscribe(
      isLogin => {
        console.log({isLogin});
        this.isLogin = isLogin;
      }
    );
  }
 
  ngOnInit() {
  }

  cerrarSesion()  {
    console.log('cerrar sesion');
    this.utilitiesService.logout();
  }
  settingsUsuario()  {
    console.log('settingsUsuario');
  }

}
