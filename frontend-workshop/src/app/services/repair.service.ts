import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RepairService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  createRepair(repair: Repair): Observable<any> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('createRepair ::');
    return this.http.post('http://localhost:8080/repairs', repair, {headers: headers, observe: 'response'}).catch(error => {
      return Observable.throw(error.status);
    });
  }

  getRepairsWaitingForAccept(): Observable<Repair[]> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('getRepairsWaitingForAccept ::');
    return this.http.get('http://localhost:8080/repairs/status/waiting',  { headers: headers, observe: 'response' }).catch(error => {
      return Observable.throw(error.status);
    });
  }
  getRepairsOrdered(): Observable<Repair[]> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('getRepairsWaitingForAccept ::');
    return this.http.get('http://localhost:8080/repairs/status/ordered',  { headers: headers, observe: 'response' }).catch(error => {
      return Observable.throw(error.status);
    });
  }
  getRepairsForUser(userEmail: string): Observable<Repair[]> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('getRepairsForUser ::');
    return this.http.get('http://localhost:8080/repairs/user/' + userEmail,  { headers: headers, observe: 'response' }).catch(error => {
      return Observable.throw(error.status);
    });
  }
  updateRepair(repair: Repair): Observable<Repair> {
    console.log(repair);
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('updateRepair ::');
    return this.http.put('http://localhost:8080/repairs', repair, {headers: headers, observe: 'response'}).catch(error => {
      return Observable.throw(error.status);
    });
  }
}
