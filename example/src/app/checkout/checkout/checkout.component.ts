import { Address } from '../../customer/shared/models/address';
import { CheckoutService } from '../shared/checkout.service';
import { Order } from '../shared/models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sec-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  public order: Order;
  public orderIsProcessing: boolean;
  public billingAddress: Address;
  public shippingAddress: Address;

  constructor(
    private checkoutService: CheckoutService
  ) { }

  ngOnInit() {
    this.order = new Order();
    this.billingAddress = new Address();
    this.shippingAddress = new Address();
    this.orderIsProcessing = false;
  }

  public checkout() {
    this.checkoutService.placeOrder(this.order);
  }

}
