import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataSerives } from '../providers/data.serives';
import { MapComponent } from '../components/map/map';
import { BookingPage } from '../pages/booking/booking';
import { LanguageSelect } from '../components/language-select/language-select';
import { EmployeesPage } from '../pages/employees/employees';
import { ServicesPage } from '../pages/services/services';
import { TimePage } from '../pages/time/time';
import { BookingDataService } from '../providers/booking-data.service';
import { DateSliderComponent } from '../components/date-slider/date-slider';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookingPage,
    EmployeesPage,
    ServicesPage,
    TimePage,
    MapComponent,
    LanguageSelect,
    DateSliderComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookingPage,
    EmployeesPage,
    ServicesPage,
    TimePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataSerives, BookingDataService]
})
export class AppModule {}
