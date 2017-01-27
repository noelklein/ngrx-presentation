import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import { Order } from './models/order';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CheckoutEndpoint {

  constructor(private http: Http) { }

  public saveOrder(order: Order): Observable<Order> {
    const newOrder = {
      CustomerId: order.customer.customerId,
      Email: order.customer.Email,
      FirstName: order.customer.FirstName,
      LastName: order.customer.LastName,
      PhoneNumber: order.customer.PhoneNumber,
      OrderDate: new Date(),
      LastModifiedDate: new Date(),
      OrderDetails: order.orderDetails
    };
    return this.http
      .post(`${environment.endpoint}/orders`, JSON.stringify(newOrder), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((response) => {
        order.orderId = (response.json() as Order).orderId;
        return order;
      });
  }

}
