import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  // observable of the SwitchService instance
  $LookUpSwitch = new EventEmitter<any>();
}
