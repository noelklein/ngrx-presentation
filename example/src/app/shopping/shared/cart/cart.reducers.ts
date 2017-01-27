import { dehydrate } from '../../../shared/dehydrate';
import { Cart } from '../models/cart';
import { CartState } from '../shopping.state';
import { CartActionType } from './cart.actions';
import { Action } from '@ngrx/store';

export function cartReducer(cartState: CartState, action: Action): CartState {
  let cart;
  switch (action.type) {
    case CartActionType.AddProductToCard:

      cart = new Cart(cartState);
      cart.add(action.payload);
      return dehydrate<CartState>(cart);

    case CartActionType.RemoveProductFromCard:

      cart = new Cart(cartState);
      cart.remove(action.payload);
      return dehydrate<CartState>(cart);

    case CartActionType.RemoveAllItemsOfProductFromCard:

      cart = new Cart(cartState);
      cart.removeAllItems(action.payload);
      return dehydrate<CartState>(cart);

    default:
      return cartState;
  }
}
