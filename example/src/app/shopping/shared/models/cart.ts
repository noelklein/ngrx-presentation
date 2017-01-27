import { Product } from './product';
import { CartState } from '../shopping.state';
import { CartItem } from './cart-item';
export class Cart {

  private items: CartItem[];

  constructor(state: CartState) {
    this.items = state.items.map((item) => new CartItem(item.product, item.qty));
  }

  public getItemByProductId(productId: number): CartItem {
    return this.items.find((item) => item.product.productId === productId);
  }
  public isEmpty(): boolean {
    return this.getTotalCount() === 0;
  }
  public getTotalCount(): number {
    return this.items.reduce((memo, item) => memo + item.qty, 0);
  }
  public getTotalAmount(): number {
    return this.items.reduce((memo, item) => memo + item.totalAmount, 0);
  }
  public getItems(): CartItem[] {
    return this.items;
  }

  public add(product: Product) {
    const item = this.getItemByProductId(product.productId);
    if (item) {
      item.incrementQuantity();
    } else {
      this.items.push(new CartItem(product));
    }
  }
  public remove(product: Product): void {
    const item = this.getItemByProductId(product.productId);
    if (item) {
      if (item.qty > 1) {
        item.decrementQuantity();
      } else {
        this.removeAllItems(product);
      }
    }
  }
  public removeAllItems(product: Product): void {
    const item = this.getItemByProductId(product.productId);
    if (item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}
