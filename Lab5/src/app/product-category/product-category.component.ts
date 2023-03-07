import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit{
  category = [...Categories];
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  visible = false;

  toggleCategoryList() {
    this.visible = !this.visible;
  }
}
