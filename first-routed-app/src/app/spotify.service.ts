import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCuJd8-iGHfsaj8npDuOqC1caJeJ6tV-DPAtXe_L2cy9a9y63McycVMzXE4o2UomXxWAZiCMwiLs-g2bwONHN4JseRBiYpHqBPBl6hpdspLes-qLjEwCV4xyj-knTjIAe1VE5EfGmCqxgKDOhB6ec7ihLn1L1uwdI8MeeKdHC-R8oDpTyC6CIjWdbM-H_kboOAw'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}