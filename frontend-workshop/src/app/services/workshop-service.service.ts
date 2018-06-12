import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';

@Injectable()
export class WorkshopServiceService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  createService(name: String, price: String): Observable<any> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    const credentials = {name: name, price: price};
    console.log('createService ::');
    return this.http.post('http://localhost:8080/services', credentials, {headers: headers, observe: 'response'}).catch(error => {
      return Observable.throw(error.status);
    });
  }

  getServices(): Observable<WorkshopService[]> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('getServices ::');
    if (headers.Authorization !== null && headers.Authorization.length !== 0) {
      return this.http.get('http://localhost:8080/services', {headers: headers, observe: 'response'}).catch(error => {
        return Observable.throw(error.status);
      });
    } else {
      return this.http.get('http://localhost:8080/services', {observe: 'response'}).catch(error => {
        return Observable.throw(error.status);
      });
    }
  }

  deleteService(id: String): Observable<any> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('deleteService ::');
    return this.http.delete('http://localhost:8080/services/' + id, {headers: headers, observe: 'response'}).catch(error => {
      return Observable.throw(error.status);
    });
  }
}
