import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MessageService} from '../services/message.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isEmailEmpty: boolean;
  isMessageEmpty: boolean;
  email: string;
  message: string;
  types: SelectItem[];
  selectedType: string;

  constructor(private messageService: MessageService, private appComponent: AppComponent, private router: Router
  , private tokenStorage: TokenStorageService) {
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
    if (this.isMessageEmpty !== null && this.isEmailEmpty !== null) {
      const message = {id: null, senderEmail: this.getEmail(), senderRole: this.tokenStorage.getRole(), receiverEmail: null
        , receiverRole: 'employee', content: this.message, isResponded: false};
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

  getEmail(): string {
    if(this.tokenStorage.getEmail() === null && this.tokenStorage.getEmail() === '') {
      return this.email;
    } else {
      return this.tokenStorage.getEmail();
    }
  }
  isLoggedIn() {
    return this.tokenStorage.getRole() !== null;
  }
  validateIfNotEmpty() {
    this.isEmailEmpty = !this.email;
    this.isMessageEmpty = !this.message;
  }
}
