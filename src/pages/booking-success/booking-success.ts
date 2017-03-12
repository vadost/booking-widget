import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BookingSuccess page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-booking-success',
  templateUrl: 'booking-success.html'
})
export class BookingSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToRoot() {
    this.navCtrl.popToRoot();
  }

}
