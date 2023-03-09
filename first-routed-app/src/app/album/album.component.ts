import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs: Observable<ParamMap> | undefined; 
  album : any;

  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: SpotifyService,
    private location: Location
    ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  spotifyServiceObs : any;
  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let albumId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (albumId); //Stampo su console  
    
    if (albumId != null) {
      this.spotifyServiceObs = this.service.getAlbum(albumId)
      this.spotifyServiceObs.subscribe((data: any)=>this.album = data)
    }
  }

  back() : void
  {
    this.location.back();
  }

}
