import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';
import { Risultati } from './models/risultati.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  obsPokemon!: Observable<Object>;
  data!: any;

  constructor(public http:HttpClient){ }


  ngOnInit(): void {
    this.obsPokemon = this.http.get<any>('https://pokeapi.co/api/v2/type')
    this.obsPokemon.subscribe(this.faiqualcosa)
  }

  faiqualcosa = (data: any) => {
    this.data = data;
    console.log(data);
  }


}
