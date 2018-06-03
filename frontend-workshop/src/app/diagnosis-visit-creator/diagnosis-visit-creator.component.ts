import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-diagnosis-visit-creator',
  templateUrl: './diagnosis-visit-creator.component.html',
  styleUrls: ['./diagnosis-visit-creator.component.css']
})
export class DiagnosisVisitCreatorComponent implements OnInit {

  licensePlate: String;
  licensePlates: SelectItem[];
  dates: SelectItem[];
  selectedDate: String;

  constructor(private router: Router, private appComponent: AppComponent ) {
  }

  ngOnInit() {
    this.dates = [
      {label: '21-06-2018', value: '21-06-2018'},
      {label: '21-06-2018', value: '21-06-2018'},
    ];
    this.licensePlates = [
      {label: 'EFLZSF', value: 'EFLZSF'},
      {label: 'ASDF', value: 'ASDF'},
    ];
  }

  createDiagnosisVisit() {
      this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Wizyta została zarejestrowana'});
      this.router.navigateByUrl('diagnosis/scheduler');
  }
}
