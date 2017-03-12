import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataService } from '../providers/data.service';
import { MapComponent } from '../components/map/map';
import { BookingPage } from '../pages/booking/booking';
import { LanguageSelect } from '../components/language-select/language-select';
import { EmployeesPage } from '../pages/employees/employees';
import { ServicesPage } from '../pages/services/services';
import { TimePage } from '../pages/time/time';
import { BookingDataService } from '../providers/booking-data.service';
import { DateSliderComponent } from '../components/date-slider/date-slider';
import { VisitPage } from '../pages/visit/visit';
import { BookingSuccessPage } from '../pages/booking-success/booking-success';

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
    VisitPage,
    BookingSuccessPage,
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
    TimePage,
    VisitPage,
    BookingSuccessPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataService, BookingDataService]
})
export class AppModule {}
