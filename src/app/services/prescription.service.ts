// src/app/services/prescription.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicinePrescriptionResponseI } from '../models/prescription';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  // OJO: este URL va contra tu backend Django
  private baseUrl = 'http://127.0.0.1:8000/api/customers/medicines-prescriptions/';

  constructor(private http: HttpClient) {}

  // Obtener TODAS las recetas con sus medicamentos
  getAll(): Observable<MedicinePrescriptionResponseI[]> {
    return this.http.get<MedicinePrescriptionResponseI[]>(this.baseUrl);
  }
}
