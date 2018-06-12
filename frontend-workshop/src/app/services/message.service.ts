import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {

  public message: Message;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  createMessage(message: Message): Observable<any> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    console.log('createService ::');
    return this.http.post('http://localhost:8080/messages', message, {headers: headers, observe: 'response'}).catch(error => {
      return Observable.throw(error.status);
    });
  }

  getMessagesForEmailOrRole(email: string,  role: string): Observable<Message[]> {
    const headers = {Authorization: this.tokenStorage.getToken()};
    const params = new HttpParams().set('role', role).set('email', email);
    console.log('getMessagesForEmailOrRole ::');
    return this.http.get('http://localhost:8080/messages', {headers: headers, params: params, observe: 'response'}).catch(error => {
      return Observable.throw(error.status);
    });
  }
}
