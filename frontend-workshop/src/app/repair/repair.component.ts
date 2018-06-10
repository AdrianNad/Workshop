import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  licensePlate: String;
  services: any[];
  constructor() {
  }

  ngOnInit() {
    this.licensePlate = 'ha';
    this.services = [
      {
        value: 'haha'
      },
      {
        value: 'hahaa'
      }
    ];
  }

  refresh(): void {
    window.location.reload();
  }
}
