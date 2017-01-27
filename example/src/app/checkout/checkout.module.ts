import { CustomerModule } from '../customer/customer.module';
import { ShoppingModule } from '../shopping/shopping.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutEndpoint } from './shared/checkout.endpoint';
import { CheckoutService } from './shared/checkout.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CustomerModule,
    ShoppingModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckoutComponent
      },
    ])
  ],
  providers: [
    CheckoutEndpoint,
    CheckoutService
  ]
})
export class CheckoutModule { }
