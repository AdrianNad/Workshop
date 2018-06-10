import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:8080/';

  public getUsers(): Observable<any> {
    return this.http.get(this.userUrl + '/users');
  }


  public register(username: String, password: String, firstname: String, surname: String, role: String): Observable<HttpResponse<any>> {
    const user = {email: username, password: password, firstname: firstname, surname: surname, role: role};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/users/signUp', user,  { observe: 'response' });
  }
}
