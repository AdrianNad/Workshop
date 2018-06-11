import {Component, OnInit} from '@angular/core';
import {WorkshopServiceService} from '../services/workshop-service.service';
import {HttpResponse} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {Observable} from 'rxjs/Observable';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-service-list-component',
  templateUrl: './service-list-component.component.html',
  styleUrls: ['./service-list-component.component.css']
})
export class ServiceListComponentComponent implements OnInit {

  isNameEmpty: boolean;
  isPriceEmpty: boolean;
  name: String;
  price: String;
  services: WorkshopService[];
  role: string;

  constructor(private workShopService: WorkshopServiceService, private appComponent: AppComponent
    , private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    this.role = this.tokenStorage.getRole();
    this.loadServices();
  }

  create() {
    this.validateIfNotEmpty();
    if (!this.isNameEmpty) {
      this.workShopService.createService(this.name, this.price).catch(error => {
        this.appComponent.messages.push({
          severity: 'error', summary: 'Błąd'
          , detail: 'Wystąpił błąd serwera'
        });
        return Observable.create(null);
      })
        .subscribe(
          (response: HttpResponse<any>) => {
            this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Usługa została dodana'});
            this.loadServices();
          });
    }
  }

  loadServices() {
    this.workShopService.getServices().catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<WorkshopService[]>) => {
          this.services = response.body;
        });
  }

  validateIfNotEmpty() {
    this.isNameEmpty = !this.name;
  }

  delete(i: WorkshopService) {
    this.workShopService.deleteService(i.id).catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<WorkshopService[]>) => {
          this.services = response.body;
        });
  }
  isAdmin() {
    return this.role === 'admin';
  }
}
