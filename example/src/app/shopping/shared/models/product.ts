import { ProductState } from '../shopping.state';

export class Product {
  public productId: number;
  public name: string;
  public description: string;
  public price: number;
  public productCategoryId: number;

  constructor(productState: ProductState) {
    this.productId = productState.productId;
    this.name = productState.name;
    this.description = productState.description;
    this.price = productState.price;
    this.productCategoryId = productState.productCategoryId;
  }
}
