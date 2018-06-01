import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  isUsernameEmpty: boolean;
  isPasswordEmpty: boolean;
  username: String;
  password: String;

  constructor() { }

  ngOnInit() {
    this.isUsernameEmpty = false;
    this.isPasswordEmpty = false;
  }

  logIn() {
    this.isUsernameEmpty = !this.username;
    this.isPasswordEmpty = !this.password;
  }
}
