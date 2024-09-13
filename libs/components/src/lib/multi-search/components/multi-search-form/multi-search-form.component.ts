import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-multi-search-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: './multi-search-form.component.html',
  styleUrl: './multi-search-form.component.scss',
})
export class MultiSearchFormComponent {
  onSearchSubmit = output<FormData>();
  public multi_searchForm: FormGroup<{
    multi_search: FormControl<string | null>;
  }> = new FormGroup({
    multi_search: new FormControl('', { validators: [Validators.required] }),
  });

  public submitForm(ev: SubmitEvent) {
    console.log({ F: ev.target });
    const formData = new FormData(ev.target as HTMLFormElement);
    this.onSearchSubmit.emit(formData);
  }
}
