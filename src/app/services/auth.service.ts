import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUser, User } from '../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService  ) { }

  sigUp(body: CreateUser): Observable<User> {
    return this.apiService.post('register', body);
  }

  login(email: string, password: string): Observable<User> {
    return this.apiService.post('login', {email, password});
  }
}
