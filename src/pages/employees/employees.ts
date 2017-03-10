import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataSerives } from '../../providers/data.serives';
import { BookingDataService } from '../../providers/booking-data.service';

@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html'
})
export class EmployeesPage {
  employees;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataService: DataSerives,
              private bookingDataService: BookingDataService) {
    dataService.getEmployees().subscribe(
      employees => this.employees = employees
    );
  }

  onSaveEmployee(employee) {
    this.bookingDataService.setEmployee(employee);
    console.log('employee', employee);
    this.navCtrl.pop();
  }
}
