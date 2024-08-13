import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '@shared/components';
import {
  RoleDirective,
  TableCellDirective,
  TableHeaderDirective,
} from '@shared/directives';

@Component({
  selector: 'public-about-us',
  standalone: true,
  imports: [
    FormsModule,
    NgTemplateOutlet,
    TableComponent,
    TableHeaderDirective,
    TableCellDirective,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  // role = 'admins';
  datasource = [
    { id: 42, name: 'John', surname: 'Doe', dob: '2003-04-15' },
    { id: 777, name: 'Jenny', surname: 'Doe', dob: '2005-10-12' },
  ];
  displayedcolumns = ['id', 'age', 'dob', 'name', 'surname', 'fullName'];

  ageCalculate(dob: string): number {
    const dobDate = new Date(dob);
    const nowDate = new Date();
    let diffYears = nowDate.getFullYear() - dobDate.getFullYear();

    if (
      nowDate.getMonth() < dobDate.getMonth() ||
      (nowDate.getMonth() === dobDate.getMonth() &&
        nowDate.getDate() < dobDate.getDate())
    ) {
      diffYears--;
    }
    return diffYears;
  }
}
