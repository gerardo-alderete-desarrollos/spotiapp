import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UtilitiesService } from '../shared/utilities.service';
import { ModalControllerService } from '../shared/modal-controller.service';
import { SnackBarErrorComponent } from '../shared/snack-bar-error/snack-bar-error.component';
import { SnackBarSuccesComponent } from '../shared/snack-bar-succes/snack-bar-succes.component';

// const headers = new HttpHeaders({
//   'Authorization': `Bearer ${token}`
//  });
 
 const base = environment.urls.base ;
 const search = environment.urls.search ;
 const new_realeases = environment.urls.new_realeases ;
 const artista = environment.urls.artist ;
 const top_tracks = environment.urls.top_tracks ;

 const baseBack = environment.urls_back.base ;
 const token = environment.urls_back.token;
 const login = environment.urls_back.login;
 const usuario = environment.urls_back.usuario;
 const listaReproduccion = environment.urls_back.lista_reproduccion;


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  token = '';
  // handleError = new  Subject<Object>();
  loading = new Subject<boolean>();

  constructor(private http: HttpClient,
    private utilities: UtilitiesService,
    private modalController: ModalControllerService
    ) { }

  getNewReleases(limit = environment.config.limit) {
    const headers = this.getHeaders();


    return new Promise( (res, rej) => {
      this.sendIsLoading(true);
      this.modalController.closeSnackBar();
      this.http.get(base + new_realeases + `?limit=${limit}`, { headers })
          .pipe(
            map( data => data['albums'].items)
          )
          .subscribe(
            data => {
              this.sendIsLoading(false);
              res(data);
            },
            error => {
              this.sendIsLoading(false);
              this.modalController.openSnackBar(SnackBarErrorComponent, error.error ? error.error.error : error.message);
              rej(error);
            });
    });
  }

  getArtistas( termino: string ) {
    const headers = this.getHeaders();

    return new Promise( (res, rej) => {
      this.sendIsLoading(true);
      this.modalController.closeSnackBar();
      this.http.get(base + search + `${ termino }s&type=artist`, { headers })
            .pipe(
              map( data =>  data['artists'].items)
            )
            .subscribe(
              data => {
                this.sendIsLoading(false);
                if ( data.length === 0 ) {
                  this.modalController.openSnackBar(SnackBarErrorComponent, 'No se encontro artista con este nombre ' + termino);
                }
                res(data);
              },
              error => {
                this.sendIsLoading(false);
                this.modalController.openSnackBar(SnackBarErrorComponent, error.error ? error.error.error : error.message);
                rej(error);
              }
            );
    });
  }

  getArtista( id: string ) {
    const headers = this.getHeaders();

    return new Promise( (res, rej) => {
      this.sendIsLoading(true);
      this.modalController.closeSnackBar();
      this.http.get(base + artista + id, { headers })
        .subscribe(
          data => {
            this.sendIsLoading(false);
            res(data);
          },
          error => {
            this.sendIsLoading(false);
            this.modalController.openSnackBar(SnackBarErrorComponent, error.error ? error.error.error : error.message);
            rej(error);
          });
    });
  }

  async getTopTracks( id: string ) {
    const headers = this.getHeaders();

    return new Promise( (res, rej) => {
      this.sendIsLoading(true);
      this.modalController.closeSnackBar();
      this.http.get(base + artista + id + top_tracks  , { headers })
            .pipe(
              map( data =>  data['tracks'])
            ).subscribe(
              data => {
                this.sendIsLoading(false);
                res(data);
              },
              error => {
                this.sendIsLoading(false);
                this.modalController.openSnackBar(SnackBarErrorComponent, error.error ? error.error.error : error.message);
                rej(error);
              });
    });
 }
  async getAlbums() {
    console.log('getAlbums')
    const headers = this.getHeaders();

    return new Promise( (res, rej) => {
      this.sendIsLoading(true);
      this.modalController.closeSnackBar();
      this.http.get(base + 'albums'   , { headers })
            .pipe(
              // map( data =>  data['tracks'])
            ).subscribe(
              data => {
                console.log({data});
                this.sendIsLoading(false);
                res(data);
              },
              error => {
                console.log({error});

                this.sendIsLoading(false);
                this.modalController.openSnackBar(SnackBarErrorComponent, error.error ? error.error.error : error.message);
                rej(error);
              });
    });
 }

  getToken() {
   const body = {
    grant_type : 'client_credentials',
    client_id : environment.credentials.client_id,
    client_secret : environment.credentials.client_secret
   };

   return  new Promise( (res, rej) => {
    this.sendIsLoading(true);
    this.modalController.closeSnackBar();
    this.http.post( baseBack + token , body ).subscribe(
      data => {
       this.token = data['body'].access_token;
       this.sendIsLoading(false);
       res(data);
      },
      error => {
        this.sendIsLoading(false);
        this.modalController.openSnackBar(SnackBarErrorComponent, error.message);
       rej(error);
      }
    );
   });
 }

 
 auth( email: string, password: string ) {
  const body = {
    email : email,
    password : password,
   };
  return  new Promise( (res, rej) => {
    this.sendIsLoading(true);
    this.modalController.closeSnackBar();
    this.http.post( baseBack + login, body ).subscribe(
      ( data: any ) => {
       this.utilities.setToken(data.token);
       this.utilities.setCurrentUser(data.usuario);
       this.utilities.login();
       this.sendIsLoading(false);
       res(data);
      },
      error => {
        this.sendIsLoading(false);
        this.modalController.openSnackBar(SnackBarErrorComponent, error.error.mensaje);
        this.utilities.setToken('');
       rej(error);
      }
    );
   });
 }
 
 signIn( user ) {
  return  new Promise( (res, rej) => {
    this.sendIsLoading(true);
    this.modalController.closeSnackBar();
    this.http.post( baseBack + usuario, user ).subscribe(
      ( data: any ) => {
       this.sendIsLoading(false);
       if ( data.ok ) {
          this.modalController.openSnackBar( SnackBarSuccesComponent , data.usuario.nombre );
          this.auth(user.email, user.password);
       }
       res(data);
      },
      error => {
        this.sendIsLoading(false);
        this.modalController.openSnackBar(SnackBarErrorComponent, error.error.mensaje);
       rej(error);
      }
    );
   });
 }

 getHeaders() {
   return  new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
     });
 }

 sendIsLoading( isLoading: boolean ) {
  this.loading.next(isLoading);
 }

 async getListarReproduccion() {
   const body = {
     token : this.utilities.getToken()
   };

  return  new Promise( (res, rej) => {
    this.sendIsLoading(true);
    this.modalController.closeSnackBar();
    this.http.post( baseBack + listaReproduccion, body )
    .pipe(
      map( ( data: any ) => data.listaReproduccion )
    )
    .subscribe(
      ( data: any ) => {
       this.sendIsLoading(false);
       res(data);
      },
      error => {
        this.sendIsLoading(false);
        this.modalController.openSnackBar(SnackBarErrorComponent, error.error.mensaje);
       rej(error);
      }
    );
   });
 }


}
