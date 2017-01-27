import { Product } from '../models/product';
import { ShoppingState } from '../shopping.state';
import { ProductListService } from './product-list.service';
import { RetrieveCategoriesAction } from './product.actions';
import { ProductEndpoint } from './product.endpoint';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(
    private productsService: ProductListService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    // (+) converts string 'id' to a number
    const productId = +route.params['id'];
    return this.productsService.getProductById(productId);
  }
}

@Injectable()
export class ProductsResolve implements Resolve<void> {
  constructor(
    private productsService: ProductListService,
    private productEndpoint: ProductEndpoint,
    private store: Store<ShoppingState>
  ) { }

  resolve(route: ActivatedRouteSnapshot): void {
    // (+) converts string 'page' to a number
    const page = +route.params['page'] || 1;
    this.productsService.changePage(page);
    this.productsService.getProductCategories().take(1).subscribe((productCategories) => {
      if (productCategories.length === 0) {
        this.store.dispatch(new RetrieveCategoriesAction());
      }
    });
  }
}
