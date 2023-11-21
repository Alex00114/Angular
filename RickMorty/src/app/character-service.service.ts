import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './models/personaggi.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get<Character>('https://rickandmortyapi.com/api/character')
  }
}
