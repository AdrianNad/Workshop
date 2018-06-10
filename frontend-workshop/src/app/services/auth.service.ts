import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  attemptAuth(username: string, password: string): Observable<any> {
    const credentials = {email: username, password: password};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/login', credentials,  { observe: 'response' }).catch(error => {
      return Observable.throw(error.status);
    });
  }
}
