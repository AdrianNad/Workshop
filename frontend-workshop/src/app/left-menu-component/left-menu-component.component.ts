import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-left-menu-component',
  templateUrl: './left-menu-component.component.html',
  styleUrls: ['./left-menu-component.component.css']
})
export class LeftMenuComponentComponent implements OnInit {

  constructor() {
  }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'rejestracja',
        icon: 'fa-file-o',
        url: 'register',
      },
      {
        label: 'Oferta',
        icon: 'fa-file-o',
        url: 'services/list',
      },
      {
        label: 'Wybierz usługę',
        icon: 'fa-file-o',
        url: 'services/cards',
      },
      {
        label: 'historia napraw',
        icon: 'fa-file-o',
        url: 'repairHistory',
      },
      {
        label: 'wiadomości',
        icon: 'fa-file-o',
        url: 'messages',
      },
      {
        label: 'umów się na diagnoze',
        icon: 'fa-file-o',
        url: 'diagnosis/scheduler',
      }];
  }
}
