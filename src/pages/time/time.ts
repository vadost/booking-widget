import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataService } from '../../providers/data.service';
import { TranslateService } from '@ngx-translate/core';
import { BookingDataService } from '../../providers/booking-data.service';

@Component({
  selector: 'page-time',
  templateUrl: 'time.html'
})
export class TimePage {
  bookTimes;
  loadingpopup;
  loadingText;
  selectedDate: Date;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataService: DataService,
              private loadingCtrl: LoadingController,
              private translateService: TranslateService,
              private bookingDataService: BookingDataService) {
    this.loadingpopup = this.loadingCtrl.create({});
    translateService.get('LOADING').subscribe(
      value => {
        this.loadingText = value;
      }
    );
  }

  onChangeDate(date: Date) {
    this.selectedDate = date;
    this.loadingpopup = this.loadingCtrl.create({
      content: this.loadingText
    });
    this.loadingpopup.present();
    this.dataService.getbookTimes().subscribe(
      bookTimes => {
        console.log('bookTimes', bookTimes);
        this.bookTimes = bookTimes;
        this.loadingpopup.dismiss();
      }
    )
  }

  onSaveTime(time: string) {
    this.bookingDataService.setDate(this.selectedDate, time);
    this.navCtrl.pop();
  }

}
