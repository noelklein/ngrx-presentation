import { AuthorizationService } from './authorization.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class HasPermissionsForRoute implements CanActivate {

  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authorizationService
      .hasCurrentUserPermissions(route.data['requiredPermissions'] as string[])
      .map((hasPermission) => {
        if (hasPermission) {
          return true;
        } else {
          this.router.navigate(['unauthorized']);
          return false;
        }
      }).take(1);
  }
}
