import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

@Injectable()
export class CaptureAuthenticationTokenResolve implements Resolve<void> {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    this.authenticationService.captureAuthenticationToken().then(() => this.router.navigate(['/']));
  }
}
