import {Injectable} from '@angular/core';
import {LeftMenuComponentComponent} from '../left-menu-component/left-menu-component.component';

@Injectable()
export class TokenStorageService {

  constructor() {
  }

  private TOKEN_KEY = 'token';
  private ROLE_KEY = 'role';
  private EMAIL_KEY = 'email';

  signOut() {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.removeItem(this.ROLE_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public saveRole(role: string) {
    window.sessionStorage.removeItem(this.ROLE_KEY);
    window.sessionStorage.setItem(this.ROLE_KEY, role);
  }

  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public getRole(): string {
    return sessionStorage.getItem(this.ROLE_KEY);
  }

  public saveEmail(email: string) {
    window.sessionStorage.removeItem(this.EMAIL_KEY);
    window.sessionStorage.setItem(this.EMAIL_KEY, email);
  }

  public getEmail(): string {
    return sessionStorage.getItem(this.EMAIL_KEY);
  }
}
