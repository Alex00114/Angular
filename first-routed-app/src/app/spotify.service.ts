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
        'Bearer BQADJ2lXnWwCobLH5N9-OVRvGBU-8lPIYk8Z8ghHdvTAeDuA0oejiUYZkqCp1YJFmp-39Fjg5FLd-rG2rYCDhQ1JXWQYKPwXjpymr020OBlJnJvvczI6-z2YtGhiMQMGTNca6QqZKaMKJpWGQIrUvAP3I1AS1lX8A6vcJ9XNPS_MiNOP5Tq9YYWEkSSew5UcvY6c'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}