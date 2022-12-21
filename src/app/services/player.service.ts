import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newMusic } from '../common/factories';
import { IMusic } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentMusic = new BehaviorSubject<IMusic>(newMusic())

  constructor() { }
}
