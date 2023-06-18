import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUser, User } from '../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService  ) { }

  sigUp(body: CreateUser): Observable<{token: string; user: User}> {
    return this.apiService.post('register', body);
  }

  login(loginData: Object =  {email: '', password: ''}): Observable<{token: string; user: User}> {
    return this.apiService.post('login', {...loginData});
  }
}
