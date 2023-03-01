import { Component } from '@angular/core';
import { Categories } from '../categories';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  category = [...Categories];
  constructor() { }
  ngOnInit(): void {
  }
}
