import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { barbearia, servico } from '../models/barbearia.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'http://localhost:3001/barbearias'

  read(): Observable<barbearia[]> {
    return this.http.get<barbearia[]>(this.baseUrl)
  }

  readByCpf(cpf: string): Observable<barbearia> {
    const url = `${this.baseUrl}?cpf=${cpf}`
    return this.http.get<barbearia>(url)
  }

  // updateServico(barbearia: barbearia): Observable<barbearia> {
  //   const url = `${this.baseUrl}/${cpf}`
  //   return this.http.post<barbearia>(this.baseUrl, barbearia)
  // }
}
