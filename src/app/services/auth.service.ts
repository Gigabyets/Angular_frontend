import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(phone: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { phone, password });
  }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
