// src/app/pages/customers/getall/getall.ts
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../../services/customer.service';
import { CustomerResponseI } from '../../../models/customer';

@Component({
  selector: 'app-customers-getall',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './getall.html',
  styleUrl: './getall.css',
})
export class GetallComponent implements OnInit {   // 👈 OJO AQUÍ
  customers: CustomerResponseI[] = [];
  isLoading = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.isLoading = true;

    this.customerService.getAll().subscribe({
      next: (data) => {
        console.log('CLIENTES DESDE API:', data);
        this.customers = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar clientes', err);
        this.isLoading = false;
      },
    });
  }
}



