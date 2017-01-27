import { Product } from './product';
export class CartItem {

  public qty: number;
  public product: Product;
  public totalAmount: number;

  constructor(product: Product, qty = 1) {
    this.product = Object.assign({}, product);
    this.qty = qty;
    this.calculateTotalAmount();
  }

  public calculateTotalAmount(): void {
    this.totalAmount = this.qty * this.product.price;
  }
  public incrementQuantity(): void {
    this.qty += 1;
    this.calculateTotalAmount();
  }
  public decrementQuantity(): void {
    if (this.qty > 1) {
      this.qty -= 1;
      this.calculateTotalAmount();
    }
  }
}
