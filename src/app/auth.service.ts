import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl = 'https://dummyjson.com/auth/login'; 

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  isAuthenticated(){
    
    const token = localStorage.getItem('auth_token');
    return token ? true : false;
  }
}
