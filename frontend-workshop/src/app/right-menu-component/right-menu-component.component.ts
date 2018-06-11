import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-right-menu-component',
  templateUrl: './right-menu-component.component.html',
  styleUrls: ['./right-menu-component.component.css']
})
export class RightMenuComponentComponent implements OnInit {

  role: string;

  constructor(private tokenStorage: TokenStorageService, private appComponent: AppComponent, private router: Router) {
  }

  ngOnInit() {
    this.role = this.tokenStorage.getRole();
  }

  isLoggedIn() {
    return this.role !== null;
  }

  logout() {
    this.tokenStorage.signOut();
    this.appComponent.refresh();
    this.router.navigateByUrl('/main');
  }
}
