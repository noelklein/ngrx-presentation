import { Product } from '../models/product';
import { Action } from '@ngrx/store';

export const CartActionType = {
  RemoveProductFromCard: 'RemoveProductFromCard',
  RemoveAllItemsOfProductFromCard: 'RemoveAllItemsOfProductFromCard',
  AddProductToCard: 'AddProductToCard'
};

export class AddProductAction implements Action {
  public type = CartActionType.AddProductToCard;
  constructor(public payload: Product) { };
}

export class RemoveProductAction implements Action {
  public type = CartActionType.RemoveProductFromCard;
  constructor(public payload: Product) { };
}

export class RemoveAllItemsOfProductAction implements Action {
  public type = CartActionType.RemoveAllItemsOfProductFromCard;
  constructor(public payload: Product) { };
}
