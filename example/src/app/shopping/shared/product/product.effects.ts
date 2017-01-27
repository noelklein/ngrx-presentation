import 'rxjs/add/operator/observeOn';
import { Product } from '../models/product';
import { ProductCategory } from '../models/product-category';
import { ProductList } from '../models/product-list';
import { ProductListService } from './product-list.service';
import {
  CategoriesRetrievedAction,
  ProductListActionType,
  ProductListOptionsChangedAction,
  ProductRetrievedAction,
  ProductsRetrievedAction,
  RetrieveProductAction
} from './product.actions';
import { ProductEndpoint } from './product.endpoint';
import { ProductsResponse } from './product.responses';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { async } from 'rxjs/scheduler/async';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productEndpoint: ProductEndpoint,
    private productListService: ProductListService
  ) { }

  // .observeOn(async) ensures that this effect fires once the reducer already handled the action
  @Effect() filterByCategory() {
    return this.actions$
      .ofType(ProductListActionType.FilterByCategory)
      .map((productListOptions) => new ProductListOptionsChangedAction())
      .observeOn(async);
  }

  @Effect() changePage() {
    return this.actions$
      .ofType(ProductListActionType.ChangePage)
      .map((productListOptions) => new ProductListOptionsChangedAction())
      .observeOn(async);
  }

  @Effect() fetchProducts() {
    return this.actions$
      .ofType(ProductListActionType.ProductListOptionsChanged)
      .withLatestFrom(this.productListService.getProductList(), (payload, productList: ProductList) => productList)
      .switchMap((productList) => this.productEndpoint.fetchProducts(productList.options))
      .map((response: ProductsResponse) => new ProductsRetrievedAction(response));
  }

  @Effect() fetchCategories() {
    return this.actions$
      .ofType(ProductListActionType.RetrieveCategories)
      .switchMap(() => this.productEndpoint.fetchCategories())
      .map((response: ProductCategory[]) => new CategoriesRetrievedAction(response));
  }

  @Effect() fetchProduct() {
    return this.actions$
      .ofType(ProductListActionType.RetrieveProduct)
      .switchMap((action: RetrieveProductAction) => this.productEndpoint.fetchProduct(action.payload))
      .map((response: Product) => new ProductRetrievedAction(response));
  }

}
