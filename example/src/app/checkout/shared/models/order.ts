import { Address, AddressType } from '../../../customer/shared/models/address';
import { Customer } from '../../../customer/shared/models/customer';

export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}

export class Order {
  public orderId: number;
  public customer: Customer;
  public billingAddress: Address;
  public shippingAddress: Address;
  public orderDetails: OrderItem[];

  constructor() {
    this.customer = new Customer();
    this.billingAddress = new Address();
    this.billingAddress.AddressTypeId = AddressType.BillingAddress;
    this.shippingAddress = new Address();
    this.shippingAddress.AddressTypeId = AddressType.ShippingAddress;
  }
}
