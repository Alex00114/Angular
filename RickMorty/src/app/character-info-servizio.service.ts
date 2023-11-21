import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dettagli } from './models/dettagliPersonaggio.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterInfoServizioService {

  constructor(public http: HttpClient) { }

  getCharacter(id: string) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return this.http.get<Dettagli>(url);
  }
}
