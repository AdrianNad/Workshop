import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import {TokenStorageService} from '../services/token-storage.service';
import {AppComponent} from '../app.component';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  constructor(private messageService: MessageService, private tokenStorage: TokenStorageService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.fillMessages();
  }

  fillMessages() {
    this.messageService.getMessagesForEmailOrRole(this.tokenStorage.getEmail(), this.tokenStorage.getRole()).catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<Message[]>) => {
          this.messages = response.body;
        });
  }
}
