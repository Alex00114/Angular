import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  position2 : any;
  position3: any;
  label :string;
  circleOptions: any;
  markerOptions: google.maps.MarkerOptions;
  markerOptions2: google.maps.MarkerOptions;
  markerOptions3: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];

  constructor() {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.position2 = {lat: 45.506958, lng: 9.191766};
    this.position3 = {lat: 45.506358, lng: 9.191766};
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
    let iconData2 : google.maps.Icon = {
      url:'./assets/img/milan.png',
      scaledSize : new google.maps.Size(60,100)
    }
    let iconData3 : google.maps.Icon = {
      url:'./assets/img/pc.png',
      scaledSize : new google.maps.Size(60,60)
    }
  
    this.markerOptions = {icon:iconData}
    this.markerOptions2 = {icon:iconData2}
    this.markerOptions3 = {icon:iconData3}

    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];
  }

  cambiaColoreRosso() {
    this.circleOptions = {fillColor : 'red'}
  }
  cambiaColoreBlu() {
    this.circleOptions = {fillColor : 'blue'}
  }
  cambiaColoreGiallo() {
    this.circleOptions = {fillColor : 'yellow'}
  }
  

}
