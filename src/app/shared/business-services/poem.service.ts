import { Injectable } from '@angular/core';
import { Poem } from '../models/poem.model';

@Injectable({providedIn: 'root'})
export class PoemService {

  private _poems: Poem[] = [];

  constructor() { }

  public set list(poems: Poem[]) {
    this._poems = poems;
  }

  public get list() {
    return this._poems
  }

  public changePoemFavoriteStatus(poem: Poem) {
    this._poems.forEach(x => {
      if(x.author === poem.author && x.title === poem.title)
        x.isFavorite = poem.isFavorite;
    });
  }
}
