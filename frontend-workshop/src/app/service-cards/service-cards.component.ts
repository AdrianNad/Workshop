import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.css']
})
export class ServiceCardsComponent implements OnInit {


  licensePlate: String;
  licensePlates: SelectItem[];

  constructor() {
  }

  ngOnInit() {
    this.licensePlates = [
      {label: 'EFLZSF', value: 'EFLZSF'},
      {label: 'ASDF', value: 'ASDF'},
    ];
  }

  createRepairRequest() {
  }

}
