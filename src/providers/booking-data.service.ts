import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingDataService {
  employee;
  service;
  time;
  date;

  getEmployee() {
    console.log('getEmployee', this.employee);
    return this.employee;
  }

  setEmployee(employee) {
    this.employee = employee;
  }

  removeEmployee() {
    this.employee = null;
  }

  getService() {
    console.log('getService', this.service);
    return this.service;
  }

  setService(service) {
    this.service = service;
  }

  removeService() {
    this.service = null;
  }

  getDate() {
    console.log('getDate', this.date);
    return this.date;
  }

  setDate(selectedDate: Date, time: string) {

    this.date = {'selectedDate': selectedDate, 'time': time};
  }

  removeDate() {
    this.date = null;
  }


}
