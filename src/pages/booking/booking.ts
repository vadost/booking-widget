import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmployeesPage } from '../employees/employees';
import { ServicesPage } from '../services/services';
import { TimePage } from '../time/time';
import { BookingDataService } from '../../providers/booking-data.service';
import { VisitPage } from '../visit/visit';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  employeesPage = EmployeesPage;
  servicesPage = ServicesPage;
  timePage = TimePage;
  savedEmployee;
  savedService;
  savedDate;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private bookingDataService: BookingDataService) {
    console.log(navParams.get('filial'));
  }

  ionViewWillEnter() {
    this.savedEmployee = this.bookingDataService.getEmployee();
    this.savedService = this.bookingDataService.getService();
    this.savedDate = this.bookingDataService.getDate();
  }

  removeSavedEmployee(event) {
    event.stopPropagation();
    this.bookingDataService.removeEmployee();
    this.savedEmployee = null;
  }

  removeSavedService(event) {
    event.stopPropagation();
    this.bookingDataService.removeService();
    this.savedService = null;
  }

  removeSavedDate(event) {
    event.stopPropagation();
    this.bookingDataService.removeDate();
    this.savedDate = null;
  }

  makeVisit() {
    this.navCtrl.push(VisitPage);
  }

}
