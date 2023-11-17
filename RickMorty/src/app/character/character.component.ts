import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterServiceService } from '../character-service.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  data: any;

  constructor (public http : HttpClient, private personaggioServizio : CharacterServiceService, private router: Router) {}

  ngOnInit() {
    this.personaggioServizio.getdata().subscribe((d: any) => {
      this.data = d;
    });
  }

}
