import { CustomerEndpoint } from '../../customer/shared/customer/customer.endpoint';
import { CartService } from '../../shopping/shared/cart/cart.service';
import { CartItem } from '../../shopping/shared/models/cart-item';
import { OrderPlacedAction } from './checkout.actions';
import { CheckoutEndpoint } from './checkout.endpoint';
import { Order } from './models/order';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutService {
  constructor(
    private checkoutEndpoint: CheckoutEndpoint,
    private customerEndpoint: CustomerEndpoint,
    private cartService: CartService
  ) { }

  public placeOrder(order: Order) {
    this.customerEndpoint
      .createCustomer(order.customer)
      .switchMap((customer) => {
        order.customer.customerId = customer.customerId;
        order.customer.addresses = [order.billingAddress, order.shippingAddress];
        return this.customerEndpoint.updateCustomer(order.customer);
      })
      .withLatestFrom(this.cartService.getItems())
      .map(([{}, cartItems]) => {
        order.orderDetails = cartItems.map((cartItem: CartItem) => {
          return {
            productId: cartItem.product.productId,
            quantity: cartItem.qty,
            price: cartItem.product.price
          };
        });
      })
      .switchMap(() => this.checkoutEndpoint.saveOrder(order))
      .subscribe((placedOrder) => new OrderPlacedAction(placedOrder));
  }
}
