import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-slider',
  templateUrl: 'date-slider.html'
})
export class DateSliderComponent implements OnInit{
  @Output() onChangeDate = new EventEmitter<Date>();
  currentDate: Date;
  mounth: number;
  dayNumber: number;
  dayName: number;

  constructor() {

  }

  ngOnInit() {
    this.currentDate = new Date();
    this.setValues();
  }

  setValues() {
    this.onChangeDate.emit(this.currentDate);
    this.dayNumber = this.currentDate.getDate();
    this.dayName = this.currentDate.getDay();
    this.mounth = this.currentDate.getMonth();
  }

  showPreviousDay() {
    const date = this.currentDate;
    this.currentDate = new Date(date.setDate(date.getDate() - 1));
    this.setValues();
  }

  showNextDay() {
    const date = this.currentDate;
    this.currentDate = new Date(date.setDate(date.getDate() + 1));
    this.setValues();
  }
}
