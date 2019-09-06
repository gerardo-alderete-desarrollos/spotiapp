import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  limit = new Subject<any>();
  isLogin = new Subject<any>();

  constructor() { }

  sendLimits( limit: number ) {
    this.limit.next({limit: limit, show: false  });
  }

  getToken() {
    return localStorage.getItem('token');
  }
  setToken( token: string ) {
    localStorage.setItem('token', token);
  }
  getCurrentUser() {
    if ( localStorage.getItem('currentUser')) {

      return JSON.parse(localStorage.getItem('currentUser'));
    }
    return false;
  }
  setCurrentUser( currentUser: string ) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  setLastRout( route: string ) {
    localStorage.setItem('lastRoute', route);
  }
  getLastRout() {
    return localStorage.getItem('lastRoute');
  }
  
  login() {
    this.isLogin.next(true);
  }

  logout() {
    this.isLogin.next(false);
    this.setCurrentUser('');
    this.setToken('');
  }
}
