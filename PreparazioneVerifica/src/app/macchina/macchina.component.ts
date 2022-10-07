import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {
  @Input() macchina: string; // <-- Aggiungi la notazione @input
  pezzi: string[];
  constructor() { 
    this.pezzi = ["viti", "bulloni", "ferro"];
  }

  ngOnInit(): void {
  }

}
