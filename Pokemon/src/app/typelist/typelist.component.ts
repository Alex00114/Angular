import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ElencoTypeService } from '../elenco-type.service';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrls: ['./typelist.component.css']
})
export class TypelistComponent implements OnInit{
  data: any;

  constructor (public http:HttpClient, private typeServizio : ElencoTypeService, private router: Router) {}


  ngOnInit() {
    this.typeServizio.getdata().subscribe((d: any) => {
      this.data = d;
    });
  }

}
