// src/app/models/medicine.ts
export interface MedicineBase {
  category: number;         // ID de categoría
  name: string;
  description?: string;
  sale_price: number;
}

export interface MedicineResponseI extends MedicineBase {
  id: number;
}
