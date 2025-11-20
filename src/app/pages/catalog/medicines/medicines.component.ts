// src/app/pages/catalog/medicines/medicines.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';            // 👈 nuevo import
import { MedicineService } from '../../../services/medicine.service';
import { MedicineResponseI } from '../../../models/medicine';

@Component({
  selector: 'app-medicines',
  standalone: true,
  imports: [CommonModule, RouterModule],                   // 👈 añade RouterModule aquí
  templateUrl: './medicines.component.html',
  styleUrl: './medicines.component.css',
})
export class MedicinesComponent implements OnInit {
  medicines: MedicineResponseI[] = [];
  isLoading = false;

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.cargarMedicinas();
  }

  cargarMedicinas(): void {
    this.isLoading = true;

    this.medicineService.getAll().subscribe({
      next: (data) => {
        console.log('MEDICINAS DESDE API:', data);
        this.medicines = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar medicinas', err);
        this.isLoading = false;
      },
    });
  }
}
