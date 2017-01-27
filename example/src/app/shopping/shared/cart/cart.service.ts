import { Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { ShoppingState } from '../shopping.state';
import { AddProductAction, RemoveAllItemsOfProductAction, RemoveProductAction } from './cart.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  constructor(private store: Store<ShoppingState>) { }

  public getItems(): Observable<CartItem[]> {
    return this.store
      .select((s) => s.cart)
      .map((cartState) => new Cart(cartState).getItems());
  }
  public getTotalAmount(): Observable<number> {
    return this.store
      .select((s) => s.cart)
      .map((cartState) => new Cart(cartState).getTotalAmount());
  }
  public getTotalCount(): Observable<number> {
    return this.store
      .select((s) => s.cart)
      .map((cartState) => new Cart(cartState).getTotalCount());
  }
  public isEmpty(): Observable<boolean> {
    return this.store
      .select((s) => s.cart)
      .map((cartState) => new Cart(cartState).isEmpty());
  }

  public add(product: Product): void {
    this.store.dispatch(new AddProductAction(product));
  }
  public remove(product: Product): void {
    this.store.dispatch(new RemoveProductAction(product));
  }
  public removeAllItems(product: Product): void {
    this.store.dispatch(new RemoveAllItemsOfProductAction(product));
  }
}
