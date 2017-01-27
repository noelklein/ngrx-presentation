import { IsAuthenticated } from './shared/authentication.guard';
import { CaptureAuthenticationTokenResolve } from './shared/authentication.resolve';
import { AuthenticationService } from './shared/authentication.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    IsAuthenticated,
    AuthenticationService,
    CaptureAuthenticationTokenResolve
  ]
})
export class AuthenticationModule { }
