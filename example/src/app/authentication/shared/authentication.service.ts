import { createMicrosoftOpenIDSettings } from './authentication.settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User, UserManager } from 'oidc-client';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  public user: BehaviorSubject<User>;
  public userIsAuthenticated: BehaviorSubject<boolean>;

  private userManager: UserManager;

  constructor(private http: Http) {
    this.user = new BehaviorSubject<User>(undefined);
    this.userIsAuthenticated = new BehaviorSubject<boolean>(false);

    const slalomAzureActiveDirectoryId = '';
    const eCommerceApplicationId = '';
    const loginRedirectUrl = 'http://localhost:4200/auth';
    const logoutRedirectUrl = 'http://localhost:4200';

    const settings = createMicrosoftOpenIDSettings(
      slalomAzureActiveDirectoryId,
      eCommerceApplicationId,
      loginRedirectUrl,
      logoutRedirectUrl
    );
    this.userManager = new UserManager(settings);

    this.userManager.events.addUserLoaded((user) => {
      this.user.next(user);
      this.userIsAuthenticated.next(true);
    });

    this.userManager.events.addUserUnloaded(() => {
      this.user.next(undefined);
      this.userIsAuthenticated.next(false);
    });
  }

  public redirectToLoginPage(): void {
    this.userManager.signinRedirect();
  }
  public captureAuthenticationToken() {
    this.userManager.signinRedirectCallback(undefined);
  }

  public redirectToLogoutPage(): void {
    this.userManager.signoutRedirect();
  };
  public clearAuthentication(): Promise<void> {
    return this.userManager.signoutRedirectCallback();
  };

}
