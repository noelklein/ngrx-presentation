import { dehydrate } from '../../../shared/dehydrate';
import { ProductList } from '../models/product-list';
import { ProductListState } from '../shopping.state';
import {
  CategoriesRetrievedAction,
  ChangePageAction,
  FilterByCategoryAction,
  ProductListActionType,
  ProductRetrievedAction,
  ProductsRetrievedAction
} from './product.actions';
import { Action } from '@ngrx/store';

export function productsReducer(state: ProductListState, action: Action): ProductListState {
  const productList = new ProductList(state);
  switch (action.type) {
    case ProductListActionType.ProductRetrieved:
      ProductRetrieved(productList, action as ProductRetrievedAction);
      break;
    case ProductListActionType.ProductsRetrieved:
      ProductsRetrieved(productList, action as ProductsRetrievedAction);
      break;
    case ProductListActionType.CategoriesRetrieved:
      CategoriesRetrieved(productList, action as CategoriesRetrievedAction);
      break;
    case ProductListActionType.FilterByCategory:
      FilterByCategory(productList, action as FilterByCategoryAction);
      break;
    case ProductListActionType.ChangePage:
      ChangePage(productList, action as ChangePageAction);
      break;
    default:
      return state;
  }
  return dehydrate<ProductListState>(productList);
}

function ProductRetrieved(productList: ProductList, action: ProductRetrievedAction) {
  productList.add(action.payload);
}

function ProductsRetrieved(productList: ProductList, action: ProductsRetrievedAction) {
  productList.setProducts(action.payload.results);
  productList.options.totalPages = action.payload.totalPages;
}

function CategoriesRetrieved(productList: ProductList, action: CategoriesRetrievedAction) {
  productList.setProductCategories(action.payload);
}

function FilterByCategory(productList: ProductList, action: FilterByCategoryAction) {
  productList.options.setCategoryFilter(action.payload);
}

function ChangePage(productList: ProductList, action: ChangePageAction) {
  productList.options.currentPage = action.payload;
}
