// src/app/models/sale.ts
export interface SaleI {
  id?: number;
  customer: number;      // id del cliente
  sale_date?: string;    // la pone Django automáticamente
  subtotal: number;
  total_taxes: number;
  total_amount: number;
}

export type SaleResponseI = SaleI;

