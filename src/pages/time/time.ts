import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-time',
  templateUrl: 'time.html'
})
export class TimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

  onChangeDate(date: Date) {
    console.log('onChangeDate', date);
  }

}
