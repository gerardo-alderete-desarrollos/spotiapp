import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  limit = new Subject<any>();

  constructor() { }

  sendLimits( limit: number ) {
    this.limit.next({limit: limit, show: false  });
  }
}
