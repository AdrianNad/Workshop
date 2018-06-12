import { Component, OnInit } from '@angular/core';
import {RepairService} from '../services/repair.service';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-repair-history',
  templateUrl: './repair-history.component.html',
  styleUrls: ['./repair-history.component.css']
})
export class RepairHistoryComponent implements OnInit {

  repairs: Repair[];

  constructor(private repairService: RepairService, private appComponent: AppComponent, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fillRepairsForCustomer();
  }

  fillRepairsForCustomer() {
    this.repairService.getRepairsForUser(this.tokenStorage.getEmail()).catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<Repair[]>) => {
          this.repairs = response.body;
        });
  }
}
