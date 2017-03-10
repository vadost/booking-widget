import { Component } from '@angular/core';
import { DataSerives } from '../../providers/data.serives';
import { BookingDataService } from '../../providers/booking-data.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {
  services;

  constructor(private navCtrl: NavController,
              private dataService: DataSerives,
              private bookingDataService: BookingDataService) {
    this.dataService.getServices().subscribe(
      services => {
        this.services = services;
      }
    );
  }

  saveService(service) {
    this.bookingDataService.setService(service);
    this.navCtrl.pop();
  }

}
