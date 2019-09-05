import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notnull'
})
export class NotnullPipe implements PipeTransform {

  transform(soundTrack: any): any {
    if ( soundTrack ) {
      return soundTrack;
    } else {
      return '';
    }
  }

}
