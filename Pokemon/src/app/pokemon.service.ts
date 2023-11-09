import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient) { }

  getPokemon(id: string) {
    const url = `https://pokeapi.co/api/v2/type/${id}`;
    return this.http.get<any>(url);
  }

}
