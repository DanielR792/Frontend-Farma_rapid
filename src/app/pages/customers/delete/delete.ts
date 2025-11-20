// src/app/pages/customers/delete/delete.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { CustomerResponseI } from '../../../models/customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers-delete',
  standalone: true,
  templateUrl: './delete.html',
  styleUrl: './delete.css',
  imports: [CommonModule], // 👈 AQUÍ ESTÁ LA CLAVE
})
export class DeleteComponent implements OnInit {
  loading = false;
  customerId!: number;
  customer?: CustomerResponseI;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) {
      this.router.navigate(['/customers']);
      return;
    }
    this.customerId = Number(idParam);
    this.loadCustomer();
  }

  loadCustomer() {
    this.loading = true;
    this.customerService.getOne(this.customerId).subscribe({
      next: (data) => {
        this.loading = false;
        this.customer = data;
      },
      error: (err) => {
        this.loading = false;
        console.error('Error cargando cliente', err);
        this.error = 'No se pudo cargar el cliente.';
      },
    });
  }

  confirmarEliminar() {
    if (!this.customerId) return;
    this.loading = true;
    this.customerService.delete(this.customerId).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/customers']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Error eliminando cliente', err);
        this.error = 'Ocurrió un error al eliminar el cliente.';
      },
    });
  }

  cancelar() {
    this.router.navigate(['/customers']);
  }
}
