import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class IsAuthenticated implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authenticationService.userIsAuthenticated.map((isAuthenticated) => {
      if (isAuthenticated) {
        return true;
      } else {
        this.router.navigate(['unauthorized']);
        return false;
      }
    }).take(1);

  }

}
