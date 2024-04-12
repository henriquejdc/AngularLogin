import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCLient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpCLient.post<LoginResponse>('/login', { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem('token', value.token);
        sessionStorage.setItem('username', value.name);
      }
    ));
  }
}
