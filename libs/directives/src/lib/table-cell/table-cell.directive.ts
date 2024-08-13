import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libTableCell]',
  standalone: true,
})
export class TableCellDirective {
  @Input({ required: true }) libTableCell = '';
  constructor(public templateRef: TemplateRef<{ $implicit: unknown }>) {}
}
