// src/app/services/customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerI, CustomerResponseI } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // URL del backend Django
  private apiUrl = 'http://127.0.0.1:8000/api/customers/customers/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CustomerResponseI[]> {
    return this.http.get<CustomerResponseI[]>(this.apiUrl);
  }

  getOne(id: number): Observable<CustomerResponseI> {
    return this.http.get<CustomerResponseI>(`${this.apiUrl}${id}/`);
  }

  create(customer: CustomerI): Observable<CustomerResponseI> {
    return this.http.post<CustomerResponseI>(this.apiUrl, customer);
  }

  update(id: number, customer: CustomerI): Observable<CustomerResponseI> {
    return this.http.put<CustomerResponseI>(`${this.apiUrl}${id}/`, customer);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
