import { AuthenticationService } from '../../authentication/shared/authentication.service';
import { CartService } from '../../shopping/shared/cart/cart.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sec-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {

  public numberOfItemsInCart: Observable<number>;
  public totalPriceOfCart: Observable<number>;
  public hasItemsInCart: Observable<boolean>;
  public email: Observable<string>;

  constructor(private cartService: CartService, private authenticationService: AuthenticationService) {
    this.numberOfItemsInCart = cartService.getTotalCount();
    this.totalPriceOfCart = cartService.getTotalAmount();
    this.hasItemsInCart = cartService.isEmpty().map((isEmpty) => !isEmpty);

    this.email = authenticationService.userIsAuthenticated
      .filter((isAuthenticated) => isAuthenticated)
      .withLatestFrom(authenticationService.user)
      // tslint:disable-next-line
      .map(([isAuthenticated, user]) => user.profile.name);
  }

  public login() {
    this.authenticationService.redirectToLoginPage();
  }

  public logout() {
    this.authenticationService.redirectToLogoutPage();
  }
}
