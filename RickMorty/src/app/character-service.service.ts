import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get<any>('https://rickandmortyapi.com/api/character')
  }
}
