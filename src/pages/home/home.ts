import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { DataSerives } from "../../providers/data.serives";
import { BookingPage } from '../booking/booking';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

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
              private dataService: DataSerives,
              private loadingCtrl: LoadingController,
              private translateService: TranslateService) {
    this.loadingpopup = this.loadingCtrl.create({});
    translateService.get('LOADING').subscribe(
      value => {
        console.log('value22', value);
        this.loadingText = value;
        this.doNext();
      }
    );

  }

  doNext(){
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

  onItemClicked(item) {
    this.navCtrl.push(BookingPage, {filial: item});
  }



}
