import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isEmailEmpty: boolean;
  isMessageEmpty: boolean;
  email: String;
  message: String;
  types: SelectItem[];
  selectedType: String;

  constructor() {
  }

  ngOnInit() {
    this.isEmailEmpty = false;
    this.isMessageEmpty = false;
    this.types = [
      {label: 'Pytanie o usługę', value: 'service'},
      {label: 'Pytanie o naprawę', value: 'repair'},
    ];
  }

  send() {
    this.validateIfNotEmpty();
  }

  validateIfNotEmpty() {
    this.isEmailEmpty = !this.email;
    this.isMessageEmpty = !this.message;
  }
}
