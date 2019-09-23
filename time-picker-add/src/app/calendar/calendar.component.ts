import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TimePickerComponent } from '../time-picker/time-picker.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements AfterViewInit {
  calendarEntry: any;

  @ViewChild('timepicker', null) timePicker: TimePickerComponent;

  constructor() { 
    this.calendarEntry = {
      startTime: '22:14:14'
    };
  }

ngAfterViewInit() {
  console.log('Ausgewählte Zeit: ' + this.timePicker.getTime());
}

/* ohne Verwendung von two way binding */
onTimeChanged(time) {
  console.log("Time changed: ", time);
  this.calendarEntry.startTime = time;
}

}
