import { Component, OnInit } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RepairService} from '../services/repair.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-ordered-repairs',
  templateUrl: './ordered-repairs.component.html',
  styleUrls: ['./ordered-repairs.component.css']
})
export class OrderedRepairsComponent implements OnInit {

  repairsToAccept: Repair[];
  orderedRepairs: Repair[];
  constructor(private repairService: RepairService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.fillRepairsToAccept();
    this.fillOrderedRepairs();
  }

  fillRepairsToAccept() {
    this.repairService.getRepairsWaitingForAccept().catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<Repair[]>) => {
          this.repairsToAccept = response.body;
        });
  }

  fillOrderedRepairs() {
    this.repairService.getRepairsOrdered().catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Wystąpił błąd serwera'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<Repair[]>) => {
          this.orderedRepairs = response.body;
        });
  }

  reload() {
    this.fillRepairsToAccept();
    this.fillOrderedRepairs();
  }
}
