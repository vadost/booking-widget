import { Component } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { BookingDataService } from '../../providers/booking-data.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {
  services;

  constructor(private navCtrl: NavController,
              private dataService: DataService,
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
