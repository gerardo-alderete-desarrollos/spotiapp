// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urls: {
    accounts: 'https://accounts.spotify.com/api/token',
    base: 'https://api.spotify.com/v1/',
    new_realeases: 'browse/new-releases',
    search: 'search?q=',
    artist: 'artists/',
    top_tracks: '/top-tracks?country=us'
  },
  urls_back: {
    base: 'http://localhost:3000/',
    login: 'login',
    token: 'token',
    usuario: 'usuario'
  },
  credentials: {
    client_id: 'd6b55734aa3f4b49af89ae8023b6c69e',
    client_secret: '4659ca881ead4eed81c45197f071db34'
  },
  config: {
    limit: 10
  },
  token: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
