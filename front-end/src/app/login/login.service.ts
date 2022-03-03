import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'http://localhost:3001/login'

  getUsuarios(): Observable<login[]> {
    return this.http.get<login[]>(this.baseUrl)
  }

}
