import { CartService } from '../shared/cart/cart.service';
import { Product } from '../shared/models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sec-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',

})
export class ProductThumbnailComponent {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  public addToCart() {
    this.cartService.add(this.product);
  }

}
