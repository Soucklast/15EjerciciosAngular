import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-ejercicio10',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ejercicio10.html',
  styleUrl: './ejercicio10.css'
})

export class Ejercicio10 {
  readonly hideRequiredControl = new FormControl(false);
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  readonly options = inject(FormBuilder).group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  protected readonly hideRequired = toSignal(this.hideRequiredControl.valueChanges);
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    {initialValue: 'auto'},
  );
}
