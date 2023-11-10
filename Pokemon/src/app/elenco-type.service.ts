import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElencoTypeService {

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get<any>('https://pokeapi.co/api/v2/type')
  }
}
