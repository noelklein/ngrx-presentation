import { Product } from '../models/product';
import { CategoryFilter, ProductCategory } from '../models/product-category';
import { ProductsResponse } from './product.responses';
import { Action } from '@ngrx/store';

export const ProductListActionType = {
  ChangePage: 'ProductListAction.ChangePage',
  ProductListOptionsChanged: 'ProductListAction.ListChanged',
  FilterByCategory: 'ProductListAction.FilterByCategory',
  ProductsRetrieved: 'ProductListAction.ProductsRetrieved',
  ProductRetrieved: 'ProductListAction.ProductRetrieved',
  CategoriesRetrieved: 'ProductListAction.CategoriesReceived',
  RetrieveCategories: 'ProductListAction.RetrieveCategories',
  RetrieveProduct: 'ProductListAction.RetrieveProduct',
};

export class ProductListOptionsChangedAction implements Action {
  public type = ProductListActionType.ProductListOptionsChanged;
};

export class ChangePageAction implements Action {
  public type = ProductListActionType.ChangePage;
  constructor(public payload: number) { }
}

export class FilterByCategoryAction implements Action {
  public type = ProductListActionType.FilterByCategory;
  constructor(public payload: CategoryFilter) { }
}

export class ProductsRetrievedAction implements Action {
  public type = ProductListActionType.ProductsRetrieved;
  constructor(public payload: ProductsResponse) { }
}

export class RetrieveProductAction implements Action {
  public type = ProductListActionType.RetrieveProduct;
  constructor(public payload: number) { }
}

export class ProductRetrievedAction implements Action {
  public type = ProductListActionType.ProductRetrieved;
  constructor(public payload: Product) { }
}

export class RetrieveCategoriesAction implements Action {
  public type = ProductListActionType.RetrieveCategories;
}

export class CategoriesRetrievedAction implements Action {
  public type = ProductListActionType.CategoriesRetrieved;
  constructor(public payload: ProductCategory[]) { }
}
