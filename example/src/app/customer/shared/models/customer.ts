import { Address } from './address';

export class Customer {
  public customerId: number;
  public Email: string;
  public FirstName: string;
  public LastName: string;
  public PhoneNumber: string;
  public addresses: Address[];
}
