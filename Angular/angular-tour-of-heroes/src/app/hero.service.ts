import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messages: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messages.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
