import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public login(user: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'auth', user);
  }

  public signUp(user: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'auth/signUp', user);
  }

  public forgotPassword(user: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'auth/forgotPassword', user);
  }
  public updatePassword(user: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'auth/updatePassword', user);
  }
  public updateUser(user: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'auth/updateUser', user);
  }
  public updateEmail(user: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'auth/updateEmail', user);
  }
  public getAudio(data: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'auth/getAudio', data);
  }
}
