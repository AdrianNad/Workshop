import {Component, Input, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserServiceService} from '../services/user-service.service';
import {AppComponent} from '../app.component';
import {RepairService} from '../services/repair.service';
import {OrderedRepairsComponent} from '../ordered-repairs/ordered-repairs.component';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  @Input() repair: Repair;
  name: string;
  surname: string;
  phone: number;
  licensePlate: string;
  services: WorkshopService;
  constructor(private userService: UserServiceService, private appComponent: AppComponent, private repairService: RepairService
    , private orderedRepairs: OrderedRepairsComponent) {
  }

  ngOnInit() {
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
          this.orderedRepairs.fillOrderedRepairs();
        });
  }

  repaired() {
    this.repair.doesCustomerKnow = true;
    this.repairService.updateRepair(this.repair).catch(() => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<User>) => {
          this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Wiadomość do klienta została wysłana'});
          this.orderedRepairs.fillOrderedRepairs();
        });
  }

  finish() {
    this.repair.status = 'repaired';
    this.repairService.updateRepair(this.repair).catch(() => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<User>) => {
          this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Naprawa została rozliczona'});
          this.orderedRepairs.fillOrderedRepairs();
        });
  }
}
