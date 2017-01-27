import { Provider } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

export class RequestOptionsWithAuthenticationHeader extends BaseRequestOptions {
  constructor(authenticationService: AuthenticationService) {
    super();
    authenticationService.user.subscribe((user) => {
      if (user) {
        this.headers.append('Authorization', `${user.token_type} ${user.access_token}`);
      } else {
        this.headers.delete('Authorization');
      }
    });
  }
}

export const ProvideRequestOptionsWithAuthenticationHeader: Provider[] = [
  {
    provide: RequestOptions,
    useClass: RequestOptionsWithAuthenticationHeader
  }
];
