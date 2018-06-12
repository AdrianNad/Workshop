import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TokenStorageService} from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  private userUrl = 'http://localhost:8080/';

  getUserInformation(email: String): Observable<User> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('getUserInformation ::');
    return this.http.get('http://localhost:8080/users/' + email,  { headers: headers, observe: 'response' }).catch(error => {
      return Observable.throw(error.status);
    });
  }

  public register(username: String, password: String, firstname: String, surname: String, role: String
                  , phoneNumber: String): Observable<HttpResponse<any>> {
    const user = {email: username, password: password, firstname: firstname, surname: surname, role: role, phone: phoneNumber};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/users/signUp', user,  { observe: 'response' });
  }

  createCar(id: String, car: Car): Observable<any> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('createCar ::');
    return this.http.post('http://localhost:8080/users/' + id + '/cars', car,  { headers: headers, observe: 'response' }).catch(error => {
      return Observable.throw(error.status);
    });
  }

  getCars(id: String): Observable<Car[]> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('createCar ::');
    return this.http.get('http://localhost:8080/users/' + id + '/cars',  { headers: headers, observe: 'response' }).catch(error => {
      return Observable.throw(error.status);
    });
  }
}
