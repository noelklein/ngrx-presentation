import { Product } from '../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sec-product-details',
  templateUrl: './product-details.component.html',

})
export class ProductDetailsComponent implements OnInit {

  public product: Product;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.forEach((data: { product: Product }) => this.product = data.product);
  }

}
