import {Component, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserServiceService} from '../services/user-service.service';
import {AppComponent} from '../app.component';
import {TokenStorageService} from '../services/token-storage.service';
import {WorkshopServiceService} from '../services/workshop-service.service';
import {RepairService} from '../services/repair.service';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.css']
})
export class ServiceCardsComponent implements OnInit {


  car: Car;
  cars: Car[];
  servicesToChoose: WorkshopService[];
  servicesChosen: WorkshopService[];

  constructor(private userService: UserServiceService, private appComponent: AppComponent, private tokenStorage: TokenStorageService
    , private workshopService: WorkshopServiceService, private repairService: RepairService) {
  }

  ngOnInit() {
    this.initCars();
    this.initServices();
    this.servicesChosen = [];
  }

  initCars() {
    this.userService.getCars(this.tokenStorage.getId()).catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<Car[]>) => {
          this.cars = response.body;
        });
  }

  initServices() {
    this.workshopService.getServices().catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<WorkshopService[]>) => {
          this.servicesToChoose = response.body;
        });
  }

  createRepairRequest() {
    if (this.servicesChosen.length !== 0) {
      const car = {userEmail: this.tokenStorage.getEmail(), workshopServices: this.servicesChosen, date: null, status: 'waiting'
        , price: null, licensePlate: this.car.licensePlate, doesCustomerKnow: false};
      this.repairService.createRepair(car).catch(error => {
        this.appComponent.messages.push({
          severity: 'error', summary: 'Błąd'
          , detail: 'Wystąpił błąd serwera'
        });
        return Observable.create(null);
      })
        .subscribe(
          (response: HttpResponse<any>) => {
            this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Wysłane zostało zgłoszenie'});
            this.servicesChosen = [];
            this.initServices();
          });
    } else {
      this.appComponent.messages.push({severity: 'error', summary: 'Błąd', detail: 'Proszę wybrać coś z oferty serwisu oraz samochód'});
    }
  }
}
