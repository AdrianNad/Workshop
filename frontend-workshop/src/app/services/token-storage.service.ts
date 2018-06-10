import { Injectable } from '@angular/core';
import {LeftMenuComponentComponent} from '../left-menu-component/left-menu-component.component';

@Injectable()
export class TokenStorageService {

  constructor() { }

  private TOKEN_KEY = 'token';
  private role: string;
  signOut() {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY,  token);
    console.log(token);
  }

  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public getRole(): string {
    return this.role;
  }
}
