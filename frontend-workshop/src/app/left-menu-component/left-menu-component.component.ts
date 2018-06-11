import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-left-menu-component',
  templateUrl: './left-menu-component.component.html',
  styleUrls: ['./left-menu-component.component.css']
})
export class LeftMenuComponentComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) {
  }

  items: MenuItem[];
  role: string;

  ngOnInit() {
    this.role = this.tokenStorage.getRole();
    this.fillMenu();
  }
  fillMenu() {
    console.log(this.role);
    this.items = [
      {
        label: 'rejestracja',
        icon: 'fa-file-o',
        url: 'register',
        visible: this.role === null || this.role === 'admin'
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
        visible: this.role === 'customer'
      },
      {
        label: 'historia napraw',
        icon: 'fa-file-o',
        url: 'repairHistory',
        visible: this.role === 'customer'
      },
      {
        label: 'wiadomości',
        icon: 'fa-file-o',
        url: 'messages',
        visible: this.role !== null
      },
      {
        label: 'umów się na diagnoze',
        icon: 'fa-file-o',
        url: 'diagnosis/scheduler',
        visible: this.role === 'customer'
      },
      {
        label: 'Konto',
        icon: 'fa-file-o',
        url: 'account',
        visible: this.role === 'customer'
      },
      {
        label: 'Naprawy',
        icon: 'fa-file-o',
        url: 'orderedRepairs',
        visible: this.role === 'employee'
      },
      {
        label: 'Diagnozy',
        icon: 'fa-file-o',
        url: 'diagnosisList',
        visible: this.role === 'employee'
      }];
  }
}
