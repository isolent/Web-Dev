// import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  ngOnInit(): void {
  }
  products = [...products];
  currentUrl: string | undefined;
  
  cur_category : string | undefined;
  share(url: string) {
    window.open('https://t.me/share/url?url=' + url, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
  constructor(private route: ActivatedRoute){
    this.route.url.subscribe(url=> {
      this.currentUrl = url.join('/');
      this.cur_category = this.currentUrl.split('/').pop();
    })
  }

  onNewTaskRemove(index: number){
    this.products = this.products.filter((x) => x.num !== index);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
