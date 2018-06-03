import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnosis-scheduler',
  templateUrl: './diagnosis-scheduler.component.html',
  styleUrls: ['./diagnosis-scheduler.component.css']
})
export class DiagnosisSchedulerComponent implements OnInit {

  events: any[];

  headerConfig: any;

  businessHours: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.headerConfig = {
      left: 'prev,next, today',
      center: 'title',
      right: ''
    };
    this.businessHours = [ // specify an array instead
      {
        dow: [ 1, 2, 3, 4 , 5 ], // Monday, Tuesday, Wednesday
        start: '10:00', // 8am
        end: '18:00' // 6pm
      },
      {
        dow: [ 6 ], // Thursday, Friday
        start: '10:00', // 10am
        end: '15:00' // 4pm
      }
    ];
    this.events = [
      {
        'title': 'All Day Event',
        'start': '2018-06-06T16:00:00',
        'end': '2018-06-06T17:00:00'
      },
      {
        'title': 'All Day Event',
        'start': '2018-06-06T15:00:00'
      },
      {
        'title': 'All Day Event',
        'start': '2018-06-06T17:00:00'
      },
      {
        'title': 'All Day Event',
        'start': '2018-06-06T18:00:00'
      },
      {
        'title': 'All Day Event',
        'start': '2018-06-06T19:00:00'
      },
      {
        'title': 'All Day Event',
        'start': '2018-06-06T20:00:00'
      },
      {
        'title': 'Long Event',
        'start': '2016-01-07',
        'end': '2016-01-10'
      }
    ];
  }

  selectDay(date): void {
    console.log(date);
    this.router.navigateByUrl('diagnosis/creator');
  }
}
