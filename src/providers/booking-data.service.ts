import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingDataService {
  employee;
  service;
  time;

  getEmployee() {
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
    console.log('setService', this.service);
    this.service = service;
  }

  removeService() {
    this.service = null;
  }

  getTime() {
    return this.time;
  }

  setTime(time) {
    this.time = time;
  }

  removeTime(time) {
    this.time = null;
  }


}
