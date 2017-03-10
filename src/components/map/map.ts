import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnInit{
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor() {
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(50.450592, 30.523078);
    let mapOptions = {
      center: latLng,
      scrollwheel: false,
      // navigationControl: false,
      // mapTypeControl: false,
      // scaleControl: false,
      // draggable: false,
      fullscreenControl: false,
      // disableDefaultUI: true,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
