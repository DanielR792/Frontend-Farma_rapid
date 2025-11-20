// src/app/services/medicine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicineResponseI, MedicineBase } from '../models/medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  // ⚠️ Si tu API está en /api/catalog/medicines/, cambia la URL.
  private baseUrl = 'http://localhost:8000/api/medicines/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<MedicineResponseI[]> {
    return this.http.get<MedicineResponseI[]>(this.baseUrl);
  }

  getById(id: number): Observable<MedicineResponseI> {
    return this.http.get<MedicineResponseI>(`${this.baseUrl}${id}/`);
  }

  create(body: MedicineBase): Observable<MedicineResponseI> {
    return this.http.post<MedicineResponseI>(this.baseUrl, body);
  }

  update(id: number, body: MedicineBase): Observable<MedicineResponseI> {
    return this.http.put<MedicineResponseI>(`${this.baseUrl}${id}/`, body);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}/`);
  }
}
