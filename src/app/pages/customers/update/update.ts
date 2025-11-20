// src/app/pages/customers/update/update.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { CustomerI, CustomerResponseI } from '../../../models/customer';

@Component({
  selector: 'app-customers-update',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class UpdateComponent implements OnInit {
  loading = false;
  generalError = '';
  validationErrors: Record<string, string[]> = {};
  customerId!: number;

  customer: CustomerI = {
    document: '',
    name: '',
    phone: '',
    email: '',
    address: '',
  };

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

  loadCustomer(): void {
    this.loading = true;
    this.customerService.getOne(this.customerId).subscribe({
      next: (data: CustomerResponseI) => {
        this.loading = false;
        this.customer = {
          document: data.document,
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
        };
      },
      error: (err) => {
        this.loading = false;
        console.error('Error cargando cliente', err);
        this.router.navigate(['/customers']);
      },
    });
  }

  onSubmit() {
    this.loading = true;
    this.generalError = '';
    this.validationErrors = {};

    this.customerService.update(this.customerId, this.customer).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/customers']);
      },
      error: (err) => {
        this.loading = false;
        if (err?.error && typeof err.error === 'object') {
          this.validationErrors = err.error;
          if (err.error.non_field_errors) {
            this.generalError = Array.isArray(err.error.non_field_errors)
              ? err.error.non_field_errors.join(' ')
              : String(err.error.non_field_errors);
          } else if (err.error.detail) {
            this.generalError = String(err.error.detail);
          }
        } else {
          this.generalError = 'Ocurrió un error al actualizar el cliente.';
          console.error('Error actualizando cliente', err);
        }
      },
    });
  }

  cancelar() {
    this.router.navigate(['/customers']);
  }
}
