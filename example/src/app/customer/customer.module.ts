import { CommonModule } from '@angular/common';
import { CustomerEndpoint } from './shared/customer/customer.endpoint';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    CustomerEndpoint
  ]
})
export class CustomerModule { }
