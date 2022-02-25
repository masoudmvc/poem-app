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

}
