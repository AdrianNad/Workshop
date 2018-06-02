import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-response',
  templateUrl: './message-response.component.html',
  styleUrls: ['./message-response.component.css']
})
export class MessageResponseComponent implements OnInit {
  isResponseEmpty: boolean;
  response: String;

  constructor() {
  }

  ngOnInit() {
    this.isResponseEmpty = false;
  }

  send() {
    this.validateIfNotEmpty();
  }

  validateIfNotEmpty() {
    this.isResponseEmpty = !this.response;
  }
}
