// src/app/models/customer.ts

// Objeto que usamos en los formularios (crear / editar)
export interface CustomerI {
  id?: number;
  document: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

// Objeto que viene del backend cuando hacemos GET
export interface CustomerResponseI {
  id: number;
  document: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}
