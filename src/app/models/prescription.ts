// src/app/models/prescription.ts

import { CustomerResponseI } from './customer';

// Receta (Prescription) que viene del backend
export interface PrescriptionResponseI {
  id: number;
  customer: CustomerResponseI;  // viene anidado en el JSON
  issue_date: string;           // formato 'YYYY-MM-DD'
}

// Relación receta–medicina (MedicinePrescription)
export interface MedicinePrescriptionResponseI {
  id: number;
  prescription: PrescriptionResponseI; // objeto con customer y issue_date
  medicine: string;                    // viene como texto (StringRelatedField)
  quantity: number;
}

