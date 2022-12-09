import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent implements OnInit{
  @Input() listaPren!: Reservation[];
  @Input() stanza!: Room;
  constructor() { }

  ngOnInit(): void {
    
  }

  mostraDett(room : Room) {
    this.stanza.name = room.name;
    this.stanza.id = room.id;
    this.stanza.num_D_bed = room.num_D_bed;
    this.stanza.num_S_bed = room.num_S_bed;
  }
}
