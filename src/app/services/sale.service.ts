// src/app/services/sale.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleI, SaleResponseI } from '../models/sale';

@Injectable({ providedIn: 'root' })
export class SaleService {
  // coincide con tu backend: /api/sales/sales/
  private baseUrl = 'http://127.0.0.1:8000/api/sales/sales/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<SaleResponseI[]> {
    return this.http.get<SaleResponseI[]>(this.baseUrl);
  }

  create(sale: SaleI): Observable<SaleResponseI> {
    return this.http.post<SaleResponseI>(this.baseUrl, sale);
  }

  // (si quieres después puedes agregar update/delete)
}
