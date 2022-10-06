import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  macchine: string[];
  constructor() { 
     this.macchine = ["Gru", "Ruspa", "Escavatore", "Dumpers", "Finitrici", "Bulldozer", "Trencher", "Autocarro", "Betoniere", "Terne"];
  }
  ngOnInit(): void {
  }

}
