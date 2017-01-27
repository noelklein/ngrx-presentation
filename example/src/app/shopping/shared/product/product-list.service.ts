import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Product } from '../models/product';
import { CategoryFilter, CategorySelection, ProductCategory } from '../models/product-category';
import { ProductList } from '../models/product-list';
import { ShoppingState } from '../shopping.state';
import { ChangePageAction, FilterByCategoryAction } from './product.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class ProductListService {

  private productList: Observable<ProductList>;

  constructor(private store: Store<ShoppingState>) {
    this.productList = this.store
      .select((state) => new ProductList(state.productList));
  }

  public getPageNumbers(): Observable<number[]> {
    return this.productList
    .switchMap((productList) => Observable.range(1, productList.options.totalPages).toArray());
  }

  public getCurrentPage(): Observable<number> {
    return this.productList
      .map((productList) => productList.options.currentPage);
  }

  public getProductById(productId: number): Observable<Product> {
    return this.productList
      .switchMap((productList) => productList.getProducts())
      .find((product: Product) => product.productId === productId);
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.productList
      .map((productList) => productList.productCategories);
  }

  public getProductCategorySelection(): Observable<CategorySelection[]> {
    return this.productList.map((productList) => {
      return productList.productCategories.map((category) => {
        return {
          categoryId: category.productCategoryId,
          name: category.name,
          selected: productList.options.selectedProductCategories.indexOf(category.productCategoryId) !== -1
        };
      });
    });
  }

  public getProductList(): Observable<ProductList> {
    return this.productList;
  }

  public filterByCategory(categoryFilter: CategoryFilter) {
    return this.store.dispatch(new FilterByCategoryAction(categoryFilter));
  }

  public changePage(pageNumber: number): void {
    return this.store.dispatch(new ChangePageAction(pageNumber));
  }

}
