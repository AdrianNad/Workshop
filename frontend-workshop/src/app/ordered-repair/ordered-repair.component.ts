import {Component, Input, OnInit} from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {TokenStorageService} from '../services/token-storage.service';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';
import {RepairService} from '../services/repair.service';
import {OrderedRepairsComponent} from '../ordered-repairs/ordered-repairs.component';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-ordered-repair',
  templateUrl: './ordered-repair.component.html',
  styleUrls: ['./ordered-repair.component.css']
})
export class OrderedRepairComponent implements OnInit {

  @Input() repair: Repair;
  name: string;
  surname: string;
  phone: number;
  licensePlate: string;
  price: number;
  date: string;
  services: WorkshopService;
  constructor(private userService: UserServiceService, private tokenStorage: TokenStorageService, private appComponent: AppComponent
    , private repairService: RepairService, private orderedRepairs: OrderedRepairsComponent, private messageService: MessageService) {
  }

  ngOnInit() {
    this.date = new Date().toLocaleString();
    this.loadInformationAboutCustomer();
    this.licensePlate = this.repair.licensePlate;
  }

  loadInformationAboutCustomer() {
    this.userService.getUserInformation(this.repair.userEmail).catch(() => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<User>) => {
          console.log(response);
          this.name = response.body.firstname;
          this.surname = response.body.surname;
          this.phone = response.body.phone;
        });
  }

  cancel() {
    this.repair.status = 'canceled';
    this.repairService.updateRepair(this.repair).catch(() => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<User>) => {
          this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Wizyta została anulowana'});
          this.orderedRepairs.fillRepairsToAccept();
        });
  }

  accept() {
    if (this.price !== undefined && this.price !== null) {
      console.log(this.price);
      this.repair.status = 'ordered';
      this.repair.date = this.date;
      this.repair.price = this.price;
      this.repairService.updateRepair(this.repair).catch(() => {
        this.appComponent.messages.push({
          severity: 'error', summary: 'Błąd'
          , detail: 'Wystąpił błąd serwera'
        });
        return Observable.create(null);
      })
        .subscribe(
          (response: HttpResponse<User>) => {
            this.orderedRepairs.fillRepairsToAccept();
            this.sendMessageToCustomer();
          });
    } else {
      this.appComponent.messages.push({severity: 'error', summary: 'Błąd', detail: 'Uzupełnij cene'});
    }
  }

  sendMessageToCustomer() {
    const message = {
      id: null, senderEmail: this.tokenStorage.getEmail(), senderRole: this.tokenStorage.getRole()
      , receiverEmail: this.repair.userEmail, receiverRole: 'customer', content: 'Samochod ' + this.licensePlate + ' jest do odbioru'
      , isResponded: false
    };
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
        });
  }
}
