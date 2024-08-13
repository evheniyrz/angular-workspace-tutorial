import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libTableHeader]',
  standalone: true,
})
export class TableHeaderDirective {
  @Input({ required: true }) libTableHeader = '';
  constructor(public templateRef: TemplateRef<unknown>) {}
}
