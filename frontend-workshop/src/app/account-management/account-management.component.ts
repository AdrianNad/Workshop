import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  licensePlate: String;
  brand: String;
  year: Number;
  isLicensePlateEmpty: boolean;
  isYearEmpty: boolean;
  isBrandEmpty: boolean;
  user: User;
  cars: Car[];

  constructor(private userService: UserServiceService, private appComponent: AppComponent,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    this.loadUserInformation();
  }

  loadUserInformation() {
    this.userService.getUserInformation(this.tokenStorage.getEmail()).catch(() => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<any>) => {
          console.log(response);
          this.user = response.body;
          this.loadCars();
        });
  }

  addCar() {
    this.validateIfNotEmpty();
    if (!this.isBrandEmpty && !this.isLicensePlateEmpty) {
      const car: any = {
        userId: this.user.id,
        brand: this.brand,
        licensePlate: this.licensePlate,
        year: this.year
      };
      this.userService.createCar(this.user.id, car).catch(error => {
        this.appComponent.messages.push({
          severity: 'error', summary: 'Błąd'
          , detail: 'Wystąpił błąd serwera'
        });
        return Observable.create(null);
      })
        .subscribe(
          (response: HttpResponse<any>) => {
            this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Samochód został dodany do twojego konta'});
            this.loadCars();
          });
    }
  }

  validateIfNotEmpty() {
    this.isBrandEmpty = !this.brand;
    this.isLicensePlateEmpty = !this.licensePlate;
  }

  loadCars() {
    this.userService.getCars(this.user.id).catch(error => {
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
}
