import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Poem } from '../models/poem.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PoetryDbAPIService {

  baseUrl: string = 'https://poetrydb.org';

  constructor(private http: HttpClient) { }

  FetchRandomPoems(numberOfPoemToFetch: number) : Observable<Poem[]> {
    if(!numberOfPoemToFetch) numberOfPoemToFetch = 20;

    const url = `${this.baseUrl}/random/${numberOfPoemToFetch}`;

    return this.http.get<Poem[]>(url);
  }
}
