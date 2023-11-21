import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterInfoServizioService } from '../character-info-servizio.service';
import { Dettagli } from '../models/dettagliPersonaggio.model';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit{
  routeObs: Observable<ParamMap>;
  personaggio: Dettagli;
  characterServiceObs: Observable<Dettagli>;

  constructor (private route: ActivatedRoute, private router: Router, private persServizio: CharacterInfoServizioService) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let personaggioId = params.get('id');
    console.log (personaggioId);

    if (personaggioId != null) {
      this.characterServiceObs = this.persServizio.getCharacter(personaggioId) ;
      this.characterServiceObs.subscribe((data)=> this.personaggio = data)
      console.log(this.personaggio)
    }
  }
}
