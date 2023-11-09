import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrls: ['./typelist.component.css']
})
export class TypelistComponent implements OnInit{
  obsPokemon!: Observable<Object>;
  data!: any;

  constructor (public http:HttpClient) {}


  ngOnInit() {
    this.obsPokemon = this.http.get<any>('https://pokeapi.co/api/v2/type')
    this.obsPokemon.subscribe(this.getData)
  }

  getData = (data: any) => {
    this.data = data;
    console.log(data);
  }


}
