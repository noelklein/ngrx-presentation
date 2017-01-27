import { CartService } from '../shared/cart/cart.service';
import { CartItem } from '../shared/models/cart-item';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sec-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  public items: Observable<CartItem[]>;
  public totalAmount: Observable<number>;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.items = this.cart.getItems();
    this.totalAmount = this.cart.getTotalAmount();
  }

  public incrementQuantity(item: CartItem): void {
    this.cart.add(item.product);
  }

  public decrementQuantity(item: CartItem): void {
    this.cart.remove(item.product);
  }

  public removeItem(item: CartItem): void {
    this.cart.removeAllItems(item.product);
  }
}
