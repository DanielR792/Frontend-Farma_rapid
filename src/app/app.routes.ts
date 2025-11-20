// src/app/app.routes.ts
import { Routes } from '@angular/router';

// ----- Catálogo -----
import { MedicinesComponent } from './pages/catalog/medicines/medicines.component';

// ----- Customers (clientes) -----
import { GetallComponent }   from './pages/customers/getall/getall';
import { CreateComponent }   from './pages/customers/create/create';
import { UpdateComponent }   from './pages/customers/update/update';
import { DeleteComponent }   from './pages/customers/delete/delete';

// ----- Prescriptions (recetas) -----
import { PrescriptionsGetallComponent } from './pages/customers/prescriptions/getall';

// ----- Sales (ventas) -----
import { SalesGetallComponent } from './pages/sales/getall/getall';
import { SalesCreateComponent } from './pages/sales/create/create';
import { SalesUpdateComponent } from './pages/sales/update/update';
import { SalesDeleteComponent } from './pages/sales/delete/delete';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full',
  },

  // ----- Catálogo -----
  {
    path: 'catalog',
    component: MedicinesComponent,
  },

  // ----- Customers -----
  {
    path: 'customers',
    component: GetallComponent,
  },
  {
    path: 'customers/new',
    component: CreateComponent,
  },
  {
    path: 'customers/edit/:id',
    component: UpdateComponent,
  },
  {
    path: 'customers/delete/:id',
    component: DeleteComponent,
  },

  // ----- Prescriptions (recetas) -----
  {
    path: 'prescriptions',
    component: PrescriptionsGetallComponent,
  },

  // ----- Sales -----
  {
    path: 'sales',
    component: SalesGetallComponent,
  },
  {
    path: 'sales/new',
    component: SalesCreateComponent,
  },
  {
    path: 'sales/edit/:id',
    component: SalesUpdateComponent,
  },
  {
    path: 'sales/delete/:id',
    component: SalesDeleteComponent,
  },
];
