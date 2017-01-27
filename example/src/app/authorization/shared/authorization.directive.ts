import { AuthorizationService } from './authorization.service';
import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[secIfAuthorized]' })
export class IfAuthorizedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authorizationService: AuthorizationService
  ) { }
  @Input('secIfAuthorized') set secIfAuthorized(permissions: string[]) {
    this.authorizationService.hasCurrentUserPermissions(permissions).subscribe((hasPermissions) => {
      if (hasPermissions) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
