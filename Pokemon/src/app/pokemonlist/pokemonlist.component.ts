import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit{
  routeObs!: Observable<ParamMap>;
  pokemon: any;
  pokemonServiceObs!: Observable<any>;

  constructor (private route: ActivatedRoute, private pokemonService: PokemonService, private location : Location) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
    console.log(this.pokemon)
  }

  getRouterParam = (params: ParamMap) => {
    let pokemonId = params.get('id');
    console.log (pokemonId);

    if (pokemonId != null) {
      this.pokemonServiceObs = this.pokemonService.getPokemon(pokemonId) ;
      this.pokemonServiceObs.subscribe((data)=>this.pokemon = data)
    }
  }

}
