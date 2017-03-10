import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TranslateService } from '@ngx-translate/core';
import { TimePage } from '../pages/time/time';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  // rootPage = TimePage;

  constructor(platform: Platform,
              translate: TranslateService) {
    const langBrowser = navigator.language.split('-')[0];
    translate.setDefaultLang(langBrowser);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
