// src/app/pages/sales/create/create.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { SaleI } from '../../../models/sale';
import { SaleService } from '../../../services/sale.service';
import { CustomerResponseI } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-sales-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class SalesCreateComponent implements OnInit {
  sale: SaleI = {
    customer: 0,
    subtotal: 0,
    total_taxes: 0,
    total_amount: 0,
  };

  customers: CustomerResponseI[] = [];
  isSaving = false;

  constructor(
    private saleService: SaleService,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.getAll().subscribe({
      next: (data) => (this.customers = data),
      error: (err) => console.error('Error cargando clientes', err),
    });
  }

  recalcularTotal(): void {
    const subtotal = Number(this.sale.subtotal) || 0;
    const impuestos = Number(this.sale.total_taxes) || 0;
    this.sale.total_amount = subtotal + impuestos;
  }

  onSubmit(): void {
    if (!this.sale.customer) {
      alert('Selecciona un cliente.');
      return;
    }

    this.isSaving = true;

    const payload: SaleI = {
      customer: this.sale.customer,
      subtotal: Number(this.sale.subtotal),
      total_taxes: Number(this.sale.total_taxes),
      total_amount: Number(this.sale.total_amount),
    };

    this.saleService.create(payload).subscribe({
      next: () => {
        this.isSaving = false;
        this.router.navigate(['/sales']);
      },
      error: (err) => {
        console.error('Error al crear venta', err);
        this.isSaving = false;
        alert('Ocurrió un error al registrar la venta.');
      },
    });
  }
}
