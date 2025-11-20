// src/app/pages/customers/create/create.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { CustomerI } from '../../../models/customer';

@Component({
  selector: 'app-customers-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class CreateComponent {
  loading = false;
  generalError = '';
  validationErrors: Record<string, string[]> = {};

  customer: CustomerI = {
    document: '',
    name: '',
    phone: '',
    email: '',
    address: '',
  };

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  onSubmit() {
    this.loading = true;
    this.generalError = '';
    this.validationErrors = {};

    this.customerService.create(this.customer).subscribe({
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
          }
        } else {
          this.generalError = 'Ocurrió un error al crear el cliente.';
          console.error('Error creando cliente', err);
        }
      },
    });
  }

  cancelar() {
    this.router.navigate(['/customers']);
  }
}


