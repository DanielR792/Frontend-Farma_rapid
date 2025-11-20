// src/app/pages/sales/delete/delete.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-delete',
  standalone: true,
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class SalesDeleteComponent implements OnInit {
  ngOnInit(): void {
    // Luego aquí cargamos la venta por ID y pedimos confirmación
  }
}

