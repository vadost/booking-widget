import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { DataService } from "../../providers/data.service";
import { BookingPage } from '../booking/booking';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BookingDataService } from '../../providers/booking-data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data;
  subscriptionFilials: Subscription;
  loadingpopup: any;
  loadingText: string;

  constructor(private navCtrl: NavController,
              private dataService: DataService,
              private loadingCtrl: LoadingController,
              private translateService: TranslateService,
              private bookingDataService: BookingDataService) {
    this.loadingpopup = this.loadingCtrl.create({});
    translateService.get('LOADING').subscribe(
      value => {
        this.loadingText = value;
        this.getFilials();
      }
    );
  }

  ionViewWillEnter() {
    this.bookingDataService.removeDate();
    this.bookingDataService.removeService();
    this.bookingDataService.removeEmployee();
  }

  getFilials(){
    this.loadingpopup = this.loadingCtrl.create({
      content: this.loadingText
    });
    this.loadingpopup.present();

    this.subscriptionFilials = this.dataService.getFilials().subscribe(
      filials => {
        this.loadingpopup.dismiss();
        this.data = filials;
      }
    );
  }

  onItemClicked(e, item) {
    e.preventDefault();
    e.stopPropagation();
    this.navCtrl.push(BookingPage, {filial: item});
  }



}
