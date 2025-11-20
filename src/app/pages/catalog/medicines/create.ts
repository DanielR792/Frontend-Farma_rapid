// src/app/pages/catalog/medicines/create.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicineService } from '../../../services/medicine.service';
import { MedicineBase } from '../../../models/medicine';

@Component({
  selector: 'app-medicine-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class MedicineCreateComponent {
  isSaving = false;
  errorMessage = '';

  model: MedicineBase = {
    category: 1,       // por ahora un ID fijo; luego puedes hacer combo
    name: '',
    description: '',
    sale_price: 0,
  };

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) {}

  save(): void {
    this.isSaving = true;
    this.errorMessage = '';

    this.medicineService.create(this.model).subscribe({
      next: () => {
        this.isSaving = false;
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.error('Error al crear medicamento', err);
        this.errorMessage = 'Error al guardar. Revisa los datos.';
        this.isSaving = false;
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/catalog']);
  }
}
