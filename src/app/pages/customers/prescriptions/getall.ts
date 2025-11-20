// src/app/pages/customers/prescriptions/getall.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionService } from '../../../services/prescription.service';
import { MedicinePrescriptionResponseI } from '../../../models/prescription'; // 👈 CAMBIADO

@Component({
  selector: 'app-prescriptions-getall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getall.html',
  styleUrl: './getall.css',
})
export class PrescriptionsGetallComponent implements OnInit {
  items: MedicinePrescriptionResponseI[] = [];
  isLoading = false;

  constructor(private prescriptionService: PrescriptionService) {}

  ngOnInit(): void {
    this.cargarRecetas();
  }

  cargarRecetas(): void {
    this.isLoading = true;
    this.prescriptionService.getAll().subscribe({
      next: (data) => {
        console.log('RECETAS DESDE API:', data);
        this.items = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar recetas', err);
        this.isLoading = false;
      },
    });
  }
}
