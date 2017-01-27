export enum AddressType {
  ShippingAddress = 1,
  BillingAddress = 2
}

export class Address {
  public CustomerId: number;
  public AddressId: number;
  public AddressTypeId: AddressType;
  public AddressLine1: string;
  public AddressLine2: string;
  public City: string;
  public State: string;
  public PostalCode: string;
}
