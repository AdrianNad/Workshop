import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';

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

  constructor() {
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
  }

  validateIfNotEmpty() {
    this.isEmailEmpty = !this.email;
    this.isPasswordEmpty = !this.password;
    this.isFirstnameEmpty = !this.firstname;
    this.isSurnameEmpty = !this.surname;
  }

}
