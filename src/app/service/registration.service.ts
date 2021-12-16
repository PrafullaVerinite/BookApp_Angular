import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../entity/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl = 'http://localhost:8080/registration'
  getRegisterUser() {
    // alert("service")
    return this.http.get<Registration>(this.baseUrl + '/getAllRegistration')
  }
  
  registeruser(registrations: Registration): Observable<any> {
    return this.http.post(this.baseUrl + '/saveRegistrations', registrations);
  }

  deleteUser(registerId: number) {
    // alert(registerId)
    return this.http.delete(this.baseUrl + '/deleteRegistration/' + registerId);
  }

  updateUser(registeruser: Registration): Observable<any> {
    // alert(registeruser.registerId);
    return this.http.put(this.baseUrl + '/updateRegistration/' + registeruser.registerId, registeruser);
  }

  getUserById(registrationId: number): Observable<any> {
    // alert(registrationId);
    return this.http.get(this.baseUrl + '/getRegistration/' + registrationId,);
  }

  constructor(private http: HttpClient) { }
}
