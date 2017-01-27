import { AuthenticationModule } from '../authentication/authentication.module';
import { IsAuthenticated } from '../authentication/shared/authentication.guard';
import { CaptureAuthenticationTokenResolve } from '../authentication/shared/authentication.resolve';
import { AuthorizationModule } from '../authorization/authorization.module';
import { HasPermissionsForRoute } from '../authorization/shared/HasPermissionsForRoute.guard';
import { CheckoutModule } from '../checkout/checkout.module';
import { INITIAL_STATE } from '../shopping/shared/shopping.state';
import { ShoppingModule } from '../shopping/shopping.module';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    ShoppingModule,
    CheckoutModule,
    BrowserModule,
    AuthenticationModule,
    AuthorizationModule,
    StoreModule.provideStore({}, INITIAL_STATE),
    RouterModule.forRoot([
      {
        path: 'shopping',
        loadChildren() {
          return ShoppingModule;
        }
      },
      {
        path: 'checkout',
        loadChildren() {
          return CheckoutModule;
        },
        canActivate: [IsAuthenticated, HasPermissionsForRoute]
      },
      {
        path: 'auth',
        component: PageNotFoundComponent,
        resolve: {
          captureAuthenticationToken: CaptureAuthenticationTokenResolve
        }
      },
      {
        path: '',
        redirectTo: 'shopping',
        pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  bootstrap: [LayoutComponent]
})
export class MainModule { }
