import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {UserServiceService} from '../services/user-service.service';
import {HttpResponse} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  isEmailEmpty: boolean;
  isPasswordEmpty: boolean;
  isFirstnameEmpty: boolean;
  isSurnameEmpty: boolean;
  email: String;
  password: String;
  firstname: String;
  surname: String;
  roles: SelectItem[];
  selectedRole: String;
  failMessage: boolean;

  constructor(private userService: UserServiceService, private appComponent: AppComponent, private router: Router) {
  }

  ngOnInit() {
    this.isEmailEmpty = false;
    this.isPasswordEmpty = false;
    this.isFirstnameEmpty = false;
    this.isSurnameEmpty = false;
    this.roles = [
      {label: 'customer', value: 'customer'},
      {label: 'employee', value: 'employee'},
    ];
  }

  register() {
    this.validateIfNotEmpty();
    if (!this.isEmailEmpty && !this.isPasswordEmpty && !this.isFirstnameEmpty && !this.isSurnameEmpty) {
    this.userService.register(this.email, this.password, this.firstname, this.surname, this.selectedRole).subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);
      });
    this.router.navigateByUrl('/main');
    this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Konto zostało utworzone, możesz się zalogować'});
    } else {
      this.failMessage = true;
    }
  }

  validateIfNotEmpty() {
    this.isEmailEmpty = !this.email;
    this.isPasswordEmpty = !this.password;
    this.isFirstnameEmpty = !this.firstname;
    this.isSurnameEmpty = !this.surname;
  }
}
