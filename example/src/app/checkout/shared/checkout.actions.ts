import { Order } from './models/order';
import { Action } from '@ngrx/store';

export const CheckoutType = {
  OrderPlaced: 'CheckoutAction.OrderPlaced'
};

export class OrderPlacedAction implements Action {
  public type = CheckoutType.OrderPlaced;
  constructor(public payload: Order) { }
}
