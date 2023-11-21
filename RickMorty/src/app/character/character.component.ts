import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterServiceService } from '../character-service.service';
import { Character } from '../models/personaggi.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  data: Character;

  constructor (public http : HttpClient, private personaggioServizio : CharacterServiceService, private router: Router) {}

  ngOnInit() {
    this.personaggioServizio.getdata().subscribe((d: Character) => {
      this.data = d;
      console.log(d)
    });
  }


}
