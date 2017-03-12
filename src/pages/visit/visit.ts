import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingDataService } from '../../providers/booking-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingSuccessPage } from '../booking-success/booking-success';

@Component({
  selector: 'page-visit',
  templateUrl: 'visit.html'
})
export class VisitPage {
  savedEmployee;
  savedService;
  savedDate;
  appointmentForm: FormGroup;

  constructor(public navCtrl: NavController,
              private bookingDataService: BookingDataService,
              private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ionViewWillEnter() {
    this.savedEmployee = this.bookingDataService.getEmployee();
    this.savedService = this.bookingDataService.getService();
    this.savedDate = this.bookingDataService.getDate();
  }

  buildForm() {
    this.appointmentForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'phone': ['', Validators.required],
      'email': [''],
      'comment': ['', Validators.required],
      'reminder': ['1', Validators.required],
    });
  }

  onSubmit() {
    console.log('appointmentForm', this.appointmentForm.value);
    this.navCtrl.push(BookingSuccessPage);
  }

}
