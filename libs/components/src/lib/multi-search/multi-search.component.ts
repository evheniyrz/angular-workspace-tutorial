import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-multi-search',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: './multi-search.component.html',
  styleUrl: './multi-search.component.scss'
})
export class MultiSearchComponent {
  onSearchSubmit = output<FormData>();
  public multi_searchForm: FormGroup<{ multi_search: FormControl<string | null>; }> = new FormGroup({
    multi_search: new FormControl('', { validators: [Validators.required] })
  });

  public submitForm(ev: SubmitEvent) {
    console.log({ F: ev.target });
    const formData = new FormData(ev.target as HTMLFormElement);
    this.onSearchSubmit.emit(formData);
  }
}
//https://api.multisearch.io/?id=10011&lang=uk&m=1725794242135&q=vwft5d&query=high%20power&s=mini&uid=bdf8275d-337f-4cc5-9ade-07edc88b46bb

// id: 10011
// lang: uk
// m: 1725794242135
// q: vwft5d
// query: high power
// s: mini
// uid: bdf8275d - 337f - 4cc5 - 9ade-07edc88b46bb

/**
 * СТРАнИЦА РЕЗУЛЬТАТОВ
 * -отображается
 * -- левая панель - фильтры по категориям товаров
 * -- правая - максимум шесть блоков категорий с товарами по соответствующим категориям
 * левая панель
 * панель фильтров по найденным категориям
 * - самая первая - общий поиск и кол-во результатов.
 *
 * при клике возвращает к отображению полный набор категорий с товарами
 *--  карточка категории - название категории + 4 товара (мини-карточка товара),
 внизу карточки - кнопка для филтрации и отображению товаров соответствующих поисковой фразе в данной категории
 открывается категория с товарами, просмотр при помощи пагинации
 === еще ХХХХ...
 * - название категории с кол-вом результатов
 * при клике в правой части компонента отображает блок с:
 * -- название категории + товары 3 колонки по 5 товаров + кнопка пагинации - для просмотра товаров
 *
 */
