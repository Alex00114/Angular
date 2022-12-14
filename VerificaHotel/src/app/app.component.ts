import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './models/reservation.model';
import { Room } from './models/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'VerificaHotel';
  obsRooms!: Observable<Reservation[]>;
  data!: Reservation[];
  selectedRoom: Room = new Room();
  show: boolean = true;
  buttonName: string = 'Nascondi';

  constructor(public http:HttpClient){

  }

  ngOnInit(): void {
    this.obsRooms = this.http.get<Reservation[]>('https://my-json-server.typicode.com/malizia-g/hotel/booking')
    this.obsRooms.subscribe(this.faiqualcosa)
  }

  faiqualcosa = (data: Reservation[]) => {
    this.data = data;
  }

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Nascondi";
    else
      this.buttonName = "Mostra";
  }
}
