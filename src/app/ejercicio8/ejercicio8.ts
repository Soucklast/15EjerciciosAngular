import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

export interface DialogData {
  selectedDate: Date;
}

@Component({
  selector: 'app-ejercicio8',
  imports: [MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ejercicio8.html',
  styleUrl: './ejercicio8.css'
})
export class Ejercicio8 {

}
