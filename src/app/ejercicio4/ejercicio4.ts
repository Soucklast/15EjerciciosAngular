
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-ejercicio4',
  imports: [MatButtonToggleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ejercicio4.html',
  styleUrl: './ejercicio4.css'
})
export class Ejercicio4 {

}
