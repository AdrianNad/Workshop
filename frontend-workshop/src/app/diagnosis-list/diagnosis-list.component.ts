import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.css']
})
export class DiagnosisListComponent implements OnInit {

  diagnosis: any[];
  constructor() { }

  ngOnInit() {
    this.diagnosis = [
      {
        car: 'saf'
      }
    ];
  }

}
