import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Address } from '../models/address';
import { Customer } from '../models/customer';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerEndpoint {

  constructor(private http: Http) { }

  public fetchCustomerByEmail(email: string): Observable<Customer> {
    return this.http
      .get(`${environment.endpoint}/customers`)
      .switchMap((response) => response.json() as Customer[])
      .find((customer) => customer.Email === email);
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.http
      .post(`${environment.endpoint}/customers`, JSON.stringify(customer), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((response) => response.json() as Customer);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http
      .put(`${environment.endpoint}/customers/${customer.customerId}`, JSON.stringify(customer), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((response) => response.json() as Customer);
  }

  public saveAddressForCustomer(address: Address, customer: Customer): Observable<Address> {
    address.CustomerId = customer.customerId;
    return this.http
      .put(`${environment.endpoint}/customers/${address.CustomerId}/addresses`, JSON.stringify(address), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((response) => response.json() as Address);
  }

}
