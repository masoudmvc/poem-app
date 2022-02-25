import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Poem } from '../models/poem.model';

@Injectable({providedIn: 'root'})
export class PoemIteractionService {

  private selectedPoem = new BehaviorSubject<Poem | null>(null);

  constructor() { }

  setSelectedPoem(poem: Poem) {
    this.selectedPoem.next(poem);
  }

  getSelectedPoem() {
    return this.selectedPoem.asObservable();
  }

}
