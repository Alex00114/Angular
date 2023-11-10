import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemoninfoService } from '../pokemoninfo.service';

@Component({
  selector: 'app-pokemoninfo',
  templateUrl: './pokemoninfo.component.html',
  styleUrls: ['./pokemoninfo.component.css']
})
export class PokemoninfoComponent implements OnInit{
  routeObs: Observable<ParamMap>; 
  pokemoninfo : any;
  pokeinfoServiceObs : Observable<Object>;

  constructor(private route: ActivatedRoute, private router: Router, private infoService: PokemoninfoService ) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let pokemonId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (pokemonId); //Stampo su console  
    this.pokeinfoServiceObs = this.infoService.getPokemons(pokemonId) ;
    // codice non necessario?
    this.pokeinfoServiceObs.subscribe((data: any)=> this.pokemoninfo = data );
  }



}
