import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TableCellDirective, TableHeaderDirective } from '@shared/directives';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() dataSource: { [key: string]: any }[] = [];
  @Input() displayedColumns: string[] = [];

  @ContentChildren(TableHeaderDirective)
  headerTemplates!: QueryList<TableHeaderDirective>;
  @ContentChildren(TableCellDirective)
  cellTemplates!: QueryList<TableCellDirective>;

  getHeaderTemplate(colName: string): TemplateRef<unknown> | undefined {
    const trf: TemplateRef<any> | undefined = this.headerTemplates.find(
      (headerDirective: TableHeaderDirective) =>
        headerDirective.libTableHeader === colName
    )?.templateRef;
    return trf;
  }
  getCellTemplate(colName: string): TemplateRef<unknown> | undefined {
    const trf: TemplateRef<any> | undefined = this.cellTemplates.find(
      (headerDirective: TableCellDirective) =>
        headerDirective.libTableCell === colName
    )?.templateRef;
    return trf;
  }
}
