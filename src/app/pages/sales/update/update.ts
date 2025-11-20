import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-update',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class SalesUpdateComponent implements OnInit {
  ngOnInit(): void {
    // cargar venta por id
  }
}