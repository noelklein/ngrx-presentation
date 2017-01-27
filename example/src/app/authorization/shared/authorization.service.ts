import { AuthenticationService } from '../../authentication/shared/authentication.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class AuthorizationService {

  private currentUserPermissions: BehaviorSubject<string[]>;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUserPermissions = new BehaviorSubject<string[]>([]);
    authenticationService.userIsAuthenticated.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.currentUserPermissions.next(['logout', 'checkout']);
      } else {
        this.currentUserPermissions.next(['login']);
      }
    });
  }

  public getPermissions(): Observable<string[]> {
    return this.currentUserPermissions;
  }

  public hasCurrentUserPermissions(permissionsToCheck: string[]): Observable<boolean> {
    return this.currentUserPermissions.map((currentUserPermissions) => {
      return permissionsToCheck.reduce((hasPermission, permission) => currentUserPermissions.includes(permission), false);
    });
  }
}
