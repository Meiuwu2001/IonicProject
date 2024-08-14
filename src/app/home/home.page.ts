import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map!: L.Map;
  constructor() { }

  ngOnInit() {
    console.log('init home');

  }
  async ubicacion() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current Position', coordinates.coords);
    await this.getAddress(coordinates.coords.latitude,
      coordinates.coords.longitude)
  }
  async getAddress(lat: any, lon: any) {

    this.map = new L.Map('mapId').setView([lat, lon], 14)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>&#39;'
    }).addTo(this.map);
    L.marker([lat, lon]).addTo(this.map)
      .bindPopup("<b>Hello world!</b><br>Estoy aqui").openPopup();
  }

}
