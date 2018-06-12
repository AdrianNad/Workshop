import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../services/message.service';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';
import {MessagesComponent} from '../messages/messages.component';

@Component({
  selector: 'app-contact-message',
  templateUrl: './contact-message.component.html',
  styleUrls: ['./contact-message.component.css']
})
export class ContactMessageComponent implements OnInit, OnDestroy {

  @Input() message: Message;

  constructor(private messageService: MessageService, private appComponent: AppComponent, private messageComponent: MessagesComponent) {
  }

  ngOnInit() {
    console.log(this.message);
  }

  response() {

  }

  ngOnDestroy() {
    this.messageService.message = this.message;
  }

  markAsResponded() {
    //TODO mark as responded there is some bug
    this.message.isResponded = true;
    this.messageService.createMessage(this.message).catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<any>) => {
          this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Wiadomość została oznaczona jako przeczytana'});
          this.messageComponent.fillMessages();
        });
  }
}
