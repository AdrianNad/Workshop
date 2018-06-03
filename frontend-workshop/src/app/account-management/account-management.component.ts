import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  name: String;
  surname: String;

  constructor() {
  }

  ngOnInit() {
    this.name = 'name';
    this.surname = 'surname';
  }

}
