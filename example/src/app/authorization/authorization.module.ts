import { IfAuthorizedDirective } from './shared/authorization.directive';
import { HasPermissionsForRoute } from './shared/HasPermissionsForRoute.guard';
import { AuthorizationService } from './shared/authorization.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    IfAuthorizedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IfAuthorizedDirective
  ],
  providers: [
    HasPermissionsForRoute,
    AuthorizationService,
  ]
})
export class AuthorizationModule { }
