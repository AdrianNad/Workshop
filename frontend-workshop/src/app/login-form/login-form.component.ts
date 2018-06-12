import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {Observable} from 'rxjs/Observable';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  isUsernameEmpty: boolean;
  isPasswordEmpty: boolean;
  username: string;
  password: string;

  constructor(private authService: AuthService, private token: TokenStorageService, private router: Router
    , private appComponent: AppComponent, private userService: UserServiceService) {
  }

  ngOnInit() {
    this.isUsernameEmpty = false;
    this.isPasswordEmpty = false;
  }

  login(): void {
    this.isUsernameEmpty = !this.username;
    this.isPasswordEmpty = !this.password;
    this.authService.attemptAuth(this.username, this.password).catch(error => {
      this.appComponent.messages.push({
        severity: 'error', summary: 'Błąd'
        , detail: 'Podałeś złą nazwe użytkownika lub hasło, spróbuj ponownie'
      });
      return Observable.create(null);
    })
      .subscribe(
        (response: HttpResponse<any>) => {
          this.token.saveToken(response.headers.get('Authorization'));
          this.saveUserInfo(this.username);
          this.router.navigateByUrl('/main');
          this.appComponent.messages.push({severity: 'success', summary: 'Sukces', detail: 'Zostałeś zalogowany'});
        }
      );
  }

  saveUserInfo(email: string) {
      this.userService.getUserInformation(email).catch(() => {
        this.appComponent.messages.push({
          severity: 'error', summary: 'Błąd'
          , detail: 'Wystąpił błąd serwera'
        });
        return Observable.create(null);
      })
        .subscribe(
          (response: HttpResponse<User>) => {
            console.log(response);
            this.token.saveRole(response.body.role);
            this.token.saveEmail(response.body.email);
            this.token.saveId(response.body.id);
            this.appComponent.refresh();
          });
  }
}
