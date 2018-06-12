import {Component, Input, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MessageService} from '../services/message.service';
import {AppComponent} from '../app.component';
import {TokenStorageService} from '../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message-response',
  templateUrl: './message-response.component.html',
  styleUrls: ['./message-response.component.css']
})
export class MessageResponseComponent implements OnInit {
  isResponseEmpty: boolean;
  response: string;
  @Input() message: Message;
  constructor(private messageService: MessageService, private appComponent: AppComponent, private tokenStorage: TokenStorageService
  , private router: Router) {
  }

  ngOnInit() {
    this.message = this.messageService.message;
    this.isResponseEmpty = false;
  }

  send() {
    this.validateIfNotEmpty();
    if (this.isResponseEmpty !== true) {
      const message = {id: null, senderEmail: this.tokenStorage.getEmail(), senderRole: this.tokenStorage.getRole()
        , receiverEmail: this.message.senderEmail, receiverRole: this.message.senderRole, content: this.response, isResponded: true};
      this.messageService.createMessage(message).catch(error => {
        this.appComponent.messages.push({
          severity: 'error', summary: 'Błąd'
          , detail: 'Wystąpił błąd serwera'
        });
        return Observable.create(null);
      })
        .subscribe(
          (response: HttpResponse<any>) => {
            this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Wiadomość została wysłana'});
            this.router.navigateByUrl('/main');
          });
    }
  }

  validateIfNotEmpty() {
    this.isResponseEmpty = !this.response;
  }
}
