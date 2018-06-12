import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
  }

  isEmployeeOrAdmin() {
    const role = this.tokenStorage.getRole();
    if (role === null) {
      return false;
    } else if (role === 'customer') {
      return false;
    }
    return true;
  }
}
