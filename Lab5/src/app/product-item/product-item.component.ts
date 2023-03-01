import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';
// import ()

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  ngOnInit(): void {}


  @Input() product: Product;
  @Input() cur_category: string | undefined;
  @Output() remove = new EventEmitter();
  visible = true;

  constructor() {
    this.product = new Product;
  }
  removeItem() {
    this.remove.emit(this.product.id);
  }
  share(url: string) {
    window.open('https://t.me/share/url?url=' + url, '_blank');
  }
}