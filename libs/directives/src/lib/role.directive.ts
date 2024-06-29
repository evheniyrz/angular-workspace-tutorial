import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libRole]',
  standalone: true,
})
export class RoleDirective {
  static ngTemplateContextGuard(
    dir: RoleDirective,
    ctx: unknown
  ): ctx is {
    contextField1: boolean;
    contextField2: boolean;
  } {
    return true;
  }
  private currentRole = 'admin';
  /**addiditional input for directive */
  @Input()
  libRoleAddiditional = false;
  @Input()
  set libRole(role: string) {
    console.log({ role });
    this.viewContainer.clear();
    if (role === this.currentRole) {
      this.viewContainer.createEmbeddedView(this.template, {
        contextField1: true,
        contextField2: false,
      });
    }
  }
  /** structure directive should be injects template ref */
  constructor(
    private template: TemplateRef<{
      contextField1: boolean;
      contextField2: boolean;
    }>,
    private viewContainer: ViewContainerRef
  ) {}
}
