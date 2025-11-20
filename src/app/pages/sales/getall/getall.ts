// src/app/pages/sales/getall/getall.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sales-getall',
  standalone: true,
  imports: [CommonModule, RouterModule],   // 👈 aquí habilitamos routerLink
  templateUrl: './getall.html',
  styleUrl: './getall.css',
})
export class SalesGetallComponent implements OnInit {
  items: any[] = [];
  isLoading = false;

  constructor() {}

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas(): void {
    this.isLoading = true;

    // Datos de ejemplo mientras conectas el backend
    setTimeout(() => {
      this.items = [
        {
          id: 1,
          customer: 1,
          sale_date: new Date().toISOString(),
          subtotal: 5500,
          total_taxes: 1045,
          total_amount: 6545,
        },
        {
          id: 2,
          customer: 2,
          sale_date: new Date().toISOString(),
          subtotal: 10000,
          total_taxes: 1900,
          total_amount: 11900,
        },
      ];
      this.isLoading = false;
    }, 500);
  }
}
