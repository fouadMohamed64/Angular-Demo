import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule , ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  selectedCategoryID: number = 1;
  categories: ICategory[];

  constructor() {
    this.categories = [
      { id: 1, name: 'Car' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Watch' },
      { id: 4, name: 'Labtop' },
    ]
  }
}
