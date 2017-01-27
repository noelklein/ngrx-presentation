import { AuthorizationModule } from '../authorization/authorization.module';
import { ProductEndpoint } from './shared/product/product.endpoint';
import { LimitCharsPipe } from '../shared/pipes/limit-chars.pipe';
import { PadLeftPipe } from '../shared/pipes/pad-left.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { cartReducer } from './shared/cart/cart.reducers';
import { CartService } from './shared/cart/cart.service';
import { ProductListService } from './shared/product/product-list.service';
import { ProductsEffects } from './shared/product/product.effects';
import { productsReducer } from './shared/product/product.reducers';
import { ProductResolve, ProductsResolve } from './shared/product/product.resolve';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { combineReducers, Store } from '@ngrx/store';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductThumbnailComponent,
    ShoppingCartComponent,
    PadLeftPipe,
    LimitCharsPipe,
  ],
  imports: [
    CommonModule,
    HttpModule,
    AuthorizationModule,
    EffectsModule.run(ProductsEffects),
    RouterModule.forChild([ // routes relative to 'shopping/'
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
        resolve: {
          product: ProductResolve
        }
      },
      { path: 'cart', component: ShoppingCartComponent },
      {
        path: '',
        component: ProductListComponent,
        resolve: {
          productList: ProductsResolve
        }
      }
    ])
  ],
  providers: [
    ProductListService,
    ProductResolve,
    ProductsResolve,
    CartService,
    ProductEndpoint
  ]
})
export class ShoppingModule {
  constructor(store: Store<{}>) {
    store.replaceReducer(combineReducers({ cart: cartReducer, productList: productsReducer }));
  }
}
